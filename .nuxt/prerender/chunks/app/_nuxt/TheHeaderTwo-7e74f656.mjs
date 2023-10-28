import { e as _imports_0, _ as __nuxt_component_0$1, d as __nuxt_component_1$2 } from './Footer-a4531141.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  components: {
    Navigation: () => import('./Footer-a4531141.mjs').then(function(n) {
      return n.N;
    })
  },
  data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
  methods: {
    // offcanvas mobile-menu
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["header section-fluid border-bottom header-black", { "is-sticky": $data.isSticky }]
  }, _attrs))}><div class="header-wrapper"><div class="header-sticky"><div class="container-fluid"><div class="row align-items-center"><div class="col-lg-2 col-md-3 col-6"><div class="header-logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="fit-image"${ssrRenderAttr("src", _imports_0)} alt="Header Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "fit-image",
            src: _imports_0,
            alt: "Header Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-8 col-md-7 d-none d-md-block"><div class="main-menu-language-wrapper">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`<div class="language d-md-none d-lg-flex"><a href="javascript:void(0)">Eng</a><a href="javascript:void(0)"><span>Fra</span></a></div></div></div><div class="col-lg-2 col-md-2 col-6"><div class="mobile-menu-toggle"><span>menu</span><button class="toggle"><i class="icon-top"></i><i class="icon-middle"></i><i class="icon-bottom"></i></button></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeaderTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=TheHeaderTwo-7e74f656.mjs.map
