<template>
    <div class="hero-slider">
        <swiper
            :speed="1000"
            :loop="true"
            :navigation="swiperOptions.navigation"
            :pagination="swiperOptions.pagination"
            :effect="'fade'"
        >
            <swiper-slide v-for="(hero, index) in heros" :key="index">
                <div class="hero-slide-item bg-cover" :style="{backgroundImage: `url('${hero.imgSrc}')`}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-slide-content">
                                    <h4 class="subtitle">{{ hero.subTitle }}</h4>
                                    <h2 class="title" v-html="hero.title"></h2>
                                    <p>{{ hero.desc }}</p>
                                    <nuxt-link :to="hero.btnUrl" class="btn-link">See Project</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>

        <!-- Swiper Pagination Start -->
        <div class="swiper-pagination d-md-none"></div>
        <!-- Swiper Pagination End -->

        <!-- Swiper Navigation Start -->
        <div class="home-slider-prev swiper-button-prev d-md-flex d-none">
            <i class="icofont-long-arrow-left"></i>
        </div>
        <div class="home-slider-next swiper-button-next d-md-flex d-none">
            <i class="icofont-long-arrow-right"></i>
        </div>
        <!-- Swiper Navigation End -->
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper/core'
    SwiperCore.use([Navigation, Pagination, EffectFade ])

    import "swiper/css"
    import 'swiper/css/effect-fade';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.hero-slider .home-slider-next',
                        prevEl: '.hero-slider .home-slider-prev'
                    },
                    pagination: {
                        el: '.hero-slider .swiper-pagination',
                        type: 'bullets',
                        clickable: 'true'
                    },
                },

                heros: [
                    {
                        id: 1,
                        subTitle: "Residence",
                        title: "Dustin Villa, <br> Spain",
                        desc: "Combine with ideas of owner, Dustin Mahone. Arquito’s team completed a super villa with many powerful features, help owner really enjoy his life beside the beach",
                        btnUrl: "/project",
                        imgSrc: "/images/slider/slide-1.jpg"
                    },
                    {
                        id: 2,
                        subTitle: "Residence",
                        title: "Dustin Villa, <br> Spain",
                        desc: "Combine with ideas of owner, Dustin Mahone. Arquito’s team completed a super villa with many powerful features, help owner really enjoy his life beside the beach",
                        btnUrl: "/project",
                        imgSrc: "/images/slider/slide-2.jpg"
                    }
                ]
            }
        },
    };
</script>