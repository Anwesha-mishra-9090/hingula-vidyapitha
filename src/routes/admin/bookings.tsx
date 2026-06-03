import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";

export const Route = createFileRoute("/admin/bookings")({
  component: AdminBookingsPage,
});

export function AdminBookingsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [secret, setSecret] = useState('');

  useEffect(() => {
    if (!secret) return setLoading(false);
    setLoading(true);
    fetch('/api/bookings?admin=true', { headers: { 'x-admin-secret': secret } })
      .then((r) => r.json())
      .then((j) => { setItems(j.items || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [secret]);

  return (
    <div className="container py-12">
      <h1 className="font-display text-2xl font-bold mb-4">Admin: Bookings</h1>
      <p className="text-sm text-muted-foreground mb-4">Enter admin secret to view persisted bookings.</p>
      <div className="mb-4">
        <input value={secret} onChange={(e)=>setSecret(e.target.value)} placeholder="Admin secret" className="p-2 rounded border" />
      </div>

      {loading ? <div>Loading...</div> : (
        <div className="space-y-3">
          {items.length === 0 ? <div className="text-muted-foreground">No bookings found.</div> : items.map((it:any)=> (
            <div key={it.id || it.name+it.date} className="rounded border p-3 bg-card">
              <div className="font-semibold">{it.name}</div>
              <div className="text-sm text-muted-foreground">{it.event} — {it.date}</div>
              <div className="text-xs text-muted-foreground">{it.phone}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminBookingsPage;
