var hljs = require('highlight.js'); // https://highlightjs.org/
module.exports = function (source) {
    var MarkdownIt = require('markdown-it'),md = new MarkdownIt({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }
    
        return ''; // use external default escaping
      }
    });
  
    const content = md.render(source);
  
    let start = 0, pageScript = '', output = '';
  
    if (content.indexOf('<script>') === 0) {
      start = content.indexOf('</script>') + '</script>'.length;
      pageScript = content.slice(0, start);
    }
  
    output = content.slice(start);
    
    var reg = /(<h3>([\s\S]*?)<\/h3>([\s\S]*?)<pre>([\s\S]*?)<\/pre>)|(<h3>([\s\S]*?)<\/h3>([\s\S]*?)<table>([\s\S]*?)<\/table>)/g
    output = output.replace(reg, "<div class='md-card'>$&</div>")
    
  
    return `
      <template>
        <section class="markdown-body">
          ${output}
        </section>
      </template>
      ${pageScript}
    `;
  };