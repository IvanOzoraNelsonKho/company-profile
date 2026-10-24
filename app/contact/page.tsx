const contacts = [
  { icon: "📧", title: "Email", text: "info@majudigital.com" },
  { icon: "📞", title: "Telepon", text: "021-1234-5678" },
  { icon: "📍", title: "Alamat", text: "Jl. Contoh No. 123, Jakarta" },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Kontak</h1>
          <p>Kami siap membantu Anda kapan saja.</p>
        </div>
      </section>

      <section className="container section">
        <div className="grid">
          {contacts.map((c) => (
            <div key={c.title} className="card card-center">
              <div className="card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
