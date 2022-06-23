document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('switch-language')?.addEventListener('click', switchLang);
})

function switchLang(event) {
    document.getElementById('language-panel').classList.toggle('hidden')
}