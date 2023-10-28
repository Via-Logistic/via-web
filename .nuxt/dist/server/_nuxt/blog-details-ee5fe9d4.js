import { _ as __nuxt_component_0$1 } from "./TheHeaderTwo-7e74f656.js";
import { a as __nuxt_component_1, _ as __nuxt_component_0$2, b as __nuxt_component_4 } from "./Footer-a4531141.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import __nuxt_component_0 from "./BlogPost-89bf859f.js";
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
const _imports_0 = "" + __publicAssetsURL("images/news/blog/large-blog.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_link = resolveComponent("n-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-details-wrapper" }, _attrs))}><div class="blog-detils-image"><img class="fit-image"${ssrRenderAttr("src", _imports_0)} alt="Project"></div><div class="section-padding-top"><div class="container"><div class="row"><div class="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1"><div class="blog-details-content" data-aos="fade-up" data-aos-delay="300"><div class="inner-container"><ul class="page-breadcrumb"><li>`);
  _push(ssrRenderComponent(_component_n_link, { to: "/" }, {
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
  _push(ssrRenderComponent(_component_n_link, { to: "/blog" }, {
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
  _push(`</li><li>Nordic Interior STyle</li></ul><h1 class="title">Nordic Interior Style</h1><ul class="info-list"><li>Dec 23, 2021</li><li>news</li></ul><div class="big-text">To mark the first UK show of artist <br> Henri Barande, graphic designer Alex Maxell and German studio Schultzschultz have created <br> The Lodge Wooden</div><p>This response is important for our ability to learn from mistakes, but it also <br> gives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact <br> it can trigger self-censoring.</p><ul class="list-style-one"><li>Welsh novelist Sarah Waters sums it up eloquently</li><li>In their classic book, Creativity in Business, based on a popular course they co-taught</li><li>Novelist and screenwriter Steven Pressfield</li><li>A possible off-the-wall idea or solution appears like a blip and disappears without us</li></ul><h3 class="sub-title">Defaulting to Mindfulness</h3><p>Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. <br>I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p><blockquote class="blockquote"><p>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.</p><footer class="blockquote-footer"><h2 class="title-name">John Doe</h2><h4 class="title-desig">Project Director</h4></footer></blockquote><p>Both of these assumptions, of course, could be entirely false. Self-censoring is firmly rooted in our experiences with mistakes in the past and not the present. The brain messages arising from those experiences can be deceptive. </p><div class="post-share-options"><div class="post-share-inner"><div class="post-title">Tags:</div><ul class="tags"><li><a href="#">Construction,</a></li><li><a href="#">Building,</a></li><li><a href="#">Structure,</a></li></ul><br><ul class="social-box"><li class="facebook"><a href="#"><i class="icofont-facebook"></i></a></li><li class="twitter"><a href="#"><i class="icofont-twitter"></i></a></li><li class="linkedin"><a href="#"><i class="icofont-linkedin"></i></a></li><li class="rss"><a href="#"><i class="icofont-rss"></i></a></li></ul></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogDetailsPost.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    BlogPost: () => import("./BlogPost-89bf859f.js")
  },
  data() {
    return {
      blogs: [
        {
          imgSrc: "/images/news/1.jpg",
          title: "The Way Of Building Nordic Interior",
          date: "Jan 28, 2021",
          category: "news"
        },
        {
          imgSrc: "/images/news/2.jpg",
          title: "The Arch In Modern Architecture & Art",
          date: "Mar 21, 2021",
          category: "inspiration"
        },
        {
          imgSrc: "/images/news/3.jpg",
          title: "Spiral Stair, New Interior Design Trends 2020",
          date: "Apr 26, 2021",
          category: "lifestyle"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BlogPost = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-bottom" }, _attrs))}><div class="container"><div class="blog-related-news"><div class="row"><div class="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1" data-aos="fade-up" data-aos-delay="300"><div class="section-title"><h4 class="title text-capitalize">Related Posts</h4></div></div></div><div class="row mtn-30"><!--[-->`);
  ssrRenderList($data.blogs.slice(0, 3), (blog, index) => {
    _push(`<div class="col-lg-4 col-md-6 mt-30" data-aos="fade-up" data-aos-delay="100">`);
    _push(ssrRenderComponent(_component_BlogPost, { blog }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RelatedBlogPost.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-comment-section" }, _attrs))}><div class="container"><div class="row inner-container"><div class="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1 comment-form"><div class="group-title"><h4 class="title">Leave A Comment</h4></div><form><div class="row"><div class="col-md-6 form-group" data-aos="fade-right" data-aos-delay="300"><input type="text" name="username" placeholder="Name *" required=""></div><div class="col-md-6 form-group" data-aos="fade-left" data-aos-delay="300"><input type="email" name="email" placeholder="Email *" required=""></div><div class="col-12 form-group" data-aos="fade-up" data-aos-delay="300"><input type="text" name="subject" placeholder="Subject (Optional)" required=""></div><div class="col-12 form-group" data-aos="fade-up" data-aos-delay="300"><textarea class="darma" name="message" placeholder="Message"></textarea></div><div class="col-12 form-group"><button class="btn btn-primary btn-hover-dark" type="submit" name="submit-form"><span class="txt">Post Comments</span></button></div></div></form></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeaderTwo = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_BlogDetailsPost = __nuxt_component_2;
  const _component_RelatedBlogPost = __nuxt_component_3;
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_CommentForm = __nuxt_component_5;
  const _component_Footer = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeaderTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogDetailsPost, null, null, _parent));
  _push(ssrRenderComponent(_component_RelatedBlogPost, null, null, _parent));
  _push(`<div class="old-new-post-section overflow-hidden"><div class="container"><div class="row"><div class="col-12"><div class="old-new-post-content mtn-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/blog-details",
    class: "old-post mt-30",
    "data-aos": "fade-right",
    "data-aos-delay": "300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Older<span${_scopeId}>The Way Of Building</span>`);
      } else {
        return [
          createTextVNode("Older"),
          createVNode("span", null, "The Way Of Building")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/blog-details",
    class: "new-post mt-30",
    "data-aos": "fade-left",
    "data-aos-delay": "300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Newer<span${_scopeId}>New Interior Design Trends</span>`);
      } else {
        return [
          createTextVNode("Newer"),
          createVNode("span", null, "New Interior Design Trends")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CommentForm, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  blogDetails as default
};
//# sourceMappingURL=blog-details-ee5fe9d4.js.map
