import { _ as __nuxt_component_0$2, a as __nuxt_component_3, b as __nuxt_component_5, c as __nuxt_component_6 } from "./swiper.min-c3252abb.js";
import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_4$1 } from "./Footer-a4531141.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper/core";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import __nuxt_component_0$1 from "./BlogPost-89bf859f.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "destr";
import "aos";
import "defu";
const effectFade_min = "";
SwiperCore.use([Navigation, Pagination, EffectFade]);
const _sfc_main$2 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".hero-slider .home-slider-next",
          prevEl: ".hero-slider .home-slider-prev"
        },
        pagination: {
          el: ".hero-slider .swiper-pagination",
          type: "bullets",
          clickable: "true"
        }
      },
      heros: [
        {
          id: 1,
          subTitle: "Residence",
          title: "PRODUCT AND  <br> SERVICES",
          desc: "Via Logistic LLC is engaged in the export of various types of agricultural crops and products of their processing for food, feed and technical purposes",
          btnUrl: "/project",
          imgSrc: "/images/slider/slide-1.jpeg"
        }
        // {
        //   id: 2,
        //   subTitle: "Residence",
        //   title: "PRODUCT AND  <br> SERVICES",
        //   desc: "Via Logistic LLC is engaged in the export of various types of agricultural crops and products of their processing for food, feed and technical purposes",
        //   btnUrl: "/project",
        //   imgSrc: "/images/slider/slide-2.jpeg",
        // },
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-slider" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    loop: true,
    navigation: $data.swiperOptions.navigation,
    pagination: $data.swiperOptions.pagination,
    effect: "fade"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.heros, (hero, index2) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index2 }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="hero-slide-item bg-cover" style="${ssrRenderStyle({ backgroundImage: `url('${hero.imgSrc}')` })}"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-12"${_scopeId2}><div class="hero-slide-content"${_scopeId2}><h4 class="subtitle"${_scopeId2}>${ssrInterpolate(hero.subTitle)}</h4><h2 class="title"${_scopeId2}>${hero.title}</h2><p${_scopeId2}>${ssrInterpolate(hero.desc)}</p>`);
                _push3(ssrRenderComponent(_component_nuxt_link, {
                  to: hero.btnUrl,
                  class: "btn-link"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`See Project`);
                    } else {
                      return [
                        createTextVNode("See Project")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "hero-slide-item bg-cover",
                    style: { backgroundImage: `url('${hero.imgSrc}')` }
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-12" }, [
                          createVNode("div", { class: "hero-slide-content" }, [
                            createVNode("h4", { class: "subtitle" }, toDisplayString(hero.subTitle), 1),
                            createVNode("h2", {
                              class: "title",
                              innerHTML: hero.title
                            }, null, 8, ["innerHTML"]),
                            createVNode("p", null, toDisplayString(hero.desc), 1),
                            createVNode(_component_nuxt_link, {
                              to: hero.btnUrl,
                              class: "btn-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("See Project")
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ])
                        ])
                      ])
                    ])
                  ], 4)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.heros, (hero, index2) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index2 }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "hero-slide-item bg-cover",
                  style: { backgroundImage: `url('${hero.imgSrc}')` }
                }, [
                  createVNode("div", { class: "container" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-12" }, [
                        createVNode("div", { class: "hero-slide-content" }, [
                          createVNode("h4", { class: "subtitle" }, toDisplayString(hero.subTitle), 1),
                          createVNode("h2", {
                            class: "title",
                            innerHTML: hero.title
                          }, null, 8, ["innerHTML"]),
                          createVNode("p", null, toDisplayString(hero.desc), 1),
                          createVNode(_component_nuxt_link, {
                            to: hero.btnUrl,
                            class: "btn-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("See Project")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ])
                    ])
                  ])
                ], 4)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-pagination d-md-none"></div><div class="home-slider-prev swiper-button-prev d-md-flex d-none"><i class="icofont-long-arrow-left"></i></div><div class="home-slider-next swiper-button-next d-md-flex d-none"><i class="icofont-long-arrow-right"></i></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    BlogPost: () => import("./BlogPost-89bf859f.js")
  },
  data() {
    return {
      blogs: [
        {
          imgSrc: "/images/gallery/1-1.jpg",
          title: "FEED PRODUCT",
          date: "Jan 28, 2021",
          category: "news"
        },
        {
          imgSrc: "/images/gallery/1-1.jpg",
          title: "OILSEEDS",
          date: "Mar 21, 2021",
          category: "inspiration"
        },
        {
          imgSrc: "/images/gallery/1-1.jpg",
          title: "PULSES",
          date: "Apr 26, 2021",
          category: "lifestyle"
        },
        {
          imgSrc: "/images/gallery/1-1.jpg",
          title: "EXOTIC",
          date: "Nov 28, 2021",
          category: "others"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BlogPost = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "news-section" }, _attrs))}><div class="container-fluid p-0"><div class="container mt-5"><div class="section-title mb-5"><h2 class="title">OUR PRODUCT</h2></div></div><div class="row container mx-auto"><!--[-->`);
  ssrRenderList($data.blogs, (blog, index2) => {
    _push(`<div class="col-xl-3 col-md-6 p-1" data-aos="fade-up" data-aos-delay="100">`);
    _push(ssrRenderComponent(_component_BlogPost, { blog }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogStyleOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_HeroOne = __nuxt_component_2;
  const _component_AboutOne = __nuxt_component_3;
  const _component_BlogStyleOne = __nuxt_component_4;
  const _component_CounterUp = __nuxt_component_5;
  const _component_VideoCallToAction = __nuxt_component_6;
  const _component_nuxt_link = __nuxt_component_0;
  const _component_Footer = __nuxt_component_4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroOne, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutOne, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogStyleOne, null, null, _parent));
  _push(ssrRenderComponent(_component_CounterUp, null, null, _parent));
  _push(ssrRenderComponent(_component_VideoCallToAction, null, null, _parent));
  _push(`<div class="contact-info-boxed bg-light m-5" data-aos="fade-up" data-aos-delay="300"><div class="row"><div class="col-lg-6 col-md-6 col-12"><div class="inner-content"><h1 class="title">Brooklyn, <span>New York</span></h1><span class="text">Your address goes here <br> Your address goes here</span><span class="email">Email: <a href="mailto:demo@example.com">demo@example.com</a></span></div></div><div class="col-lg-6 col-md-6 col-12"><div class="inner-info"><span class="call">Call directly:<br><a href="tel:0123456789">0123456789</a></span><ul class="location-list"><li><span>Brand Offices:</span>Office Location | Office Location | Office Location | Office Location <br> Office Location | Office Location </li><li><span>Work Hours:</span>Mon - Sat: 8.00 - 17.00, Sunday closed </li></ul></div></div></div><div class="col-lg-12 form-group my-3"><button class="btn btn-primary btn-hover-dark" type="submit" name="submit" id="submit">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="txt"${_scopeId}>Contact Us</span>`);
      } else {
        return [
          createVNode("span", { class: "txt" }, "Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div></div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-58c3b63b.js.map
