import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Maju Digital</h4>
          <p>Mitra teknologi terpercaya untuk bisnis Anda.</p>
        </div>
        <div>
          <h4>Menu</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Kontak</h4>
          <p>info@majudigital.com</p>
          <p>021-1234-5678</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Maju Digital. All rights reserved.
      </div>
    </footer>
  );
}
