import { c as _imports_0$1, _ as __nuxt_component_0$1, d as __nuxt_component_1 } from "./Footer-a4531141.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$3 = {
  components: {
    Navigation: () => import("./Footer-a4531141.js").then(function(n) {
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_Navigation = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["header header-transparent section-fluid", { "is-sticky": $data.isSticky }]
  }, _attrs))}><div class="header-wrapper"><div class="header-sticky"><div class="container-fluid"><div class="row align-items-center"><div class="col-lg-2 col-md-3 col-6"><div class="header-logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="fit-image" height="75px"${ssrRenderAttr("src", _imports_0$1)} alt="Header Logo" style="${ssrRenderStyle({ "margin-left": "73px" })}"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "fit-image",
            height: "75px",
            src: _imports_0$1,
            alt: "Header Logo",
            style: { "margin-left": "73px" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-8 col-md-7 d-none d-md-block"><div class="main-menu-language-wrapper">`);
  _push(ssrRenderComponent(_component_Navigation, { addClassName: "main-menu-dark" }, null, _parent));
  _push(`<div class="language language-dark d-md-none d-lg-flex"><a href="javascript:void(0)">Eng</a><a href="javascript:void(0)"><span>Fra</span></a></div></div></div><div class="col-lg-2 col-md-2 col-6"><div class="mobile-menu-toggle mobile-menu-toggle--black"><span>menu</span><button class="toggle"><i class="icon-top"></i><i class="icon-middle"></i><i class="icon-bottom"></i></button></div></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + __publicAssetsURL("images/history/history-1.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-top overflow-hidden" }, _attrs))}><div class="container"><div class="row mb-n10"><div class="col-lg-6 mb-10 col-md-12 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="500"><div class="history-image"><img class="fit-image"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-6 mb-10 col-md-12 align-self-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="500"><div class="history-wrapper"><h1 class="title">ABOUT US</h1><div class="history-content"><h4 class="subtitle">WIDE RANGE OF COUNTRIES FOR EXPORT</h4><p>Turkey, Azerbaijan, Iran, OEA, China</p><p> As well as the desire and ability to expand the geography of deliveries. As well as the desire and ability to expand the geography of deliveries.As well as the desire and ability to expand the geography of deliveries.As well as the desire and ability to expand the geography of deliveries.As well as the desire and ability to expand the geography of deliveries.As well as the desire and ability to expand the geography of deliveries.As well as the desire and ability to expand the geography of deliveries.v </p></div><div class="signature"><h4 class="title">Via Logistic</h4></div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      counterUpContent: [
        {
          endVal: 8e3,
          title: "Partner <br> worldwide"
        },
        {
          endVal: 1250,
          title: "employees and <br> staffs"
        },
        {
          endVal: 904,
          title: "project completed <br> on 60 countries"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-bottom bg-light funfact-wrapper" }, _attrs))}><div class="container"><div class="funfact-inner"><div class="row mtn-30"><!--[-->`);
  ssrRenderList($data.counterUpContent, (counter, index) => {
    _push(`<div class="col-sm-4 col-6 mt-30" data-aos="fade-up"><div class="single-funfact"><span>${ssrInterpolate(counter.endVal)}</span><h6 class="title">${counter.title}</h6></div></div>`);
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CounterUp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "work-image-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="content"><h3 style="${ssrRenderStyle({ "color": "white" })}" data-aos="fade-up" data-aos-delay="300"> Our production facilities allow us to produce up to 8 thousand <br> tons of high-quality bran for foreign consumers. </h3></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoCallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const swiper_min = "";
export {
  __nuxt_component_0 as _,
  __nuxt_component_3 as a,
  __nuxt_component_5 as b,
  __nuxt_component_6 as c
};
//# sourceMappingURL=swiper.min-c3252abb.js.map
