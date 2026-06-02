'use client';

import { useRef, useState } from 'react';
import { Play, Pause, Maximize2, Volume2, VolumeX } from 'lucide-react';

interface VideoShowcaseProps {
  src: string;
  poster?: string;
  title?: string;
}

export function VideoShowcase({ src, poster, title }: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  return (
    <div className="group relative rounded-xl overflow-hidden border border-border bg-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full aspect-video object-cover"
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-3">
            <button onClick={togglePlay} className="text-white hover:text-primary transition">
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <button onClick={toggleMute} className="text-white hover:text-primary transition">
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <button onClick={toggleFullscreen} className="text-white hover:text-primary transition">
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {title && (
        <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs text-white">
          {title}
        </div>
      )}
    </div>
  );
}