export type SiteConfig = typeof siteConfig;
import { Calendar, CalendarDays, Grid2X2, Inbox } from "lucide-react";
export const siteConfig = {
  name: "EZDB",
  url: "http://localhost:3000",
  ogImage: "http://localhost:3000/og.jpg",
  creator: "Syed Irfan Faraz",
  description: "An advanced db visualizer app",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  links: {
    twitter: "https://twitter.com/irfanfaraaz7",
    github: "https://github.com/irfanfaraaz",
    docs: "https://github.com/irfanfaraaz",
  },
};
