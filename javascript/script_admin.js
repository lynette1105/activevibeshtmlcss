    // Dash board//
const lastSelectedSection = localStorage.getItem('lastSelectedSection');
    if (lastSelectedSection) {
        showSection(lastSelectedSection);
  }
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(function(section) {
    section.classList.remove('show-dashboard', 'show-messages', 'show-staff', 'show-memos', 'show-promotions', 'show-interactives', 'show-subscriptions', 'show-idcheck', 'show-badacters', 'show-todolist');
        });

    document.getElementById(sectionId).classList.add('show-' + sectionId);
    localStorage.setItem('lastSelectedSection', sectionId);
}

    //popover//
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
      });

      //hamburger menu//
      function toggleDashboardMenu(menu){
        menu.classList.toggle('open');
    }