<template>
  <div class="main-container">
    <TheHeaderTwo />
    <OffCanvasMobileMenu />
    <!-- Project Banner Section -->
    <div
      class="project-details-banner bg-cover"
      :style="{ backgroundImage: `url('/images/project/large-project.jpg')` }"
    ></div>

    <!-- Project Details Section -->
    <div class="section-padding-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-12">
            <!-- Project Details Content Start -->
            <div
              class="project-details-content"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h1 class="project-details-title">Culture House</h1>
              <p>
                The Mercedes-Benz Museum is the only museum in the world that
                can document in a single continuous timeline the more than 130
                years of auto industry history from its very beginnings to the
                present day. On nine levels and covering a floor space of 16,500
                square metres, the museum presents 160 vehicles and over 1,500
                exhibits. As a place of innovation, it also demonstrates that
                history can point the way ahead
              </p>

              <div class="info-boxed">
                <ul>
                  <li><span>location</span>Address goes here</li>
                  <li><span>client</span>Country Government</li>
                  <li><span>date</span>2021</li>
                  <li><span>type</span>Architecture, Interior</li>
                  <li><span>Service</span>Design, Construction, Consulting</li>
                </ul>
              </div>

              <h2 class="project-details-title section-padding-top">Concept</h2>

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
            <!-- Project Details Content End -->
          </div>
          <div class="col-12" data-aos="fade-up" data-aos-delay="400">
            <!-- Project Details Slider Start -->
            <div class="project-details-carousel">
              <swiper
                :speed="1000"
                :loop="true"
                :navigation="swiperOptions.navigation"
                :pagination="swiperOptions.pagination"
                :effect="'fade'"
              >
                <swiper-slide class="image">
                  <img
                    class="fit-image"
                    src="/images/project/slide-1.jpg"
                    alt="Project Image"
                  />
                </swiper-slide>
                <swiper-slide class="image">
                  <img
                    class="fit-image"
                    src="/images/project/slide-2.jpg"
                    alt="Project Image"
                  />
                </swiper-slide>
              </swiper>

              <!-- Swiper Pagination Start -->
              <div class="swiper-pagination"></div>

              <!-- Swiper Navigation Start -->
              <div class="swiper-nav-center swiper-button-prev">
                <i class="icofont-thin-left"></i>
              </div>
              <div class="swiper-nav-center swiper-button-next">
                <i class="icofont-thin-right"></i>
              </div>
              <!-- Swiper Navigation End -->
            </div>
            <!-- Project Details Slider End -->
          </div>
        </div>
        <!-- Project Right Content Box Start -->
        <div class="row project-right-content-box section-padding mtn-30">
          <div
            class="col-lg-8 mt-30 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <!-- Project Box Image Start -->
            <div class="project-box-image">
              <img
                class="fit-image"
                src="/images/project/medium-1.jpg"
                alt="Project Image"
              />
            </div>
            <!-- Project Box Image End -->
          </div>
          <div
            class="col-lg-4 mt-30 order-1 order-lg-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <!-- Project Box Inner Start -->
            <div class="project-box-inner">
              <div class="section-title">
                <h2 class="text-capitalize title">Challenge</h2>
              </div>
              <p>
                One of the most successful designer solutions was the use of
                unifying concept for the meeting rooms through a common design
                theme: each of the meeting rooms is named after one of the
                planets of our solar system and is decorated with the relevant
                cosmic images.
              </p>
            </div>
            <!-- Project Box Inner End -->
          </div>
        </div>
        <!-- Project Right Content Box End -->

        <!-- Project Left Content Box Start -->
        <div class="row project-left-content-box mtn-30">
          <div class="col-lg-5 mt-30" data-aos="fade-up" data-aos-delay="300">
            <!-- Project Box Inner Start -->
            <div class="project-box-inner">
              <div class="section-title">
                <h2 class="text-capitalize title">Solution</h2>
              </div>
              <p>
                A modern engineering system with a high degree of automation was
                installed in the building. In order to guarantee the
                uninterrupted functioning of all systems and maintain a
                comfortable climate in the office, an additional high-power
                cooler was installed on the roof of the business center.
              </p>
            </div>
            <!-- Project Box Inner End -->
          </div>
          <div class="col-lg-7 mt-30" data-aos="fade-up" data-aos-delay="500">
            <!-- Project Box Image Start -->
            <div class="project-box-image">
              <img
                class="fit-image"
                src="/images/project/medium-2.jpg"
                alt="Project Image"
              />
            </div>
            <!-- Project Box Image End -->
          </div>
        </div>
        <!-- Project Left Content Box End -->

        <!-- Blockqute area Start -->
        <div class="row section-padding">
          <div
            class="col-lg-8 offset-lg-2 col-md-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <blockquote class="blockquote">
              <p>
                “ The secret to the successful implementation of this project is
                simple. We just brought together the best people and understood
                that we were facing a task that is unique in its scale and
                significance. ”
              </p>
              <footer class="blockquote-footer">
                <h2 class="title-name">John Doe</h2>
                <h4 class="title-desig">Project Director</h4>
              </footer>
            </blockquote>
          </div>
        </div>
        <!-- Blockqute area End -->
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper/core";
SwiperCore.use([Navigation, Pagination, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".project-details-carousel .swiper-pagination",
          type: "bullets",
          clickable: "true",
        },
      },
    };
  },
};
</script>
