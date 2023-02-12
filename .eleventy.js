const markdownIt = require("markdown-it");
const mila = require("markdown-it-link-attributes");
const { loadDefaultJapaneseParser } = require("budoux");
const parser = loadDefaultJapaneseParser();

module.exports = (eleventyConfig) => {
  const mdOptions = {
    html: true
  };
  const milaOptions = {
    attrs: {
      target: "_blank",
      rel: "noopener"
    }
  };
  const markdownLib = markdownIt(mdOptions).use(mila, milaOptions);
  eleventyConfig.addJavaScriptFunction("budoux", t => {
    return parser.translateHTMLString(t);
  });
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("videos");
  return {
    dir: {
      input: "pages",
      output: "docs",
    },
  };
};
