<template>
  <div class="mobile-navigation">
    <div class="header-logo">
      <nuxt-link to="/">
        <!-- <img
          class="fit-image"
          height="75"
          src="/images/logo/logo-white.png"
          alt="Header Logo"
          style="margin-left: 100px"
        /> -->
      </nuxt-link>
    </div>
    <nav class="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li class="menu-item-has-children">
          <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="/project">{{ $t("products") }}</nuxt-link>
          <ul class="sub-menu">
            <li>
              <nuxt-link to="/project-details-1">{{
                $t("feed_products")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/project-details-2">{{
                $t("oilseeds")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/project-details-3">{{ $t("pulses") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/project-details-4">{{ $t("exotic") }}</nuxt-link>
            </li>
          </ul>
        </li>

        <li>
          <nuxt-link to="/about">{{ $t("about") }}</nuxt-link>
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="/blog">{{ $t("blog") }}</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/contact">{{ $t("contact") }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MobileNavMenu",
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><span class='icofont-simple-down'></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector(
        "#offcanvas-mobile-menu"
      );
      offcanvasMobileMenu?.classList.remove("active");
    };
  },
};
</script>

<style lang="scss">
.offcanvas-navigation {
  ul {
    padding-left: 0;
    li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      &.menu-item-has-children {
        .sub-menu {
          height: 0;
          opacity: 0;
          transition: 0.3s;
          visibility: hidden;
        }
        &.active > {
          .sub-menu {
            height: 100%;
            opacity: 1;
            visibility: visible;
            padding-left: 0;
          }
        }
      }
      a {
        color: $dark;
        font-size: 16px;
        font-weight: 500;
        padding: 10px 0;
        display: block;
        &:hover {
          color: $primary;
        }
      }
    }
  }

  ul {
    &.sub-menu {
      margin-left: 15px;
      transition: 0.4s;
      li {
        list-style: none;
        border: none;
        a {
          color: $dark;
          font-weight: 400;
          &:hover {
            color: $primary;
          }
        }
        .sub-menu {
          li {
            a {
              font-size: 13px;
              padding: 5px 0;
            }
          }
        }
      }
    }
    li {
      &.menu-item-has-children {
        position: relative;
        display: block;
        a {
          display: inline-block;
        }

        &.active > {
          .menu-expand {
            background-color: rgba($dark, 0.2);
            i {
              &:before {
                transform: rotate(0);
              }
            }
          }
        }

        .menu-expand {
          top: 5px;
          right: 0;
          width: 35px;
          height: 35px;
          cursor: pointer;
          line-height: 35px;
          position: absolute;
          text-align: center;
          background-color: rgba($dark, 0.1);
          &:hover {
            background-color: rgba($dark, 0.2);
          }

          i {
            display: block;
            border-bottom: 1px solid $dark;
            position: relative;
            width: 10px;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            &:before {
              width: 100%;
              content: "";
              border-bottom: 1px solid $dark;
              display: block;
              position: absolute;
              top: 0;
              transform: rotate(90deg);
              transition: 0.4s;
            }
          }
        }
      }
    }
  }
}
</style>
