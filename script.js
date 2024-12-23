function showSection(sectionId) {
    // Tüm menü bölümlerini gizle
    document.querySelectorAll('.menu-section').forEach(function(section) {
        section.classList.remove('active');
    });

    // İlgili menü bölümünü göster
    document.getElementById(sectionId).classList.add('active');
}
