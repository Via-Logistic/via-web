<template>
  <div
    class="about-banner-image"
    :style="{ backgroundImage: `url('/images/about/about.jpg')` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="content">
            <h1
              class="text-white w-1/2 text-[100px] flex mx-auto items-center justify-center"
            >
              {{ $t("about") }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
