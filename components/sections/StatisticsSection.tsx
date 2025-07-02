export function StatisticsSection() {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-green-700">Наша статистика за 2023 рік</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-green-50 rounded-xl p-8 shadow">
                    <div className="text-3xl font-extrabold text-green-700 mb-2">562</div>
                    <div className="text-black">Виконаних об'єктів</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-8 shadow">
                    <div className="text-3xl font-extrabold text-blue-700 mb-2">1832</div>
                    <div className="text-black">Встановлених вікон</div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-8 shadow">
                    <div className="text-3xl font-extrabold text-yellow-500 mb-2">270</div>
                    <div className="text-black">Вхідних дверей</div>
                </div>
                <div className="bg-gray-100 rounded-xl p-8 shadow">
                    <div className="text-3xl font-extrabold text-black mb-2">370</div>
                    <div className="text-black">Міжкімнатних дверей</div>
                </div>
            </div>
        </section>
    );
} 