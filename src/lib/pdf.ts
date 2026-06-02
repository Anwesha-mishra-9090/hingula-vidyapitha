function escape(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(text: string, max = 78): string[] {
  const out: string[] = [];
  for (const para of text.split(/\n/)) {
    if (!para.trim()) {
      out.push("");
      continue;
    }
    let line = "";
    for (const word of para.split(/\s+/)) {
      if ((line + " " + word).trim().length > max) {
        out.push(line.trim());
        line = word;
      } else {
        line += " " + word;
      }
    }
    if (line.trim()) out.push(line.trim());
  }
  return out;
}

type PdfInput = {
  title: string;
  body: string;
  meta?: { label: string; value: string }[];
  footer?: string;
};

export function buildPdf({ title, body, meta = [], footer }: PdfInput): Blob {
  const margin = 56;
  const pageH = 842;
  let y = pageH - margin;

  const stream: string[] = ["BT", "/F2 18 Tf", `${margin} ${y} Td`, `(${escape(title)}) Tj`, "ET"];
  y -= 28;
  stream.push("q", "0.7 0.55 0.15 RG", "1.4 w", `${margin} ${y} m`, `${margin + 120} ${y} l`, "S", "Q");
  y -= 22;

  if (meta.length) {
    for (const m of meta) {
      stream.push("BT", "/F2 9 Tf", `${margin} ${y} Td`, `(${escape(m.label.toUpperCase())}) Tj`, "ET");
      stream.push("BT", "/F1 11 Tf", `${margin + 110} ${y} Td`, `(${escape(m.value)}) Tj`, "ET");
      y -= 16;
    }
    y -= 8;
    stream.push("q", "0.85 0.85 0.85 RG", "0.5 w", `${margin} ${y} m`, `${595 - margin} ${y} l`, "S", "Q");
    y -= 18;
  }

  for (const line of wrap(body, 88)) {
    if (y < margin + 40) break;
    stream.push("BT", "/F1 11 Tf", `${margin} ${y} Td`, `(${escape(line)}) Tj`, "ET");
    y -= 15;
  }

  const foot = footer ?? "Hingula Vidya Pitha · Bhotaka, Kuakhia, Jajpur";
  stream.push("BT", "/F2 8 Tf", `${margin} ${margin - 10} Td`, `(${escape(foot)}) Tj`, "ET");

  const content = stream.join("\n");
  const objects: string[] = [];
  objects[0] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[1] = "<< /Type /Pages /Kids [3 0 R] /Count 1 >>";
  objects[2] = "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>";
  objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";
  objects[5] = `<< /Length ${content.length} >>\nstream\n${content}\nendstream`;

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  objects.forEach((o, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xrefPos = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}