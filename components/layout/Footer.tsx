import { 
  Shield, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook 
} from 'lucide-react';

// Custom SVGs for Viber and Telegram
const ViberIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect width="24" height="24" rx="6" fill="white"/>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.457.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.21-.242-.58-.487-.501-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.149.198 2.099 3.205 5.08 4.367.711.306 1.264.489 1.697.626.713.227 1.362.195 1.874.118.572-.085 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#2563eb"/>
    <circle cx="12" cy="12" r="11" stroke="#2563eb" strokeWidth="2"/>
  </svg>
);
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect width="24" height="24" rx="6" fill="white"/>
    <path d="M19.5 5.5L4.5 11.5c-.5.2-.5.8 0 1l3.7 1.2 1.4 4.2c.1.3.5.4.7.2l2-2 3.6 2.7c.3.2.7.1.8-.3l2.5-11c.1-.4-.3-.7-.7-.6zM9.7 15.1l-.9-2.7 6.2-5.6-5.3 6.7z" fill="#2563eb"/>
    <circle cx="12" cy="12" r="11" stroke="#2563eb" strokeWidth="2"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#059669] to-[#047857] w-full py-16 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Map Section */}
          <div className="flex flex-col items-center md:items-start w-full">
            <div className="w-full h-48 rounded-2xl overflow-hidden shadow mb-6 border border-white/20">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Львів,+Личаківська+104&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Завітайте в наш салон</h3>
            <p className="text-emerald-100 text-base mb-1">м. Львів, Личаківська 104</p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg mb-6">Контакти</h3>
            <div className="space-y-2 text-lg">
              <div className="flex items-center gap-3 text-white">
                <Clock className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                <span>Пн-Пт — з 10:00 до 19:00</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Clock className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                <span>Сб — з 10:00 до 15:00</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                <a href="tel:+380934888070" className="font-bold hover:underline">+380 93 488 80 70</a>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                <a href="tel:+380984888070" className="font-bold hover:underline">+380 98 488 80 70</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="text-white font-semibold text-lg mb-6">Месенджери та соцмережі</h3>
            <div className="flex gap-4 mb-8">
              <a href="#" aria-label="Viber" className="group w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center border-2 border-transparent hover:border-blue-600 hover:scale-110 transition-all duration-300">
                <ViberIcon className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Telegram" className="group w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center border-2 border-transparent hover:border-blue-600 hover:scale-110 transition-all duration-300">
                <TelegramIcon className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Facebook" className="group w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center border-2 border-transparent hover:border-blue-600 hover:scale-110 transition-all duration-300">
                <Facebook className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </a>
              <a href="#" aria-label="Instagram" className="group w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center border-2 border-transparent hover:border-blue-600 hover:scale-110 transition-all duration-300">
                <Instagram className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom border */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-100 text-sm text-center md:text-left">
              © 2024. Всі права захищені.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-emerald-100 hover:text-white transition-colors">Політика конфіденційності</a>
              <a href="#" className="text-emerald-100 hover:text-white transition-colors">Умови використання</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 