+++
title = "Izy - Zola Theme"
date = 2022-10-30
description = "This is demo page of theme Izy. Click here to get this theme!"
[taxonomies]
categories=["blog"]
tags=["post", "theme", "download"]
[extra]
feature_image = "image_6.png"
+++

# Izy - Zola Theme

## Intro

This is demo page of theme Izy. If you like this theme go to [github.com/VV0JC13CH/izy-zola](https://github.com/VV0JC13CH/izy-zola) and follow steps from [README](https://github.com/VV0JC13CH/izy-zola/blob/develop/README.md) in order to get this theme work or you can just follow below quickstart steps.

## Quickstart steps

1. It is recommended to add this theme as a git submodule in your zola project:

```bash
cd zola-project
git submodule add -b main git@github.com:VV0JC13CH/izy-zola.git themes/izy-zola
```

2.Change below parameter in your `config.toml` file:

```toml
# The site theme to use.
theme = "izy-zola"
```

3.Overwrite default values of theme by editing your zola main `config.toml` file:

```toml
[extra]
favicon = "/ico/favicon.ico"
enable_search = true
enable_multilingue = false


# [extra.lang]
# items = [
#     { lang = "en", links = [
#         { base_url = "/", name = "English" },
#         { base_url = "/pl", name = "Polish" }
#     ] },
#     { lang = "pl", links = [
#         { base_url = "/", name = "Angielski" },
#         { base_url = "/pl", name = "Polski" }
#     ] }
# ]
[extra.share]
enabled = false

[extra.comments]
enabled = false

[extra.navbar]
title = ""
items = [
    { lang = "en", links = [
        { url = "/blog", name = "Blog"},
        { url = "/categories", name = "Categories"},
        { url = "/tags", name = "Tags"},
    ] },
]

[extra.sidebar]
enabled = false
show_categories = true
position = 'right' # left / right
custom_items = [
    { lang = "en", links = [
        { url = "/blog", name = "Blog"},
        { url = "/categories", name = "Categories"},
        { url = "/tags", name = "Tags"},
    ] },
]

[extra.social]
links = [
#{github = "https://github.com/johndoe"},
#{gitlab = "https://gitlab.com/johndoe"},
#{twitter = "https://twitter.com/johndoe"},
#{linkedin = "https://www.linkedin.com/in/john-doe-b1234567/"},
]
```

### Theme Options

#### Multilingual sites

1. Set below flag to true (required)

```toml
[extra]
enable_multilingue = true
```

2.Add your language to config.toml (required)

```toml
[extra.lang]
items = [
    { lang = "en", links = [
        { base_url = "/", name = "English" },
        { base_url = "/pl", name = "Polish" }
    ] },
    { lang = "pl", links = [
        { base_url = "/", name = "Angielski" },
        { base_url = "/pl", name = "Polski" }
    ] }
]
```

3.Customize your navbar (optional)

```toml
[extra.navbar]
items = [
    { lang = "en", links = [
        { url = "/assets", name = "Assets"},
        { url = "/blog", name = "Blog"},
        { url = "/snippets", name = "Snippets"},
        { url = "/projects", name = "Projects"},
    ] },
    { lang = "pl", links = [
        { url = "/pl/assets", name = "Assety"},
        { url = "/pl/blog", name = "Blog"},
        { url = "/pl/snippets", name = "Kod"},
        { url = "/pl/projects", name = "Projekty"},
    ] }
]
```

4.Customize your sidebar (optional)

```toml
[extra.sidebar]
enabled = true
custom_items = [
    { lang = "en", links = [
        { url = "/markdown", name = "Markdown" },
        { url = "/blog", name = "Blog" }
    ] },
    { lang = "pl", links = [
        { url = "/pl/markdown", name = "Markdown" },
        { url = "/pl/blog", name = "Blog" }
    ] }
]
```

### Syntax highlighting

In order to use highlught css themes it is reguired to add below config.
Themes to choose: https://www.getzola.org/documentation/getting-started/configuration/#syntax-highlighting

```toml
[markdown]
# The theme to use for code highlighting.
highlight_theme = "css"
highlight_themes_css = [
  { theme = "visual-studio-dark", filename = "syntax-dark.css" },
  { theme = "cheerfully-light", filename = "syntax-light.css" },
]
```

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Demo

This page uses example [content](https://github.com/VV0JC13CH/izy-zola/tree/develop/content) from theme catalog. Below is current config.toml of this site.

```toml

# The base URL of the site; the only required configuration variable.
base_url = "https://izy-zola.netlify.app/"

# The site title and description; used in feeds by default.
title = "Site Title"
description = "A Zola theme made with tailwindcss framework."

# The default language; used in feeds.
default_language = "en"

# The site theme to use.
theme = "izy-zola"

# For overriding the default output directory `public`, set it to another value (e.g.: "docs")
output_dir = "public"

# When set to "true", the Sass files in the `sass` directory in the site root are compiled.
# Sass files in theme directories are always compiled.
compile_sass = false

# When set to "true", the generated HTML files are minified.
minify_html = true

# A list of glob patterns specifying asset files to ignore when the content
# directory is processed. Defaults to none, which means that all asset files are
# copied over to the `public` directory.
# Example:
#     ignored_content = ["*.{graphml,xlsx}", "temp.*"]
ignored_content = []

# When set to "true", a feed is automatically generated.
generate_feed = true

# The filename to use for the feed. Used as the template filename, too.
# Defaults to "atom.xml", which has a built-in template that renders an Atom 1.0 feed.
# There is also a built-in template "rss.xml" that renders an RSS 2.0 feed.
feed_filename = "atom.xml"

# The number of articles to include in the feed. All items are included if
# this limit is not set (the default).
# feed_limit = 20

# When set to "true", files in the `static` directory are hard-linked. Useful for large
# static files. Note that for this to work, both `static` and the
# output directory need to be on the same filesystem. Note that the theme's `static`
# files are always copied, regardless of this setting.
hard_link_static = false

taxonomies = [
    {name = "tags", feed = true},
    {name = "categories", paginate_by = 0, feed = true},
]

# When set to "true", a search index is built from the pages and section
# content for `default_language`.
build_search_index = true

# Configuration of the Markdown rendering
[markdown]
# When set to "true", all code blocks are highlighted.
highlight_code = true

# A list of directories used to search for additional `.sublime-syntax` files.
extra_syntaxes = []

# The theme to use for code highlighting.
highlight_theme = "css"
highlight_themes_css = [
  { theme = "visual-studio-dark", filename = "syntax-dark.css" },
  { theme = "cheerfully-light", filename = "syntax-light.css" },
]

# When set to "true", emoji aliases translated to their corresponding
# Unicode emoji equivalent in the rendered Markdown files. (e.g.: :smile: => 😄)
render_emoji = false

# Whether external links are to be opened in a new tab
# If this is true, a `rel="noopener"` will always automatically be added for security reasons
external_links_target_blank = false

# Whether to set rel="nofollow" for all external links
external_links_no_follow = false

# Whether to set rel="noreferrer" for all external links
external_links_no_referrer = false

# Whether smart punctuation is enabled (changing quotes, dashes, dots in their typographic form)
# For example, `...` into `…`, `"quote"` into `“curly”` etc
smart_punctuation = false

# Configuration of the link checker.
[link_checker]
# Skip link checking for external URLs that start with these prefixes
skip_prefixes = [
    "http://[2001:db8::]/",
]

# Skip anchor checking for external URLs that start with these prefixes
skip_anchor_prefixes = [
    "https://caniuse.com/",
]

# Various slugification strategies, see below for details
# Defaults to everything being a slug
[slugify]
paths = "on"
taxonomies = "on"
anchors = "on"

[search]
# Whether to include the title of the page/section in the index
include_title = true
# Whether to include the description of the page/section in the index
include_description = true
# Whether to include the path of the page/section in the index
include_path = true
# Whether to include the rendered content of the page/section in the index
include_content = true
# At which character to truncate the content to. Useful if you have a lot of pages and the index would
# become too big to load on the site. Defaults to not being set.
truncate_content_length = 100

# Optional translation object for the default language
# Example:
#     default_language = "pl"
#
#     [translations]
#     title = "Tytuł"
#
[translations]

# Additional languages definition
# You can define language specific config values and translations:
# title, description, generate_feed, feed_filename, taxonomies, build_search_index
# as well as its own search configuration and translations (see above for details on those)
[languages]

[languages.pl]
title = "Tytuł Strony"
description = "Motyw Zola wykonany przy pomocy Tailwindcss."
generate_feed = true

taxonomies = [
    {name = "tags", paginate_by = 3, feed = true},
    {name = "categories", paginate_by = 3, feed = true},
]
build_search_index = false


[extra]
enable_multilingue = true

[extra.ga]
id = "G-XEHHTMPWP6"
enabled = true

[extra.lang]
items = [
    { lang = "en", links = [
        { base_url = "/", name = "English" },
        { base_url = "/pl", name = "Polish" }
    ] },
    { lang = "pl", links = [
        { base_url = "/", name = "Angielski" },
        { base_url = "/pl", name = "Polski" }
    ] }
]

[extra.navbar]
items = [
    { lang = "en", links = [
        { url = "/assets", name = "Assets"},
        { url = "/blog", name = "Blog"},
        { url = "/snippets", name = "Snippets"},
        { url = "/projects", name = "Projects"},
    ] },
    { lang = "pl", links = [
        { url = "/pl/assets", name = "Assety"},
        { url = "/pl/blog", name = "Blog"},
        { url = "/pl/snippets", name = "Kod"},
        { url = "/pl/projects", name = "Projekty"},
    ] }
]

[extra.sidebar]
enabled = true
show_categories = true
position = 'right' # left / right
custom_items = [
    { lang = "en", links = [
        { url = "/markdown", name = "Markdown" },
        { url = "/blog", name = "Blog" }
    ] },
    { lang = "pl", links = [
        { url = "/pl/markdown", name = "Markdown" },
        { url = "/pl/blog", name = "Blog" }
    ] }
]

[extra.social]
links = [
{github = "https://github.com/VV0JC13CH"},
{twitter = "https://twitter.com/VV0JC13CH"},
]
```

Thank you for visiting this page! I hope you like this theme and check out [my other projects](https://bitstudio.dev/projects) in spare time.
