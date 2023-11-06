<template>
  <div class="section-padding-top overflow-hidden lg:h-[700px] lg:mt-[5%]">
    <div class="container">
      <div class="row mb-n10">
        <div
          class="col-lg-6 mb-10 col-md-12 order-2 order-lg-1"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <div class="history-image">
            <img
              class="fit-image w-full h-full"
              src="/images/history/history-1.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="col-lg-6 mb-10 col-md-12 align-self-center order-1 order-lg-2"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div class="history-wrapper">
            <h1 class="title" v-html="$t('about_title')"></h1>
            <div class="history-content">
              <h4 class="subtitle" v-html="$t('about_subtitle')"></h4>
              <!-- <p>Turkey, Azerbaijan, Iran, OEA, China</p> -->
              <p v-html="$t('about_text')"></p>
            </div>
            <div class="signature">
              <!-- <img src="/images/icon/sign.png" alt="Sign" /> -->
              <h4 class="title"></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
