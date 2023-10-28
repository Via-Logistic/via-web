import { _ as __nuxt_component_0 } from "./TheHeaderTwo-7e74f656.js";
import { a as __nuxt_component_1, b as __nuxt_component_4 } from "./Footer-a4531141.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeaderTwo = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_Footer = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeaderTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`<div class="section"><div class="google-map-area w-100"><iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"></iframe></div></div><div class="contact-content-wrapper"><div class="container"><div class="contact-info-boxed bg-light" data-aos="fade-up" data-aos-delay="300"><div class="row"><div class="col-lg-6 col-md-6 col-12"><div class="inner-content"><h1 class="title">Brooklyn, <span>New York</span></h1><span class="text">Your address goes here <br> Your address goes here</span><span class="email">Email: <a href="mailto:demo@example.com">demo@example.com</a></span></div></div><div class="col-lg-6 col-md-6 col-12"><div class="inner-info"><span class="call">Call directly:<br><a href="tel:0123456789">0123456789</a></span><ul class="location-list"><li><span>Brand Offices:</span>Office Location | Office Location | Office Location | Office Location <br> Office Location | Office Location</li><li><span>Work Hours:</span>Mon - Sat: 8.00 - 17.00, Sunday closed</li></ul></div></div></div></div><div class="form-boxed bg-light mt-50" data-aos="fade-up" data-aos-delay="300"><div class="section-title text-center"><h2 class="title">Have A Question? Contact Us</h2></div><div class="boxed-inner"><div class="contact-form"><form><div class="row"><div class="col-lg-4 col-md-6 form-group"><input class="input-item" type="text" name="name" placeholder="Enter your name..."></div><div class="col-lg-4 col-md-6 form-group"><input class="input-item" type="email" name="email" placeholder="Your Email"></div><div class="col-lg-4 col-md-12 form-group"><input class="input-item" type="text" name="subject" placeholder="Subject"></div><div class="col-lg-12 form-group mb-10"><div class="input-item"><textarea class="textarea-item" name="message" placeholder="Message"></textarea></div></div><div class="col-lg-12 text-center form-group"><button class="btn btn-primary btn-hover-dark" type="submit" name="submit" id="submit"><span class="txt">Send Message</span></button></div><p class="col-8 form-message mb-0"></p></div></form></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-be7002d9.js.map
