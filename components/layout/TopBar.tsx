import { Phone, MapPin, Clock } from 'lucide-react';

export function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white text-sm py-3 px-4 flex flex-col md:flex-row items-center justify-between gap-2 shadow-sm">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          <span className="font-medium">Львів, Личаківська 104</span>
        </span>
        <span className="hidden md:inline-block text-white/40 text-lg">•</span>
        <span className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
        </span>
        <span className="text-white/40 text-lg">•</span>
        <span className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <a href="tel:0934888070" className="font-bold underline hover:text-yellow-300 transition">+380 93 488 80 70</a>
        </span>
        <span className="text-white/40 text-lg">•</span>
        <span className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <a href="tel:0984888070" className="font-bold underline hover:text-yellow-300 transition">+380 98 488 80 70</a>
        </span>
      </div>
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <Clock className="w-5 h-5" />
        <span className="font-medium">Пн–Пт 10:00–19:00</span>
        <span className="text-white/40 text-lg">•</span>
        <span className="font-medium">Сб 10:00–15:00</span>
        <span className="text-white/40 text-lg">•</span>
        <span className="font-medium">Нд — вихідний</span>
      </div>
    </div>
  );
} 