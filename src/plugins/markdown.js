import { extension, helper } from 'showdown';
import { highlightAuto } from 'highlight.js';

extension('code-highlight', () => {
  function htmlUnencode(text) {
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  function replace(wholeMatch, match, left, right) {
    const _match = htmlUnencode(match);

    return `${ left }${ highlightAuto(_match).value }${ right }`;
  }

  return [
    {
      type: 'output',
      filter(text) {
        const left = '<pre><code\\b[^>]*>';
        const right = '</code></pre>';
        const flags = 'g';

        return helper.replaceRecursiveRegExp(text, replace, left, right, flags)
          .replace(/<pre>/g, '<pre class="hljs">');
      }
    }
  ];
});
