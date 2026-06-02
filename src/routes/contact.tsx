import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Building2, Send } from "lucide-react";
import { FACULTY, SCHOOL } from "@/data/school";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const hm = FACULTY[0];

  return (
    <div className="container py-8">
      <header className="mb-8">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Get in touch</div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">Contact the School</h1>
      </header>

      <div className="grid lg:grid-cols-3 gap-5 mb-8">
        {[
          { icon: MapPin, title: "Location", body: SCHOOL.location, sub: "AT/PO-Bhotaka, Kuakhia, Dist-Jajpur" },
          { icon: Phone, title: "Head Master", body: hm.phone, href: `tel:${hm.phone}`, sub: "Office Hours: 10 AM - 4 PM" },
          { icon: Clock, title: "School Hours", body: "Mon–Sat · 09:30 – 16:00", sub: "Sunday Closed" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href={item.href || "#"}
              className="block rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-all group"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{item.title}</div>
              <div className="font-semibold mt-1.5">{item.body}</div>
              {item.sub && <div className="text-xs text-muted-foreground mt-1">{item.sub}</div>}
            </a>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Staff Directory */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <h2 className="font-display text-xl font-bold">Staff Directory</h2>
          </div>
          <div className="space-y-3">
            {FACULTY.map((f) => (
              <div key={f.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <div className="font-medium text-sm">{f.name}</div>
                  <div className="text-xs text-muted-foreground">{f.designation}</div>
                </div>
                <a href={`tel:${f.phone}`} className="text-xs text-primary font-mono hover:underline">
                  {f.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary resize-none"
              />
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-6 rounded-2xl overflow-hidden border border-border h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x3769.456789012345!2d86.12345678901234!3d20.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU5JzE1LjYiTiA4NsKwMDcnMjguNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}