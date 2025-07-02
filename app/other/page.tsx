import { CategoryGrid } from "../../components/sections/CategoryGrid";

const categories = [
  { slug: "accessories", name: "Фурнітура" },
  { slug: "locks", name: "Замки" },
  { slug: "handles", name: "Ручки" },
  { slug: "other-products", name: "Інше" },
];

export default function OtherPage() {
  return (
    <CategoryGrid
      title="Додаткові товари"
      categories={categories}
      basePath="/other"
      borderColor="border-black"
      hoverColor="hover:bg-gray-50"
    />
  );
} 