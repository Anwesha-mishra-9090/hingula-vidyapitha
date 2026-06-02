export const ECO_PHOTOS: string[] = Array.from(
  { length: 33 },
  (_, i) => `/gallery/eco/eco-${String(i + 1).padStart(2, "0")}.jpg`
);

export const ENERGY_PHOTOS: string[] = Array.from(
  { length: 33 },
  (_, i) => `/gallery/energy/energy-${String(i + 1).padStart(2, "0")}.jpg`
);

export const INSTITUTIONAL_VIDEOS = [
  { src: "/videos/clip-01.mp4", title: "Campus moments", poster: ECO_PHOTOS[0] },
  { src: "/videos/clip-02.mp4", title: "Student activities", poster: ENERGY_PHOTOS[0] },
];

export const TRIBUTE_VIDEO = {
  src: "/videos/suresh-sir-tribute.mp4",
  title: "Tribute to Sri Suresh Kumar Kar",
  poster: "/gallery/farewell/farewell-stage-01.jpg",
};

export const YT_CHANNEL_ID = "UCObdFVD75nivRmynUrLRutg";
export const YT_CHANNEL_URL = `https://www.youtube.com/channel/${YT_CHANNEL_ID}`;
export const YT_UPLOADS_EMBED = `https://www.youtube.com/embed/videoseries?list=UU${YT_CHANNEL_ID.slice(2)}`;
