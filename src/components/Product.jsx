import { useEffect, useState } from 'react';
import { ArrowUpRight, Gauge, Home, Leaf, X, Zap } from 'lucide-react';

const productImages = [
  '/images/product/Screenshot 2026-09-08 113557.png',
  '/images/product/Screenshot 2026-09-08 113704.png',
  '/images/product/Screenshot 2026-09-08 113705.png',
  '/images/product/Screenshot 2026-09-08 113802.png',
  '/images/product/Screenshot 2026-09-08 113828.png',
  '/images/product/Screenshot 2026-09-08 113854.png',
  '/images/product/Screenshot 2026-09-08 113925.png',
  '/images/product/Screenshot 2026-09-08 113953.png',
  '/images/product/Screenshot 2026-09-08 114017.png',
  '/images/product/Screenshot 2026-09-08 114041.png',
];
const products = [
  { name: 'Fire Blanket', type: 'Heat-resistant cover', image: '/images/WhatsApp Image 2026-09-07 at 12.12.08 PM (1).jpeg', copy: 'A thermal shield that starves a fire of oxygen when seconds count.' },
  { name: 'Temperature Clips', type: 'Visual early warning', image: '/images/WhatsApp Image 2026-09-07 at 12.12.07 PM.jpeg', copy: 'A simple, color-changing signal for electrical assets under heat.' },
  { name: 'Fire Thread', type: 'Electrical protection', image: '/images/WhatsApp Image 2026-09-07 at 12.12.07 PM (1).jpeg', copy: 'Compact suppression designed to protect the spaces behind the walls.' },
];

export default function Product({ onOrder }) {
  const [activeImage, setActiveImage] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const slideshow = window.setInterval(() => setActiveImage((current) => (current + 1) % productImages.length), 5000);
    return () => window.clearInterval(slideshow);
  }, []);

  return <>
    <section className="intro-section" id="product"><div className="section-label">01 <span /> THE EVERYDAY ADVANTAGE</div><div className="intro-grid"><h2>Ready when<br /><em>you need it.</em></h2><div><p className="large-copy">Fire rarely gives you a warning. IMSAFE - Kavasam Safety Solutions gives you a head start.</p><p className="muted-copy">Designed in India for modern homes, kitchens, cars and workplaces. Our products combine serious fire-fighting capability with the ease of everyday use.</p><a className="text-link" href="#why">Discover our approach <ArrowUpRight size={16} /></a></div></div></section>
    <section className="feature-section" id="why"><div className="section-label">02 <span /> WHY IMSAFE - Kavasam Safety Solutions</div><div className="feature-heading"><h2>Safety without<br /><em>the complication.</em></h2><p>Everything you need in an emergency, nothing you don’t.</p></div><div className="feature-grid"><article><span className="feature-icon"><Gauge /></span><h3>95% foam release</h3><p>Proprietary aerosol foam technology creates a high-performance barrier fast.</p></article><article><span className="feature-icon"><Leaf /></span><h3>Safe by design</h3><p>Non-toxic and pet-friendly for indoor use, with minimal residue and easy clean-up.</p></article><article><span className="feature-icon"><Home /></span><h3>Made for real life</h3><p>Lightweight, handy and ready for small fires in homes, offices and vehicles.</p></article><article><span className="feature-icon"><Zap /></span><h3>Acts in seconds</h3><p>Point, press and spray from a safe distance. No prior training required.</p></article></div></section>
    <section className="product-detail" id="spray-extinguisher"><div className="product-detail-image"><img className="zoomable-image" key={productImages[activeImage]} src={productImages[activeImage]} alt={`IMSAFE - Kavasam Safety Solutions product detail ${activeImage + 1}`} onClick={() => setPreviewImage(productImages[activeImage])} /><div className="slideshow-status" aria-label={`Showing product image ${activeImage + 1} of ${productImages.length}`}>{productImages.map((image, index) => <span className={index === activeImage ? 'active' : ''} key={image} />)}</div></div><div className="product-detail-copy"><div className="section-label">02A <span /> FEATURED PRODUCT</div><p className="eyebrow">GRAB. AIM. SPRAY.</p><h2>IMSAFE - Kavasam Safety Solutions Spray<br /><em>Fire Extinguisher.</em></h2><p className="large-copy">Compact, fast and simple protection for early-stage fires at home, work or on the road.</p><p className="muted-copy">The aerosol-based foam spray handles Class A, B, E electrical and F cooking-oil fires. It is tested to BS 6165:2019 by an NABL-accredited laboratory, supports live electrical hazards up to 35,000 volts, and releases more than 95% of its formulation.</p><div className="product-specs"><span><b>35,000V</b> electrical safety</span><span><b>&gt;95%</b> foam discharge</span><span><b>3 years</b> warranty</span><span><b>4 classes</b> of fire</span></div><button className="button button-red" onClick={onOrder}>Choose this protection <ArrowUpRight size={17} /></button></div></section>
    <section className="range-section" id="applications"><div className="section-label">03 <span /> THE PROTECTION RANGE</div><div className="range-heading"><h2>More ways to<br /><em>stay ready.</em></h2><button className="button button-dark" onClick={onOrder}>Explore the range <ArrowUpRight size={17} /></button></div><div className="range-grid">{products.map((product) => <article className="range-card" key={product.name}><div className="range-image"><img className="zoomable-image" src={product.image} alt={product.name} onClick={() => setPreviewImage(product.image)} /><button aria-label={`Order ${product.name}`} onClick={onOrder}><ArrowUpRight size={20} /></button></div><p className="product-type">{product.type}</p><h3>{product.name}</h3><p>{product.copy}</p></article>)}</div><div className="range-gallery" aria-label="IMSAFE - Kavasam Safety Solutions product details">{productImages.map((image, index) => <figure key={image}><img className="zoomable-image" src={image} alt={`IMSAFE - Kavasam Safety Solutions protection product detail ${index + 1}`} onClick={() => setPreviewImage(image)} /><figcaption>IMSAFE - Kavasam Safety Solutions protection detail {String(index + 1).padStart(2, '0')}</figcaption></figure>)}</div></section>
    {previewImage && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Enlarged product image" onClick={() => setPreviewImage(null)}><button className="lightbox-close" type="button" aria-label="Close enlarged image" onClick={() => setPreviewImage(null)}><X /></button><img src={previewImage} alt="Enlarged IMSAFE - Kavasam Safety Solutions product detail" onClick={(event) => event.stopPropagation()} /></div>}
  </>;
}
