<template>
  <div class="main-container">
    <TheHeaderTwo />
    <OffCanvasMobileMenu />
    <Breadcrumb
      :activeText="$t('product_feed_product')"
      :pageTitle="$t('product_feed_product')"
    />
    <GalleryWrapper1 />
    <Footer />
  </div>
</template>
