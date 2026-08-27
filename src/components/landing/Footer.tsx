import Image from 'next/image';
import numaindaIcon from '@/src/assets/numainda_new_icon.svg';

export default function Footer() {
  return (
    <footer className="sp-footer">
      <div className="sp-wrap">
        <div className="sp-footer-top">
          <div className="sp-footer-brand">
            <div className="sp-footer-brand-name">
              <Image src={numaindaIcon} alt="Numainda" width={18} height={18} className="opacity-70" />
              <span>Numainda</span>
            </div>
            <p>AI-powered customer service representative in every language.</p>
          </div>
          <div className="sp-footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href="#sp-features">Features</a></li>
              <li><a href="#sp-process">How it Works</a></li>
              <li><a href="#sp-industries">Industries</a></li>
              <li><a href="#sp-pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="sp-footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="sp-footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div className="sp-footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="sp-footer-bottom">
          <span>© {new Date().getFullYear()} Numainda · Pakistan</span>
          <div className="sp-footer-social">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
