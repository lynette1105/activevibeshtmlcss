function showSection(sectionId) {
    // Hide all sections
        document.querySelectorAll('section').forEach(function(section) {
        section.classList.remove('show-dashboard', 'show-messages', 'show-staff', 'show-memos', 'show-promotions');
          });
    
    // Show the selected section
        document.getElementById(sectionId).classList.add('show-' + sectionId);
    }
