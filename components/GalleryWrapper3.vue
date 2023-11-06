<template>
  <div class="project-masonry-section">
    <div class="container">
      <div
        class="row row-cols-lg-2 row-cols-md-2 row-cols-1 box mesonry-list mtn-30"
      >
        <div
          class="col mt-30"
          :class="project.category"
          v-for="(project, index) in projectData"
          :key="index"
        >
          <div class="single-project-wrap">
            <div class="project-thumb position-relative">
              <img height="350" :src="project.imgSrc" :alt="project.title" />
            </div>
            <div class="inner-content">
              <div class="sub-title">{{ project.category }}</div>
              <h4 class="title">
                <p v-html="project.title"></p>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="row section-padding-bottom">
        <div class="col-12">
          <div class="load-more text-center mt-30">
            <a
              href="javascript:void(0)"
              @click="loadMore"
              v-if="currentItem < projects.length"
              >...Load more...</a
            >
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
      currentItem: 6,
      projects: [
        {
          imgSrc: "/images/seeds/greenlentils.jpeg",
          title: this.$t("project_pulses_green_lentils"),
          date: "Apr 26, 2021",
          category: this.$t("product_pulses"),
          project: "/project-details-3",
        },
        {
          imgSrc: "/images/seeds/yellowlentils.jpeg",
          title: this.$t("project_pulses_yellow_peas"),
          date: "Apr 26, 2021",
          category: this.$t("product_pulses"),
          project: "/project-details-3",
        },
        {
          imgSrc: "/images/seeds/redlentils.jpeg",
          title: this.$t("project_pulses_red_lentils"),
          date: "Apr 26, 2021",
          category: this.$t("product_pulses"),
          project: "/project-details-3",
        },
        {
          imgSrc: "/images/seeds/chickpeas.jpeg",
          title: this.$t("project_pulses_chickpeas"),
          date: "Apr 26, 2021",
          category: this.$t("product_pulses"),
          project: "/project-details-3",
        },
      ],
    };
  },
  computed: {
    projectData() {
      return this.projects.slice(0, this.currentItem);
    },
  },
  methods: {
    loadMore() {
      this.currentItem += 3;
    },
  },
};
</script>
