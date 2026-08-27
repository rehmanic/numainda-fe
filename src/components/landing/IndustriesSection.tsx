import { industries } from '@/src/data/landing';

export default function IndustriesSection() {
  return (
    <section id="sp-industries">
      <div className="sp-wrap">
        <div className="sp-section-label rv"><span className="sp-label-num">04</span><span>Industries We Serve</span></div>
        <div className="sp-industry-grid">
          {industries.map((ind, i) => (
            <div key={i} className="sp-industry-card rv">
              <ind.Icon />
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
              <span className="sp-industry-example">{ind.example}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
