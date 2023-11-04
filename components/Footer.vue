<template>
  <footer class="section-padding-top bg-light overflow-hidden">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center">
        <!-- Footer Logo Start -->
        <div class="container lg:col-span-2 justify-center pb-16">
          <nuxt-link to="/" class="flex">
            <img
              src="/images/logo/vialogofill.png"
              alt="Logo Black"
              width="200"
              class="text-center items-center"
            />
          </nuxt-link>
          <div class="text-xl py-3 px-1 font-bold">Via Logistics</div>
          <div class="px-1">
            Bize herhangi bir soru, öneri veya geri bildirim göndermek için
            lütfen aşağıdaki iletişim formunu kullanın. Size en kısa sürede geri
            dönüş yapacağız.
          </div>
          <div class="mt-5">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Your contact email</label
            >
            <div class="flex w-full">
              <input
                id="email"
                type="email"
                placeholder="example@example.com"
                class="w-full rounded-l-md border text-sm border-gray-300 py-1 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                class="w-full bg-green-900 hover:bg-green-800 text-white font-bold px-1 text-sm rounded-r-md truncate"
              >
                Leave a Request
              </button>
            </div>
          </div>
        </div>
        <!-- Footer Logo End -->

        <div class="container lg:col-span-1">
          <div class="font-bold">Takip Edin</div>
          <ul class="flex gap-3 mt-2">
            <li>
              <a href="#" target="_blank" class="icofont-facebook"></a>
            </li>
            <li>
              <a href="#" target="_blank" class="icofont-twitter"></a>
            </li>
            <li>
              <a href="#" target="_blank" class="icofont-instagram"></a>
            </li>
            <li>
              <a href="#" target="_blank" class="icofont-linkedin"></a>
            </li>
            <li>
              <a href="#" target="_blank" class="icofont-pinterest"></a>
            </li>
          </ul>
          <div class="mt-5">
            <div class="font-bold">İletişimde Kal</div>
            <div href="tel:0123456789">Telefon Numarası : 0123456789</div>
            <div href="mailto:info@vialogistic.ru">
              Email : info@vialogistic.ru
            </div>

            <br />
          </div>
        </div>

        <!-- Contact Info Start -->
        <div class="container lg:col-span-1">
          <div class="font-bold">Müşteri Temsilcisi</div>
          <div class="text-sm">@musteri_temsilcisi</div>
          <div class="mt-5">
            <div class="font-bold">Adres</div>
            Adres: St. Privokzalnaya 4/1, Rostov Region, Rostov-on-Don,
            344034<br />

            <br />
          </div>
        </div>
      </div>
      <div class="contact-info">
        <div class="copyright">
          © 2023 <span>website</span> Made with
          <i class="icofont-heart-alt text-danger"></i> by
          <a href="#">Checkup Codes</a>
        </div>
      </div>
    </div>
  </footer>
</template>
