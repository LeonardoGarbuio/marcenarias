import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/catalogo', label: 'Coleção' },
    { path: '/sobre', label: 'Atelier' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isTransparentPage = location.pathname === '/' || location.pathname === '/sobre';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStartStyle = isTransparentPage && !scrolled ? 'bg-transparent text-white' : 'bg-primary-50/90 text-primary-900 shadow-sm backdrop-blur-md';
    const linkStyle = isTransparentPage && !scrolled ? 'text-white/90 hover:text-white' : 'text-primary-600 hover:text-primary-900';

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
            navbarStartStyle,
            !isTransparentPage && "border-primary-100"
        )}>
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col items-center group">
                        <span className={cn(
                            "font-display text-2xl tracking-tight transition-colors",
                            isTransparentPage && !scrolled ? "text-white" : "text-primary-950"
                        )}>
                            JATOBÁ
                        </span>
                        <span className={cn(
                            "text-[0.6rem] tracking-[0.3em] uppercase opacity-80 transition-colors",
                            isTransparentPage && !scrolled ? "text-white" : "text-primary-600"
                        )}>
                            Carpintaria
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 relative group',
                                    linkStyle,
                                    location.pathname === link.path && !isTransparentPage && "text-primary-900"
                                )}
                            >
                                {link.label}
                                <span className={cn(
                                    "absolute -bottom-2 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                                    isTransparentPage && !scrolled ? "bg-white" : "bg-primary-900"
                                )} />
                            </Link>
                        ))}
                        <a
                            href="tel:+5542984047167"
                            className={cn(
                                "flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all border",
                                isTransparentPage && !scrolled
                                    ? "border-white/30 text-white hover:bg-white hover:text-primary-900"
                                    : "border-primary-900/10 bg-primary-900 text-white hover:bg-primary-800"
                            )}
                        >
                            <Phone className="w-3 h-3" />
                            Contato
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "md:hidden p-2 transition-colors",
                            isTransparentPage && !scrolled ? "text-white" : "text-primary-900"
                        )}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-primary-50 border-b border-primary-100 shadow-xl md:hidden animate-fade-in">
                        <div className="flex flex-col p-6 gap-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-primary-900 font-display text-2xl"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="tel:+5542984047167"
                                className="mt-4 px-8 py-3 bg-primary-900 text-white rounded-full text-sm uppercase tracking-widest"
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
