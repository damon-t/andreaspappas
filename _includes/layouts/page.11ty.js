/**
 * @file Defines the chained template for a basic page
 * @author Andreas Pappas <andrewpap1997@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
    layout: 'layouts/base'
}

/**
 * The content of the page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
 */
export function render(data) {
    return `<article>
    <header class="article-header">
      <h2>${data.title}</h2>
    </header>
    ${data.content}
  </article>`
}