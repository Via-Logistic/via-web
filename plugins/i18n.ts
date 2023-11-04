import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'tr',
    messages: {
      en: {
        hello: 'Hello, {name}!',
        menu: 'Menu',
        home: 'Home',
        products: 'Products',
        feed_products: 'Feed Products',
        oilseeds: 'Oilseeds',
        pulses: 'Pulses',
        exotic: 'Exotic',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact',
        heros_subtitle: 'Residence',
        heros_title: 'PRODUCT AND  <br> SERVICES',
        heros_desc: "Via Logistic LLC is engaged in the export of various types of agricultural crops and products of their processing for food, feed and technical purposes",
        heros_see_more: 'See More'
      },
      tr: {
        hello: 'Merhaba, {name}!',
        menu: 'Menü',
        home: 'Anasayfa',
        products: 'Ürünler',
        feed_products: 'Besleme Ürünleri',
        oilseeds: 'Yağlı Tohumlar',
        pulses: 'Baklagiller',
        exotic: 'Egzotik',
        about: 'Hakkımızda',
        blog: 'Blog',
        contact: 'İletişim',
        heros_subtitle: 'Rezidans',
        heros_title: 'ÜRÜN VE <br> HİZMETLER',
        heros_desc: "Via Logistic LLC, gıda, yem ve teknik amaçlar için çeşitli tarımsal ürünlerin ve işlenmiş ürünlerin ihracatıyla uğraşmaktadır.",
        heros_see_more: 'Daha Fazla'

      },
      ru: {
        hello: 'Привет, {name}!',
        menu: 'Меню',
        home: 'Главная',
        products: 'Продукты',
        feed_products: 'Кормовые Продукты',
        oilseeds: 'Масличные Семена',
        pulses: 'Бобовые',
        exotic: 'Экзотика',
        about: 'О Нас',
        blog: 'Блог',
        contact: 'Контакты',
        heros_subtitle: 'Резиденция',
        heros_title: 'ПРОДУКТЫ И <br> УСЛУГИ',
        heros_desc: "Via Logistic LLC занимается экспортом различных видов сельскохозяйственных культур и продуктов их переработки для пищевых, кормовых и технических целей.",
        heros_see_more: 'Узнать Больше'
      }
    }
  })

  vueApp.use(i18n)
})