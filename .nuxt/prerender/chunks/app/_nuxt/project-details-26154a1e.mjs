import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './TheHeaderTwo-7e74f656.mjs';
import { a as __nuxt_component_1, b as __nuxt_component_4 } from './Footer-a4531141.mjs';
import { Swiper, SwiperSlide } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/swiper/vue/swiper-vue.js';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/swiper/swiper.esm.js';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/h3/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/destr/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/scule/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/klona/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/defu/dist/defu.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/ohash/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/pathe/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("images/project/slide-1.jpg");
const _imports_1 = "" + publicAssetsURL("images/project/slide-2.jpg");
const _imports_2 = "" + publicAssetsURL("images/project/medium-1.jpg");
const _imports_3 = "" + publicAssetsURL("images/project/medium-2.jpg");
SwiperCore.use([Navigation, Pagination, EffectFade]);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".project-details-carousel .swiper-pagination",
          type: "bullets",
          clickable: "true"
        }
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeaderTwo = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_Footer = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeaderTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`<div class="project-details-banner bg-cover" style="${ssrRenderStyle({ backgroundImage: `url('/images/project/large-project.jpg')` })}"></div><div class="section-padding-top"><div class="container"><div class="row"><div class="col-lg-8 offset-lg-2 col-md-12"><div class="project-details-content" data-aos="fade-up" data-aos-delay="300"><h1 class="project-details-title">Culture House</h1><p>The Mercedes-Benz Museum is the only museum in the world that can document in a single continuous timeline the more than 130 years of auto industry history from its very beginnings to the present day. On nine levels and covering a floor space of 16,500 square metres, the museum presents 160 vehicles and over 1,500 exhibits. As a place of innovation, it also demonstrates that history can point the way ahead</p><div class="info-boxed"><ul><li><span>location</span>Address goes here</li><li><span>client</span>Country Government</li><li><span>date</span>2021</li><li><span>type</span>Architecture, Interior</li><li><span>Service</span>Design, Construction, Consulting</li></ul></div><h2 class="project-details-title section-padding-top">Concept</h2><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#39;t anything embarrassing hidden in the middle of text.</p></div></div><div class="col-12" data-aos="fade-up" data-aos-delay="400"><div class="project-details-carousel">`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    loop: true,
    navigation: $data.swiperOptions.navigation,
    pagination: $data.swiperOptions.pagination,
    effect: "fade"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "image" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="fit-image"${ssrRenderAttr("src", _imports_0)} alt="Project Image"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  class: "fit-image",
                  src: _imports_0,
                  alt: "Project Image"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "image" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="fit-image"${ssrRenderAttr("src", _imports_1)} alt="Project Image"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  class: "fit-image",
                  src: _imports_1,
                  alt: "Project Image"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "image" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "fit-image",
                src: _imports_0,
                alt: "Project Image"
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "image" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "fit-image",
                src: _imports_1,
                alt: "Project Image"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-pagination"></div><div class="swiper-nav-center swiper-button-prev"><i class="icofont-thin-left"></i></div><div class="swiper-nav-center swiper-button-next"><i class="icofont-thin-right"></i></div></div></div></div><div class="row project-right-content-box section-padding mtn-30"><div class="col-lg-8 mt-30 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="300"><div class="project-box-image"><img class="fit-image"${ssrRenderAttr("src", _imports_2)} alt="Project Image"></div></div><div class="col-lg-4 mt-30 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="500"><div class="project-box-inner"><div class="section-title"><h2 class="text-capitalize title">Challenge</h2></div><p>One of the most successful designer solutions was the use of unifying concept for the meeting rooms through a common design theme: each of the meeting rooms is named after one of the planets of our solar system and is decorated with the relevant cosmic images.</p></div></div></div><div class="row project-left-content-box mtn-30"><div class="col-lg-5 mt-30" data-aos="fade-up" data-aos-delay="300"><div class="project-box-inner"><div class="section-title"><h2 class="text-capitalize title">Solution</h2></div><p>A modern engineering system with a high degree of automation was installed in the building. In order to guarantee the uninterrupted functioning of all systems and maintain a comfortable climate in the office, an additional high-power cooler was installed on the roof of the business center.</p></div></div><div class="col-lg-7 mt-30" data-aos="fade-up" data-aos-delay="500"><div class="project-box-image"><img class="fit-image"${ssrRenderAttr("src", _imports_3)} alt="Project Image"></div></div></div><div class="row section-padding"><div class="col-lg-8 offset-lg-2 col-md-12" data-aos="fade-up" data-aos-delay="300"><blockquote class="blockquote"><p>\u201C The secret to the successful implementation of this project is simple. We just brought together the best people and understood that we were facing a task that is unique in its scale and significance. \u201D</p><footer class="blockquote-footer"><h2 class="title-name">John Doe</h2><h4 class="title-desig">Project Director</h4></footer></blockquote></div></div></div></div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projectDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { projectDetails as default };
//# sourceMappingURL=project-details-26154a1e.mjs.map
