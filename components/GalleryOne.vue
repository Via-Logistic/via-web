<template>
  <div class="section bg-light">
    <div class="row container mx-auto">
      <div
        class="row align-items-center mb-5 pt-5"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <!-- Section Title Start -->
        <div class="col-xl-3 col-md-12">
          <div class="section-title mb-0">
            <h2 class="title">OUR PRODUCT</h2>
          </div>
        </div>
        <!-- Section Title End -->

        <!-- Tab Start -->
        <div class="col-xl-7 col-md-8">
          <!-- Section Title & Product Tab Start -->
          <div class="section-tabs-header">
            <!-- Tabs Header Start -->
            <ul class="tabs-header-nav nav">
              <li class="nav-item">
                <a
                  class=""
                  href="#architecture"
                  @click.prevent="setActive('architecture')"
                  :class="{ active: isActive('architecture') }"
                ></a>
              </li>
            </ul>
            <!-- Tabs Header End -->
          </div>
          <!-- Section Title & Product Tab End -->
        </div>
        <!-- Tab End -->

        <!-- All Project Button Start -->
        <div class="col-xl-2 col-md-4">
          <div class="all-project-btn">
            <nuxt-link to="/project"
              >See All Projects <i class="arrow icofont-rounded-right"></i
            ></nuxt-link>
          </div>
        </div>
        <!-- All Project Button End -->
      </div>
    </div>
    <div class="container-auto">
      <!-- Tab Content Start -->
      <div
        class="tab-content swiper-arrow-hover"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div
          class="tab-pane fade"
          :class="{ 'active show': isActive('architecture') }"
          id="architecture"
        >
          <swiper
            :speed="1000"
            :loop="true"
            :navigation="swiperOptions.navigation"
            :breakpoints="swiperOptions.breakpoints"
            :autoplay="{
              delay: 500,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide>
              <div class="single-project-slide">
                <div class="thumb">
                  <nuxt-link to="/project-details-1" class="image">
                    <img
                      class="fit-image"
                      src="/images/gallery/11.png"
                      alt="Product"
                    />
                  </nuxt-link>
                </div>
                <div class="content">
                  <h3 class="title">
                    <nuxt-link to="/project-details-1">FEED PRODUCT</nuxt-link>
                  </h3>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="single-project-slide">
                <div class="thumb">
                  <nuxt-link to="/project-details-2" class="image">
                    <img
                      class="fit-image"
                      src="/images/gallery/22.png"
                      alt="Product"
                    />
                  </nuxt-link>
                </div>
                <div class="content">
                  <h3 class="title">
                    <nuxt-link to="/project-details-2">OILSEEDS</nuxt-link>
                  </h3>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="single-project-slide">
                <div class="thumb">
                  <nuxt-link to="/project-details-3" class="image">
                    <img
                      class="fit-image"
                      src="/images/gallery/33.png"
                      alt="Product"
                    />
                  </nuxt-link>
                </div>
                <div class="content">
                  <h3 class="title">
                    <nuxt-link to="/project-details-3">PULSES</nuxt-link>
                  </h3>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="single-project-slide">
                <div class="thumb">
                  <nuxt-link to="/project-details-4" class="image">
                    <img
                      class="fit-image ]"
                      src="/images/gallery/exotic-grains.jpg"
                      alt="Product"
                    />
                  </nuxt-link>
                </div>
                <div class="content">
                  <h3 class="title">
                    <nuxt-link to="/project-details-4">EXOTIC</nuxt-link>
                  </h3>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- Tab Content End -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
SwiperCore.use([Navigation, Autoplay]);

import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      activeItem: "architecture",

      swiperOptions: {
        navigation: {
          nextEl: ".tab-carousel-next",
          prevEl: ".tab-carousel-prev",
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        },
      },
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>
