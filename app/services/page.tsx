import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Layanan</h1>
          <p>Apa saja yang bisa kami bantu untuk bisnis Anda.</p>
        </div>
      </section>

      <section className="container section">
        <div className="grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
