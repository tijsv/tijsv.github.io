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

}

window.onload = () => {
  main();
}
