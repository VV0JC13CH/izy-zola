// When the user scrolls the page, execute spyScroll
// https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
window.onscroll = function() {spyScroll()};

function spyScroll() {
  // ---------------- scrollSpy --------------------
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollspy").style.height = scrolled + "%";
}

//
// Get the button
// https://tailwind-elements.com/docs/standard/components/scroll-back-to-top-button/
//

let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener("DOMContentLoaded", function() {
  // ---------------- tocSpy --------------------
  if (document.getElementById('toc') !== null) {

    const table_of_content_links = document.querySelectorAll('#tocspy div a')

    let page_titles_ids = [];
    [...table_of_content_links].forEach((item)=> {
      page_titles_ids.push(item.href.substring(item.href.indexOf("#")))
    })
    const page_titles_elements = document.querySelectorAll(page_titles_ids.join(','));

    let reversed_title_elements = [...page_titles_elements].reverse();
    let elem = getActiveTocElement(reversed_title_elements) || page_titles_elements[0];
    findCorrespondingTocTitle(elem).classList.add('current-active-section')
    var previous_elem = elem

    window.addEventListener('scroll', () => {
      let element = getActiveTocElement(reversed_title_elements) || page_titles_elements[0];

      if (element !== previous_elem) {
        findCorrespondingTocTitle(previous_elem).classList.remove('current-active-section')
        findCorrespondingTocTitle(element).classList.add('current-active-section')
        previous_elem = element
      }
    })
  }

});
function getActiveTocElement(elements) {
  return [...elements].find((item) => {
    return (item.getBoundingClientRect().y <= 0)
  })
}
function findCorrespondingTocTitle(element) {
  return [...document.querySelectorAll('#tocspy div a')].find((item) => {
    return item.href.substring(item.href.indexOf("#")) === `#${element.id}`
  })

}
