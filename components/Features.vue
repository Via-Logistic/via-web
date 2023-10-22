<template>
    <div class="section-padding-top bg-light">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section Title Start -->
                    <div class="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h2 class="title">Why Choose Us</h2>
                    </div>
                    <!-- Section Title End -->
                </div>

                <div class="col-12">
                    <div class="service-inner-container">
                        <div class="service-block" data-aos="fade-up" data-aos-delay="300" v-for="(service, index) in services" :key="index">
                            <div class="inner-box">
                                <h5 class="title">
                                    <nuxt-link to="/about">{{ service.title }}</nuxt-link>
                                </h5>
                                <p>{{ service.desc }}</p>
                                <div class="inner-box-bottom">
                                    <div class="icon">
                                        <i :class="service.icon"></i>
                                    </div>
                                    <nuxt-link to="/about" class="more">more details</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        title: "profressional and dedicate team",
                        desc: "Building architectures with modern technology.",
                        icon: "icofont-labour"
                    },
                    {
                        title: "unique design",
                        desc: "Bring the beautifully for your house. Just enjoy!",
                        icon: "icofont-ruler-compass-alt"
                    },
                    {
                        title: "affordable and flexiable",
                        desc: "Bring nature in your house. Health is important",
                        icon: "icofont-credit-card"
                    },
                    {
                        title: "24/7 support",
                        desc: "Consulting solutions and make plan to renovation",
                        icon: "icofont-live-support"
                    }
                ]
            }
        },
    };
</script>