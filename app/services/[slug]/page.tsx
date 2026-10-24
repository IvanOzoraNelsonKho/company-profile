import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="header-icon">{service.icon}</div>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      <section className="container section">
        <p className="lead">{service.detail}</p>
        <h2>Yang Anda Dapatkan</h2>
        <ul className="features">
          {service.features.map((f) => (
            <li key={f}>✓ {f}</li>
          ))}
        </ul>
        <Link href="/services" className="link">
          ← Kembali ke Layanan
        </Link>
      </section>
    </>
  );
}
