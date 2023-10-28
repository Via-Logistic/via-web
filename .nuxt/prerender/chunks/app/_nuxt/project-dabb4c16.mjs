import { _ as __nuxt_component_0 } from './TheHeaderTwo-7e74f656.mjs';
import { a as __nuxt_component_1, b as __nuxt_component_4, _ as __nuxt_component_0$1 } from './Footer-a4531141.mjs';
import { _ as __nuxt_component_2 } from './Breadcrumb-d7c59f75.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../renderer.mjs';
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

const _sfc_main$1 = {
  data() {
    return {
      currentItem: 6,
      projects: [
        {
          imgSrc: "/images/gallery/2.jpg",
          title: "Dustin Villa, Spain",
          category: "residential"
        },
        {
          imgSrc: "/images/gallery/3.jpg",
          title: "ABC Financial Bank",
          category: "commercial"
        },
        {
          imgSrc: "/images/gallery/4.jpg",
          title: "Cubic Villa",
          category: "residential"
        },
        {
          imgSrc: "/images/gallery/5.jpg",
          title: "Culture House",
          category: "architecture"
        },
        {
          imgSrc: "/images/gallery/6.jpg",
          title: "B6-No.5 OLA Tower",
          category: "interior"
        },
        {
          imgSrc: "/images/gallery/7.jpg",
          title: "Minimal Interior - A5, Italy",
          category: "interior"
        },
        {
          imgSrc: "/images/gallery/2.jpg",
          title: "Dustin Villa, Spain",
          category: "residential"
        },
        {
          imgSrc: "/images/gallery/3.jpg",
          title: "ABC Financial Bank",
          category: "commercial"
        },
        {
          imgSrc: "/images/gallery/4.jpg",
          title: "Cubic Villa",
          category: "residential"
        }
      ]
    };
  },
  computed: {
    projectData() {
      return this.projects.slice(0, this.currentItem);
    }
  },
  methods: {
    loadMore() {
      this.currentItem += 3;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-masonry-section" }, _attrs))}><div class="container"><div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 box mesonry-list mtn-30"><!--[-->`);
  ssrRenderList($options.projectData, (project2, index) => {
    _push(`<div class="${ssrRenderClass([project2.category, "col mt-30"])}"><div class="single-project-wrap"><div class="project-thumb position-relative">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/project-details",
      class: "image"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", project2.imgSrc)}${ssrRenderAttr("alt", project2.title)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: project2.imgSrc,
              alt: project2.title
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="inner-content"><div class="sub-title">${ssrInterpolate(project2.category)}</div><h4 class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/project-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(project2.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(project2.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h4></div></div></div>`);
  });
  _push(`<!--]--></div><div class="row section-padding-bottom"><div class="col-12"><div class="load-more text-center mt-30">`);
  if ($data.currentItem < $data.projects.length) {
    _push(`<a href="javascript:void(0)">...Load more...</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalleryWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeaderTwo = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_Breadcrumb = __nuxt_component_2;
  const _component_GalleryWrapper = __nuxt_component_3;
  const _component_Footer = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeaderTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumb, {
    activeText: "All Project",
    pageTitle: "PRODUCT AND SERVICES"
  }, null, _parent));
  _push(ssrRenderComponent(_component_GalleryWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const project = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { project as default };
//# sourceMappingURL=project-dabb4c16.mjs.map
