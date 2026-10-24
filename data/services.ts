export type Service = {
  slug: string;
  title: string;
  icon: string;
  description: string;
  detail: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "💻",
    description: "Pembuatan website modern, cepat, dan responsif.",
    detail:
      "Kami membangun website company profile, toko online, dan aplikasi web menggunakan teknologi terbaru seperti Next.js.",
    features: [
      "Desain responsif di semua perangkat",
      "Performa cepat dan SEO friendly",
      "Mudah dikelola dan dikembangkan",
    ],
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    icon: "📱",
    description: "Aplikasi Android dan iOS sesuai kebutuhan bisnis.",
    detail:
      "Tim kami membuat aplikasi mobile yang cepat, aman, dan mudah digunakan oleh pelanggan Anda.",
    features: [
      "Tersedia untuk Android dan iOS",
      "Antarmuka yang nyaman dipakai",
      "Dukungan pemeliharaan berkala",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "🎨",
    description: "Desain antarmuka yang rapi dan nyaman dipakai.",
    detail:
      "Mulai dari wireframe sampai prototype, kami merancang pengalaman pengguna yang jelas dan konsisten.",
    features: [
      "Riset kebutuhan pengguna",
      "Wireframe dan prototype interaktif",
      "Panduan desain yang konsisten",
    ],
  },
];
