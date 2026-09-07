import { ExternalLink, FileCheck2 } from 'lucide-react';

export default function Certification() {
  return <section className="certification-section" id="certification" aria-labelledby="certification-title">
    <div className="certification-icon"><FileCheck2 size={24} /></div>
    <div><p className="eyebrow">TRUSTED PROTECTION</p><h2 id="certification-title">Recognised by the<br /><em>Mumbai Fire Brigade.</em></h2><p>Read the official appreciation letter for IMSAFE fire-safety products.</p></div>
    <a className="button button-dark" href="/pdf/Appreciation%20Letter%20-%20Mumbai%20Fire%20Brigade.pdf" target="_blank" rel="noreferrer">Open certification PDF <ExternalLink size={16} /></a>
  </section>;
}