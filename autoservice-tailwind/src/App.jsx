import React from "react";
import { Phone, CalendarCheck, MapPin, Car, Clock, Star } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="bg-black text-white p-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Автоэлектрика в Тбилиси</h1>
        <p className="text-xl mb-6">Все виды работ. Быстро. Надежно. С гарантией.</p>
        <button className="bg-yellow-400 text-black px-6 py-3 text-lg rounded hover:bg-yellow-300 transition">📅 Записаться</button>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gray-100">
        {[
          { icon: <CalendarCheck />, title: 'Комп. диагностика', desc: 'Полная проверка электроники авто' },
          { icon: <Car />, title: 'Ремонт генераторов', desc: 'Профессиональный ремонт и замена' },
          { icon: <MapPin />, title: 'Поиск утечек тока', desc: 'Быстро найдём и устраним проблему' },
          { icon: <Phone />, title: 'Установка сигнализаций', desc: 'Иммобилайзеры, StarLine, Pandora' },
          { icon: <Clock />, title: 'Чип-тюнинг', desc: 'Изменим прошивку под ваш стиль езды' },
          { icon: <Car />, title: 'Грузовая электроника', desc: 'Обслуживаем грузовики и спецтехнику' }
        ].map((s, i) => (
          <div key={i} className="border p-6 rounded shadow text-center bg-white">
            <div className="w-12 h-12 mx-auto mb-4 text-yellow-500">{s.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Us Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            '20 лет опыта',
            'Современное оборудование',
            'Сертифицированные мастера',
            'Гарантия на все работы'
          ].map((item, i) => (
            <div key={i} className="p-4 border rounded shadow bg-gray-50">{item}</div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Отличный сервис, быстро помогли с проблемой!", "Делал чип-тюнинг, всё чётко!", "Единственные, кто нашёл утечку тока!"].map((text, i) => (
            <div key={i} className="p-6 border rounded bg-white shadow">
              <div className="flex justify-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5" />)}
              </div>
              <p className="text-sm">"{text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Оставить заявку</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Ваше имя" className="border p-3 rounded w-full" />
          <input type="tel" placeholder="Телефон" className="border p-3 rounded w-full" />
          <select className="border p-3 rounded w-full">
            <option>Выберите услугу</option>
            <option>Диагностика</option>
            <option>Ремонт</option>
            <option>Установка сигнализации</option>
          </select>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Отправить</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-6 text-center">
        <p>Автосервис "ЭлектроМастер" | &copy; {new Date().getFullYear()} Все права защищены</p>
      </footer>
    </main>
  );
}
