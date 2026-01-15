import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary-50 text-primary-900 border-t border-primary-100 pt-24 pb-12">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand */}
                    <div className="md:col-span-5 lg:col-span-4">
                        <Link to="/" className="inline-block mb-8 group">
                            <span className="font-display text-3xl tracking-tight block">JATOBÁ</span>
                            <span className="text-xs uppercase tracking-[0.3em] text-primary-500 block mt-1">Carpintaria</span>
                        </Link>
                        <p className="text-primary-600 text-lg font-light leading-relaxed max-w-sm">
                            Criando peças atemporais que contam histórias através da madeira e do design refinado.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3 lg:col-span-2 md:col-start-7 lg:col-start-8">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-primary-400 mb-8">Menu</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-primary-900 hover:text-primary-600 transition-colors">Início</Link></li>
                            <li><Link to="/catalogo" className="text-primary-900 hover:text-primary-600 transition-colors">Coleção</Link></li>
                            <li><Link to="/sobre" className="text-primary-900 hover:text-primary-600 transition-colors">Atelier</Link></li>
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-primary-400 mb-8">Contato</h4>
                        <div className="space-y-4">
                            <a href="mailto:contato@jatoba.com" className="block text-primary-900 hover:text-primary-600 transition-colors">
                                contato@jatoba.com
                            </a>
                            <a href="tel:+5542984047167" className="block text-primary-900 hover:text-primary-600 transition-colors">
                                (42) 98404-7167
                            </a>
                            <div className="flex gap-4 mt-8">
                                <a href="#" className="w-10 h-10 border border-primary-200 rounded-full flex items-center justify-center hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-10 h-10 border border-primary-200 rounded-full flex items-center justify-center hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all">
                                    <Facebook className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-100">
                    <p className="text-primary-400 text-sm">
                        © {year} Carpintaria Jatobá
                    </p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="text-sm text-primary-400 hover:text-primary-900 transition-colors">Termos</a>
                        <a href="#" className="text-sm text-primary-400 hover:text-primary-900 transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
