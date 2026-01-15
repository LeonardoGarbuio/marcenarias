import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';
import { getFeaturedFurniture, categories } from '../data/mockFurniture';
import FurnitureCard from '../components/Furniture/FurnitureCard';

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Home() {
    const featuredProducts = getFeaturedFurniture().slice(0, 3);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="bg-primary-50">
            {/* Hero Section */}
            <header className="relative h-screen overflow-hidden flex items-center justify-center">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                        alt="Interior Minimalista"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-6"
                    >
                        Carpintaria Artesanal
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-8"
                    >
                        Design que <br />
                        <span className="italic font-light">Perdura</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link
                            to="/catalogo"
                            className="inline-flex items-center gap-3 text-sm uppercase tracking-widest border-b border-white/50 pb-1 hover:border-white transition-all group"
                        >
                            Explorar Coleção
                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </header>

            {/* Introduction / Philosophy */}
            <section className="py-24 md:py-32 px-6">
                <FadeIn className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
                    <div>
                        <span className="block text-accent-600 text-xs uppercase tracking-widest mb-6">Nossa Filosofia</span>
                        <h2 className="font-display text-4xl md:text-5xl text-primary-900 leading-tight mb-8">
                            Acreditamos na beleza da <span className="italic text-primary-600">imperfeição natural</span> da madeira.
                        </h2>
                        <div className="h-px w-24 bg-primary-200 mb-8" />
                        <p className="text-primary-600 leading-relaxed text-lg font-light">
                            Cada nó, cada veio, cada tonalidade conta a história de décadas de crescimento.
                            Nosso trabalho não é impor uma forma, mas revelar a alma que já existe na matéria-prima.
                            Criamos peças que não apenas ocupam espaço, mas que trazem vida e calor para o seu ambiente.
                        </p>
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden bg-primary-100">
                        <img
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
                            alt="Detalhe de madeira trabalhando"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeIn>
            </section>

            {/* Categories Mosaic */}
            <section className="py-24 bg-white border-y border-primary-100">
                <div className="max-w-screen-2xl mx-auto px-6">
                    <FadeIn>
                        <div className="flex justify-between items-end mb-16">
                            <h2 className="font-display text-3xl md:text-4xl text-primary-900">Categorias</h2>
                            <Link to="/catalogo" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-primary-500 hover:text-primary-900 transition-colors">
                                Ver todas <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 auto-rows-[300px] md:auto-rows-[400px]">
                        {/* Major Category 1 */}
                        <Link to="/catalogo?categoria=adega" className="md:col-span-8 relative group overflow-hidden bg-primary-100">
                            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Adega" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="font-display text-3xl">Adegas</h3>
                            </div>
                        </Link>
                        {/* Major Category 2 */}
                        <Link to="/catalogo?categoria=cozinha" className="md:col-span-4 relative group overflow-hidden bg-primary-100">
                            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" alt="Cozinha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="font-display text-3xl">Cozinha</h3>
                            </div>
                        </Link>
                        {/* Major Category 3 */}
                        <Link to="/catalogo?categoria=quarto" className="md:col-span-4 relative group overflow-hidden bg-primary-100">
                            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80" alt="Quarto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="font-display text-3xl">Quarto</h3>
                            </div>
                        </Link>
                        {/* Major Category 4 */}
                        <Link to="/catalogo?categoria=sala-estar" className="md:col-span-8 relative group overflow-hidden bg-primary-100">
                            <img src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=80" alt="Sala de Estar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="font-display text-3xl">Sala de Estar</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/catalogo" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary-500 hover:text-primary-900 transition-colors">
                            Ver todas <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Collection */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <FadeIn className="text-center mb-16 md:mb-24">
                        <span className="text-accent-600 text-xs uppercase tracking-widest block mb-4">Curadoria</span>
                        <h2 className="font-display text-4xl md:text-5xl text-primary-900">Destaques da Coleção</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                        {featuredProducts.map((product, i) => (
                            <FadeIn key={product.id} delay={i * 0.1}>
                                <FurnitureCard furniture={product} />
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link
                            to="/catalogo"
                            className="inline-block px-12 py-4 bg-primary-900 text-white text-xs uppercase tracking-widest hover:bg-primary-800 transition-colors"
                        >
                            Ver Coleção Completa
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact / Atelier CTA */}
            <section className="py-24 bg-primary-900 text-primary-50 px-6">
                <div className="max-w-screen-lg mx-auto text-center">
                    <FadeIn>
                        <h2 className="font-display text-4xl md:text-6xl mb-8">
                            Sua visão, nossa maestria.
                        </h2>
                        <p className="text-primary-200 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                            Transforme seu ambiente com móveis projetados exclusivamente para você.
                            Agende uma visita ao nosso atelier ou solicite um orçamento online.
                        </p>
                        <a
                            href="https://wa.me/5542984047167"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-12 py-4 bg-white text-primary-900 text-xs uppercase tracking-widest hover:bg-primary-100 transition-colors"
                        >
                            Fale com um Designer
                        </a>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
