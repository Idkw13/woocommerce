import { ContactDialog } from "../ui/ContactDialog";

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 md:py-24">
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-6 text-green-700 font-serif">Termoplast</h1>
        <p className="mb-8 text-xl text-black max-w-xl">Виробництво та встановлення вхідних і міжкімнатних дверей, металопластикових та алюмінієвих вікон. Кредит, безкоштовна доставка, сучасний сервіс для вашого дому чи бізнесу.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
          <ContactDialog
            triggerText="Залишити заявку"
            title="Залишити заявку"
            description="Ми зв'яжемося з вами найближчим часом"
            triggerClassName="bg-yellow-400 text-black font-semibold px-10 py-6 rounded-full shadow hover:bg-green-600 hover:text-white transition-colors text-xl w-full sm:w-auto"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[400px] h-[300px] rounded-2xl bg-gradient-to-br from-green-200 to-blue-100 flex items-center justify-center shadow-xl">
          <span className="text-4xl font-bold text-green-700 font-serif">Termoplast</span>
        </div>
      </div>
    </section>
  );
} 