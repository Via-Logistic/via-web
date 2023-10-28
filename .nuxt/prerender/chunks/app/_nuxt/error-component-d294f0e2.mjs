import { p as publicAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/server-renderer/index.mjs';
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

const _imports_0 = "" + publicAssetsURL("images/page-404-image.png");
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

export { error as default };
//# sourceMappingURL=error-component-d294f0e2.mjs.map
