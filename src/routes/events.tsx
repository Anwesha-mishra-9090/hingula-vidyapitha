import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import EventBooking from "@/components/mvp/EventBooking";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

export function EventsPage() {
  const events = [
    { id: "founders-day", title: "Founder's Day Celebration", date: "2026-08-15" },
    { id: "sports-meet", title: "Annual Sports Meet", date: "2026-12-05" },
  ];

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="font-display text-3xl font-bold mb-4">Upcoming Events</h1>
          <div className="space-y-4">
            {events.map((ev) => (
              <div key={ev.id} className="rounded-lg border border-border p-4 bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{ev.title}</div>
                    <div className="text-sm text-muted-foreground">{ev.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside>
          <h2 className="font-semibold mb-3">Quick Booking</h2>
          <EventBooking event="General Event" />
        </aside>
      </div>
    </div>
  );
}

export default EventsPage;
