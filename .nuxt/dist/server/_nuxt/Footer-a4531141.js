import { defineComponent, computed, ref, h, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { u as useRouter, n as navigateTo, _ as _export_sfc } from "../server.mjs";
import { hasProtocol } from "ufo";
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return /* @__PURE__ */ defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });
const _sfc_main$3 = {
  props: ["addClassName"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: ["main-menu", $props.addClassName]
  }, _attrs))}><ul><li class="has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/project" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project`);
      } else {
        return [
          createTextVNode("Project")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="submenu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/project" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project`);
      } else {
        return [
          createTextVNode("Project")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project Details`);
      } else {
        return [
          createTextVNode("Project Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="submenu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog Details`);
      } else {
        return [
          createTextVNode("Blog Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const Navigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$2
});
const _imports_0$1 = "" + __publicAssetsURL("images/logo/logo-white.png");
const MobileNavigation_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "MobileNavMenu",
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");
    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
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
      const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
      offcanvasMobileMenu == null ? void 0 : offcanvasMobileMenu.classList.remove("active");
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-navigation" }, _attrs))}><nav class="offcanvas-navigation" id="offcanvas-navigation"><ul><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/project" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project`);
      } else {
        return [
          createTextVNode("Project")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="sub-menu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/project" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project`);
      } else {
        return [
          createTextVNode("Project")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project Details`);
      } else {
        return [
          createTextVNode("Project Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="sub-menu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog Details`);
      } else {
        return [
          createTextVNode("Blog Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const MobileNavigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$1
});
const _sfc_main$1 = {
  components: {
    MobileNavigation: () => Promise.resolve().then(function() {
      return MobileNavigation;
    })
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
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_MobileNavigation = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "popup-mobile-menu popup-mobile-visiable",
    id: "offcanvas-menu"
  }, _attrs))}><div class="mobile-menu-overlay"></div><div class="inner custom-scrollbar"><div class="mobile-header"><div class="logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="site logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "site logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button class="mobile-close-btn"></button></div><div class="menu-content">`);
  _push(ssrRenderComponent(_component_MobileNavigation, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OffCanvasMobileMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __publicAssetsURL("images/logo/logo-black.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "section-padding-top bg-light overflow-hidden" }, _attrs))}><div class="container"><div class="row"><div class="col-12 text-center"><div class="footer-logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo Black"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Logo Black"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><ul class="footer-nav mb-n3"><li class="mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/project" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project`);
      } else {
        return [
          createTextVNode("Project")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blogs`);
      } else {
        return [
          createTextVNode("Blogs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><div class="contact-info">Your address goes here<br> <a href="tel:0123456789">0123456789</a> <br> <a href="mailto:demo@example.com">demo@example.com</a></div><ul class="footer-social-icons social-media-link justify-content-center"><li><a href="#" target="_blank" class="icofont-facebook"></a></li><li><a href="#" target="_blank" class="icofont-twitter"></a></li><li><a href="#" target="_blank" class="icofont-instagram"></a></li><li><a href="#" target="_blank" class="icofont-linkedin"></a></li><li><a href="#" target="_blank" class="icofont-pinterest"></a></li></ul><div class="copyright">© 2023 <span>GOTHIC</span> Made with <i class="icofont-heart-alt text-danger"></i> by <a href="#">HasThemes</a></div></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Navigation as N,
  __nuxt_component_0 as _,
  __nuxt_component_1 as a,
  __nuxt_component_4 as b,
  _imports_0$1 as c,
  __nuxt_component_1$2 as d,
  _imports_0 as e
};
//# sourceMappingURL=Footer-a4531141.js.map
