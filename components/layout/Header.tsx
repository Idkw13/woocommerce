import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-8">
        {/* Logo */}
        <div className="flex items-center min-w-[160px]">
          <span className="font-extrabold text-3xl tracking-tight text-green-700 font-serif select-none">Termoplast</span>
        </div>
        {/* Navigation */}
        <nav className="flex-1 flex items-center justify-center gap-7 text-base font-medium">
          <Link href="/" className="hover:text-green-700 text-black transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-200">Головна</Link>
          <Link href="/doors" className="hover:text-green-700 text-black transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-200">Двері вхідні</Link>
          <Link href="/interior-doors" className="hover:text-green-700 text-black transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-200">Міжкімнатні двері</Link>
          <Link href="/windows" className="hover:text-green-700 text-black transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-200">Вікна</Link>
          <Link href="/floor" className="hover:text-green-700 text-black transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-200">Підлога</Link>
          <Link href="/contacts" className="hover:text-green-700 text-black transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-200">Контакти</Link>
        </nav>
        {/* Accent Buttons */}
        <div className="flex items-center gap-3 min-w-[220px] justify-end">
          <span className="font-semibold px-4 py-1.5 rounded-full bg-yellow-200 text-yellow-800 shadow border border-yellow-300">Кредит</span>
          <span className="font-semibold px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 shadow border border-blue-200">Безкоштовна доставка</span>
        </div>
      </div>
    </header>
  );
} 