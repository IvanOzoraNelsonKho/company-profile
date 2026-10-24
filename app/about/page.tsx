const values = [
  {
    icon: "🎯",
    title: "Visi",
    text: "Menjadi mitra teknologi terpercaya bagi bisnis di Indonesia.",
  },
  {
    icon: "🚀",
    title: "Misi",
    text: "Memberikan solusi digital berkualitas, tepat waktu, dan sesuai kebutuhan klien.",
  },
  {
    icon: "💡",
    title: "Nilai",
    text: "Jujur, inovatif, dan selalu mengutamakan kepuasan klien.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Tentang Kami</h1>
          <p>Mengenal lebih dekat Maju Digital.</p>
        </div>
      </section>

      <section className="container section">
        <p className="lead">
          Maju Digital adalah perusahaan teknologi yang berdiri sejak 2020. Kami
          fokus pada pengembangan website dan aplikasi untuk membantu bisnis
          berkembang di era digital.
        </p>
        <div className="grid">
          {values.map((v) => (
            <div key={v.title} className="card card-center">
              <div className="card-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
