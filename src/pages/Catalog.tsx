import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown, Check } from 'lucide-react';
import { mockFurniture, categories, type Category } from '../data/mockFurniture';
import FurnitureCard from '../components/Furniture/FurnitureCard';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Catalog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const selectedCategory = searchParams.get('categoria') as Category | null;

    const filteredProducts = useMemo(() => {
        return mockFurniture.filter((product) => {
            if (selectedCategory && product.category !== selectedCategory) {
                return false;
            }
            if (search) {
                const searchLower = search.toLowerCase();
                return (
                    product.name.toLowerCase().includes(searchLower) ||
                    product.sku.toLowerCase().includes(searchLower)
                );
            }
            return true;
        });
    }, [selectedCategory, search]);

    const handleCategoryChange = (categoryId: Category | null) => {
        if (categoryId) {
            setSearchParams({ categoria: categoryId });
        } else {
            setSearchParams({});
        }
        setShowFilters(false);
    };

    const currentCategoryName = selectedCategory
        ? categories.find((c) => c.id === selectedCategory)?.name
        : 'Todos os Produtos';

    return (
        <div className="min-h-screen bg-surface pt-24 animate-fade-in">
            {/* Minimal Header */}
            <div className="border-b border-primary-100 bg-white sticky top-0 md:relative z-30">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-8 md:py-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-primary-500 mb-2 block">Coleção</span>
                            <h1 className="font-display text-4xl text-primary-900">
                                {currentCategoryName}
                            </h1>
                        </div>
                        <div className="text-sm text-primary-500 font-light">
                            {filteredProducts.length} peças encontradas
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar - Desktop */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-32">
                            <div className="mb-8">
                                <h3 className="text-xs uppercase tracking-widest font-semibold text-primary-900 mb-6 border-b border-primary-100 pb-2">
                                    Categorias
                                </h3>
                                <ul className="space-y-1">
                                    <li>
                                        <button
                                            onClick={() => handleCategoryChange(null)}
                                            className={cn(
                                                'w-full text-left px-3 py-2 text-sm transition-all duration-300 relative group flex items-center justify-between',
                                                !selectedCategory
                                                    ? 'text-primary-900 font-medium pl-4'
                                                    : 'text-primary-500 hover:text-primary-900'
                                            )}
                                        >
                                            {!selectedCategory && (
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary-900 rounded-full" />
                                            )}
                                            Todos os Produtos
                                        </button>
                                    </li>
                                    {categories.map((cat) => (
                                        <li key={cat.id}>
                                            <button
                                                onClick={() => handleCategoryChange(cat.id)}
                                                className={cn(
                                                    'w-full text-left px-3 py-2 text-sm transition-all duration-300 relative group flex items-center justify-between',
                                                    selectedCategory === cat.id
                                                        ? 'text-primary-900 font-medium pl-4'
                                                        : 'text-primary-500 hover:text-primary-900'
                                                )}
                                            >
                                                {selectedCategory === cat.id && (
                                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary-900 rounded-full" />
                                                )}
                                                {cat.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Search and Filters Bar */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center">
                            {/* Search */}
                            <div className="relative flex-1 w-full">
                                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400" />
                                <input
                                    type="text"
                                    placeholder="BUSCAR PEÇA..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-8 pr-4 py-2 bg-transparent border-b border-primary-200 text-primary-900 placeholder:text-primary-300 placeholder:text-xs placeholder:tracking-widest focus:border-primary-900 outline-none transition-colors text-sm"
                                />
                                {search && (
                                    <button
                                        onClick={() => setSearch('')}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-400 hover:text-primary-900"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Filter Button */}
                            <button
                                onClick={() => setShowFilters(true)}
                                className="lg:hidden w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 border border-primary-200 text-primary-600 rounded-sm text-xs uppercase tracking-widest hover:border-primary-900 hover:text-primary-900 transition-all"
                            >
                                <SlidersHorizontal className="w-3 h-3" />
                                Filtros
                            </button>
                        </div>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                                <AnimatePresence mode='popLayout'>
                                    {filteredProducts.map((product) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            key={product.id}
                                        >
                                            <FurnitureCard furniture={product} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="text-center py-32 border border-dashed border-primary-200 rounded-lg">
                                <p className="text-primary-400 font-light text-lg mb-4">Nenhuma peça encontrada com estes critérios.</p>
                                <button
                                    onClick={() => {
                                        setSearch('');
                                        handleCategoryChange(null);
                                    }}
                                    className="text-xs uppercase tracking-widest text-primary-900 border-b border-primary-900 pb-1 hover:opacity-70 transition-opacity"
                                >
                                    Limpar filtros
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Mobile Filters Modal */}
            {showFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-8"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="font-display text-2xl text-primary-900">Filtros</h3>
                            <button onClick={() => setShowFilters(false)}>
                                <X className="w-6 h-6 text-primary-400 hover:text-primary-900" />
                            </button>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-widest font-semibold text-primary-400 mb-4">Categorias</h4>
                            <ul className="space-y-4">
                                <li>
                                    <button
                                        onClick={() => handleCategoryChange(null)}
                                        className={cn(
                                            'text-lg transition-colors flex items-center gap-3',
                                            !selectedCategory ? 'text-primary-900 font-medium' : 'text-primary-400'
                                        )}
                                    >
                                        {!selectedCategory && <Check className="w-4 h-4" />}
                                        Todas
                                    </button>
                                </li>
                                {categories.map((cat) => (
                                    <li key={cat.id}>
                                        <button
                                            onClick={() => handleCategoryChange(cat.id)}
                                            className={cn(
                                                'text-lg transition-colors flex items-center gap-3',
                                                selectedCategory === cat.id ? 'text-primary-900 font-medium' : 'text-primary-400'
                                            )}
                                        >
                                            {selectedCategory === cat.id && <Check className="w-4 h-4" />}
                                            {cat.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
