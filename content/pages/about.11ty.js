// JavaScript-ified ./content/pages/archive.11ty.js
/**
 * @file Defines the chained layout for the archive page
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
    title: '📖 Welcome!',
    navTitle: '📖 About',
    tags: 'nav',
    weight: 2,
    templateEngineOverride: '11ty.js',
    eleventyComputed: {
        permalink: data => `/about.html`
    }
}

/**
 * The archive page content
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
export function render(data) {
    return `<!-- ${data.page.inputPath} -->
  

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        @import url(https://fonts.googleapis.com/css?family=Crimson+Text:400,700,900,400italic,700italic,900italic|Playfair+Display:400,700,900,400italic,700italic,900italic|Rock+Salt:400);

        *,
        :before,
        :after {
            box-sizing: border-box;
        }

        body {
            background-color: #000;
            color: #e5e5e5;
            font: 16px/1.25 'Crimson Text', sans-serif;
            margin: 0;
        }

        #wrapper {
            margin-left: auto;
            margin-right: auto;
            max-width: 80em;
        }

        #container {
            float: left;
            padding: 1em;
            width: 100%;
        }



        /*** OPEN BOOK ***/
        .open-book {
            background: rgb(255, 255, 255);
            box-shadow: rgba(0,0,0,0.5) 0 1em 3em;
            color: #000;
            padding: 2em;
        }

        .open-book * {
            position: relative;
        }

        /* Highlight */
        .open-book *::-moz-selection {
            background: rgba(222,255,0,0.75);
        }

        .open-book *::selection {
            background: rgba(222,255,0,0.75);
        }

        /* Header/Footer */
        .open-book header {
            padding-bottom: 1em;
        }

        .open-book header *,
        .open-book footer * {
            font: 700 1em/1.25 'Playfair Display', sans-serif;
            letter-spacing: 0.125em;
            margin: 0;
        }

        .open-book header * {
            font-size: 0.75em;
            text-transform: uppercase;
        }

        .open-book footer {
            padding-top: 1em;
        }

        .open-book footer #page-numbers {
            display: none;
            list-style: none;
            padding: 0;
            text-align: left;
        }

        .open-book footer #page-numbers > li:last-child {
            text-align: right;
        }

        /* Chapter Title */
        .open-book .chapter-title {
            background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgICA8Zz4NCiAgICAJPHBhdGggZD0iTTAsMzJMMzIsMGwzMiwzMkwzMiw2NEwwLDMyeiBNOCwzMmwyNCwyNGwyNC0yNEwzMiw4TDgsMzJ6IE0xNiwzMmwxNi0xNmwxNiwxNkwzMiw0OEwxNiwzMnogTTI0LDMybDgsOGw4LThsLTgtOEwyNCwzMnoiIC8+DQogICAgPC9nPg0KPC9zdmc+) bottom center no-repeat;
            background-size: 0.5em 0.5em;
            font: 700 7vw/1.25 'Playfair Display', sans-serif;
            letter-spacing: 0.125em;
            margin: 0 0 1em 0;
            padding: 1em 0;
            position: relative;
            text-align: center;
            text-transform: uppercase;
        }

        .open-book .chapter-title:before,
        .open-book .chapter-title:after {
            border: solid 0 #000;
            border-width: 0.05em 0;
            bottom: calc((0.125em / 2) * 3);
            content: '';
            height: 0.15em;
            position: absolute;
            width: calc(50% - (1em / 2));
        }

        .open-book .chapter-title:before {
            left: 0;
        }

        .open-book .chapter-title:after {
            right: 0;
        }

        /* Body Copy */
        .open-book article {
            line-height: 1.5;
        }

        .open-book article *:not(.chapter-title):not(hr):not(dl) {
            margin: 0 auto;
            max-width: 28.125em;
        }

        .open-book article p {
            text-indent: 2em;
        }

        .open-book .chapter-title + p:first-of-type {
            text-indent: 0;
        }

        .open-book .chapter-title + p:first-of-type:first-letter {
            float: left;
            font: 700 3em/0.65 'Playfair Display', sans-serif;
            padding: 0.15em 0.05em 0 0;
            text-transform: uppercase;
        }

        .open-book article > ul,
        .open-book article > ol {
            padding-left: 3em;
        }

        .open-book article > ul ul {
            padding-left: 1em;
        }

        .open-book a {
            background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4MDAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwMCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJCS5zdDB7ZmlsbDojMDAwMENDO30NCgk8L3N0eWxlPg0KCTxnIGlkPSJZMkJjMjcudGlmIj4NCgkJPGc+DQoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDMwLjksNDkuMmMtMSwwLTIsMC0zLDBjLTAuMS0wLjMtMC4yLTAuOC0wLjQtMC44Yy0xLjgtMC40LTQtMC4zLTUuNC0xLjNjLTEuOC0xLjQtNC4zLDAuMS01LjgtMS45Yy00LjMtMS04LjUtMi4zLTEyLjgtMi45Yy0zLjQtMC41LTYuOS0wLjEtMTAuMy0wLjFjLTAuMywwLjgtMC41LDEuNC0wLjcsMmMtMC41LTAuMy0wLjktMC42LTEuNC0xYy0wLjIsMS4yLTAuMywyLjEtMC42LDMuN2MtMS0xLjMtMS41LTIuMS0xLjktMi42Yy0yLjgsMC01LjMtMC41LTcuNCwwLjFjLTIuMiwwLjctMy43LDAuOC01LjktMC4xYy0yLjItMC45LTIuOS0yLjYtNC00Yy0yLjUsMS4yLTUuMSwxLjEtNy41LDAuMmMtMS4yLTAuNS0yLTAuNi0zLjEsMC4xYy0xLjIsMC43LTIuNiwxLTMuOSwxLjRjLTAuMiwwLjEtMC42LTAuMi0wLjgtMC4zYy0xLjItMS4zLDIuNC0yLjMsMC0zLjdjLTIuNiwxLjYtNS4yLDMuMy04LDVjLTAuOCwwLTEuOSwwLjMtMi43LTAuMWMtMi40LTEuMS00LjgtMi4zLTYuOS0zLjljLTEuOS0xLjUtMy45LTIuMi02LjItMmMtMSwwLjEtMiwwLTIuOCwwYy0wLjgtMS4xLTEuNC0yLTIuNy0zLjljMCwyLjMsMCwzLjYsMCw0LjljLTMuNywwLjgtNywxLjYtMTAuMywyLjNjLTEuNC0xLjgtMi42LTMuMi0zLjktNC45Yy0wLjQsMC44LTAuNiwxLjItMC43LDEuNmMtMC44LDMuMi0xLDMuMS00LjIsMi4zYy0yLjktMC43LTUuNC0yLjQtOC40LTMuNmMtMS42LDItMy4yLDQtNS4yLDYuNWMtMy44LTIuMi03LjgsMi0xMS45LDBjLTAuNCwwLjMtMC44LDAuNS0xLjIsMC44Yy0xLjQtMC45LTIuNy0xLjgtMy44LTIuNWMtMC44LTIuNy0xLjYtNS4yLTIuNC04LjJjLTEuMiwxLjMtMS45LDIuMi0zLDMuNGMwLDEsMCwyLjUsMCwzLjljLTUuMSwwLjYtOS45LDIuMS0xNS4xLDAuOWMwLTEsMC0xLjcsMC0yLjljLTEuMSwwLjUtMS45LDAuOS0yLjcsMS4zYy0xLjYtMC42LTMuMS0xLjItNC44LTEuOWMtMC42LDAuOC0xLjIsMS44LTEuOSwyLjhjLTAuNC0wLjktMC44LTEuNy0xLjItMi40YzAuMi0wLjQsMC40LTAuOSwxLjEtMi4yYy0zLDEuNS01LDIuNS03LjEsMy42Yy0xLTMtMy40LTQuNS02LTUuN2MtMC41LDAuNi0xLjEsMS4xLTEuNSwxLjZjMC41LDAuOSwwLjgsMS41LDEuMSwyLjJjLTAuOCwwLTEuMSwwLTEuNywwYy0wLjItMS0wLjQtMi0wLjctMy41Yy0xLjMsMC45LTIuMywxLjYtMy4zLDIuM2MtMC4yLTAuNi0wLjUtMS4yLTAuOC0yYy0xLjEsMS41LTIuMSwyLjktMyw0LjJjLTUuMywwLjQtNS45LTUtOS4xLTYuOWMtMC43LDEtMS40LDItMiwzYy0xLjgtMC40LTMuMy0wLjgtNC44LTEuMWMtMC4yLDAtMC40LDAuMy0wLjYsMC41YzAuMywwLjMsMC42LDAuNiwxLDFjLTAuOCwwLjYtMS42LDEuMS0yLjUsMS43Yy0wLjUtMS0wLjgtMS42LTEuMi0yLjVjLTEuNSwwLjgtMi44LDEuNi0zLjgsMi4yYy0wLjcsMS43LTEuMiwyLjktMS42LDQuMWMtMS40LTEuNy0yLjYtMy4yLTQuMS01YzAtMC40LDAtMS4yLDAtMS45Yy0xLjcsMC0zLjEsMC0zLjksMGMtMy4xLDEuOS01LjYsMy40LTguMiw1LjFjLTAuNC0wLjgtMC43LTEuNS0xLjEtMi4yYy0wLjYsMC0xLjMsMC0yLjEsMGMtMC42LDAuNi0xLjMsMS4zLTIsMS45Yy0wLjUtMC40LTEtMC43LTEuOC0xLjNjLTEsMS40LTEuOSwyLjctMi44LDMuOWMtMC4xLDAuMi0wLjQsMC4xLTAuNywwLjJjLTAuMi0xLTAuNC0xLjktMC42LTMuMmMtMC41LDEtMC44LDEuNy0xLjUsMy4zYzAtMi4yLDAtMy40LDAtMy41Yy0xLjktMS45LTMuMS0zLjEtNC4zLTQuM2MtMy41LDEuMS0zLDUuNC00LjgsNy42Yy00LjgsMC41LTkuMywwLjktMTMuOCwxLjRjLTAuMS0xLjEtMC4yLTEuOS0wLjMtMi45Yy0xLjUsMC0yLjksMC00LjIsMGMtMS40LDAuNy0yLjgsMS4zLTQuMiwyYy0wLjMtMC45LTAuNi0xLjQtMC45LTIuM2MtNi43LDAuNi0xMi41LDQuNC0xOSw2LjNjLTAuOS0xLjItMS45LTIuMy0yLjYtMy4zYy0zLDEuOC01LjYsMy4xLTguNywxLjJjLTAuNSwxLTEuMSwxLjktMS42LDIuN2MtMi43LDAuOC0zLjMtMS4yLTQtMi43Yy0yLjIsMC40LTQuMiwwLjctNS45LDFjLTAuOS0wLjktMS41LTEuNS0yLjEtMi4xYy0xLjIsMC42LTUuOSwxLjEtNi44LDEuMmMtMi41LDAuMi00LjksMC42LTguMSwxYy0wLjIsMC40LTAuNywxLjMtMS4xLDJjLTItMC42LTMuNS0xLjEtNS4zLTEuNmMtMC42LDAuOC0xLjEsMS42LTIuMSwyLjljLTAuNy0xLjktMS4yLTMuMi0xLjctNC44Yy0xLDEuMi0xLjgsMi40LTIuMywzYy0xLjgsMC0zLDAtNCwwYy0wLjEtMS0wLjEtMS44LTAuMi0yLjNjLTIsMC4zLTQuMSwwLTUuNSwwLjljLTIuMywxLjMtNC44LDEuMS02LjcsMC41Yy0yLjMtMC44LTQuNi0xLjMtNi41LTAuM2MtMi4xLDEuMS00LjctMC41LTYuNCwxLjVjMCwwLjEtMC41LTAuMy0xLTAuNWMwLjQtMSwwLjktMS45LDEuMy0yLjljLTAuOS0wLjctMS42LTEuMi0yLjgtMi4xYy0xLjYsMy4xLTMsNS44LTQuNCw4LjVjLTEsMC0yLDAtMywwYy0wLjEtMC4zLTAuMi0wLjgtMC40LTAuOGMtMS44LTAuNC00LTAuMy01LjQtMS4zYy0xLjgtMS4zLTQuMywwLTUuOC0xLjlDMTAuOSw0NC4xLDUuNiw0Mi45LDAsNDEuN2MwLTguMSwwLTE2LjYsMC0yNS4yYzEtMC45LDIuMy0xLjcsMS44LTMuOGMtMC42LTAuNy0wLjYtMS41LTEuNS0yLjZDMS45LDguMSwyLjYsNiw0LjQsMy44YzEuMywwLjYsMi41LDEuMSwzLjcsMS42QzcuNSw4LDcuOCwxMC4yLDkuMywxMi4yYzAuNiwwLDEuMywwLDIuNCwwYzAuNy0wLjgsMS42LTIsMi43LTMuNGMwLjQsMS4xLDAuNiwxLjcsMC44LDIuMmMyLjYsMCw1LjEsMCw3LjksMGMwLTEuNCwwLTIuNSwwLTMuNWMxLTAuNCwxLjgtMC43LDIuOC0xLjJjMi4yLDEuOSw0LjYsMy45LDYuNyw1LjhjMS4yLDAsMi4xLDAsMi41LDBjMS4zLTEuNiwyLjMtMi43LDMuMy0zLjljMC41LDAuOSwwLjksMS42LDEuNiwyLjZjMS0xLjUsMS42LTIuNSwyLjMtMy41YzIuOSwwLDMtMC4xLDUuNSwxLjJjNC4xLDIuMiw4LjYsMi40LDEyLjcsMS4zYzMuMi0wLjgsNi4xLTAuMyw5LjItMC42YzMuMi0wLjQsNi4zLDAuMiw5LjQsMS41YzIuNywxLjEsNS41LDEsNy43LTAuOWMyLjctMi4zLDUuNC00LjQsOC42LTUuM2MxLjIsMC40LDIuMywwLjcsNCwxLjJjMC42LDEuNiwxLjQsMy40LDIuMiw1LjVjMC42LTEsMS4zLTIsMS43LTIuN2MxLjUtMC41LDIuOS0wLjksNC4xLTEuM2MwLjYsMS40LDEuMiwyLjcsMiw0LjRjMi42LTYuMiw4LTYuOSwxMy4yLTguNWMyLjEsMy40LDQuMiw2LjksNi42LDEwLjdjMS0xLjksMS42LTMuMywyLjMtNC42YzAuNywwLDEuNCwwLDIsMGMtMC4zLTAuMy0wLjYtMC42LTAuOS0xYzAuOC0wLjEsMS43LTAuMywyLjUtMC40Yy0wLjEtMC4yLTAuMy0wLjQtMC40LTAuNWMtMS41LDAtMi45LDAtNCwwYy0wLjgtMC43LTEuMy0xLjEtMS40LTEuMmMwLjQtMS44LDAuNy0zLjMsMS00LjdjMC45LDAsMS43LDAsMi40LDBjMC4yLDAuNywwLjQsMS4zLDAuNSwxLjZjMi4xLDAuNiwzLjksMS4xLDUuNSwxLjZjMC4yLDAuNywwLjUsMS4yLDAuNywxLjhjMS4yLTAuNSwyLjQtMC43LDMuMi0xLjRjMS40LTEuMiwyLjUtMi42LDMuOS00LjJjMC42LDIuNCwxLjEsNC4zLDEuNiw2LjNjLTIuNCwwLjEtNC4zLDAuMi02LjMsMC40YzAuNiwwLjcsMC45LDEsMS4xLDEuNWMwLjIsMC40LDAuMiwwLjksMC4zLDEuM2MxLjYtMC4xLDMsMC40LDQuMy0wLjljMC43LTAuNywyLTAuOCwzLTFjMC40LTAuMSwwLjksMC4yLDEuMiwwLjJjMC4yLDEuMSwwLjMsMS45LDAuNiwzLjRjMS4zLTEuMSwyLjItMS44LDMuMy0yLjdjMC44LDEuMSwxLjcsMi4yLDIuMSwyLjhjMy40LDEsMy44LTEuMyw0LjktMy40YzAuOSwxLjMsMS40LDIsMi4xLDMuMWMxLTAuOSwxLjgtMS43LDIuNi0yLjRjMC4zLDAuNywwLjcsMS40LDEsMi4xYzEuNC0wLjQsMi41LTEsMi40LTIuNmMxLjYsMC4xLDEuOC0xLjUsMi42LTIuN2MwLjQsMS4xLDAuNiwxLjcsMC43LDJjMi4xLTEuMiw0LjEtMi40LDYuMi0zLjdjMC4zLDAuMywwLjcsMC42LDEuMiwxYzAuNy0xLDEuMy0yLDEuOS0zYzEuNywwLDMuMywwLDUuMiwwYzAuNSwwLjksMS4xLDEuOCwxLjYsMi42YzUtMS42LDkuOC0wLjUsMTQuNSwxLjdjMC41LDEuNSwxLjEsMywxLjgsNS4yYzEuNy0zLjYsMy4yLTYuNiw0LjYtOS41YzIsMS42LDQsMC42LDUuOSwxYzIsMC40LDMuOSwwLjgsNiwxLjNjMCwxLjQsMCwyLjUsMCwzLjljMS41LTEuMSwyLjgtMiw0LTIuOWMwLjQtMC4yLDAuOS0wLjIsMS4yLTAuM2MwLjYsMS4xLDEuMiwyLDEuOCwzYzEuOSwwLDQsMC42LDUuNS0wLjFjMi45LTEuMyw1LjgtMC42LDktMWMwLjQsMC41LDAuOSwxLjIsMS41LDEuN2MwLjcsMC42LDEuNSwxLDIuOCwxLjljMC0yLjYsMC00LjUsMC02LjVjMS44LDAsMy4zLDAsNC41LDBjMi44LDEuNCwwLjgsNC4xLDIuMiw2LjJjMS44LTAuOCwzLjYtMS42LDUuMi0yLjNjMC4yLTEuNCwwLjQtMi4yLDAuNS0yLjljMy42LDAuNiw2LjgsMS40LDEwLjEsMS43YzIuMSwwLjIsNC4xLDAuMyw1LjgsMS43YzEuMiwxLDIuNiwxLjYsNC4xLDIuNWM1LjgtMS44LDEwLjYtNi43LDE2LjktNi4xYzEuOCwxLjMsMy4yLDIuMiw0LjYsMy4zYzEuNCwxLjEsMi42LDIuMyw0LjQsMy44YzAsMC4yLDAsMSwwLDEuOWMxLjgtMC44LDIuNC0yLjcsNC4zLTMuMWMxLjYtMC4zLDIuOS0xLjgsNC41LTIuOWMxLjIsMC4xLDIuNywwLjIsNC4zLDAuM2MtMC41LDEuMS0wLjgsMS45LTEuMywzLjFjMi0wLjksMy40LTEuNSw0LjctMi4xYzAuMywwLjgsMC41LDEuMywwLjgsMmMwLjktMC40LDEuNS0wLjcsMi4yLTEuMWMwLjIsMC42LDAuNCwxLjIsMC43LDEuOWMxLjgtMC4zLDMuNywwLjQsNS4zLTAuOGMwLjMsMC4zLDAuNiwwLjUsMC45LDAuOGMwLjctMSwxLjQtMi4xLDIuMS0zLjFjMC4yLDAsMC40LTAuMSwwLjUsMGMwLjUsMC4zLDEuMSwwLjcsMSwwLjZjMi45LTAuMyw1LjItMC41LDcuNS0wLjhjMC4yLDEuMywwLjQsMi4yLDAuNiwzLjRjMy01LjgsMTAuNS01LjksMTMuOC0zLjZjMC44LDEuMiwxLjUsMi4zLDIuMSwzLjFjMS41LDAsMi42LDAsMy44LDBjLTAuNy0xLjMtMS4zLTIuMy0xLjktMy40YzEuMS0wLjUsMi4yLTEuMSwzLjYtMS43YzAuMywxLjMsMC41LDIuMywwLjYsMi45YzAuOSwwLjUsMS40LDAuNywyLDFjLTAuNiwxLjEtMSwxLjktMS41LDNjMS40LDAuOSwyLjcsMS42LDQuMSwyLjRjMC43LTEuMSwxLjItMiwxLjgtMi45YzAuMiwxLjYsMCwzLjYtMC41LDQuOWMtMC4xLDAuMiwwLjIsMC42LDAuMywwLjljMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjJjMC4zLDAsMC42LTAuMSwwLjktMC4yYzAuNi0yLjksMC42LTIuOSwzLjMtNC41Yy0wLjQtMS0wLjctMS45LTEuMy0zLjNjMS4xLDAsMS43LTAuMSwyLjQsMGMwLjYsMC4xLDEuMiwwLjMsMS44LDAuNGM0LjgsMC44LDkuNCw0LDE0LjcsMS4yYzEsMS4yLDEuOSwyLjQsMi43LDMuM2MyLjYsMC4yLDMuOS0wLjcsMy43LTMuM2MtMC42LTAuOC0xLjQtMS43LTIuMy0yLjhjMS43LTIuMiwzLjMtNC4xLDUtNi4yYzEuMywwLjYsMi4zLDEsMi44LDEuM2MwLjcsMi44LDEuMiw1LDEuNyw3YzMuMSwwLjksMy43LTIsNS42LTIuN2MwLjMsMC43LDAuNSwxLjMsMC42LDEuN2MyLjYsMCw1LjEsMCw3LjcsMGMwLTEuMywwLTIuNCwwLTMuNGMxLTAuNSwxLjgtMC45LDMtMS41YzIuMSwxLjksNC40LDQsNi42LDZjMSwwLDIsMCwyLjYsMGMxLjItMS41LDIuMi0yLjcsMy4xLTMuOWMwLjgsMC45LDEuMywxLjUsMS45LDIuMmMwLjktMS40LDEuNS0yLjQsMi4zLTMuN2MxLjgsMC42LDMuNiwwLjgsNSwxLjZjNC4xLDIuNCw4LjUsMi4yLDEyLjgsMS42YzYuNi0wLjksMTIuNS0xLjQsMTcuMiwwLjJjMi4zLDAuOCw0LjYsMS4yLDYuNiwwLjljNC0yLjUsNy42LTQuOCwxMC42LTYuOGMyLDAuNiwzLjIsMC45LDQuNSwxLjNjMC43LDEuOCwxLjUsMy42LDIuMyw1LjZjMC43LTEuMSwxLjItMiwxLjgtMi45YzEuNC0wLjQsMi44LTAuOSw0LjEtMS4yYzAuNiwxLjUsMS4xLDIuOCwxLjgsNC41YzIuNy02LjMsOC4yLTcuMSwxMy41LTguNWMyLDMuNCw0LDYuOCw2LjQsMTAuN2MwLjktMS45LDEuNi0zLjMsMi4xLTQuM2MxLjQtMC42LDIuNi0xLjIsNC44LTIuMWMtMy0wLjgtNS41LDAuNi02LjctMS40YzAuNC0xLjgsMC43LTMuMywxLTQuOWMwLjgsMCwxLjYsMCwyLjUsMGMwLjEsMC41LDAuMiwxLDAuMywxLjZjMS44LDAuNSwzLjgsMS4xLDUuNywxLjZjMC4zLDAuNiwwLjUsMS4zLDEsMi4zYzIuNi0yLDQuOC0zLjcsNy01LjRjMC41LDEuOSwwLjksMy43LDEuNSw1LjljLTIuMywwLTQuMywwLTYuMiwwYzAuNSwxLjEsMC45LDEuOSwxLjMsMi44YzIuNCwwLjYsNC4zLTAuMyw2LjEtMS43YzAuNS0wLjQsMS41LTAuMSwyLjMtMC4xYzAuMiwxLjIsMC40LDIuMSwwLjcsMy40YzEuMy0wLjksMi4yLTEuNiwzLjctMi43YzAuOSwxLDEuOSwyLjEsMywzLjNjMS45LDAuMiwyLjctMS4xLDMuMS0yLjdjMC0wLjIsMC42LTAuMiwxLjEtMC4zYzAuMiwwLjMsMC40LDAuNiwwLjcsMWMwLjMsMC40LDAuNiwwLjksMS40LDIuMWMwLjktMS4zLDEuNC0yLjEsMi0zYzAsMCwwLjIsMC4xLDAuMywwLjJjMC4yLDAuNiwwLjQsMS4yLDAuNiwxLjhjMS43LTAuOSwzLjctMi43LDUuMy00LjljMC4yLDAuNiwwLjUsMS4xLDAuNiwxLjZjMi4xLTEuMiw0LjItMi40LDYuMi0zLjdjMC40LDAuMywwLjcsMC42LDEuMiwxYzAuNi0xLjEsMS4yLTIsMS43LTIuOWMxLjgsMCwzLjYsMCw1LjQsMGMwLjYsMSwxLjEsMS45LDEuNCwyLjNjNS4yLTEsMTAtMC42LDE0LjcsMi4xYzAuNSwxLjMsMSwyLjksMS43LDUuMWMxLjctMy41LDMuMS02LjUsNC42LTkuNmMwLjQsMC4zLDAuNiwwLjcsMC44LDAuN2MyLjQsMC4yLDQuOSwwLjQsNi44LDAuNWMxLjcsMC41LDIuOCwwLjksNCwxLjNjMC4xLDEuMiwwLjMsMi40LDAuNCwzLjdjMS45LTEuMiwzLjQtMi4zLDUtMy4zYzAuOCwxLjMsMS41LDIuMywyLjIsMy40YzQuOC0wLjUsOS41LTEsMTMuNy0xLjRjMS43LDEuNCwyLjksMi41LDQuNyw0LjFjMC4xLTIuNCwwLjEtNCwwLjItNS42YzAtMC40LDAuMi0wLjksMC40LTEuM2MxLjUsMCwyLjgsMCw0LjEsMGMwLjUsMC41LDEsMSwxLjYsMS42YzAsMS4zLDAsMi43LDAsNC4yYzIuNSwwLjYsNC4xLTAuNiw1LjctMi4xYzAuMi0wLjksMC4zLTEuOCwwLjUtMi44YzQuNSwxLjIsOC44LDIuNCwxMy4yLDJjMi4zLDEuNCw0LjQsMi43LDcsNC4yYzIuMy0xLjEsNS0yLjQsNy42LTMuN2MzLTEuNSw2LTIuOSw5LjQtMi41YzIuOSwyLjIsNS43LDQuNSw4LjUsNi43YzAuMSwwLjgsMC4yLDEuNSwwLjMsMmMyLjktMiw1LjctMy44LDguMy01LjZjMS41LDAsMywwLDQuNiwwYy0wLjEsMC43LTAuMiwxLjEtMC40LDEuNmMtMC4xLDAuMy0wLjQsMC42LTEuNCwxLjljMi42LTEuMiw0LTEuOCw1LjQtMi41YzAuMiwwLjcsMC40LDEuMywwLjcsMi4xYzAuOC0wLjUsMS41LTAuOCwyLjItMS4yYzAuMiwwLjYsMC40LDEuMSwwLjYsMS43YzIuMiwxLjEsNC4zLTEsNi42LDBjMC42LTEsMS4zLTIsMi0zYzAuOSwwLjUsMS42LDAuOSwyLjIsMS4zYzIuMy0xLjYsNC42LTEuMSw3LjEtMC45YzAsMS4xLDAsMS45LDAsMi43YzEuMi0zLDMuNi0zLjcsNi40LTMuOWMyLjctMi43LDUsMC42LDcuMywwLjJjMC45LDEuNSwxLjcsMi43LDIuMywzLjdjMS40LDAsMi41LDAsMy43LDBjLTAuNi0xLjMtMS4yLTIuNC0xLjgtMy42YzEuMy0wLjUsMi40LTEsMy42LTEuNWMwLjIsMS4zLDAuMywyLjIsMC41LDIuOWMwLjgsMC4zLDEuMywwLjUsMi4xLDAuOGMtMC41LDEuMS0wLjksMS45LTEuNSwzYzEuMywwLjksMi42LDEuNywzLjksMi41YzAuNy0xLDEuMy0yLDEuOS0yLjljMC4yLDAuMSwwLjQsMC4yLDAuNiwwLjNjLTAuMywxLjgtMC42LDMuNi0xLDUuNWMwLjUsMC4xLDAuOSwwLjEsMS40LDAuMmMwLjQtMS4xLDAuNS0yLjMsMS4xLTMuMWMwLjYtMC44LDEuNi0xLjIsMi41LTEuN2MtMC41LTEuMS0wLjktMS45LTEuMy0yLjljMy4xLTEsNS41LDAuNyw4LjEsMS4xYzEuOCwwLjMsMy41LDEuNCw1LjMsMS41YzEuNywwLjEsMy40LTAuNiw1LjEtMC45YzEuNywwLjgsMi4yLDMuNCw0LjcsM2MwLDguNywwLDE3LjMsMCwyNmMtMi4zLDAtNC42LDAtNi43LDBjLTAuMywwLjktMC41LDEuNC0wLjcsMmMtMC41LTAuNC0wLjgtMC43LTEuNC0xLjFjLTAuMiwxLjEtMC4zLDItMC40LDIuN2MtMC42LTAuNi0xLjMtMS4zLTEuOC0xLjhjLTMsMC4yLTUuNSwwLTcuOCwwLjVjLTUuMSwxLjItNy4xLDAuNS05LjUtNC4xYy0yLjcsMS01LjIsMS4xLTcuOSwwLjFjLTAuNy0wLjMtMS42LTAuNS0yLjMtMC4zYy0xLjUsMC41LTIuOCwxLjMtNC4yLDEuOWMtMC4zLDAuMS0wLjktMC4yLTEuNC0wLjNjMC40LTEuMiwwLjgtMi4zLDEuNS00LjRjLTMuNywyLjMtNi41LDMuOS05LjYsNS45Yy00LjctMC40LTguMy0zLjktMTIuOC02LjJjLTEuOCwwLTMuOCwwLTUuMywwYy0wLjgtMS4xLTEuNS0yLTIuNy0zLjZjMCwyLjEsMCwzLjIsMCw0LjNjLTMuOCwxLjYtNy42LDIuNC0xMC44LDIuM2MtMS4xLTEuMy0yLjMtMi43LTMuNi00LjNjLTEsMS44LTAuNCw0LjItMy40LDQuNWMtMi45LTEuMi02LjMtMi43LTkuOS00LjJjLTEuNiwyLTMuMiw0LTUsNi4zYy00LTEuNS04LDEuOC0xMi4xLDAuMmMtMC41LDAuMy0wLjksMC41LTEuMywwLjdjLTEuNC0xLTIuNy0xLjgtMy42LTIuNWMtMC45LTIuOC0xLjctNS4yLTIuNS03LjljLTEuMiwxLjItMiwyLTMsM2MwLDEuMywwLDIuOCwwLDQuMWMtNSwwLjUtOS43LDItMTQuNiwwLjljLTAuMi0wLjktMC4zLTEuOC0wLjYtM2MtMS4xLDAuNS0xLjksMC45LTIuNiwxLjNjLTEuNy0wLjYtMy4yLTEuMi00LjktMS44Yy0wLjUsMC45LTEuMSwxLjgtMS43LDIuOGMtMC40LTAuOS0wLjktMS44LTEuMi0yLjRjMC4yLTAuNywwLjMtMS4xLDAuNy0yLjFjLTIuNywxLjQtNC43LDIuNC02LjcsMy40Yy0xLjgtMy4zLTQuOC02LjEtNi4xLTUuNmMtMC40LDAuNC0wLjksMC45LTEuMywxLjVjMC4zLDAuNywwLjYsMS4zLDEuMSwyLjNjLTAuOC0wLjEtMS4zLTAuMS0xLjgtMC4xYy0wLjItMS4yLTAuMy0yLTAuNi0zLjVjLTEuNCwxLjEtMi4zLDEuOC0zLjMsMi41Yy0wLjMtMC44LTAuNS0xLjMtMC44LTIuMmMtMS4xLDEuNi0yLjEsMi45LTMuMSw0LjRjLTIuMy0wLjgtNC43LTAuOC01LjYtMy44Yy0wLjUtMS40LTIuMS0yLjMtMy4xLTMuNGMtMC44LDEuMS0xLjUsMi4xLTIuMiwzLjFjLTEuOS0wLjUtMy41LTAuOS01LjUtMS40YzAuNSwxLDAuNywxLjQsMSwyYy0wLjgsMC41LTEuNiwwLjktMi40LDEuM2MtMC40LTEtMC43LTEuNi0xLjEtMi40Yy0xLjUsMC44LTIuNywxLjQtMy44LDJjLTAuNywxLjYtMS4yLDMtMS44LDQuM2MtMS40LTEuOC0yLjYtMy4zLTMuOC00LjhjLTAuMS0wLjctMC4xLTEuNS0wLjItMi4xYy0xLjgsMC0zLjMsMC00LDBjLTMuMSwxLjktNS42LDMuNC04LjMsNWMtMC40LTAuOC0wLjctMS41LTEuMy0yLjZjLTEuNCwwLjctMi43LDEuNC00LjEsMi4xYy0wLjMtMC4yLTAuOS0wLjUtMS42LTFjLTEsMS40LTEuOSwyLjctMi44LDMuOWMtMC4xLDAuMS0wLjQsMC4xLTAuNywwLjFjLTAuMi0xLTAuMy0xLjgtMC41LTMuMWMtMC41LDEuMS0wLjgsMS43LTEuNiwzLjNjMC0yLjIsMC0zLjUsMC00LjdjLTAuMywwLjItMC42LDAuMy0wLjgsMC41Yy0xLjEtMS4yLTIuMy0yLjMtMy42LTMuNmMtMy4zLDEuMi0yLjksNS40LTQuNyw3LjZjLTQuOSwwLjUtOS4zLDAuOS0xMy44LDEuNGMtMC4xLTEuMi0wLjItMi0wLjMtMi45Yy0xLjUsMC0yLjksMC00LjIsMGMtMS41LDAuNy0yLjksMS4zLTQuMiwyYy0wLjMtMC45LTAuNi0xLjUtMC45LTIuNGMtNi43LDEtMTIuNSw0LjQtMTkuMSw2LjZjLTAuOS0xLjItMS45LTIuNC0yLjYtMy40Yy0yLjksMS45LTUuNSwyLjktOC43LDEuMmMtMC41LDAuOS0xLjEsMS45LTEuNiwyLjhjLTAuNywwLTEuMywwLTIuMiwwYy0wLjYtMC45LTEuMy0yLTEuOC0yLjhjLTIuMSwwLjMtNC4xLDAuNy01LjgsMC45Yy0wLjktMC45LTEuNS0xLjUtMi4xLTIuMWMtMS4zLDAuNi01LjgsMS4xLTYuOCwxLjJjLTIuNSwwLjItNC45LDAuNi04LjEsMWMtMC4yLDAuNC0wLjYsMS4zLTEsMmMtMi0wLjYtMy41LTEuMS01LjMtMS42Yy0wLjYsMC44LTEuMSwxLjYtMiwzYy0wLjctMi0xLjItMy4zLTEuNy00LjdjLTEsMS4xLTEuOSwyLjItMi40LDIuOGMtMS45LDAtMi45LDAtNCwwYy0wLjEtMS0wLjEtMS44LTAuMi0yLjRjLTIsMC4zLTQuMSwwLTUuNiwwLjljLTIuMywxLjMtNC44LDEuMS02LjcsMC41Yy0yLjMtMC44LTQuNS0xLjMtNi41LTAuM2MtMi4xLDEuMS00LjctMC41LTYuNCwxLjVjMCwwLjEtMC41LTAuMy0xLTAuNWMwLjQtMC45LDAuOS0xLjksMS4zLTIuOWMtMC45LTAuNy0xLjYtMS4yLTIuOC0yLjFDNDMzLjgsNDMuOCw0MzIuNCw0Ni41LDQzMC45LDQ5LjJ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4=) bottom repeat-x;
            background-size: auto 0.25em;
            color: inherit;
            text-decoration: none;
        }

        .open-book s,
        .open-book strike {
            background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4MDAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwMCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJCS5zdDB7ZmlsbDojQ0MwMDAwO30NCgk8L3N0eWxlPg0KCTxnIGlkPSJZMkJjMjcudGlmIj4NCgkJPGc+DQoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDMwLjksNDkuMmMtMSwwLTIsMC0zLDBjLTAuMS0wLjMtMC4yLTAuOC0wLjQtMC44Yy0xLjgtMC40LTQtMC4zLTUuNC0xLjNjLTEuOC0xLjQtNC4zLDAuMS01LjgtMS45Yy00LjMtMS04LjUtMi4zLTEyLjgtMi45Yy0zLjQtMC41LTYuOS0wLjEtMTAuMy0wLjFjLTAuMywwLjgtMC41LDEuNC0wLjcsMmMtMC41LTAuMy0wLjktMC42LTEuNC0xYy0wLjIsMS4yLTAuMywyLjEtMC42LDMuN2MtMS0xLjMtMS41LTIuMS0xLjktMi42Yy0yLjgsMC01LjMtMC41LTcuNCwwLjFjLTIuMiwwLjctMy43LDAuOC01LjktMC4xYy0yLjItMC45LTIuOS0yLjYtNC00Yy0yLjUsMS4yLTUuMSwxLjEtNy41LDAuMmMtMS4yLTAuNS0yLTAuNi0zLjEsMC4xYy0xLjIsMC43LTIuNiwxLTMuOSwxLjRjLTAuMiwwLjEtMC42LTAuMi0wLjgtMC4zYy0xLjItMS4zLDIuNC0yLjMsMC0zLjdjLTIuNiwxLjYtNS4yLDMuMy04LDVjLTAuOCwwLTEuOSwwLjMtMi43LTAuMWMtMi40LTEuMS00LjgtMi4zLTYuOS0zLjljLTEuOS0xLjUtMy45LTIuMi02LjItMmMtMSwwLjEtMiwwLTIuOCwwYy0wLjgtMS4xLTEuNC0yLTIuNy0zLjljMCwyLjMsMCwzLjYsMCw0LjljLTMuNywwLjgtNywxLjYtMTAuMywyLjNjLTEuNC0xLjgtMi42LTMuMi0zLjktNC45Yy0wLjQsMC44LTAuNiwxLjItMC43LDEuNmMtMC44LDMuMi0xLDMuMS00LjIsMi4zYy0yLjktMC43LTUuNC0yLjQtOC40LTMuNmMtMS42LDItMy4yLDQtNS4yLDYuNWMtMy44LTIuMi03LjgsMi0xMS45LDBjLTAuNCwwLjMtMC44LDAuNS0xLjIsMC44Yy0xLjQtMC45LTIuNy0xLjgtMy44LTIuNWMtMC44LTIuNy0xLjYtNS4yLTIuNC04LjJjLTEuMiwxLjMtMS45LDIuMi0zLDMuNGMwLDEsMCwyLjUsMCwzLjljLTUuMSwwLjYtOS45LDIuMS0xNS4xLDAuOWMwLTEsMC0xLjcsMC0yLjljLTEuMSwwLjUtMS45LDAuOS0yLjcsMS4zYy0xLjYtMC42LTMuMS0xLjItNC44LTEuOWMtMC42LDAuOC0xLjIsMS44LTEuOSwyLjhjLTAuNC0wLjktMC44LTEuNy0xLjItMi40YzAuMi0wLjQsMC40LTAuOSwxLjEtMi4yYy0zLDEuNS01LDIuNS03LjEsMy42Yy0xLTMtMy40LTQuNS02LTUuN2MtMC41LDAuNi0xLjEsMS4xLTEuNSwxLjZjMC41LDAuOSwwLjgsMS41LDEuMSwyLjJjLTAuOCwwLTEuMSwwLTEuNywwYy0wLjItMS0wLjQtMi0wLjctMy41Yy0xLjMsMC45LTIuMywxLjYtMy4zLDIuM2MtMC4yLTAuNi0wLjUtMS4yLTAuOC0yYy0xLjEsMS41LTIuMSwyLjktMyw0LjJjLTUuMywwLjQtNS45LTUtOS4xLTYuOWMtMC43LDEtMS40LDItMiwzYy0xLjgtMC40LTMuMy0wLjgtNC44LTEuMWMtMC4yLDAtMC40LDAuMy0wLjYsMC41YzAuMywwLjMsMC42LDAuNiwxLDFjLTAuOCwwLjYtMS42LDEuMS0yLjUsMS43Yy0wLjUtMS0wLjgtMS42LTEuMi0yLjVjLTEuNSwwLjgtMi44LDEuNi0zLjgsMi4yYy0wLjcsMS43LTEuMiwyLjktMS42LDQuMWMtMS40LTEuNy0yLjYtMy4yLTQuMS01YzAtMC40LDAtMS4yLDAtMS45Yy0xLjcsMC0zLjEsMC0zLjksMGMtMy4xLDEuOS01LjYsMy40LTguMiw1LjFjLTAuNC0wLjgtMC43LTEuNS0xLjEtMi4yYy0wLjYsMC0xLjMsMC0yLjEsMGMtMC42LDAuNi0xLjMsMS4zLTIsMS45Yy0wLjUtMC40LTEtMC43LTEuOC0xLjNjLTEsMS40LTEuOSwyLjctMi44LDMuOWMtMC4xLDAuMi0wLjQsMC4xLTAuNywwLjJjLTAuMi0xLTAuNC0xLjktMC42LTMuMmMtMC41LDEtMC44LDEuNy0xLjUsMy4zYzAtMi4yLDAtMy40LDAtMy41Yy0xLjktMS45LTMuMS0zLjEtNC4zLTQuM2MtMy41LDEuMS0zLDUuNC00LjgsNy42Yy00LjgsMC41LTkuMywwLjktMTMuOCwxLjRjLTAuMS0xLjEtMC4yLTEuOS0wLjMtMi45Yy0xLjUsMC0yLjksMC00LjIsMGMtMS40LDAuNy0yLjgsMS4zLTQuMiwyYy0wLjMtMC45LTAuNi0xLjQtMC45LTIuM2MtNi43LDAuNi0xMi41LDQuNC0xOSw2LjNjLTAuOS0xLjItMS45LTIuMy0yLjYtMy4zYy0zLDEuOC01LjYsMy4xLTguNywxLjJjLTAuNSwxLTEuMSwxLjktMS42LDIuN2MtMi43LDAuOC0zLjMtMS4yLTQtMi43Yy0yLjIsMC40LTQuMiwwLjctNS45LDFjLTAuOS0wLjktMS41LTEuNS0yLjEtMi4xYy0xLjIsMC42LTUuOSwxLjEtNi44LDEuMmMtMi41LDAuMi00LjksMC42LTguMSwxYy0wLjIsMC40LTAuNywxLjMtMS4xLDJjLTItMC42LTMuNS0xLjEtNS4zLTEuNmMtMC42LDAuOC0xLjEsMS42LTIuMSwyLjljLTAuNy0xLjktMS4yLTMuMi0xLjctNC44Yy0xLDEuMi0xLjgsMi40LTIuMywzYy0xLjgsMC0zLDAtNCwwYy0wLjEtMS0wLjEtMS44LTAuMi0yLjNjLTIsMC4zLTQuMSwwLTUuNSwwLjljLTIuMywxLjMtNC44LDEuMS02LjcsMC41Yy0yLjMtMC44LTQuNi0xLjMtNi41LTAuM2MtMi4xLDEuMS00LjctMC41LTYuNCwxLjVjMCwwLjEtMC41LTAuMy0xLTAuNWMwLjQtMSwwLjktMS45LDEuMy0yLjljLTAuOS0wLjctMS42LTEuMi0yLjgtMi4xYy0xLjYsMy4xLTMsNS44LTQuNCw4LjVjLTEsMC0yLDAtMywwYy0wLjEtMC4zLTAuMi0wLjgtMC40LTAuOGMtMS44LTAuNC00LTAuMy01LjQtMS4zYy0xLjgtMS4zLTQuMywwLTUuOC0xLjlDMTAuOSw0NC4xLDUuNiw0Mi45LDAsNDEuN2MwLTguMSwwLTE2LjYsMC0yNS4yYzEtMC45LDIuMy0xLjcsMS44LTMuOGMtMC42LTAuNy0wLjYtMS41LTEuNS0yLjZDMS45LDguMSwyLjYsNiw0LjQsMy44YzEuMywwLjYsMi41LDEuMSwzLjcsMS42QzcuNSw4LDcuOCwxMC4yLDkuMywxMi4yYzAuNiwwLDEuMywwLDIuNCwwYzAuNy0wLjgsMS42LTIsMi43LTMuNGMwLjQsMS4xLDAuNiwxLjcsMC44LDIuMmMyLjYsMCw1LjEsMCw3LjksMGMwLTEuNCwwLTIuNSwwLTMuNWMxLTAuNCwxLjgtMC43LDIuOC0xLjJjMi4yLDEuOSw0LjYsMy45LDYuNyw1LjhjMS4yLDAsMi4xLDAsMi41LDBjMS4zLTEuNiwyLjMtMi43LDMuMy0zLjljMC41LDAuOSwwLjksMS42LDEuNiwyLjZjMS0xLjUsMS42LTIuNSwyLjMtMy41YzIuOSwwLDMtMC4xLDUuNSwxLjJjNC4xLDIuMiw4LjYsMi40LDEyLjcsMS4zYzMuMi0wLjgsNi4xLTAuMyw5LjItMC42YzMuMi0wLjQsNi4zLDAuMiw5LjQsMS41YzIuNywxLjEsNS41LDEsNy43LTAuOWMyLjctMi4zLDUuNC00LjQsOC42LTUuM2MxLjIsMC40LDIuMywwLjcsNCwxLjJjMC42LDEuNiwxLjQsMy40LDIuMiw1LjVjMC42LTEsMS4zLTIsMS43LTIuN2MxLjUtMC41LDIuOS0wLjksNC4xLTEuM2MwLjYsMS40LDEuMiwyLjcsMiw0LjRjMi42LTYuMiw4LTYuOSwxMy4yLTguNWMyLjEsMy40LDQuMiw2LjksNi42LDEwLjdjMS0xLjksMS42LTMuMywyLjMtNC42YzAuNywwLDEuNCwwLDIsMGMtMC4zLTAuMy0wLjYtMC42LTAuOS0xYzAuOC0wLjEsMS43LTAuMywyLjUtMC40Yy0wLjEtMC4yLTAuMy0wLjQtMC40LTAuNWMtMS41LDAtMi45LDAtNCwwYy0wLjgtMC43LTEuMy0xLjEtMS40LTEuMmMwLjQtMS44LDAuNy0zLjMsMS00LjdjMC45LDAsMS43LDAsMi40LDBjMC4yLDAuNywwLjQsMS4zLDAuNSwxLjZjMi4xLDAuNiwzLjksMS4xLDUuNSwxLjZjMC4yLDAuNywwLjUsMS4yLDAuNywxLjhjMS4yLTAuNSwyLjQtMC43LDMuMi0xLjRjMS40LTEuMiwyLjUtMi42LDMuOS00LjJjMC42LDIuNCwxLjEsNC4zLDEuNiw2LjNjLTIuNCwwLjEtNC4zLDAuMi02LjMsMC40YzAuNiwwLjcsMC45LDEsMS4xLDEuNWMwLjIsMC40LDAuMiwwLjksMC4zLDEuM2MxLjYtMC4xLDMsMC40LDQuMy0wLjljMC43LTAuNywyLTAuOCwzLTFjMC40LTAuMSwwLjksMC4yLDEuMiwwLjJjMC4yLDEuMSwwLjMsMS45LDAuNiwzLjRjMS4zLTEuMSwyLjItMS44LDMuMy0yLjdjMC44LDEuMSwxLjcsMi4yLDIuMSwyLjhjMy40LDEsMy44LTEuMyw0LjktMy40YzAuOSwxLjMsMS40LDIsMi4xLDMuMWMxLTAuOSwxLjgtMS43LDIuNi0yLjRjMC4zLDAuNywwLjcsMS40LDEsMi4xYzEuNC0wLjQsMi41LTEsMi40LTIuNmMxLjYsMC4xLDEuOC0xLjUsMi42LTIuN2MwLjQsMS4xLDAuNiwxLjcsMC43LDJjMi4xLTEuMiw0LjEtMi40LDYuMi0zLjdjMC4zLDAuMywwLjcsMC42LDEuMiwxYzAuNy0xLDEuMy0yLDEuOS0zYzEuNywwLDMuMywwLDUuMiwwYzAuNSwwLjksMS4xLDEuOCwxLjYsMi42YzUtMS42LDkuOC0wLjUsMTQuNSwxLjdjMC41LDEuNSwxLjEsMywxLjgsNS4yYzEuNy0zLjYsMy4yLTYuNiw0LjYtOS41YzIsMS42LDQsMC42LDUuOSwxYzIsMC40LDMuOSwwLjgsNiwxLjNjMCwxLjQsMCwyLjUsMCwzLjljMS41LTEuMSwyLjgtMiw0LTIuOWMwLjQtMC4yLDAuOS0wLjIsMS4yLTAuM2MwLjYsMS4xLDEuMiwyLDEuOCwzYzEuOSwwLDQsMC42LDUuNS0wLjFjMi45LTEuMyw1LjgtMC42LDktMWMwLjQsMC41LDAuOSwxLjIsMS41LDEuN2MwLjcsMC42LDEuNSwxLDIuOCwxLjljMC0yLjYsMC00LjUsMC02LjVjMS44LDAsMy4zLDAsNC41LDBjMi44LDEuNCwwLjgsNC4xLDIuMiw2LjJjMS44LTAuOCwzLjYtMS42LDUuMi0yLjNjMC4yLTEuNCwwLjQtMi4yLDAuNS0yLjljMy42LDAuNiw2LjgsMS40LDEwLjEsMS43YzIuMSwwLjIsNC4xLDAuMyw1LjgsMS43YzEuMiwxLDIuNiwxLjYsNC4xLDIuNWM1LjgtMS44LDEwLjYtNi43LDE2LjktNi4xYzEuOCwxLjMsMy4yLDIuMiw0LjYsMy4zYzEuNCwxLjEsMi42LDIuMyw0LjQsMy44YzAsMC4yLDAsMSwwLDEuOWMxLjgtMC44LDIuNC0yLjcsNC4zLTMuMWMxLjYtMC4zLDIuOS0xLjgsNC41LTIuOWMxLjIsMC4xLDIuNywwLjIsNC4zLDAuM2MtMC41LDEuMS0wLjgsMS45LTEuMywzLjFjMi0wLjksMy40LTEuNSw0LjctMi4xYzAuMywwLjgsMC41LDEuMywwLjgsMmMwLjktMC40LDEuNS0wLjcsMi4yLTEuMWMwLjIsMC42LDAuNCwxLjIsMC43LDEuOWMxLjgtMC4zLDMuNywwLjQsNS4zLTAuOGMwLjMsMC4zLDAuNiwwLjUsMC45LDAuOGMwLjctMSwxLjQtMi4xLDIuMS0zLjFjMC4yLDAsMC40LTAuMSwwLjUsMGMwLjUsMC4zLDEuMSwwLjcsMSwwLjZjMi45LTAuMyw1LjItMC41LDcuNS0wLjhjMC4yLDEuMywwLjQsMi4yLDAuNiwzLjRjMy01LjgsMTAuNS01LjksMTMuOC0zLjZjMC44LDEuMiwxLjUsMi4zLDIuMSwzLjFjMS41LDAsMi42LDAsMy44LDBjLTAuNy0xLjMtMS4zLTIuMy0xLjktMy40YzEuMS0wLjUsMi4yLTEuMSwzLjYtMS43YzAuMywxLjMsMC41LDIuMywwLjYsMi45YzAuOSwwLjUsMS40LDAuNywyLDFjLTAuNiwxLjEtMSwxLjktMS41LDNjMS40LDAuOSwyLjcsMS42LDQuMSwyLjRjMC43LTEuMSwxLjItMiwxLjgtMi45YzAuMiwxLjYsMCwzLjYtMC41LDQuOWMtMC4xLDAuMiwwLjIsMC42LDAuMywwLjljMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjJjMC4zLDAsMC42LTAuMSwwLjktMC4yYzAuNi0yLjksMC42LTIuOSwzLjMtNC41Yy0wLjQtMS0wLjctMS45LTEuMy0zLjNjMS4xLDAsMS43LTAuMSwyLjQsMGMwLjYsMC4xLDEuMiwwLjMsMS44LDAuNGM0LjgsMC44LDkuNCw0LDE0LjcsMS4yYzEsMS4yLDEuOSwyLjQsMi43LDMuM2MyLjYsMC4yLDMuOS0wLjcsMy43LTMuM2MtMC42LTAuOC0xLjQtMS43LTIuMy0yLjhjMS43LTIuMiwzLjMtNC4xLDUtNi4yYzEuMywwLjYsMi4zLDEsMi44LDEuM2MwLjcsMi44LDEuMiw1LDEuNyw3YzMuMSwwLjksMy43LTIsNS42LTIuN2MwLjMsMC43LDAuNSwxLjMsMC42LDEuN2MyLjYsMCw1LjEsMCw3LjcsMGMwLTEuMywwLTIuNCwwLTMuNGMxLTAuNSwxLjgtMC45LDMtMS41YzIuMSwxLjksNC40LDQsNi42LDZjMSwwLDIsMCwyLjYsMGMxLjItMS41LDIuMi0yLjcsMy4xLTMuOWMwLjgsMC45LDEuMywxLjUsMS45LDIuMmMwLjktMS40LDEuNS0yLjQsMi4zLTMuN2MxLjgsMC42LDMuNiwwLjgsNSwxLjZjNC4xLDIuNCw4LjUsMi4yLDEyLjgsMS42YzYuNi0wLjksMTIuNS0xLjQsMTcuMiwwLjJjMi4zLDAuOCw0LjYsMS4yLDYuNiwwLjljNC0yLjUsNy42LTQuOCwxMC42LTYuOGMyLDAuNiwzLjIsMC45LDQuNSwxLjNjMC43LDEuOCwxLjUsMy42LDIuMyw1LjZjMC43LTEuMSwxLjItMiwxLjgtMi45YzEuNC0wLjQsMi44LTAuOSw0LjEtMS4yYzAuNiwxLjUsMS4xLDIuOCwxLjgsNC41YzIuNy02LjMsOC4yLTcuMSwxMy41LTguNWMyLDMuNCw0LDYuOCw2LjQsMTAuN2MwLjktMS45LDEuNi0zLjMsMi4xLTQuM2MxLjQtMC42LDIuNi0xLjIsNC44LTIuMWMtMy0wLjgtNS41LDAuNi02LjctMS40YzAuNC0xLjgsMC43LTMuMywxLTQuOWMwLjgsMCwxLjYsMCwyLjUsMGMwLjEsMC41LDAuMiwxLDAuMywxLjZjMS44LDAuNSwzLjgsMS4xLDUuNywxLjZjMC4zLDAuNiwwLjUsMS4zLDEsMi4zYzIuNi0yLDQuOC0zLjcsNy01LjRjMC41LDEuOSwwLjksMy43LDEuNSw1LjljLTIuMywwLTQuMywwLTYuMiwwYzAuNSwxLjEsMC45LDEuOSwxLjMsMi44YzIuNCwwLjYsNC4zLTAuMyw2LjEtMS43YzAuNS0wLjQsMS41LTAuMSwyLjMtMC4xYzAuMiwxLjIsMC40LDIuMSwwLjcsMy40YzEuMy0wLjksMi4yLTEuNiwzLjctMi43YzAuOSwxLDEuOSwyLjEsMywzLjNjMS45LDAuMiwyLjctMS4xLDMuMS0yLjdjMC0wLjIsMC42LTAuMiwxLjEtMC4zYzAuMiwwLjMsMC40LDAuNiwwLjcsMWMwLjMsMC40LDAuNiwwLjksMS40LDIuMWMwLjktMS4zLDEuNC0yLjEsMi0zYzAsMCwwLjIsMC4xLDAuMywwLjJjMC4yLDAuNiwwLjQsMS4yLDAuNiwxLjhjMS43LTAuOSwzLjctMi43LDUuMy00LjljMC4yLDAuNiwwLjUsMS4xLDAuNiwxLjZjMi4xLTEuMiw0LjItMi40LDYuMi0zLjdjMC40LDAuMywwLjcsMC42LDEuMiwxYzAuNi0xLjEsMS4yLTIsMS43LTIuOWMxLjgsMCwzLjYsMCw1LjQsMGMwLjYsMSwxLjEsMS45LDEuNCwyLjNjNS4yLTEsMTAtMC42LDE0LjcsMi4xYzAuNSwxLjMsMSwyLjksMS43LDUuMWMxLjctMy41LDMuMS02LjUsNC42LTkuNmMwLjQsMC4zLDAuNiwwLjcsMC44LDAuN2MyLjQsMC4yLDQuOSwwLjQsNi44LDAuNWMxLjcsMC41LDIuOCwwLjksNCwxLjNjMC4xLDEuMiwwLjMsMi40LDAuNCwzLjdjMS45LTEuMiwzLjQtMi4zLDUtMy4zYzAuOCwxLjMsMS41LDIuMywyLjIsMy40YzQuOC0wLjUsOS41LTEsMTMuNy0xLjRjMS43LDEuNCwyLjksMi41LDQuNyw0LjFjMC4xLTIuNCwwLjEtNCwwLjItNS42YzAtMC40LDAuMi0wLjksMC40LTEuM2MxLjUsMCwyLjgsMCw0LjEsMGMwLjUsMC41LDEsMSwxLjYsMS42YzAsMS4zLDAsMi43LDAsNC4yYzIuNSwwLjYsNC4xLTAuNiw1LjctMi4xYzAuMi0wLjksMC4zLTEuOCwwLjUtMi44YzQuNSwxLjIsOC44LDIuNCwxMy4yLDJjMi4zLDEuNCw0LjQsMi43LDcsNC4yYzIuMy0xLjEsNS0yLjQsNy42LTMuN2MzLTEuNSw2LTIuOSw5LjQtMi41YzIuOSwyLjIsNS43LDQuNSw4LjUsNi43YzAuMSwwLjgsMC4yLDEuNSwwLjMsMmMyLjktMiw1LjctMy44LDguMy01LjZjMS41LDAsMywwLDQuNiwwYy0wLjEsMC43LTAuMiwxLjEtMC40LDEuNmMtMC4xLDAuMy0wLjQsMC42LTEuNCwxLjljMi42LTEuMiw0LTEuOCw1LjQtMi41YzAuMiwwLjcsMC40LDEuMywwLjcsMi4xYzAuOC0wLjUsMS41LTAuOCwyLjItMS4yYzAuMiwwLjYsMC40LDEuMSwwLjYsMS43YzIuMiwxLjEsNC4zLTEsNi42LDBjMC42LTEsMS4zLTIsMi0zYzAuOSwwLjUsMS42LDAuOSwyLjIsMS4zYzIuMy0xLjYsNC42LTEuMSw3LjEtMC45YzAsMS4xLDAsMS45LDAsMi43YzEuMi0zLDMuNi0zLjcsNi40LTMuOWMyLjctMi43LDUsMC42LDcuMywwLjJjMC45LDEuNSwxLjcsMi43LDIuMywzLjdjMS40LDAsMi41LDAsMy43LDBjLTAuNi0xLjMtMS4yLTIuNC0xLjgtMy42YzEuMy0wLjUsMi40LTEsMy42LTEuNWMwLjIsMS4zLDAuMywyLjIsMC41LDIuOWMwLjgsMC4zLDEuMywwLjUsMi4xLDAuOGMtMC41LDEuMS0wLjksMS45LTEuNSwzYzEuMywwLjksMi42LDEuNywzLjksMi41YzAuNy0xLDEuMy0yLDEuOS0yLjljMC4yLDAuMSwwLjQsMC4yLDAuNiwwLjNjLTAuMywxLjgtMC42LDMuNi0xLDUuNWMwLjUsMC4xLDAuOSwwLjEsMS40LDAuMmMwLjQtMS4xLDAuNS0yLjMsMS4xLTMuMWMwLjYtMC44LDEuNi0xLjIsMi41LTEuN2MtMC41LTEuMS0wLjktMS45LTEuMy0yLjljMy4xLTEsNS41LDAuNyw4LjEsMS4xYzEuOCwwLjMsMy41LDEuNCw1LjMsMS41YzEuNywwLjEsMy40LTAuNiw1LjEtMC45YzEuNywwLjgsMi4yLDMuNCw0LjcsM2MwLDguNywwLDE3LjMsMCwyNmMtMi4zLDAtNC42LDAtNi43LDBjLTAuMywwLjktMC41LDEuNC0wLjcsMmMtMC41LTAuNC0wLjgtMC43LTEuNC0xLjFjLTAuMiwxLjEtMC4zLDItMC40LDIuN2MtMC42LTAuNi0xLjMtMS4zLTEuOC0xLjhjLTMsMC4yLTUuNSwwLTcuOCwwLjVjLTUuMSwxLjItNy4xLDAuNS05LjUtNC4xYy0yLjcsMS01LjIsMS4xLTcuOSwwLjFjLTAuNy0wLjMtMS42LTAuNS0yLjMtMC4zYy0xLjUsMC41LTIuOCwxLjMtNC4yLDEuOWMtMC4zLDAuMS0wLjktMC4yLTEuNC0wLjNjMC40LTEuMiwwLjgtMi4zLDEuNS00LjRjLTMuNywyLjMtNi41LDMuOS05LjYsNS45Yy00LjctMC40LTguMy0zLjktMTIuOC02LjJjLTEuOCwwLTMuOCwwLTUuMywwYy0wLjgtMS4xLTEuNS0yLTIuNy0zLjZjMCwyLjEsMCwzLjIsMCw0LjNjLTMuOCwxLjYtNy42LDIuNC0xMC44LDIuM2MtMS4xLTEuMy0yLjMtMi43LTMuNi00LjNjLTEsMS44LTAuNCw0LjItMy40LDQuNWMtMi45LTEuMi02LjMtMi43LTkuOS00LjJjLTEuNiwyLTMuMiw0LTUsNi4zYy00LTEuNS04LDEuOC0xMi4xLDAuMmMtMC41LDAuMy0wLjksMC41LTEuMywwLjdjLTEuNC0xLTIuNy0xLjgtMy42LTIuNWMtMC45LTIuOC0xLjctNS4yLTIuNS03LjljLTEuMiwxLjItMiwyLTMsM2MwLDEuMywwLDIuOCwwLDQuMWMtNSwwLjUtOS43LDItMTQuNiwwLjljLTAuMi0wLjktMC4zLTEuOC0wLjYtM2MtMS4xLDAuNS0xLjksMC45LTIuNiwxLjNjLTEuNy0wLjYtMy4yLTEuMi00LjktMS44Yy0wLjUsMC45LTEuMSwxLjgtMS43LDIuOGMtMC40LTAuOS0wLjktMS44LTEuMi0yLjRjMC4yLTAuNywwLjMtMS4xLDAuNy0yLjFjLTIuNywxLjQtNC43LDIuNC02LjcsMy40Yy0xLjgtMy4zLTQuOC02LjEtNi4xLTUuNmMtMC40LDAuNC0wLjksMC45LTEuMywxLjVjMC4zLDAuNywwLjYsMS4zLDEuMSwyLjNjLTAuOC0wLjEtMS4zLTAuMS0xLjgtMC4xYy0wLjItMS4yLTAuMy0yLTAuNi0zLjVjLTEuNCwxLjEtMi4zLDEuOC0zLjMsMi41Yy0wLjMtMC44LTAuNS0xLjMtMC44LTIuMmMtMS4xLDEuNi0yLjEsMi45LTMuMSw0LjRjLTIuMy0wLjgtNC43LTAuOC01LjYtMy44Yy0wLjUtMS40LTIuMS0yLjMtMy4xLTMuNGMtMC44LDEuMS0xLjUsMi4xLTIuMiwzLjFjLTEuOS0wLjUtMy41LTAuOS01LjUtMS40YzAuNSwxLDAuNywxLjQsMSwyYy0wLjgsMC41LTEuNiwwLjktMi40LDEuM2MtMC40LTEtMC43LTEuNi0xLjEtMi40Yy0xLjUsMC44LTIuNywxLjQtMy44LDJjLTAuNywxLjYtMS4yLDMtMS44LDQuM2MtMS40LTEuOC0yLjYtMy4zLTMuOC00LjhjLTAuMS0wLjctMC4xLTEuNS0wLjItMi4xYy0xLjgsMC0zLjMsMC00LDBjLTMuMSwxLjktNS42LDMuNC04LjMsNWMtMC40LTAuOC0wLjctMS41LTEuMy0yLjZjLTEuNCwwLjctMi43LDEuNC00LjEsMi4xYy0wLjMtMC4yLTAuOS0wLjUtMS42LTFjLTEsMS40LTEuOSwyLjctMi44LDMuOWMtMC4xLDAuMS0wLjQsMC4xLTAuNywwLjFjLTAuMi0xLTAuMy0xLjgtMC41LTMuMWMtMC41LDEuMS0wLjgsMS43LTEuNiwzLjNjMC0yLjIsMC0zLjUsMC00LjdjLTAuMywwLjItMC42LDAuMy0wLjgsMC41Yy0xLjEtMS4yLTIuMy0yLjMtMy42LTMuNmMtMy4zLDEuMi0yLjksNS40LTQuNyw3LjZjLTQuOSwwLjUtOS4zLDAuOS0xMy44LDEuNGMtMC4xLTEuMi0wLjItMi0wLjMtMi45Yy0xLjUsMC0yLjksMC00LjIsMGMtMS41LDAuNy0yLjksMS4zLTQuMiwyYy0wLjMtMC45LTAuNi0xLjUtMC45LTIuNGMtNi43LDEtMTIuNSw0LjQtMTkuMSw2LjZjLTAuOS0xLjItMS45LTIuNC0yLjYtMy40Yy0yLjksMS45LTUuNSwyLjktOC43LDEuMmMtMC41LDAuOS0xLjEsMS45LTEuNiwyLjhjLTAuNywwLTEuMywwLTIuMiwwYy0wLjYtMC45LTEuMy0yLTEuOC0yLjhjLTIuMSwwLjMtNC4xLDAuNy01LjgsMC45Yy0wLjktMC45LTEuNS0xLjUtMi4xLTIuMWMtMS4zLDAuNi01LjgsMS4xLTYuOCwxLjJjLTIuNSwwLjItNC45LDAuNi04LjEsMWMtMC4yLDAuNC0wLjYsMS4zLTEsMmMtMi0wLjYtMy41LTEuMS01LjMtMS42Yy0wLjYsMC44LTEuMSwxLjYtMiwzYy0wLjctMi0xLjItMy4zLTEuNy00LjdjLTEsMS4xLTEuOSwyLjItMi40LDIuOGMtMS45LDAtMi45LDAtNCwwYy0wLjEtMS0wLjEtMS44LTAuMi0yLjRjLTIsMC4zLTQuMSwwLTUuNiwwLjljLTIuMywxLjMtNC44LDEuMS02LjcsMC41Yy0yLjMtMC44LTQuNS0xLjMtNi41LTAuM2MtMi4xLDEuMS00LjctMC41LTYuNCwxLjVjMCwwLjEtMC41LTAuMy0xLTAuNWMwLjQtMC45LDAuOS0xLjksMS4zLTIuOWMtMC45LTAuNy0xLjYtMS4yLTIuOC0yLjFDNDMzLjgsNDMuOCw0MzIuNCw0Ni41LDQzMC45LDQ5LjJ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L3N2Zz4=) center repeat-x;
            background-size: auto 0.5em;
            color: rgba(0,0,0,0.5);
            text-decoration: none;
        }

        .open-book sup {
            color: #cc0000;
            font-family: 'Rock Salt', cursive;
            left: 0;
            margin-top: -1em!important;
            max-width: 100%!important;
            position: absolute;
            text-align: center;
            width: 100%;
        }

        .open-book mark {
            background: linear-gradient(to bottom, rgba(222,255,0,1) 0%,rgba(222,255,0,0.5) 60%,rgba(222,255,0,1) 100%);
        }

        .open-book mark.pink {
            background: linear-gradient(to bottom, rgba(255,69,190,1) 0%,rgba(255,107,203,0.5) 60%,rgba(255,107,203,1) 100%);
        }

        .open-book mark.blue {
            background: linear-gradient(to bottom, rgba(73,179,255,1) 0%,rgba(107,193,255,0.5) 60%,rgba(107,193,255,1) 100%);
        }

        .open-book mark.green {
            background: linear-gradient(to bottom, rgba(67,226,15,1) 0%,rgba(39,229,54,0.5) 60%,rgba(39,229,54,1) 100%);
        }

        .open-book mark.orange {
            background: linear-gradient(to bottom, rgba(255,134,9,1) 0%,rgba(255,177,34,0.5) 60%,rgba(255,177,34,1) 100%);
        }

        .open-book hr {
            background-color: #000;
            border: 0;
            height: 2px;
            margin: 1em 0;
        }

        .open-book dl {
            border: solid 0 #ccc;
            border-width: 0.0625em 0;
            break-inside: avoid-column;
            margin: 1em auto;
            padding: 1em 0;
        }



        /*** MEDIA QUERIES ***/
        @media only screen and ( min-width: 50em ) {

            .open-book {
                margin: 1em;
                position: relative;
            }

            .open-book:before {
                background-color: #8B4513;
                border-radius: 0.25em;
                bottom: -1em;
                content: '';
                left: -1em;
                position: absolute;
                right: -1em;
                top: -1em;
                z-index: -1;
            }

            .open-book:after {
                background: linear-gradient(to right, transparent 0%,rgba(0,0,0,0.2) 46%,rgba(0,0,0,0.5) 49%,rgba(0,0,0,0.6) 50%,rgba(0,0,0,0.5) 51%,rgba(0,0,0,0.2) 52%,transparent 100%);
                bottom: -1em;
                content: '';
                left: 50%;
                position: absolute;
                top: -1em;
                transform: translate(-50%,0);
                width: 4em;
                z-index: 1;
            }

            .open-book > * {
                column-count: 2;
                column-gap: 6em;
                position: relative;
                z-index: 1;
            }

            /* Header/Footer */
            .open-book header:before,
            .open-book header:after,
            .open-book footer:before,
            .open-book footer:after {
                background: #fff;
                border-radius: 25%;
                content: '';
                height: 2em;
                position: absolute;
                z-index: -1;
                width: calc(50% + 2em);
            }

            .open-book header:before,
            .open-book footer:before,
            .open-book footer:after {
                border-top-left-radius: 0;
            }

            .open-book header:after,
            .open-book footer:before,
            .open-book footer:after {
                border-top-right-radius: 0;
            }

            .open-book header:before,
            .open-book header:after,
            .open-book footer:after {
                border-bottom-right-radius: 0;
            }

            .open-book header:before,
            .open-book header:after,
            .open-book footer:before {
                border-bottom-left-radius: 0;
            }

            .open-book header:before,
            .open-book header:after {
                top: -2.65em;
            }

            .open-book header:before,
            .open-book footer:before {
                right: 50%;
            }

            .open-book header:before {
                transform: rotate(-2deg);
            }

            .open-book header:after,
            .open-book footer:after {
                left: 50%;
            }

            .open-book header:after {
                transform: rotate(2deg);
            }

            .open-book footer:before,
            .open-book footer:after {
                bottom: -2.65em;
            }

            .open-book footer:before {
                transform: rotate(2deg);
            }

            .open-book footer:after {
                transform: rotate(-2deg);
            }

            .open-book header > *:last-child,
            .open-book footer > *:last-child {
                text-align: right;
            }

            .open-book footer #page-numbers {
                display: block;
            }

            /* Chapter Title */
            .open-book .chapter-title {
                font-size: 3em;
            }

            .open-book .chapter-title:before,
            .open-book .chapter-title:after {
                height: 0.125em;
            }

            /* Body Copy */
            .open-book article p {
                text-indent: 3em;
            }

            .open-book article > ul,
            .open-book article > ol {
                padding-left: 4em;
            }

        }

    </style>
