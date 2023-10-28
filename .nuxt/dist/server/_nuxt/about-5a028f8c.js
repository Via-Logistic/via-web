import { _ as __nuxt_component_0$2, a as __nuxt_component_3, b as __nuxt_component_5, c as __nuxt_component_6 } from "./swiper.min-c3252abb.js";
import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_4$1 } from "./Footer-a4531141.js";
import { mergeProps, useSSRContext, withCtx, createTextVNode, toDisplayString, resolveComponent, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper/core";
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
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "about-banner-image",
    style: { backgroundImage: `url('/images/about/large-about.jpg')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="content" data-aos="fade-up" data-aos-delay="300"><h1 class="title">Studio</h1></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerOne.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  data() {
    return {
      services: [
        {
          title: "profressional and dedicate team",
          desc: "Building architectures with modern technology.",
          icon: "icofont-labour"
        },
        {
          title: "unique design",
          desc: "Bring the beautifully for your house. Just enjoy!",
          icon: "icofont-ruler-compass-alt"
        },
        {
          title: "affordable and flexiable",
          desc: "Bring nature in your house. Health is important",
          icon: "icofont-credit-card"
        },
        {
          title: "24/7 support",
          desc: "Consulting solutions and make plan to renovation",
          icon: "icofont-live-support"
        }
      ]
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-top bg-light" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="section-title" data-aos="fade-up" data-aos-delay="300"><h2 class="title">Why Choose Us</h2></div></div><div class="col-12"><div class="service-inner-container"><!--[-->`);
  ssrRenderList($data.services, (service, index) => {
    _push(`<div class="service-block" data-aos="fade-up" data-aos-delay="300"><div class="inner-box"><h5 class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(service.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(service.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h5><p>${ssrInterpolate(service.desc)}</p><div class="inner-box-bottom"><div class="icon"><i class="${ssrRenderClass(service.icon)}"></i></div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/about",
      class: "more"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`more details`);
        } else {
          return [
            createTextVNode("more details")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Features.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  props: ["member"]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-block" }, _attrs))}><div class="inner-box"><div class="image"><img${ssrRenderAttr("src", $props.member.imgSrc)}${ssrRenderAttr("alt", $props.member.name)}><ul class="social-icons"><!--[-->`);
  ssrRenderList($props.member.socials, (social, index) => {
    _push(`<li><a${ssrRenderAttr("href", social.url)} class="${ssrRenderClass(social.icon)}"></a></li>`);
  });
  _push(`<!--]--></ul></div><div class="team-content"><h4 class="title">${ssrInterpolate($props.member.name)}</h4><h5 class="subtitle">${ssrInterpolate($props.member.position)}</h5></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SingleTeamMember.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const SingleTeamMember = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const _sfc_main$3 = {
  components: {
    SingleTeamMember: () => Promise.resolve().then(function() {
      return SingleTeamMember;
    })
  },
  data() {
    return {
      members: [
        {
          name: "Edward Eric",
          position: "CEO Founder",
          imgSrc: "/images/team/team-1.jpg",
          socials: [
            {
              icon: "icofont-twitter",
              url: "#"
            },
            {
              icon: "icofont-facebook",
              url: "#"
            },
            {
              icon: "icofont-instagram",
              url: "#"
            },
            {
              icon: "icofont-linkedin",
              url: "#"
            }
          ]
        },
        {
          name: "Tom Holland",
          position: "Architect & Project Management",
          imgSrc: "/images/team/team-2.jpg",
          socials: [
            {
              icon: "icofont-twitter",
              url: "#"
            },
            {
              icon: "icofont-facebook",
              url: "#"
            },
            {
              icon: "icofont-instagram",
              url: "#"
            },
            {
              icon: "icofont-linkedin",
              url: "#"
            }
          ]
        },
        {
          name: "Laura Erakovic",
          position: "Executive & Marketing Management",
          imgSrc: "/images/team/team-3.jpg",
          socials: [
            {
              icon: "icofont-twitter",
              url: "#"
            },
            {
              icon: "icofont-facebook",
              url: "#"
            },
            {
              icon: "icofont-instagram",
              url: "#"
            },
            {
              icon: "icofont-linkedin",
              url: "#"
            }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SingleTeamMember = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding bg-light" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="section-title" data-aos="fade-up" data-aos-delay="300"><h2 class="title">Our Team</h2></div></div></div><div class="row mtn-30"><!--[-->`);
  ssrRenderList($data.members, (member, index) => {
    _push(`<div class="col-lg-4 col-md-6 mt-30" data-aos="fade-up" data-aos-delay="300">`);
    _push(ssrRenderComponent(_component_SingleTeamMember, { member }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
SwiperCore.use([Navigation]);
const _sfc_main$2 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".client-carousel .client-carousel-next",
          prevEl: ".client-carousel .client-carousel-prev"
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 2
          }
        }
      },
      clients: [
        {
          id: 1,
          imgSrc: "/images/client/1.png",
          name: "Ryan Betthalyn",
          position: "Director at Chobham Manor",
          desc: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
        },
        {
          id: 2,
          imgSrc: "/images/client/2.png",
          name: "Bobs Hanely",
          position: "Director at Spotify",
          desc: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
        },
        {
          id: 3,
          imgSrc: "/images/client/1.png",
          name: "Erik Jhonson",
          position: "Director at TotoCompany",
          desc: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-top" }, _attrs))}><div class="container"><div class="row"><div class="col-12 position-relative"><div class="section-title client-title" data-aos="fade-up" data-aos-delay="300"><h2 class="title">+2,500 clients love us</h2></div><div class="client-carousel" data-aos="fade-up" data-aos-delay="300">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    navigation: $data.swiperOptions.navigation,
    breakpoints: $data.swiperOptions.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.clients, (client, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: index,
            class: "single-client-wrapper"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="client-thumb-icon"${_scopeId2}><div class="thumb"${_scopeId2}><img${ssrRenderAttr("src", client.imgSrc)}${ssrRenderAttr("alt", client.name)}${_scopeId2}></div><div class="icon"${_scopeId2}><i class="icofont-quote-right"${_scopeId2}></i></div></div><div class="client-content"${_scopeId2}><h6 class="name"${_scopeId2}><a href="#"${_scopeId2}>${ssrInterpolate(client.name)}</a> / <span${_scopeId2}>${ssrInterpolate(client.position)}</span></h6><p${_scopeId2}>${ssrInterpolate(client.desc)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "client-thumb-icon" }, [
                    createVNode("div", { class: "thumb" }, [
                      createVNode("img", {
                        src: client.imgSrc,
                        alt: client.name
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("div", { class: "icon" }, [
                      createVNode("i", { class: "icofont-quote-right" })
                    ])
                  ]),
                  createVNode("div", { class: "client-content" }, [
                    createVNode("h6", { class: "name" }, [
                      createVNode("a", { href: "#" }, toDisplayString(client.name), 1),
                      createTextVNode(" / "),
                      createVNode("span", null, toDisplayString(client.position), 1)
                    ]),
                    createVNode("p", null, toDisplayString(client.desc), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.clients, (client, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: index,
              class: "single-client-wrapper"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "client-thumb-icon" }, [
                  createVNode("div", { class: "thumb" }, [
                    createVNode("img", {
                      src: client.imgSrc,
                      alt: client.name
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "icon" }, [
                    createVNode("i", { class: "icofont-quote-right" })
                  ])
                ]),
                createVNode("div", { class: "client-content" }, [
                  createVNode("h6", { class: "name" }, [
                    createVNode("a", { href: "#" }, toDisplayString(client.name), 1),
                    createTextVNode(" / "),
                    createVNode("span", null, toDisplayString(client.position), 1)
                  ]),
                  createVNode("p", null, toDisplayString(client.desc), 1)
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="client-carousel-prev swiper-button-prev"><i class="icofont-thin-left"></i></div><div class="client-carousel-next swiper-button-next"><i class="icofont-thin-right"></i></div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonial.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 5
          }
        }
      },
      brandLogos: [
        {
          imgSrc: "/images/brand-logo/1.png",
          alt: "brand logo"
        },
        {
          imgSrc: "/images/brand-logo/2.png",
          alt: "brand logo"
        },
        {
          imgSrc: "/images/brand-logo/3.png",
          alt: "brand logo"
        },
        {
          imgSrc: "/images/brand-logo/4.png",
          alt: "brand logo"
        },
        {
          imgSrc: "/images/brand-logo/5.png",
          alt: "brand logo"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand-logo-wrapper" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="brand-logo-carousel" data-aos="fade-up" data-aos-delay="300">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    breakpoints: $data.swiperOptions.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.brandLogos, (brand, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            class: "single-brand-logo",
            key: index
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_link, { to: "" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", brand.imgSrc)}${ssrRenderAttr("alt", brand.alt)}${_scopeId3}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: brand.imgSrc,
                          alt: brand.alt
                        }, null, 8, ["src", "alt"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_nuxt_link, { to: "" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: brand.imgSrc,
                        alt: brand.alt
                      }, null, 8, ["src", "alt"])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.brandLogos, (brand, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              class: "single-brand-logo",
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_nuxt_link, { to: "" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: brand.imgSrc,
                      alt: brand.alt
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandLogoCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_BannerOne = __nuxt_component_2;
  const _component_AboutOne = __nuxt_component_3;
  const _component_Features = __nuxt_component_4;
  const _component_CounterUp = __nuxt_component_5;
  const _component_VideoCallToAction = __nuxt_component_6;
  const _component_TeamOne = __nuxt_component_7;
  const _component_Testimonial = __nuxt_component_8;
  const _component_BrandLogoCarousel = __nuxt_component_9;
  const _component_Footer = __nuxt_component_4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_BannerOne, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutOne, null, null, _parent));
  _push(ssrRenderComponent(_component_Features, null, null, _parent));
  _push(ssrRenderComponent(_component_CounterUp, null, null, _parent));
  _push(ssrRenderComponent(_component_VideoCallToAction, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamOne, null, null, _parent));
  _push(ssrRenderComponent(_component_Testimonial, null, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-5a028f8c.js.map
