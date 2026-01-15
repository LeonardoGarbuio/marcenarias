import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Ruler, Palette, ShieldCheck } from 'lucide-react';
import { getFurnitureById } from '../data/mockFurniture';
import { formatPrice, formatDimensions } from '../lib/utils';
import { motion } from 'framer-motion';

export default function FurnitureDetails() {
    const { id } = useParams<{ id: string }>();
    const furniture = getFurnitureById(id || '');

    if (!furniture) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-primary-50">
                <div className="text-center">
                    <h1 className="font-display text-2xl font-bold text-primary-900 mb-4">
                        Peça não encontrada
                    </h1>
                    <Link
                        to="/catalogo"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary-600 border-b border-primary-600 pb-1"
                    >
                        <ArrowLeft className="w-3 h-3" />
                        Retornar à Coleção
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-primary-50 min-h-screen animate-fade-in">
            {/* Breadcrumb / Back Navigation */}
            <div className="pt-24 pb-8 px-6 lg:px-12 max-w-screen-2xl mx-auto">
                <Link
                    to="/catalogo"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-primary-500 hover:text-primary-900 transition-colors group"
                >
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    Voltar para Coleção
                </Link>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Image Section - Takes up more space now */}
                    <div className="lg:col-span-7">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="aspect-[4/5] bg-primary-100 overflow-hidden relative"
                            >
                                <img
                                    src={furniture.images[0]}
                                    alt={furniture.name}
                                    className="w-full h-full object-cover"
                                />
                                {!furniture.available && (
                                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                                        <span className="px-6 py-3 bg-primary-900 text-white text-xs uppercase tracking-[0.2em]">
                                            Esgotado
                                        </span>
                                    </div>
                                )}
                            </motion.div>

                            {/* Additional Images Preview (Mock) */}
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="aspect-square bg-primary-100 cursor-pointer hover:opacity-80 transition-opacity">
                                        {/* Placeholder for galaxy of images */}
                                        <div className="w-full h-full bg-primary-200/50" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-xs uppercase tracking-[0.2em] text-accent-600 block mb-3">
                                {furniture.category}
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-950 leading-none mb-8">
                                {furniture.name}
                            </h1>

                            <div className="flex items-baseline gap-4 mb-12 border-b border-primary-200 pb-8">
                                <span className="font-display text-3xl text-primary-900">
                                    {formatPrice(furniture.price)}
                                </span>
                                <span className="text-sm text-primary-500">
                                    ou 10x de {formatPrice(furniture.price / 10)}
                                </span>
                            </div>

                            <div className="prose prose-brown mb-12 text-primary-600 font-light leading-relaxed">
                                <p>{furniture.description || "Uma peça de design atemporal, criada para trazer sofisticação e funcionalidade ao seu ambiente. Trabalhada com madeira selecionada e acabamento premium."}</p>
                            </div>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <Ruler className="w-5 h-5 text-primary-400 mt-1" />
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-primary-900 mb-1">Dimensões</span>
                                        <span className="text-primary-600 font-light">{formatDimensions(furniture.dimensions)}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Palette className="w-5 h-5 text-primary-400 mt-1" />
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-primary-900 mb-1">Acabamento</span>
                                        <span className="text-primary-600 font-light">{furniture.colors.join(', ')}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <ShieldCheck className="w-5 h-5 text-primary-400 mt-1" />
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-primary-900 mb-1">Garantia</span>
                                        <span className="text-primary-600 font-light">5 anos contra defeitos de fabricação</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href={`https://wa.me/5542984047167?text=Olá! Tenho interesse no produto: ${furniture.name} (${furniture.sku})`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-4 bg-primary-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-primary-800 transition-colors"
                                >
                                    Solicitar Orçamento
                                </a>
                                <p className="text-center text-[10px] uppercase tracking-widest text-primary-400">
                                    Consulte disponibilidade de entrega para sua região
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
