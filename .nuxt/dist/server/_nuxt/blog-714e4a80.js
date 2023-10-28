import { _ as __nuxt_component_0$1 } from "./TheHeaderTwo-7e74f656.js";
import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_4 } from "./Footer-a4531141.js";
import { _ as __nuxt_component_2 } from "./Breadcrumb-d7c59f75.js";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main$1 = {
  data() {
    return {
      currentItem: 4,
      blogs: [
        {
          date: "Jan 28, 2021",
          imgSrc: "/images/news/blog/1.jpg",
          title: "The Way Of Building",
          category: "interior",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
        },
        {
          date: "Jun 08, 2021",
          imgSrc: "/images/news/blog/2.jpg",
          title: "The Arch In Modern Architecture, Art and Aesthetic More",
          category: "commercial",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
        },
        {
          date: "Mar 15, 2021",
          imgSrc: "/images/news/blog/3.jpg",
          title: "Spiral Stair, New Interior Design Trends 2021",
          category: "architecture",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
        },
        {
          date: "Nov 25, 2020",
          imgSrc: "/images/news/blog/4.jpg",
          title: "Nordic Interior Style",
          category: "residential",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
        },
        {
          date: "Nov 25, 2022",
          imgSrc: "/images/news/blog/2.jpg",
          title: "Nordic Interior Style",
          category: "residential",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
        }
      ]
    };
  },
  computed: {
    blogData() {
      return this.blogs.slice(0, this.currentItem);
    }
  },
  methods: {
    loadMore() {
      this.currentItem += 3;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-tab-section" }, _attrs))}><div class="container"><div class="row row-cols-1 box mtn-50"><!--[-->`);
  ssrRenderList($options.blogData, (blog2, index) => {
    _push(`<div class="${ssrRenderClass([blog2.category, "col mt-50"])}"><div class="single-blog-wrap"><div class="blog-thumb">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/blog-details",
      class: "image"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="fit-image"${ssrRenderAttr("src", blog2.imgSrc)}${ssrRenderAttr("alt", blog2.title)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              class: "fit-image",
              src: blog2.imgSrc,
              alt: blog2.title
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="inner-content"><ul class="info-list"><li>${ssrInterpolate(blog2.date)}</li><li>${ssrInterpolate(blog2.category)}</li></ul><h4 class="title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(blog2.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(blog2.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h4><p>${ssrInterpolate(blog2.desc)}</p>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/blog-details",
      class: "article"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` full article <span class="arrow icofont-rounded-right"${_scopeId}></span>`);
        } else {
          return [
            createTextVNode(" full article "),
            createVNode("span", { class: "arrow icofont-rounded-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div><div class="row section-padding-bottom"><div class="col-12"><div class="load-more text-center mt-50">`);
  if ($data.currentItem < $data.blogs.length) {
    _push(`<a href="javascript:void(0)">...Load more...</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeaderTwo = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_Breadcrumb = __nuxt_component_2;
  const _component_BlogWrapper = __nuxt_component_3;
  const _component_Footer = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeaderTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumb, {
    activeText: "All Blog",
    pageTitle: "Our Blog"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BlogWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  blog as default
};
//# sourceMappingURL=blog-714e4a80.js.map
