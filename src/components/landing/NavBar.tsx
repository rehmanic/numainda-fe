export default function NavBar() {
  return (
    <nav className="sp-nav">
      <div className="sp-nav-brand">
        <span>Numainda</span>
      </div>
      <ul className="sp-nav-links">
        <li><a href="#sp-benefits">Benefits</a></li>
        <li><a href="#sp-features">Features</a></li>
        <li><a href="#sp-process">Process</a></li>
        <li><a href="#sp-industries">Industries</a></li>
        <li><a href="#sp-pricing">Pricing</a></li>
        <li><a href="#sp-faq">FAQ</a></li>
      </ul>
      <a href="#sp-contact" className="sp-nav-cta">Book a Demo</a>
    </nav>
  );
}
