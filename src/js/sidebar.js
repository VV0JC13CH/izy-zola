// https://stackoverflow.com/questions/39979124/javascript-sidebar-stay-open-on-page-change
// https://www.w3schools.com/html/html5_webstorage.asp

document.addEventListener("DOMContentLoaded", function() {
    // ---------------- Switch Sidebar -------------------------
    document.getElementById('switch-sidebar')?.addEventListener('click', switchSidebar);
});



window.onload = loadSidebar();


function switchSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.add('ease-in-out', 'transition-all' ,'duration-300')
    if ([...sidebar.classList].includes('translate-x-0')) {
        document.body.style.removeProperty("overflow")
        sidebar.classList.remove('translate-x-0')
        sidebar.classList.add('-translate-x-full')
    } else if ([...sidebar.classList].includes('-translate-x-full')) {
        document.body.style.setProperty("overflow", "hidden")
        sidebar.classList.remove('-translate-x-full')
        sidebar.classList.add('translate-x-0')
    } else if ([...sidebar.classList].includes('translate-x-[200%]')) {
        document.body.style.removeProperty("overflow")
        sidebar.classList.remove('translate-x-[200%]')
        sidebar.classList.add('translate-x-[0%]')
    } else if ([...sidebar.classList].includes('translate-x-[0%]')) {
        document.body.style.setProperty("overflow", "hidden")
        sidebar.classList.remove('translate-x-[0%]')
        sidebar.classList.add('translate-x-[200%]')
    }
    localStorage.setItem("sidebarState", sidebar.classList)
}

function loadSidebar() {
    if (localStorage.getItem("sidebarState")) {
        let sidebar = document.getElementById('sidebar')
        let sibebarPosition = sidebar.getAttribute('data-position')
        let sidebarState = localStorage.getItem("sidebarState")
        if (sidebarState.includes('translate-x-0') && sibebarPosition === 'left') {
            sidebar.classList = sidebarState
            sidebar.classList.remove('ease-in-out', 'transition-all' ,'duration-300')
        } else if (sidebarState.includes('translate-x-[0%]') && sibebarPosition === 'right') {
            sidebar.classList = sidebarState
            sidebar.classList.remove('ease-in-out', 'transition-all' ,'duration-300')
        }

    }
}

function show_hide(id) {
    let element = document.getElementById(id);
    if ([...element.classList].includes('hidden')) {
        element.classList.remove('hidden')
    } else {
        element.classList.add('hidden')
    } 
 }