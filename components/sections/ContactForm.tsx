export function ContactForm() {
  return (
    <section className="w-full flex justify-center items-center py-12 mt-12">
      <div className="w-full max-w-5xl bg-[#f1f8fa] rounded-3xl p-8 md:p-12 flex flex-col items-center shadow-md">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-8 text-center">Залиште заявку на безкоштовні заміри</h2>
        <form className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">
          <input type="text" required placeholder="Ваше ім'я*" className="rounded-xl border-none bg-white px-8 py-5 text-lg w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow" />
          <input type="tel" required placeholder="Номер Телефону*" className="rounded-xl border-none bg-white px-8 py-5 text-lg w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow" />
          <button type="submit" className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-xl text-lg transition-colors w-full md:w-auto shadow">відправити заявку</button>
        </form>
      </div>
    </section>
  );
} 