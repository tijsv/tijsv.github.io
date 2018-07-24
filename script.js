function main() {
  // main line to animate
  var mainLine = showSection("home");
  // generates an array with the menu items in it
  var menu = document.getElementById('menu');
  var menuListItems = [];
  for (i=0;i<menu.getElementsByTagName('li').length;i++) {
    menuListItems.push(menu.getElementsByTagName('li')[i]);
  }
  for(i=0;i<menuListItems.length;i++) {
    menuListItems[i].onclick = function() {
      if (this.className === "selected") {
        return;
      }
      for(j=0;j<menuListItems.length;j++) {
        menuListItems[j].classList.remove('selected');
      }
      this.classList.toggle('selected');
      var menuListItemData = this.dataset.li;
      var visibleSection = document.getElementsByClassName('visible')[0];
      mainLine.classList.toggle('main-line-end');
      var textElements = visibleSection.children[0].children;
      for(k=0;k<textElements.length;k++) {
        if(!textElements[k].classList.contains('main-line')) {
          textElements[k].classList.toggle('text-end');
        }
      }
      setTimeout(function(){
        visibleSection.classList.toggle('visible');
        var allSections = document.getElementsByClassName('section');
        for(j=0;j<allSections.length;j++) {
          if(allSections[j].id === menuListItemData){
            allSections[j].classList.toggle('visible');
            mainLine.classList.toggle('main-line-end');
            mainLine.classList.toggle('main-line-start');
            for(k=0;k<textElements.length;k++) {
              if(!textElements[k].classList.contains('main-line')) {
                textElements[k].classList.toggle('text-end');
                textElements[k].classList.toggle('text-start');
              }
            }
            mainLine = showSection(allSections[j].id);
            break;
          }
        }
      },1001);

    }
  }
}

// hide function?

// function that handles the animation of showing a new section
function showSection(sectionName) {
  var thisSection = document.getElementById(sectionName);
  var textElements = thisSection.children[0].children;
  var mainLine = thisSection.getElementsByClassName('main-line')[0];
  var backgroundLines = document.getElementById('lines').getElementsByClassName('line');
  setTimeout(function(){
    for (i=0;i<backgroundLines.length;i++) {
      backgroundLines[i].classList.toggle('line-start');
    }
    mainLine.classList.toggle('main-line-start');
    for(k=0;k<textElements.length;k++) {
      if(!textElements[k].classList.contains('main-line')) {
        console.log(textElements[k]);
        textElements[k].classList.toggle('text-start');
      }
    }
  },250)
  return mainLine;
}

window.onload = function() {
  main();
}
