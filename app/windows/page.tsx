import { CategoryGrid } from "@/components";

const categories = [
  { slug: "wds", name: "Вікна WDS" },
  { slug: "gealan", name: "Вікна Gealan" },
  { slug: "trocal", name: "Вікна Trocal" },
  { slug: "warm-mount", name: "Теплий монтаж" },
];

export default function WindowsPage() {
  return (
    <CategoryGrid
      title="Вікна"
      categories={categories}
      basePath="/windows"
      borderColor="border-yellow-400"
      hoverColor="hover:bg-yellow-50"
    />
  );
} 