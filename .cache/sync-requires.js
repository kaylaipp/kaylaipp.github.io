const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-me-js": hot(preferDefault(require("/Users/kaylaippongi/Desktop/kaylaipp.github.io/src/pages/about-me.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/kaylaippongi/Desktop/kaylaipp.github.io/src/pages/contact.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/kaylaippongi/Desktop/kaylaipp.github.io/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kaylaippongi/Desktop/kaylaipp.github.io/src/pages/index.js"))),
  "component---src-pages-landing-page-js": hot(preferDefault(require("/Users/kaylaippongi/Desktop/kaylaipp.github.io/src/pages/landing-page.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/kaylaippongi/Desktop/kaylaipp.github.io/src/pages/projects.js")))
}

