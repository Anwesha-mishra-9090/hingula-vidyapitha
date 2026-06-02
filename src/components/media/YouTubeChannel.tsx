'use client';

import { Youtube, ArrowRight } from 'lucide-react';

interface YouTubeChannelProps {
  compact?: boolean;
}

export function YouTubeChannel({ compact = false }: YouTubeChannelProps) {
  const channelUrl = 'https://www.youtube.com/channel/UCObdFVD75nivRmynUrLRutg';
  const embedUrl = 'https://www.youtube.com/embed/videoseries?list=UUSObdFVD75nivRmynUrLRutg';

  if (compact) {
    return (
      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
      >
        <Youtube className="h-5 w-5" />
        <span className="text-sm font-medium">YouTube Channel</span>
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-6 bg-gradient-to-br from-red-600/10 to-red-800/5">
          <Youtube className="h-8 w-8 text-red-600 mb-3" />
          <h3 className="font-display text-xl font-bold">Hingula Vidya Pitha on YouTube</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Watch campus events, cultural programs, NCC parades, and student achievements on our official channel.
          </p>
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition"
          >
            <Youtube className="h-4 w-4" />
            Subscribe
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        <div className="aspect-video bg-black">
          <iframe
            src={embedUrl}
            title="Hingula Vidya Pitha YouTube Channel"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}