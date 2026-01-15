import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
}

export function formatDimensions(dimensions: { height: number; width: number; depth: number }): string {
    return `${dimensions.height}cm (A) × ${dimensions.width}cm (L) × ${dimensions.depth}cm (P)`;
}
