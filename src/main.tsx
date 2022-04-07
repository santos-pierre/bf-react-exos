import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import Products from './pages/Products';
import MarkdownEditor from './pages/MarkdownEditor';
import CounterPage from './pages/CounterPage';

const root = createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/products" element={<Products />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/editor" element={<MarkdownEditor />} />
        </Routes>
    </BrowserRouter>
);
