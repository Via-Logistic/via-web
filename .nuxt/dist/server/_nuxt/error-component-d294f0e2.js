import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "aos";
import "defu";
const _imports_0 = "" + __publicAssetsURL("images/page-404-image.png");
const error_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  props: {
    error: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "error404" }, _attrs))}><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="error-image"><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} alt="Not Found Image"></div>`);
  if ($props.error.statusCode === 404) {
    _push(`<h1 class="error-404-title text-white">Oops! Page not found!</h1>`);
  } else {
    _push(`<h1 class="error-404-title text-white">An error occurred</h1>`);
  }
  _push(`<div class="error-buttons"><button class="btn btn-primary btn-hover-dark"><span class="button-text">Go back previous page</span></button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  error as default
};
//# sourceMappingURL=error-component-d294f0e2.js.map
