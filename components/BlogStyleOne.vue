<template>
  <div class="news-section">
    <div class="container-fluid p-0">
      <div class="container mt-5">
        <div class="section-title mb-5">
          <h2 class="title">OUR PRODUCT</h2>
        </div>
      </div>
      <div class="row container mx-auto">
        <div
          class="col-xl-3 col-md-6 p-1"
          data-aos="fade-up"
          data-aos-delay="100"
          v-for="(blog, index) in blogs"
          :key="index"
        >
          <BlogPost :blog="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    BlogPost: () => import("@/components/BlogPost"),
  },

  data() {
    return {
      blogs: [
        {
          imgSrc: "/images/gallery/1-1.jpg",
          title: "FEED PRODUCT",
          date: "Jan 28, 2021",
          category: "news",
        },
        {
          imgSrc: "/images/gallery/1-1.jpg",
          title: "OILSEEDS",
          date: "Mar 21, 2021",
          category: "inspiration",
        },
        {
          imgSrc: "/images/gallery/1-1.jpg",
          title: "PULSES",
          date: "Apr 26, 2021",
          category: "lifestyle",
        },
        {
          imgSrc: "/images/gallery/1-1.jpg",
          title: "EXOTIC",
          date: "Nov 28, 2021",
          category: "others",
        },
      ],
    };
  },
};
</script>
