import Link from "next/link";
import { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card">
      <div className="card-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link href={`/services/${service.slug}`} className="link">
        Lihat detail →
      </Link>
    </div>
  );
}
