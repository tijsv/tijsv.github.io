function main() {

  // navigation animations
  var menuWrapper = document.getElementById('menu-icon-wrapper');
  var menuIcon = document.getElementById('menu-icon');
  var navigation = document.getElementById('navigation');
  menuWrapper.onclick = () => {
    if(!menuIcon.classList.contains('clicked')) {
      menuIcon.classList.add('clicked');
      navigation.classList.add('reveal-nav');
    } else {
      menuIcon.classList.remove('clicked');
      navigation.classList.remove('reveal-nav');
    }
  }

  document.getElementById('cv').classList.add('reveal-cv');
  setTimeout(() => {
    document.getElementById('cv-inner-left').classList.add('reveal-cv');
  },400);
  setTimeout(() => {
    document.getElementById('cv-inner-right').classList.add('reveal-cv');
  },600);

}

window.onload = () => {
  main();
}
