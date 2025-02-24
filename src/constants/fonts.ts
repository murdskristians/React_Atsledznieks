import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ["600", "400", "500"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-ibm-plex-sans",
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "600", "400"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-ibm-plex-mono",
});
