const categoryNames: Record<string, string> = {
  "wds": "Вікна WDS",
  "gealan": "Вікна Gealan",
  "trocal": "Вікна Trocal",
  "warm-mount": "Теплий монтаж",
};

export default function WindowsCategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const title = categoryNames[category] || "Категорія";

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-yellow-600">{title}</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {/* Тут буде перелік товарів цієї категорії */}
        <div className="bg-gray-100 rounded-xl p-6 text-center">Товар 1</div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">Товар 2</div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">Товар 3</div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">Товар 4</div>
      </div>
    </div>
  );
} 