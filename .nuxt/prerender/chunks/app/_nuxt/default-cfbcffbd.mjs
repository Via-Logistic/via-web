import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/h3/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/ufo/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/destr/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/scule/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/klona/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/ohash/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/yakupsari/Documents/Github/check/via-web/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (scroll >= 500) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<button class="${ssrRenderClass([{ "show": $data.isVisible }, "scroll-top"])}"><i class="arrow-top icofont-rounded-up"></i><i class="arrow-bottom icofont-rounded-up"></i></button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-cfbcffbd.mjs.map
