import { CategoryGrid } from "../../components/sections/CategoryGrid";

const categories = [
  { slug: "aluminum", name: "Алюмінієві" },
  { slug: "laminated-metal", name: "Ламінований метал" },
  { slug: "metal-plastic", name: "Металопластик" },
  { slug: "polymer", name: "Полімер" },
  { slug: "mdf", name: "МДФ Накладка" },
  { slug: "glide", name: "Серія Глайд" },
  { slug: "metal", name: "Металеві" },
];

export default function DoorsPage() {
  return (
    <CategoryGrid
      title="Вхідні двері"
      categories={categories}
      basePath="/doors"
    />
  );
} 