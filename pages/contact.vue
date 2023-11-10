<template>
  <div class="main-container">
    <TheHeaderTwo />
    <OffCanvasMobileMenu />

    <!-- Contact Map Start -->
    <div class="section">
      <!--Google Map Area Start-->
      <div class="google-map-area w-100">
        <iframe
          class="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.7306307968815!2d24.700708776029103!3d42.17744314661939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acce0623295acb%3A0x8a4bfb89514a491c!2sVIA%20LOGISTICS%20LTD!5e0!3m2!1str!2str!4v1698680017652!5m2!1str!2str"
        ></iframe>
      </div>
      <!--Google Map Area Start-->
    </div>
    <!-- Contact Map End -->

    <!-- Contact Page Section Start -->
    <div class="contact-content-wrapper">
      <div class="container">
        <!-- Contact Info Boxed Start -->
        <div class="contact-info-boxed bg-light">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="inner-content">
                <h1 class="title">Rostov-on-Don <span>Rostov Region</span></h1>
                <span class="text">St. Privokzalnaya 4/1, <br /> </span>
                <span class=""
                  >Email:
                  <a href="mailto:info@vialogistic.ru"
                    >info@vialogistic.ru</a
                  ></span
                >
                <img
                  class="pt-4"
                  height=""
                  width="75"
                  src="/images/logo/vialogofill.png"
                  alt="Header Logo"
                  style=""
                />
                <span class="email_2"></span>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <div class="inner-info">
                <span class="call"
                  >Call directly:<br /><a href="tel:0123456789"
                    >0123456789</a
                  ></span
                >
                <ul class="location-list">
                  <!-- <li><span>Brand Offices:</span>Office Location | Office Location | Office Location | Office Location <br> Office Location | Office Location</li> -->
                  <!-- <li><span>Work Hours:</span>Mon - Sat: 8.00 - 17.00, Sunday closed</li> -->
                  <li>
                    Via'nın genel merkezi, Rostov-on-Don, Rostov Bölgesi, St.
                    Privokzalnaya 4/1 adresinde bulunmaktadır. Türkiye,
                    Azerbaycan, İran, OEA ve Çin'deki müşterilerimiz ve
                    tedarikçilerimiz için özel iletişim kanalları oluşturmuş
                    bulunmaktayız. <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Contact Info Boxed End -->

        <!-- Form Boxed Start -->
        <div class="form-boxed bg-light mt-50">
          <div class="section-title text-center">
            <h2 class="title">Have A Question? Contact Us</h2>
          </div>

          <div class="boxed-inner">
            <!-- Contact Form -->
            <div class="contact-form">
              <form>
                <div class="row">
                  <div class="col-lg-4 col-md-6 form-group">
                    <input
                      class="input-item"
                      type="text"
                      name="name"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div class="col-lg-4 col-md-6 form-group">
                    <input
                      class="input-item"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>

                  <div class="col-lg-4 col-md-12 form-group">
                    <input
                      class="input-item"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>

                  <div class="col-lg-12 form-group mb-10">
                    <div class="input-item">
                      <textarea
                        class="textarea-item"
                        name="message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12 text-center form-group">
                    <button
                      class="btn btn-primary btn-hover-dark"
                      type="submit"
                      name="submit"
                      id="submit"
                    >
                      <span class="txt">Send Message</span>
                    </button>
                  </div>
                  <p class="col-8 form-message mb-0"></p>
                </div>
              </form>
            </div>
            <!--End Contact Form -->
          </div>
        </div>
        <!-- Form Boxed End -->
      </div>
    </div>
    <!-- Contact Page Section End -->

    <Footer />
  </div>
</template>
