import Link from "next/link";

const categories = [
  { slug: "aluminum", name: "Алюмінієві" },
  { slug: "laminated-metal", name: "Ламінований метал" },
  { slug: "metal-plastic", name: "Металопластик" },
  { slug: "polymer", name: "Полімер" },
  { slug: "mdf", name: "МДФ Накладка" },
  { slug: "glide", name: "Серія Глайд" },
  { slug: "metal", name: "Металеві" },
];

const categoryDescriptions: Record<string, string> = {
  "aluminum": "Двері можуть бути виготовлені під розмір, бути різного кольору і можливий дизайн за ескізом замовника",
  "laminated-metal": "Двері можуть бути виготовлені під розмір, бути різного кольору і можливий дизайн за ескізом замовника",
  "metal-plastic": "Двері можуть бути виготовлені під розмір, бути різного кольору і можливий дизайн за ескізом замовника",
  "polymer": "Двері можуть бути виготовлені під розмір, бути різного кольору і можливий дизайн за ескізом замовника",
  "mdf": "Двері можуть бути виготовлені під розмір, бути різного кольору і можливий дизайн за ескізом замовника",
  "glide": "Двері можуть бути виготовлені під розмір, бути різного кольору і можливий дизайн за ескізом замовника",
  "metal": "Двері можуть бути виготовлені під розмір, бути різного кольору і можливий дизайн за ескізом замовника",
};

const productsByCategory: Record<string, { code: string }[]> = {
  "aluminum": [
    { code: "11-AL" },
    { code: "06-AL" },
    { code: "02-AL" },
    { code: "05-AL" },
  ],
  "laminated-metal": [
    { code: "51-TE" },
    { code: "48-TE" },
    { code: "17-TE" },
    { code: "39-TE" },
  ],
  "metal-plastic": [
    { code: "01-П" },
    { code: "03-П" },
    { code: "44-П" },
    { code: "36-П" },
  ],
  "polymer": [
    { code: "61-ПО" },
    { code: "51-ПО" },
    { code: "85-ПО" },
    { code: "75-ПО" },
  ],
  "mdf": [
    { code: "57-MDF" },
    { code: "55-MDF" },
    { code: "54-MDF" },
    { code: "52-MDF" },
  ],
  "glide": [
    { code: "43-ГЛ" },
    { code: "44-ГЛ" },
    { code: "45-ГЛ" },
    { code: "46-ГЛ" },
    { code: "47-ГЛ" },
    { code: "48-ГЛ" },
    { code: "49-ГЛ" },
    { code: "50-ГЛ" },
    { code: "51-ГЛ" },
  ],
  "metal": [
    { code: "80-M" },
    { code: "81-1-M" },
    { code: "81-2-M" },
    { code: "82-M" },
    { code: "83-M" },
    { code: "84-M" },
    { code: "85-M" },
    { code: "86-M" },
    { code: "87-M" },
    { code: "88-M" },
    { code: "89-M" },
    { code: "90-M" },
    { code: "91-M" },
  ],
};

export default function DoorCategoryPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-green-700">Двері вхідні вуличні</h1>
      {/* Меню підкатегорій */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(cat => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="bg-red-400 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded transition"
          >
            {cat.name}
          </a>
        ))}
      </div>
      <p className="mb-10 text-gray-700">Двері можуть бути виготовлені під розмір, бути різного кольору і можливий дизайн за ескізом замовника</p>
      {/* Блоки підкатегорій */}
      {categories.map(cat => (
        <section key={cat.slug} id={cat.slug} className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">{cat.name}</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-4">
            {(productsByCategory[cat.slug] || []).map(product => (
              <div key={product.code} className="flex flex-col items-center">
                <div className="w-48 h-72 bg-gray-300 rounded mb-2 flex items-center justify-center text-gray-400 text-2xl font-bold">Фото</div>
                <div className="font-semibold text-lg text-center">{product.code}</div>
              </div>
            ))}
          </div>
          <Link href={`./collection`}>
            <button className="bg-red-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-500 transition">Вся колекція</button>
          </Link>
        </section>
      ))}
    </div>
  );
} 