import { Phone, MapPin, Clock } from 'lucide-react';

export function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-green-700/90 to-green-400/90 text-white text-xs sm:text-sm md:text-[15px] px-2 sm:px-4 py-3 md:py-4 lg:py-5 lg:px-12 shadow-lg backdrop-blur-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 lg:gap-y-0 lg:gap-x-8 items-center min-w-0">
        <div className="w-full min-w-0 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-2 md:gap-2 lg:gap-3 text-center lg:text-left flex-wrap">
          <span className="flex items-center gap-2 group">
            <MapPin className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:text-yellow-300" />
            <span className="font-semibold whitespace-nowrap">Львів, 'Личаківська 104</span>
          </span>
          <span className="hidden lg:inline text-white/30 text-lg">•</span>
          <span className="flex items-center gap-2 group">
            <Phone className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:text-yellow-300" />
            <a href="tel:0934888070" className="font-bold underline underline-offset-4 hover:text-yellow-300 transition whitespace-nowrap">+380 93 488 80 70</a>
          </span>
          <span className="hidden lg:inline text-white/30 text-lg">•</span>
          <span className="flex items-center gap-2 group">
            <Phone className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:text-yellow-300" />
            <a href="tel:0984888070" className="font-bold underline underline-offset-4 hover:text-yellow-300 transition whitespace-nowrap">+380 98 488 80 70</a>
          </span>
        </div>
        <div className="w-full min-w-0 flex flex-col lg:flex-row lg:items-center lg:justify-end lg:gap-2 text-center lg:text-right items-center lg:items-end flex-wrap">
          {/* Schedule: Пн–Пт, Сб in one row, Нд — вихідний on new line for mobile; all in one row for lg+ */}
          <div className="flex flex-row items-center justify-center gap-2 lg:gap-2 flex-wrap lg:flex-nowrap">
            <span className="flex items-center gap-2 group">
              <Clock className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:text-yellow-300" />
              <span className="font-semibold whitespace-nowrap">Пн–Пт 10:00–19:00</span>
            </span>
            <span className="hidden lg:inline text-white/30 text-lg">•</span>
            <span className="font-semibold whitespace-nowrap">Сб 10:00–15:00</span>
            <span className="hidden lg:inline text-white/30 text-lg">•</span>
            <span className="hidden lg:inline font-semibold whitespace-nowrap">Нд — вихідний</span>
          </div>
          <span className="font-semibold whitespace-nowrap mt-1 lg:hidden">Нд — вихідний</span>
        </div>
      </div>
    </div>
  );
} 