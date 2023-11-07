<template>
  <div class="section-padding-top bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Section Title Start -->
          <div class="section-title" data-aos="fade-up" data-aos-delay="300">
            <h2 class="title">{{ $t("about_why_choose_us") }}</h2>
          </div>
          <!-- Section Title End -->
        </div>

        <div class="col-12">
          <div class="service-inner-container">
            <div
              class="service-block"
              data-aos="fade-up"
              data-aos-delay="300"
              v-for="(service, index) in services"
              :key="index"
            >
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
          title: this.$t("about_services_title1"),
          desc: this.$t("about_services_desc1"),
          icon: "icofont-labour",
        },
        {
          title: this.$t("about_services_title2"),
          desc: this.$t("about_services_desc2"),
          icon: "icofont-ruler-compass-alt",
        },
        {
          title: this.$t("about_services_title3"),
          desc: this.$t("about_services_desc3"),
          icon: "icofont-credit-card",
        },
        {
          title: this.$t("about_services_title4"),
          desc: this.$t("about_services_desc4"),
          icon: "icofont-live-support",
        },
      ],
    };
  },
};
</script>
