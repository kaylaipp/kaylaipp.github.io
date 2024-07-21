// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-me-js": () => import("./../src/pages/about-me.js" /* webpackChunkName: "component---src-pages-about-me-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-experience-js": () => import("./../src/pages/experience.js" /* webpackChunkName: "component---src-pages-experience-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-landing-page-js": () => import("./../src/pages/landing-page.js" /* webpackChunkName: "component---src-pages-landing-page-js" */),
  "component---src-pages-projects-js": () => import("./../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

