"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "../../lib/analytics";

interface Booking {
  id: string;
  name: string;
  phone: string;
  event: string;
  date: string;
}

export function EventBooking({ event }: { event: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("hvp_bookings");
    if (raw) setBookings(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("hvp_bookings", JSON.stringify(bookings));
  }, [bookings]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone || !date) return;
    const b: Booking = { id: Date.now().toString(), name, phone, event, date };
    setBookings((s) => [b, ...s]);
    let saved = false;
    // Try to persist to serverless endpoint; fallback to localStorage only
    (async () => {
      try {
        await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(b),
        });
        // track event if analytics present
        try { trackEvent('booking_success', { event: b.event, date: b.date, name: b.name }); } catch {}
        saved = true;
      } catch (err) {
        // ignore — localStorage keeps booking
      }
    })();
    setName("");
    setPhone("");
    setDate("");
    if (saved) alert('Booking submitted — confirmation sent.');
  }

  return (
    <div className="rounded-lg border border-border p-4 bg-card">
      <h3 className="font-semibold mb-2">Book a seat for {event}</h3>
      <form onSubmit={submit} className="space-y-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full p-2 rounded border" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full p-2 rounded border" />
        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="w-full p-2 rounded border" />
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded bg-primary text-primary-foreground">Book</button>
        </div>
      </form>

      {bookings.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium">Your bookings</h4>
          <ul className="mt-2 space-y-2 text-sm">
            {bookings.map((b) => (
              <li key={b.id} className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">{b.name}</div>
                  <div className="text-muted-foreground">{b.event} — {b.date}</div>
                </div>
                <button
                  onClick={() => setBookings((s) => s.filter((x) => x.id !== b.id))}
                  className="text-sm text-red-500"
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EventBooking;
