import { useState } from 'react';
import Login from './Login';
import Home from './Home';
export default function App() { const [visitor, setVisitor] = useState(null); return visitor ? <Home visitor={visitor} /> : <Login onEnter={setVisitor} />; }
