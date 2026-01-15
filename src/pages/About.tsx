import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award, Users, Clock } from 'lucide-react';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero: Classical Centered */}
            <div className="relative h-[70vh] flex items-center justify-center bg-primary-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=2000&auto=format&fit=crop"
                        alt="Background Texture"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center max-w-3xl px-6">
                    <FadeIn>
                        <span className="text-xs uppercase tracking-[0.3em] text-primary-200 mb-6 block">Desde 2013</span>
                        <h1 className="font-display text-5xl md:text-7xl mb-8">Carpintaria Jatobá</h1>
                        <p className="text-lg md:text-xl text-primary-100 font-light leading-relaxed">
                            Uma década dedicando nossa maestria a transformar madeira nobre em peças de design que contam histórias.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* 2. The Story: Solid Grid */}
            <section className="py-24 max-w-screen-xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="font-display text-4xl text-primary-900 mb-8">Tradição & Modernidade</h2>
                        <div className="space-y-6 text-primary-600 leading-loose text-lg font-light border-l-2 border-primary-100 pl-8">
                            <p>
                                Nossa jornada começou com uma simples convicção: a de que o mobiliário deve ser eterno.
                                Em um mundo de objetos descartáveis, escolhemos o caminho oposto.
                            </p>
                            <p>
                                Situados em Ponta Grossa-PR, nosso atelier combina técnicas seculares de marcenaria com
                                o design contemporâneo. Cada projeto é um diálogo entre a necessidade do cliente e a
                                personalidade da madeira.
                            </p>
                            <p>
                                Não vendemos apenas móveis. Entregamos heranças futuras.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="bg-primary-50 p-4">
                            <img
                                src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1000&auto=format&fit=crop"
                                alt="Detalhe de madeira"
                                className="w-full h-auto shadow-sm"
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 3. The Pillars: Clean Columns */}
            <section className="bg-primary-50 py-24">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <FadeIn delay={0}>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary-900">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="font-display text-xl text-primary-900 mb-4">Excelência</h3>
                            <p className="text-primary-600 font-light">Matéria-prima selecionada a dedo e acabamento manual impecável.</p>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary-900">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="font-display text-xl text-primary-900 mb-4">Personalização</h3>
                            <p className="text-primary-600 font-light">Projetos únicos, desenvolvidos em estreita colaboração com você.</p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary-900">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="font-display text-xl text-primary-900 mb-4">Durabilidade</h3>
                            <p className="text-primary-600 font-light">Peças construídas para resistir ao tempo e às tendências passageiras.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 4. Atelier Info: Dark Section */}
            <section className="bg-primary-950 text-primary-50 py-24">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="font-display text-4xl mb-8">Visite o Atelier</h2>
                        <p className="text-primary-200 font-light mb-12 text-lg leading-relaxed">
                            Nada substitui o toque. Convidamos você a conhecer nosso espaço,
                            sentir o aroma da madeira e ver de perto o processo de criação.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary-400 mt-1" />
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-primary-400 mb-1">Endereço</span>
                                    <p className="text-lg">Rua Doutor Edgar Sponholz, 37<br />Ponta Grossa, PR</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-primary-400 mt-1" />
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-primary-400 mb-1">Horário</span>
                                    <p className="text-lg">Seg-Sex: 08h às 18h<br />Sáb: 08h às 12h</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="https://wa.me/5542984047167"
                                target="_blank"
                                className="inline-flex items-center gap-3 bg-white text-primary-950 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-primary-100 transition-colors"
                            >
                                Agendar Visita
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="relative h-96 md:h-auto bg-primary-900 overflow-hidden opacity-80">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8!2d-50.16!3d-25.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA1JzI0LjAiUyA1MMKwMDknMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.8)' }}
                            allowFullScreen
                            loading="lazy"
                            title="Mapa"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
