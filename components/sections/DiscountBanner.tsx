import { ContactDialog } from "../ui/ContactDialog";

export function DiscountBanner() {
  return (
    <section className="w-full py-8">
      <div className="bg-yellow-400 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between px-8 py-8 gap-6 max-w-5xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <span className="text-3xl font-extrabold text-black block mb-2">Знижки до -20% на всі вікна та двері!</span>
          <span className="text-lg text-black">Акція діє до кінця місяця. Встигніть скористатися вигідною пропозицією!</span>
        </div>
        <ContactDialog
          triggerText="Залишити заявку"
          title="Отримати консультацію"
          description="Ми зв'яжемося з вами найближчим часом"
          includeMessage={true}
          triggerClassName="bg-green-700 text-white text-xl px-10 py-6 rounded-full shadow hover:bg-green-800 transition-all font-bold mt-4 md:mt-0"
        />
      </div>
    </section>
  );
} 