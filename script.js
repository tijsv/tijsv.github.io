//TODO: - menu needs a lot of work (responsive)$
//      - work and contact needs content
//      - some graphics to add ?

function main() {
  var backgroundLines = document.getElementById('lines').getElementsByClassName('line');
  // main line to animate
  var mainLine = showSection("home");
  // generates an array with the menu items in it
  var menu = document.getElementById('menu');
  var menuButton = menu.getElementsByTagName('p')[0];
  menuButton.onclick = function() {
    menu.classList.toggle('menu-clicked');
  }
  var menuListItems = [];
  for (i=0;i<menu.getElementsByTagName('li').length;i++) {
    menuListItems.push(menu.getElementsByTagName('li')[i]);
  }
  for(i=0;i<menuListItems.length;i++) {
    menuListItems[i].onclick = function() {
      document.getElementById('menu').classList.toggle('unclickable');
      if (this.classList.contains("selected")) {
        return;
      }
      for(j=0;j<menuListItems.length;j++) {
        menuListItems[j].classList.remove('selected');
      }
      this.classList.toggle('selected');
      var menuListItemData = this.dataset.li;
      var visibleSection = document.getElementsByClassName('visible')[0];
      if(mainLine) {
          mainLine.classList.toggle('main-line-end');
      }
      for(l=0;l<backgroundLines.length;l++){
        backgroundLines[l].classList.toggle('line-end');
      }
      setTimeout(function(){
        for(l=0;l<backgroundLines.length;l++){
          backgroundLines[l].classList.toggle('line-end');
        }
      },601);
      var textElements = visibleSection.children[0].children;
      for(k=0;k<textElements.length;k++) {
        if(!textElements[k].classList.contains('main-line')) {
          textElements[k].classList.toggle('animation-end');
        }
      }
      setTimeout(function(){
        visibleSection.classList.toggle('visible');
        var allSections = document.getElementsByClassName('section');
        for(j=0;j<allSections.length;j++) {
          if(allSections[j].id === menuListItemData){
            allSections[j].classList.toggle('visible');
            if(mainLine) {
              mainLine.classList.toggle('main-line-end');
              mainLine.classList.toggle('main-line-start');
            }
            for(l=0;l<backgroundLines.length;l++){
              backgroundLines[l].classList.toggle('line-start');
            }
            for(k=0;k<textElements.length;k++) {
              if(!textElements[k].classList.contains('main-line')) {
                textElements[k].classList.toggle('animation-end');
                textElements[k].classList.toggle('animation-start');
              }
            }
            mainLine = showSection(allSections[j].id);
            break;
          }
        }
        document.getElementById('menu').classList.toggle('unclickable');
      },1250);

    }
  }
  createWorkGrid();
  var singleWorks = document.getElementsByClassName('single-work');
  for(i=0;i<singleWorks.length;i++) {
    singleWorks[i].onclick = function() {
      // for(j=0;j<singleWorks.length;j++) {
      //   singleWorks[j].classList.add('grow');
      // }
      document.getElementById('work-main').classList.add('grow');
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
    if(mainLine) {
      mainLine.classList.toggle('main-line-start');
    }
    for(k=0;k<textElements.length;k++) {
      if(!textElements[k].classList.contains('main-line')) {
        // console.log(textElements[k]);
        textElements[k].classList.toggle('animation-start');
      }
    }
  },250)
  return mainLine;
}

function createWorkGrid() {
  var grid = document.getElementById('work-main');
  var allWorks = [
    [
      "Landingpage Zenjoy Technologies",
      "works/landingspage.png",
      "website + logo + video"
    ],
    [
      "Van Dessel Plastics",
      "works/vandesselplastic.png",
      "website"
    ],
    [
      "cinema.me (own project)",
      "works/cinemame.png",
      "website"
    ],
    [
      "Bezorgde Berlaarse Burgers",
      "works/bbb.png",
      "logo"
    ],
    [
      "Infographic of Electric Production",
      "works/infographic.png",
      "infographic"
    ],
    [
      "Subbassmentz",
      "works/subbassmentz.png",
      "logo + 3D"
    ],
    [
      "Grietje",
      "works/grietje.png",
      "poster + video"
    ],
    [
      "Another World",
      "works/anotherworld.png",
      "poster + video"
    ]
  ];
  for(i=0;i<allWorks.length;i++) {
    var newElement = document.createElement('div');
    var newImage = document.createElement('img');
    var newText = document.createElement('p');
    var newTextDiv = document.createElement('div');
    var newTag = document.createElement('p');
    newImage.src = allWorks[i][1];
    newElement.className = "single-work";
    newTextDiv.className = "single-work-inner";
    newTag.className = "single-work-tag";
    newText.innerHTML = allWorks[i][0];
    newTag.innerHTML = allWorks[i][2];
    newTextDiv.append(newText);
    newElement.append(newTag);
    newElement.append(newTextDiv);
    newElement.append(newImage);
    grid.append(newElement);
  }
}

window.onload = function() {
  main();
}
