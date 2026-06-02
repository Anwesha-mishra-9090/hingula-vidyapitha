'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const phoneNumber = '918260191483';
  const message = encodeURIComponent('Hello, I would like to inquire about Hingula Vidya Pitha.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#20b859] transition-colors"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}