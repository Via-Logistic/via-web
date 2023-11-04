<template>
  <nav class="main-menu" :class="addClassName">
    <ul>
      <li class="has-children">
        <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
      </li>
      <li class="has-children">
        <nuxt-link to="/project"
          >{{ $t("products") }} <i class="icofont-simple-down"></i
        ></nuxt-link>
        <ul class="submenu" style="z-index: 2">
          <li>
            <nuxt-link to="/project-details-1"
              >{{ $t("feed_products") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project-details-2">{{ $t("oilseeds") }} </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project-details-3">{{ $t("pulses") }} </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project-details-4">{{ $t("exotic") }} </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="has-children">
        <nuxt-link to="/about">{{ $t("about") }}</nuxt-link>
      </li>
      <li class="has-children">
        <nuxt-link to="/blog">{{ $t("blog") }}</nuxt-link>
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
        <nuxt-link to="/contact">{{ $t("contact") }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["addClassName"],
};
</script>
