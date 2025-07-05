const Sitemap = require("react-router-sitemap").default;

const paramsConfig = {
  "/": {},
  "/home": {},
  "/about": {},
  "/services": {},
  "/services": {},
  "/contact": {},
};

new Sitemap("https://codeket.com")
  .applyParams(paramsConfig)
  .build("public/sitemap.xml")
  .save("public/sitemap.xml");
