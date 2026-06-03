import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "";
const ADMIN_SECRET = process.env.ADMIN_SECRET || "";

async function insertToSupabase(payload: any) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;
  const url = `${SUPABASE_URL.replace(/\/+$/,'')}/rest/v1/bookings`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Supabase insert failed ${res.status}`);
  return res.json();
}

async function fetchFromSupabase() {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;
  const url = `${SUPABASE_URL.replace(/\/+$/,'')}/rest/v1/bookings?select=*`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Supabase fetch failed ${res.status}`);
  return res.json();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "POST") {
      const body = req.body;
      if (!body?.name || !body?.phone || !body?.event || !body?.date) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      console.log("[bookings] received", body);

      // Attempt to persist to Supabase if configured
      try {
        const inserted = await insertToSupabase({ name: body.name, phone: body.phone, event: body.event, date: body.date, meta: body.meta || null });
        return res.status(200).json({ ok: true, saved: !!inserted });
      } catch (err) {
        console.warn("[bookings] supabase failed, falling back to noop", err);
        return res.status(200).json({ ok: true, saved: false });
      }
    }

    // Admin: list bookings (protected by ADMIN_SECRET header)
    if (req.method === "GET") {
      const isAdmin = req.headers["x-admin-secret"] === ADMIN_SECRET || req.query?.admin === "true" && ADMIN_SECRET === "";
      if (!isAdmin) return res.status(403).json({ error: "forbidden" });
      try {
        const data = await fetchFromSupabase();
        return res.status(200).json({ ok: true, items: data || [] });
      } catch (err) {
        console.warn("[bookings] fetch failed", err);
        return res.status(200).json({ ok: true, items: [] });
      }
    }

    return res.status(405).send({ error: "Method not allowed" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
