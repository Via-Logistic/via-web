<template>
  <div class="popup-mobile-menu popup-mobile-visiable" id="offcanvas-menu">
    <div
      class="mobile-menu-overlay"
      @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"
    ></div>
    <div class="inner custom-scrollbar">
      <div class="mobile-header">
        <div class="logo">
          <nuxt-link to="/">
            <img
              src="/images/logo/vialogofill.png"
              width="90"
              alt="site logo"
            />
          </nuxt-link>
        </div>
        <button
          class="mobile-close-btn"
          @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"
        ></button>
      </div>
      <div class="menu-content">
        <MobileNavigation />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MobileNavigation: () => import("@/components/MobileNavigation"),
  },

  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>
