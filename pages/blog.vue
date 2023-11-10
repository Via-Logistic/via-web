<template>
  <div class="main-container">
    <TheHeaderTwo />
    <OffCanvasMobileMenu />
    <Breadcrumb :activeText="$t('blog_all')" :pageTitle="$t('blog_our')" />
    <BlogWrapper />
    <Footer />
  </div>
</template>
