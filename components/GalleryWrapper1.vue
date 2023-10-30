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
              <nuxt-link :to="project.project" class="image">
                <img height="350" :src="project.imgSrc" :alt="project.title" />
              </nuxt-link>
            </div>
            <div class="inner-content">
              <div class="sub-title">{{ project.category }}</div>
              <h4 class="title">
                <nuxt-link to="/project-details">{{ project.title }}</nuxt-link>
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
          imgSrc: "/images/seeds/wheatbran.jpeg",
          title: "Wheat Bran",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
          project: "/",
        },
        {
          imgSrc: "/images/seeds/wheatflakes.jpeg",
          title: "Wheat Flakes",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
          project: "/",
        },
        {
          imgSrc: "/images/seeds/sunseedmeal.jpeg",
          title: "Sunflower Seed Meal",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
          project: "/",
        },
        {
          imgSrc: "/images/seeds/brokencorn.jpeg",
          title: "Broken Corn",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
          project: "/",
        },
        {
          imgSrc: "/images/seeds/corngluten.jpeg",
          title: " ",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
          project: "/",
        },
        {
          imgSrc: "/images/seeds/ddgs.jpeg",
          title: "DDGS",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
          project: "/",
        },
        {
          imgSrc: "/images/seeds/barley.jpeg",
          title: "Barley",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
          project: "/",
        },
        {
          imgSrc: "/images/seeds/brokenbarley.jpeg",
          title: "Broken Barley",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
          project: "/",
        },
        {
          imgSrc: "/images/seeds/brokenpea.jpeg",
          title: "Broken Pea",
          date: "Jan 28, 2021",
          category: "FEED PRODUCT",
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
