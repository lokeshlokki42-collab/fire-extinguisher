import { ExternalLink, FileCheck2 } from 'lucide-react';

export default function Certification() {
  return <section className="certification-section" id="certification" aria-labelledby="certification-title">
    <div className="certification-icon"><FileCheck2 size={24} /></div>
    <div><p className="eyebrow">TRUSTED PROTECTION</p><h2 id="certification-title">Recognised by<br /><em>IMSAFE - Kavasam Safety Solutions.</em></h2><p>Read the official certificate issued by IMSAFE - Kavasam Safety Solutions.</p></div>
    <div className="certification-actions"><a className="button button-dark" href="/pdf/IMSAFE_Brochure_Updated.pdf" target="_blank" rel="noreferrer">Open product brochure <ExternalLink size={16} /></a><a className="text-link" href="/pdf/Kavasam%20safety%20solutions%20Certificate.pdf" target="_blank" rel="noreferrer">Open certification PDF <ExternalLink size={16} /></a></div>
  </section>;
}