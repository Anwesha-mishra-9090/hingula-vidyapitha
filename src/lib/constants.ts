export const APP_NAME = "Hingula Vidya Pitha";
export const APP_DOMAIN = "hingula-vidyapitha.lovable.app";
export const APP_DESCRIPTION = "Government aided high school under BSE Odisha, Estd. 1992";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const DEFAULT_META = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  image:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/74fb585c-6b46-4814-9da5-f122792b0feb",
  url: `https://${APP_DOMAIN}`,
};

export const SCHOOL_INFO = {
  name: APP_NAME,
  established: 1992,
  affiliation: "Board of Secondary Education, Odisha",
  address: "AT/PO-Bhotaka, Kuakhia, Dist-Jajpur, Odisha - 755026",
  phone: "8260191483",
  email: "hingulavidyapitha@gmail.com",
  motto: "विद्या ददाति विनयम् — Knowledge bestows humility",
};
