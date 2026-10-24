import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "30+", label: "Klien Puas" },
  { value: "5", label: "Tahun Pengalaman" },
  { value: "10+", label: "Anggota Tim" },
];

const reasons = [
  {
    icon: "⚡",
    title: "Cepat",
    text: "Pengerjaan tepat waktu dengan proses yang jelas.",
  },
  {
    icon: "🛡️",
    title: "Terpercaya",
    text: "Kualitas terjaga dan dukungan purna jual.",
  },
  {
    icon: "🤝",
    title: "Kolaboratif",
    text: "Kami mendengar kebutuhan Anda di setiap tahap.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <span className="badge">Mitra Teknologi Anda</span>
          <h1>Solusi Digital untuk Bisnis Anda</h1>
          <p>
            Maju Digital membantu bisnis tumbuh lewat website dan aplikasi yang
            modern, cepat, dan mudah digunakan.
          </p>
          <div className="hero-buttons">
            <Link href="/services" className="button">
              Lihat Layanan
            </Link>
            <Link href="/contact" className="button button-outline">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <section className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="container section">
        <h2 className="section-title">Layanan Kami</h2>
        <p className="section-subtitle">
          Solusi lengkap untuk kebutuhan digital bisnis Anda.
        </p>
        <div className="grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Kenapa Memilih Kami?</h2>
          <div className="grid">
            {reasons.map((r) => (
              <div key={r.title} className="card card-center">
                <div className="card-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="cta">
          <h2>Siap memulai proyek Anda?</h2>
          <p>Ceritakan kebutuhan Anda, kami bantu wujudkan.</p>
          <Link href="/contact" className="button button-light">
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
}
