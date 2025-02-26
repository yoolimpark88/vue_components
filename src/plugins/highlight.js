//import "highlight.js/styles/stackoverflow-light.css";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("javascript", javascript);

export default hljsVuePlugin;
