import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5542984047167"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center group"
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute right-full mr-3 px-3 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Fale Conosco!
            </span>
        </a>
    );
}
