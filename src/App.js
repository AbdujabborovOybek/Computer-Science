import React from "react";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <h1>Computer Science</h1>
      {data.map((item, i) => {
        const theme = item.details;
        return (
          <details>
            <summary>
              {i + 1}.{item.title}
            </summary>
            <ol>
              {theme.map((item, index) => {
                return (
                  <li>
                    {i + 1}.{index + 1}. {item}
                  </li>
                );
              })}
            </ol>
          </details>
        );
      })}
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Kompyuter asosiy tushunchalari",
    details: [
      "Kompyuter tarihi va rivojlanishi",
      "Kompyuter turlari va ularning xususiyatlari",
      "Komputer komponentlari va ularning vazifalari (protsessor, xotira, grafika, vs.)",
    ],
  },
  {
    id: 2,
    title: "Windows operatsion tizimi",
    details: [
      "Windows 10 orqali kompyuter ishlash asosiy qoidalari",
      "Fayllar va papkalar bilan ishlash",
      "Windows yordamida kompyuter sozlamalari",
    ],
  },
  {
    id: 3,
    title: "Word texnologiyasi",
    details: [
      "Microsoft Word haqida umumiy tushuncha",
      "Matn yozish, tahrir qilish va saqlash",
      "Matn formatlash, paragraf va yo'laklar",
      "Sarlavha va ko'rinishlarni qo'llash",
    ],
  },
  {
    id: 4,
    title: "Excel texnologiyasi",
    details: [
      "Microsoft Excel haqida umumiy tushuncha",
      "Jadvallarni yaratish va tahrir qilish",
      "Kalkulyatsiyalar va formulalar ishlash",
      "Jadvallarni formatlash va chizish",
    ],
  },
  {
    id: 5,
    title: "Dasturlar va ilovalar",
    details: [
      "Dasturlarni o'rnatish va o'chirish",
      "Ilovalarni topish va o'rganish",
      "Ma'lumotlar bazalari va tablitsalarni tuzish",
    ],
  },
  {
    id: 6,
    title: "Internet va internet resurslari",
    details: [
      "Internetning asosiy tushunchalari",
      "Veb-saytlar va ularning funktsiyalari",
      "Internetdan foydalanish va ma'lumotlar qidirish",
    ],
  },
  {
    id: 7,
    title: "E-mail va elektron pochta",
    details: [
      "Elektron pochta haqida tushuncha",
      "Elektron pochtaning ishlatilishi va xususiyatlari",
      "Foydalanuvchilar orasida elektron xat yuborish",
    ],
  },
  {
    id: 8,
    title: "Ma'lumotlar himoyasi va xavfsizlik",
    details: [
      "Kompyuter xavfsizligi va ma'lumotlar himoyasi asosiy qoidalari",
      "Anti-virus dasturlari va ularning ishlash prinsiplari",
    ],
  },
  {
    id: 9,

    title: "Kompüter jargon va so'zlarni tushunish",
    details: [
      "Kompüterga oid tushunchalar va ularning izohi",
      "Asosiy kompyuter so'zlashuvi",
    ],
  },
  {
    id: 10,
    title: "Ma'lumotlar saqlash va taqsimlash turlari",
    details: [
      "Kompüterda ma'lumotlar saqlash turlari (Fayllar, Hujjatlar, Rasmlar, Musiqa)",
      "Ma'lumotlarni taqsimlash va joylashtirish usullari",
    ],
  },
  {
    id: 11,
    title: "Tarmoqlar va ularga ulanish",
    details: [
      "Tarmoq haqida umumiy tushuncha",
      "Lokal va global tarmoqlar",
      "Tarmoqlarga ulanish usullari (Wi-Fi, Ethernet, Mobil internet)",
    ],
  },
  {
    id: 12,

    title: "Kompyuterda veb-saytlarni tashkil etish",
    details: [
      "Veb-saytlar haqida tushuncha",
      "HTML va CSS asosiy tushunchalari",
      "Veb-saytlarni tuzish va tahrir qilish",
    ],
  },
  {
    id: 13,
    title: "Kompyuterda ilova tashkil etish",
    details: [
      "Ilova haqida tushuncha",
      "Ilovalarni yaratish va tahrir qilish",
      "Ilovalarni saqlash va o'rnatish",
    ],
  },
  {
    id: 14,
    title: "Kompyuterda surat va video tahrir qilish",
    details: [
      "Surat va video tahrir qilish dasturlari",
      "Surat va video formatlarini o'zgartirish",
    ],
  },
  {
    id: 15,
    title: "Tarmoq xavfsizligi va ma'lumotlar himoyasi",
    details: [
      "Tarmoq xavfsizligi haqida tushuncha",
      "Tarmoq xavfsizligini ta'minlash usullari",
    ],
  },
  {
    id: 16,
    title: "Kompyuter va muhitimiz",
    details: [
      "Kompüterlar va okuvchi birlashmalari",
      "Kompüterlarning muhitga ta'siri",
    ],
  },
  {
    id: 17,
    title: "Texnologiyalar va insoniy hayot",
    details: [
      "Texnologiyalar va insoniy hayotdagi o'rni",
      "Yaxshi texnologiya ishlatishning afzalliklari va zararlari",
    ],
  },
  {
    id: 18,
    title: "Kompyuter va internet etiketi",
    details: [
      "Internet etiketi va adabiyoti",
      "Tarmoqda etik adabiyot bilan muloqot qilish",
    ],
  },
  {
    id: 19,
    title: "Kompyuterda xato topish va tuzatish",
    details: [
      "Xatoliklarni topish va tuzatish usullari",
      "Operatsion tizim va dasturlarni tiklash",
    ],
  },
  {
    id: 20,
    title: "Kompüterda muammo yechish",
    details: [
      "Muammo yechish tartibi va usullari",
      "Muammo yechishda internetdan foydalanish",
    ],
  },
  {
    id: 21,
    title: "Kompüter sozlari va yo'nalishlar",
    details: [
      "Kompüter so'zlashuvi va so'zlarning tarjimasi",
      "Kompyuter sohasidagi yo'nalishlar va kasblar",
    ],
  },
  {
    id: 22,
    title: "Kompüter va 3D-Printerlar",
    details: [
      "3D printerlar va ularning ish prinsiplari",
      "3D model tayyorlash va chiqarish",
    ],
  },
  {
    id: 23,
    title: "Kompüter va Internetning o'zbek tilida tarjimasi",
    details: [
      "Kompüter va internetga oid so'zlar va ularning o'zbek tilida tarjimasi",
    ],
  },
  {
    id: 24,
    title: "Kompüter va internetning tarixi muhitida o'zbek tilida yangiliklar",
    details: [
      "Kompyuter va internetning tarixi muhitida yuzaga kelgan eng so'nggi yangiliklar",
    ],
  },
  {
    id: 25,
    title: "Teknologik rivojlanish va o'zbekiston",
    details: [
      "O'zbekistonning texnologik sohasidagi o'rni va rivojlanishi",
      "Texnologik soha bo'yicha O'zbekistonning kelajagi",
    ],
  },
  {
    id: 26,
    title: "Savollar va javoblar sessiyasi",
    details: [
      "O'quvchilar tomonidan savollar o'tkazib, ularning javoblarini tahlil qilish va yechish",
    ],
  },
];
