import Link from "next/link";

interface Category {
  slug: string;
  name: string;
}

interface CategoryGridProps {
  title: string;
  categories: Category[];
  basePath: string;
  borderColor?: string;
  hoverColor?: string;
}

export function CategoryGrid({ 
  title, 
  categories, 
  basePath, 
  borderColor = "border-green-600",
  hoverColor = "hover:bg-green-50"
}: CategoryGridProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-green-700">{title}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`${basePath}/${cat.slug}`}
            className={`block bg-white rounded-xl shadow p-6 ${hoverColor} border-t-4 ${borderColor} transition`}
          >
            <span className="text-xl font-semibold text-black">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
} 