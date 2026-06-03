import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).send({ error: "Method not allowed" });
  try {
    const body = req.body;
    // Simple validation
    if (!body?.name || !body?.phone || !body?.event || !body?.date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // In production, forward to a real DB, email or spreadsheet. If SENDGRID_API_KEY is
    // present we could send a notification email here. For now we log and return success.
    console.log("[bookings] received", body);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
