const langMenu = document.querySelector('.lang-menu');
langMenu.addEventListener('click', showLang);

function showLang(){
    document.querySelector('.lang-list').classList.toggle('active');
}
window.onclick = function(event) {
    if (!event.target.matches('.selected-lang')) {
      var dropdowns = document.getElementsByClassName("lang-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
    }
}