<template>
  <div class="section-padding-bottom bg-light funfact-wrapper">
    <div class="container">
      <div class="funfact-inner">
        <div class="row mtn-30">
          <div
            class="col-sm-4 col-6 mt-30"
            data-aos="fade-up"
            v-for="(counter, index) in counterUpContent"
            :key="index"
          >
            <div class="single-funfact">
              <span>{{ counter.endVal }}</span>
              <h6 class="title" v-html="counter.title"></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counterUpContent: [
        {
          endVal: 8000,
          title: this.$t("counter_title_1"),
        },
        {
          endVal: 1250,
          title: this.$t("counter_title_2"),
        },
        {
          endVal: 904,
          title: this.$t("counter_title_3"),
        },
      ],
    };
  },
};
</script>
