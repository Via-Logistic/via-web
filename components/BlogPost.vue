<template>
  <div class="news-block">
    <div class="image">
      <nuxt-link to="/blog-details">
        <img :src="blog.imgSrc" :alt="blog.title" class="fit-image" />
      </nuxt-link>
    </div>
    <div class="lower-content">
      <!-- <ul class="info-list">
                <li>{{ blog.date }}</li>
                <li>{{ blog.category }}</li>
            </ul> -->

      <h5>
        <nuxt-link to="/blog-details">{{ blog.title }}</nuxt-link>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
};
</script>
