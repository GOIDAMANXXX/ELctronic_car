import React from "react";
import { Phone, CalendarCheck, MapPin } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="bg-black text-white p-8 md:p-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Автосервис \"ЭлектроМастер\"</h1>
        <p className="text-lg md:text-xl mb-6">Решим любую проблему с автоэлектрикой — быстро, профессионально, с гарантией</p>
        <button className="bg-white text-black px-6 py-3 text-lg rounded hover:bg-gray-200">Записаться</button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 md:p-16">
        <div className="border p-6 rounded shadow text-center">
          <CalendarCheck className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Онлайн-запись</h2>
          <p>Удобное бронирование прямо с сайта в два клика</p>
        </div>
        <div className="border p-6 rounded shadow text-center">
          <Phone className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Бесплатная консультация</h2>
          <p>Позвоните — подскажем и сориентируем по цене</p>
        </div>
        <div className="border p-6 rounded shadow text-center">
          <MapPin className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Удобное расположение</h2>
          <p>Находимся рядом с вами — легко доехать</p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
        <p className="max-w-2xl mx-auto text-lg">20+ лет опыта, сертифицированные специалисты, современное оборудование, гарантия на все работы</p>
      </section>

      <footer className="bg-black text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} ЭлектроМастер. Все права защищены.</p>
      </footer>
    </main>
  );
}
