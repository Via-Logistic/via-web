<template>
  <div class="project-masonry-section py-10">
    <div class="container">
      <div
        class="row row-cols-lg-1 row-cols-md-1 row-cols-1 box mesonry-list mtn-30"
      >
        <div class="">
          <div
            class="col mt-30"
            v-for="(project, index) in projectData"
            :key="index"
          >
            <div
              v-if="index % 2 == 0"
              class="single-project-wrap grid grid-cols-2"
            >
              <!-- Sol taraftaki resim -->
              <div class="project-thumb position-relative">
                <nuxt-link :to="project.project" class="image p-5">
                  <img
                    height="400"
                    :src="project.imgSrc"
                    :alt="project.title"
                  />
                </nuxt-link>
              </div>
              <!-- Sağ taraftaki içerik -->
              <div class="inner-content p-5 items-center my-auto">
                <h4 class="title">
                  <nuxt-link :to="project.project">{{
                    project.title
                  }}</nuxt-link>
                </h4>
                <div>{{ project.desc }}</div>
              </div>
            </div>
            <div v-else class="single-project-wrap grid grid-cols-2">
              <!-- Sağ taraftaki içerik -->
              <div class="inner-content p-5 items-center my-auto">
                <div class="sub-title">{{ project.category }}</div>
                <h4 class="title">
                  <nuxt-link :to="project.project">{{
                    project.title
                  }}</nuxt-link>
                </h4>
                <div>{{ project.desc }}</div>
              </div>
              <!-- Sol taraftaki resim -->
              <div class="project-thumb position-relative">
                <nuxt-link :to="project.project" class="image">
                  <img
                    height="400"
                    :src="project.imgSrc"
                    :alt="project.title"
                  />
                </nuxt-link>
              </div>
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
      currentItem: 4,
      projects: [
        {
          imgSrc: "/images/gallery/1.png",
          title: this.$t("product_feed_product"),
          desc: this.$t("project_feed_subtitle"),
          date: "Jan 28, 2021",
          project: "/project-details-1",
        },
        {
          imgSrc: "/images/gallery/2.png",
          title: this.$t("product_oilseeds"),
          desc: this.$t("project_oil_subtitle"),
          date: "Mar 21, 2021",
          project: "/project-details-2",
        },
        {
          imgSrc: "/images/gallery/3.png",
          title: this.$t("product_pulses"),
          desc: this.$t("project_pulses_subtitle"),
          date: "Apr 26, 2021",
          project: "/project-details-3",
        },
        {
          imgSrc: "/images/gallery/4.png",
          title: this.$t("product_exotic"),
          desc: this.$t("project_exotic_subtitle"),
          date: "Nov 28, 2021",
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
