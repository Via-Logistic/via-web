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
                <img height="400" :src="project.imgSrc" :alt="project.title" />
              </nuxt-link>
            </div>
            <div class="inner-content">
              <div class="sub-title">{{ project.category }}</div>
              <h4 class="title">
                <nuxt-link :to="project.project">{{ project.title }}</nuxt-link>
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
          imgSrc: "/images/gallery/11.png",
          title: "FEED PRODUCT",
          date: "Jan 28, 2021",
          category: "news",
          project: "/project-details-1",
        },
        {
          imgSrc: "/images/gallery/22.png",
          title: "OILSEEDS",
          date: "Mar 21, 2021",
          category: "inspiration",
          project: "/project-details-2",
        },
        {
          imgSrc: "/images/gallery/33.png",
          title: "PULSES",
          date: "Apr 26, 2021",
          category: "lifestyle",
          project: "/project-details-3",
        },
        {
          imgSrc: "/images/gallery/44.png",
          title: "EXOTIC",
          date: "Nov 28, 2021",
          category: "others",
          project: "/project-details-4",
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
