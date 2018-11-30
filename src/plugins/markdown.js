const showdown = require('showdown');
const hljs = require('highlight.js');

showdown.extension('code-highlight', () => {
  function htmlUnencode(text) {
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  function replace(wholeMatch, match, left, right) {
    const _match = htmlUnencode(match);

    return `${ left }${ hljs.highlightAuto(_match).value }${ right }`;
  }

  return [
    {
      type: 'output',
      filter(text) {
        const left = '<pre><code\\b[^>]*>';
        const right = '</code></pre>';
        const flags = 'g';

        return showdown.helper.replaceRecursiveRegExp(text, replace, left, right, flags);
      }
    }
  ];
});
