import { useState } from 'react';
import Navbar from './components/Navbar'; import Hero from './components/Hero'; import Product from './components/Product'; import OrderForm from './components/OrderForm'; import Footer from './components/Footer';
import Certification from './components/Certification';
export default function Home({ visitor }) { const [isOrderOpen, setIsOrderOpen] = useState(false); return <div className="site-shell"><Navbar onOrder={() => setIsOrderOpen(true)} /><main><Hero onOrder={() => setIsOrderOpen(true)} /><Product onOrder={() => setIsOrderOpen(true)} /><Certification /></main><Footer onOrder={() => setIsOrderOpen(true)} />{isOrderOpen && <OrderForm visitor={visitor} onClose={() => setIsOrderOpen(false)} />}</div>; }
