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
                        title: "Quality and Reliability",
                        desc: "We promise reliability and excellence to our customers.",
                        icon: "icofont-labour"
                    },
                    {
                        title: "Flexible and Customized Solutions",
                        desc: "We offer customized logistics solutions",
                        icon: "icofont-ruler-compass-alt"
                    },
                    {
                        title: "On Time and Safe Delivery",
                        desc: "We ensure that they receive their products on time",
                        icon: "icofont-credit-card"
                    },
                    {
                        title: "Customer Satisfaction Oriented Service",
                        desc: "We would be happy to be with you to solve your problems.",
                        icon: "icofont-live-support"
                    }
                ]
            }
        },
    };
</script>