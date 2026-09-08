import { ExternalLink, FileCheck2 } from 'lucide-react';

export default function Certification() {
  return <section className="certification-section" id="certification" aria-labelledby="certification-title">
    <div className="certification-icon"><FileCheck2 size={24} /></div>
    <div><p className="eyebrow">TRUSTED PROTECTION</p><h2 id="certification-title">Recognised by the<br /><em>Mumbai Fire Brigade.</em></h2><p>Read the official appreciation letter for IMSAFE fire-safety products.</p></div>
    <div className="certification-actions"><a className="button button-dark" href="/pdf/IMSAFE_Brochure_Updated.pdf" target="_blank" rel="noreferrer">Open product brochure <ExternalLink size={16} /></a><a className="text-link" href="/pdf/Appreciation%20Letter%20-%20Mumbai%20Fire%20Brigade.pdf" target="_blank" rel="noreferrer">Open certification PDF <ExternalLink size={16} /></a></div>
  </section>;
}