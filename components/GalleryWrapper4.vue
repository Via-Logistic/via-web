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
                {{ project.title }}
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
          imgSrc: "/images/seeds/yellowmillet.jpeg",
          title: this.$t("project_exotic_yellow_millet"),
          date: "Jan 28, 2021",
          category: this.$t("product_exotic"),
          project: "/project-details-1",
        },
        {
          imgSrc: "/images/seeds/redmillet.jpeg",
          title: this.$t("project_exotic_red_millet"),
          date: "Mar 21, 2021",
          category: this.$t("product_exotic"),
          project: "/project-details-2",
        },
        {
          imgSrc: "/images/seeds/corienderseeds.png",
          title: this.$t("project_exotic_coriender"),
          date: "Apr 26, 2021",
          category: this.$t("product_exotic"),
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
