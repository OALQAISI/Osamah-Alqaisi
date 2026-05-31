/*document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
*/
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // only handle internal links like #hero
    if (targetId.startsWith('#') && document.querySelector(targetId)) {
      e.preventDefault();

      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
