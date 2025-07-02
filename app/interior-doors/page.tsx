import { CategoryGrid } from "../../components/sections/CategoryGrid";

const categories = [
  { slug: "classic", name: "Класичні" },
  { slug: "modern", name: "Сучасні" },
  { slug: "glass", name: "Скляні" },
  { slug: "eco", name: "Еко-двері" },
];

export default function InteriorDoorsPage() {
  return (
    <CategoryGrid
      title="Міжкімнатні двері"
      categories={categories}
      basePath="/interior-doors"
      borderColor="border-blue-600"
      hoverColor="hover:bg-blue-50"
    />
  );
} 