import Link from "next/link";

export function CategoryCards() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-green-700">Наші товари та послуги</h2>
      <div className="grid md:grid-cols-4 gap-8">
        <Link href="/doors" className="bg-gray-100 rounded-xl shadow flex flex-col items-center justify-center h-56 border-t-4 border-green-600 hover:scale-105 transition-transform p-4">
          <img src="https://placehold.co/240x120/cccccc/888888/png?text=Фото+двері" alt="Двері вхідні" className="mb-4 rounded-md object-cover w-full h-[120px]" />
          <span className="font-bold text-2xl text-black">Двері вхідні</span>
        </Link>
        <Link href="/interior-doors" className="bg-gray-100 rounded-xl shadow flex flex-col items-center justify-center h-56 border-t-4 border-blue-600 hover:scale-105 transition-transform p-4">
          <img src="https://placehold.co/240x120/cccccc/888888/png?text=Фото+двері" alt="Міжкімнатні двері" className="mb-4 rounded-md object-cover w-full h-[120px]" />
          <span className="font-bold text-2xl text-black">Міжкімнатні двері</span>
        </Link>
        <Link href="/windows" className="bg-white rounded-xl shadow flex flex-col items-center justify-center h-56 border-t-4 border-yellow-400 hover:scale-105 transition-transform p-4">
          <img src="https://placehold.co/240x120/eab308/222/png?text=Вікна" alt="Вікна" className="mb-4 rounded-md object-cover w-full h-[120px]" />
          <span className="font-semibold text-lg text-black">Вікна</span>
        </Link>
        <Link href="/other" className="bg-white rounded-xl shadow flex flex-col items-center justify-center h-56 border-t-4 border-black hover:scale-105 transition-transform p-4">
          <img src="https://placehold.co/240x120/222/fff/png?text=Додатково" alt="Додаткові товари" className="mb-4 rounded-md object-cover w-full h-[120px]" />
          <span className="font-semibold text-lg text-black">Додаткові товари</span>
        </Link>
      </div>
    </section>
  );
} 