</head>
<body>
    <div id="wrapper">
    <div id="container">
    <section class="open-book">
        <header>
        <h1>22/03/2019 🦊🦁</h1>
        <h6>Andreas A. Pappas</h6>
        </header>
        <article>
        <h2 class="chapter-title">📜Curriculum📜 vitæ</h2>
        <p>
            As of February of 2021 I've been a Software Enginner @<a
            href="https://home.cern/"
            >CERN</a
            >
            as a member of it's
            <a href="https://ep-dep.web.cern.ch/home">EP</a> department,
            working for the
            <a href="http://lhcb-public.web.cern.ch/">LHCb</a>, the beauty
            experiment.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu
            libero, semper et dapibus id, feugiat id justo. Suspendisse eu
            faucibus metus. Cras tristique nisl quis ex semper auctor. Mauris
            elit est, pulvinar ullamcorper ultricies sed, malesuada nec neque.
            Proin eget placerat arcu. In tincidunt ultricies neque, id congue
            lacus lobortis at. Praesent quis dapibus odio, non aliquet est.
            Aenean gravida elit at consectetur vehicula. Integer sollicitudin
            dolor a dui pellentesque, ut efficitur dui congue. Ut hendrerit
            purus in libero consequat bibendum.
        </p>
        <p>
            Proin dapibus placerat aliquet. Sed posuere vitae nunc at lacinia.
            Fusce mollis risus vel risus ultricies, in congue tellus
            convallis. In commodo bibendum rhoncus. Donec bibendum, turpis
            vitae ultrices vulputate, enim augue tempus nulla, venenatis
            pretium mauris mi in magna. Donec efficitur dictum ipsum a
            maximus.
        </p>
        <p>
            But what is <a href="https://www.lipsum.com/">Lorem Ipsum</a>?
        </p>
        <p>
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Ut eros velit, tincidunt sed
            orci pharetra, dignissim ultrices magna. Integer efficitur magna
            diam, gravida volutpat nunc semper at. Praesent vitae commodo
            eros, vel imperdiet tortor. In convallis rhoncus auctor
        </p>
        <p>
            Nulla cursus est vitae sollicitudin tristique. Nullam nec erat
            arcu. Aenean semper dignissim malesuada. Vestibulum id magna et
            tellus pulvinar laoreet. Sed ipsum mi, scelerisque vel neque sed,
            feugiat porta sapien.
        </p>
        <dl>
            <dt><strong>curriculum&bull;vitae</strong></dt>
            <dd>
            <em>/kʌˈrɪkjʊləm ˈviːtʌɪ/</em>
            </dd>
            <em>noun</em><br />
            <dd>
            A curriculum vitae (English: / ... ˈviːtaɪ, -ˈwiːtaɪ, -ˈvaɪtiː/)
            Latin for "course of life", often shortened to CV, is a short
            written summary of a person's career, qualifications, and
            education.
            </dd>
        </dl>
        <p>
            Nulla cursus est vitae sollicitudin tristique. Nullam nec erat
            arcu. Aenean semper dignissim malesuada. Vestibulum id magna et
            tellus pulvinar laoreet. Sed ipsum mi, scelerisque vel neque sed,
            feugiat porta sapien.
        </p>
        <p>
            He began to jot down a list of elements that are typically in a
            novel:
        </p>
        <ul>
            <li>Serif typefaces</li>
            <li>
            Header area with the title of the book on the left, and the
            author of said book on the right.
            <em
                >Suspendisse ullamcorper in orci sed ultrices. Duis fringilla
                sapien sit amet ex porta interdum.</em
            >.
            </li>
            <li>An adorned chapter title</li>
            <li>
            A dropcap for the first letter of the first paragraph of the
            chapter
            </li>
            <li>Indented paragraphs</li>
            <li>Page numbers</li>
        </ul>
        <p>
            Aenean at tristique arcu. Phasellus volutpat diam felis. Donec
            pellentesque feugiat est, in rhoncus libero pellentesque at.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Sed luctus commodo velit a
            mollis.
        </p>
        <ul>
            <li>
            "What if highlighting the text actually looked
            <mark>like a highlighter</mark>?"
            <ul>
                <li>
                "What if I wanted it to be <mark class="pink">pink</mark>?"
                </li>
                <li>"<mark class="blue">Blue</mark>?"</li>
                <li>"<mark class="green">Green</mark>?"</li>
                <li>"<mark class="orange">Orange</mark>?"</li>
            </ul>
            </li>
            <li>
            "What if I found <s>a typo</s
            ><sup>an error in the content</sup> and wanted to make a
            correction?"
            </li>
            <li>"What if I was viewing this on mobile&mdash;"</li>
        </ul>
        <p>
            Suspendisse ullamcorper in orci sed ultrices. Duis fringilla
            sapien sit amet ex porta interdum.
        </p>
        <p>
            Nam iaculis varius volutpat. Suspendisse vehicula porta nulla, non
            sodales eros fringilla quis. Sed auctor tristique lectus, eget
            aliquet nulla iaculis sit amet. Curabitur vitae suscipit ante.
            Cras id risus non justo molestie vehicula non vitae dui. Proin
            auctor elit eu venenatis pharetra. Donec efficitur rutrum posuere.
            Quisque consequat sit amet nunc auctor eleifend.
        </p>
        <p>
            Mauris porttitor, mauris eget ornare fermentum, risus dui egestas
            risus, vel sagittis dolor ex sit amet dolor. Vestibulum ultricies
            consectetur egestas. Vivamus ut eleifend sem. Sed faucibus
            scelerisque nibh vitae tempus. Duis massa mi, viverra ut tincidunt
            et, fermentum eleifend lorem.
        </p>
        <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
        </p>
        </article>
        <footer>
        <ol id="page-numbers">
            <li>1</li>
            <li>2</li>
        </ol>
        </footer>
    </section>
    </div>
    </div>
</body>
</html>

`
}