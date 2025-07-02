export function ReviewsSection() {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-green-700">Відгуки наших клієнтів</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow p-8 flex flex-col">
                    <span className="font-semibold text-black mb-2">Надія Бойко</span>
                    <span className="text-yellow-400 text-lg mb-2">★★★★★</span>
                    <span
                        className="text-gray-700">Двері супер! Я задоволена. Працівники відповідальні, рекомендую!</span>
                </div>
                <div className="bg-white rounded-xl shadow p-8 flex flex-col">
                    <span className="font-semibold text-black mb-2">Олеся Генсьор</span>
                    <span className="text-yellow-400 text-lg mb-2">★★★★★</span>
                    <span className="text-gray-700">Замовляли вікна, якістю і швидкістю виготовлення дуже задоволені. Окрема подяка за доставку і допомогу!</span>
                </div>
                <div className="bg-white rounded-xl shadow p-8 flex flex-col">
                    <span className="font-semibold text-black mb-2">Роман Газда</span>
                    <span className="text-yellow-400 text-lg mb-2">★★★★★</span>
                    <span className="text-gray-700">Рекомендую &#34;Termoplast&#34;. Все якісно, швидко, сервіс на найвищому рівні!</span>
                </div>
            </div>
        </section>
    );
} 