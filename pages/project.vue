<template>
  <div class="main-container">
    <TheHeaderTwo />
    <OffCanvasMobileMenu />
    <Breadcrumb
      :activeText="$t('project_all')"
      :pageTitle="$t('project_product')"
    />
    <GalleryTwo />
    <GalleryWrapper />
    <Footer />
  </div>
</template>

<script>
import GalleryTwo from "@/components/GalleryTwo.vue";
</script>
