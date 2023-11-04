<template>
  <nav class="main-menu" :class="addClassName">
    <ul>
      <li class="has-children">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="has-children">
        <nuxt-link to="/project"
          >Products <i class="icofont-simple-down"></i
        ></nuxt-link>
        <ul class="submenu" style="z-index: 2">
          <li>
            <nuxt-link to="/project-details-1">Feed Products</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project-details-2">Oilseeds</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project-details-3">Pulses</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project-details-4">Exotic</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="has-children">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="has-children">
        <nuxt-link to="/blog">Blog</nuxt-link>
        <!-- <ul class="submenu">
          <li>
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog-details">Blog Details</nuxt-link>
          </li>
        </ul> -->
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["addClassName"],
};
</script>
