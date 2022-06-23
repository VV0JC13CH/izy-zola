document.addEventListener("DOMContentLoaded", function() {
  // ---------------- Selected Navbar Link -------------------------
  let navbar_links = document.querySelectorAll('.nav-links a');
  let trim_last_slash = window.location.href.replace(/\/$/, '');
  let selected_navbar_link = [...navbar_links].filter((item) => {
    return (trim_last_slash.indexOf(item.href) > -1)
  })
  if (selected_navbar_link.length !== 0) {
    for (let element of selected_navbar_link) {
      element.className = "hover-underline-animation p-2 inline-flex flex-row text-accent dark:text-accent font-bold"
    }
  }

  // ---------------- Switch Theme -------------------------
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    document.getElementById('dark').classList.add('hidden');
    document.getElementById("syntax_highlight").href = "/syntax-dark.css";
  } else {
    document.documentElement.classList.remove('dark')
    document.getElementById('light').classList.add('hidden');
    document.getElementById("syntax_highlight").href = "/syntax-light.css";
  }
  // Switch theme action
  document.getElementById('switch-theme')?.addEventListener('click', switchTheme);
});

function switchTheme() {
  let current_theme = ([...document.documentElement.classList].includes('dark')) ? 'dark' : 'light';
  if (current_theme === 'dark') {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.getElementById('light').classList.add('hidden');
    document.getElementById('dark').classList.remove('hidden');
    document.getElementById("syntax_highlight").href = "/syntax-light.css";
  } else {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.getElementById('dark').classList.add('hidden');
    document.getElementById('light').classList.remove('hidden');
    document.getElementById("syntax_highlight").href = "/syntax-dark.css";
  }
}

