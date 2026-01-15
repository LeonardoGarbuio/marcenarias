import { Link } from 'react-router-dom';
import type { Furniture } from '../../data/mockFurniture';
import { formatPrice } from '../../lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface FurnitureCardProps {
    furniture: Furniture;
}

export default function FurnitureCard({ furniture }: FurnitureCardProps) {
    return (
        <Link
            to={`/produto/${furniture.id}`}
            className="group block relative"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-primary-100 mb-6">
                <img
                    src={furniture.images[0]}
                    alt={furniture.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {furniture.featured && (
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur text-primary-900 text-[10px] uppercase tracking-widest font-medium">
                            Destaque
                        </span>
                    )}
                    {!furniture.available && (
                        <span className="inline-block px-3 py-1 bg-primary-900/90 backdrop-blur text-white text-[10px] uppercase tracking-widest font-medium">
                            Esgotado
                        </span>
                    )}
                </div>

                {/* Hover Action */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg">
                        <ArrowUpRight className="w-5 h-5 text-primary-900" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="font-display text-lg text-primary-900 leading-tight group-hover:text-primary-600 transition-colors">
                        {furniture.name}
                    </h3>
                    <p className="text-sm text-primary-500 mt-1">
                        {furniture.category}
                    </p>
                </div>
                <div className="text-right">
                    <span className="block font-medium text-primary-900">
                        {formatPrice(furniture.price)}
                    </span>
                </div>
            </div>
        </Link>
    );
}
