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
      currentItem: 7,
      projects: [
        {
          imgSrc: "/images/seeds/sunflowerseed.jpeg",
          title: this.$t("project_oil_sunflower"),
          date: "Jan 28, 2021",
          category: this.$t("product_oilseeds"),
          project: "/",
        },
        {
          imgSrc: "/images/seeds/rapeseed.jpeg",
          title: this.$t("project_oil_rape"),
          date: "Jan 28, 2021",
          category: this.$t("product_oilseeds"),
          project: "/",
        },
        {
          imgSrc: "/images/seeds/whitemustardseed.jpeg",
          title: this.$t("project_oil_white_mustard"),
          date: "Jan 28, 2021",
          category: this.$t("product_oilseeds"),
          project: "/",
        },
        {
          imgSrc: "/images/seeds/yellowmustardseed.jpeg",
          title: this.$t("project_oil_yellow_mustard"),
          date: "Jan 28, 2021",
          category: this.$t("product_oilseeds"),
          project: "/",
        },
        {
          imgSrc: "/images/seeds/flaxseed.jpeg",
          title: this.$t("project_oil_flax"),
          date: "Jan 28, 2021",
          category: this.$t("product_oilseeds"),
          project: "/",
        },
        {
          imgSrc: "/images/seeds/camelinaseed.jpeg",
          title: this.$t("project_oil_camelina"),
          date: "Jan 28, 2021",
          category: this.$t("product_oilseeds"),
          project: "/",
        },
        {
          imgSrc: "/images/seeds/safflowerseed.jpeg",
          title: this.$t("project_oil_safflower"),
          date: "Jan 28, 2021",
          category: this.$t("product_oilseeds"),
          project: "/",
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
