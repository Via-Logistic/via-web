<template>
  <div class="main-container">
    <TheHeaderTwo />
    <OffCanvasMobileMenu />
    <HeroOne />
    <AboutOne />
    <!-- <Features /> -->
    <!-- <BlogStyleOne /> -->
    <GalleryOne />
    <CounterUp />
    <!-- <Testimonial />
    <BrandLogoCarousel /> -->
    <VideoCallToAction />
    <!-- Form Boxed Start -->
    <div
      class="contact-info-boxed bg-light m-5"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="inner-content">
            <h1 class="title">Rostov-on-Don, <span>Rostov Region</span></h1>
            <span class="text">St. Privokzalnaya 4/1 <br /> </span>
            <span class="email"
              >Email:
              <a href="mailto:info@vialogistic.ru">info@vialogistic.ru</a></span
            >
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="inner-info">
            <span class="call"
              >Call directly:<br /><a href="tel:0123456789">0123456789</a></span
            >
            <ul class="location-list">
              <li>
                Via'nın genel merkezi, Rostov-on-Don, Rostov Bölgesi, St.
                Privokzalnaya 4/1 adresinde bulunmaktadır. Türkiye, Azerbaycan,
                İran, OEA ve Çin'deki müşterilerimiz ve tedarikçilerimiz için
                özel iletişim kanalları oluşturmuş bulunmaktayız. <br />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-12 form-group my-3">
        <button
          class="btn btn-primary btn-hover-dark"
          type="submit"
          name="submit"
          id="submit"
        >
          <nuxt-link to="/about">
            <span class="txt">Contact Us</span>
          </nuxt-link>
        </button>
      </div>
    </div>

    <Footer />
  </div>
</template>
