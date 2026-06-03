"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message }) });
      if (r.ok) {
        setStatus('Sent');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('Failed');
      }
    } catch (err) {
      setStatus('Failed');
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-2 max-w-md">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="p-2 rounded border" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-2 rounded border" type="email" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="p-2 rounded border" rows={4} required />
      <div className="flex gap-2">
        <button className="px-3 py-2 rounded bg-primary text-primary-foreground">Send</button>
        {status && <div className="text-sm text-muted-foreground">{status}</div>}
      </div>
    </form>
  );
}

export default ContactForm;
