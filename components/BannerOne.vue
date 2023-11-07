<template>
  <div
    class="about-banner-image"
    :style="{ backgroundImage: `url('/images/about/about.jpg')` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="content" data-aos="fade-up" data-aos-delay="300">
            <h1 class="title">{{ $t("about") }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
