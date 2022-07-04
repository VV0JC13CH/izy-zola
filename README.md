# Izy - Zola Theme

Live demo: https://izy-zola.netlify.app/

### Features

Legend:
- [ ] Analytics
- [ ] Charts
- [ ] Comments
- [ ] Custom SVGs
- [ ] Diagrams
- [ ] Gallery
- [ ] Page 404
- [ ] Sepia Mode
- [x] Categories
- [x] Dark Mode
- [x] Multilingual
- [x] Search
- [x] Social Links

### Built With

- [Zola](https://www.getzola.org/)
- [Tailwindcss](https://tailwindcss.com/)

## Getting Started

1. It is recommended to add this theme as a git submodule in your zola project:  
```bash
cd zola-project
git submodule add -b main git@github.com:VV0JC13CH/izy-zola.git themes/izy-zola
```

2. Change below parameter in your `config.toml` file:
```toml
# The site theme to use.
theme = "izy-zola"
```

3. Overwrite default values of theme by editing your zola main `config.toml` file:
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
2. Add your language to config.toml (required)
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
3. Customize your navbar (optional)
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
4. Customize your sidebar (optional)
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

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- wojciech@bitstudio.dev
- https://twitter.com/VV0JC13CH

## Inspirations:

* https://www.taniarascia.com
* https://github.com/timlrx/tailwind-nextjs-starter-blog