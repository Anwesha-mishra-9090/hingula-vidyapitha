import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bell, Download, FileText, Search, X } from "lucide-react";
import { NOTICE_RECORDS, type NoticeRecord } from "@/data/notices";
import { buildPdf, downloadBlob } from "@/lib/pdf";

export const Route = createFileRoute("/notices")({
  component: NoticesPage,
});

function NoticesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [previewNotice, setPreviewNotice] = useState<NoticeRecord | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(NOTICE_RECORDS.map(n => n.category)))],
    []
  );

  const filtered = useMemo(() => {
    const term = search.toLowerCase().trim();
    return NOTICE_RECORDS.filter(n =>
      (category === "All" || n.category === category) &&
      (!term || n.title.toLowerCase().includes(term) || n.summary.toLowerCase().includes(term))
    );
  }, [search, category]);

  const urgent = filtered.filter(n => n.priority === "high");
  const regular = filtered.filter(n => n.priority !== "high");

  const handleDownload = (notice: NoticeRecord) => {
    const blob = buildPdf({
      title: notice.attachment.title,
      body: notice.attachment.body,
      meta: notice.attachment.meta,
    });
    downloadBlob(blob, notice.attachment.filename);
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <header className="relative overflow-hidden rounded-2xl border border-border mb-8 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8">
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-[10px] uppercase tracking-wider text-primary font-semibold">
            <Bell className="h-3 w-3" />
            Official Bulletin Board
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-3">Notice Center</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Official announcements from the Office of the Head Master — academic, examination, 
            NCC, and administrative updates.
          </p>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notices by title or summary..."
            className="w-full h-11 pl-10 pr-3 rounded-xl border border-border bg-card text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition ${
                category === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-[320px,1fr] gap-6">
        {/* Left Column - Urgent */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider">Urgent & Important</span>
          </div>
          {urgent.length === 0 ? (
            <div className="text-center py-8 text-sm text-muted-foreground border border-dashed border-border rounded-lg">
              No urgent notices
            </div>
          ) : (
            <div className="space-y-3">
              {urgent.map(notice => (
                <div
                  key={notice.id}
                  className="p-4 rounded-lg border-l-4 border-l-red-500 bg-card border border-border cursor-pointer hover:shadow-md transition"
                  onClick={() => setPreviewNotice(notice)}
                >
                  <div className="text-[10px] uppercase text-red-500 font-semibold">{notice.category}</div>
                  <h3 className="font-semibold text-sm mt-1 line-clamp-2">{notice.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{notice.summary}</p>
                  <div className="mt-2 text-[10px] text-muted-foreground">{notice.referenceNo}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Regular Notices */}
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground">{regular.length} notices</div>
          {regular.map(notice => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition cursor-pointer"
              onClick={() => setPreviewNotice(notice)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      notice.priority === "high" ? "bg-red-100 text-red-700" :
                      notice.priority === "medium" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
                    }`}>
                      {notice.priority}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{notice.category}</span>
                    <span className="text-[10px] text-muted-foreground">{notice.referenceNo}</span>
                  </div>
                  <h3 className="font-semibold mt-1">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{notice.summary}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] text-muted-foreground">
                      Issued by {notice.issuedBy}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {new Date(notice.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <button
                  className="ml-3 p-2 rounded-lg hover:bg-accent transition"
                  onClick={(e) => { e.stopPropagation(); handleDownload(notice); }}
                >
                  <Download className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewNotice && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setPreviewNotice(null)}>
          <div className="bg-card rounded-xl max-w-2xl w-full max-h-[85vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase text-muted-foreground">{previewNotice.category}</div>
                <h3 className="font-semibold">{previewNotice.attachment.title}</h3>
              </div>
              <button onClick={() => setPreviewNotice(null)} className="p-1 rounded hover:bg-accent">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                {previewNotice.attachment.meta.map(m => (
                  <div key={m.label} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border text-sm">
                    <span className="font-medium">{m.label}</span>
                    <span className="text-muted-foreground">{m.value}</span>
                  </div>
                ))}
              </div>
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-line leading-relaxed">
                  {previewNotice.attachment.body}
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-card border-t border-border p-4 flex justify-end">
              <button
                onClick={() => handleDownload(previewNotice)}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}export default NoticesPage;
