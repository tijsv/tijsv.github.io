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

  var allSections = document.getElementsByClassName('section');
  // Start of experience in header
  var h2Element = document.getElementById('home-inner').children[0];
  var h2String = h2Element.dataset.string.split('');
  var h1Element = document.getElementById('home-inner').children[1];
  var h1String = h1Element.dataset.string.split('');
  var pElement = document.getElementById('home-inner').children[2];
  writeLetters(30, i = 0, h2String, h2Element, () => {
    writeLetters(40, i = 0, h1String, h1Element, () => {
      pElement.classList.add('visible');
      h2Element.classList.add('fade-up');
    });
  });

  // offset of every section with boolean (revealed = true)
  var allSectionsOffset = [];
  for(i = 0; i < allSections.length; i++) {
    var array = [];
    array.push(allSections[i].offsetTop+100);
    array.push(false);
    allSectionsOffset.push(array);
  }
  // Update the location of the sections on resizing the window
  window.addEventListener('resize', () => {
    allSections = document.getElementsByClassName('section');
    for(i = 0; i < allSections.length; i++) {
      allSectionsOffset[i][0] = allSections[i].offsetTop;
    }
  });
  // console.log(allSectionsOffset);
  // on scroll function to reveal div on sight
  document.getElementsByTagName('body')[0].onscroll = () => {
    for(i = 1; i < allSectionsOffset.length; i++) {
      if(window.scrollY > allSectionsOffset[i-1][0] && allSectionsOffset[i][1] == false && allSections[i]) {
        // console.log('div passed...');
        allSectionsOffset[i][1] = true;
        var object = allSections[i].getElementsByTagName('h1')[0];
        var string = object.dataset.string.split('');
        var rest = allSections[i].getElementsByClassName('content')[0];
        setTimeout(() => {
          writeLetters(40, i = 0, string, object, () => {
            setTimeout(() => {
              rest.classList.add('visible');
              object.classList.add('fade-out');
            }, 250);
          });
        }, 250);
        break;
      }
    }
  }

  var allWorksArray = [
    [
      "Landingpage Zenjoy Technologies",
      "works/landingspage.png",
      "front-end & logo & video"
    ],
    [
      "Van Dessel Plastics",
      "works/vandesselplastic.png",
      "front-end"
    ],
    [
      "Waardevol Werk",
      "works/waardevolwerk.png",
      "front-end"
    ],
    [
      "cinema.me (own project & under construction)",
      "works/cinemame.png",
      "front-end & back-end"
    ],
    [
      "Subbassmentz",
      "works/subbassmentz.png",
      "logo & 3D"
    ],
    [
      "Grietje",
      "works/grietje.png",
      "poster & video"
    ],
    [
      "Another World",
      "works/anotherworld.png",
      "poster & video"
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
    ]
  ];

  // create a grid of all works
  createWorkGrid(allWorksArray);

  var allWorks = document.getElementsByClassName('single-work');
  var details = document.getElementById('work-details');
  var title = details.getElementsByTagName('h4')[0];
  // on click function for every single work
  for(i = 0; i < allWorks.length; i++) {
    allWorks[i].onclick = (e) => {
      // fix: i is not in scope of onclick function!!!
      var i = parseInt(e.target.dataset.index);
      title.dataset.string = allWorksArray[i][0];
      details.getElementsByClassName('work-img')[0].style.backgroundImage = 'url( ' + allWorksArray[i][1] + ')';
      for(j = 0; j < allWorks.length; j++) {
        allWorks[j].classList.add('grow');
      }
      setTimeout(() => {
        hideWorks(x = 0, allWorks, () => {
          setTimeout(() => {
            details.style.display = "block";
            // fix for bad display lower than 980 height
            if(767 < window.innerWidth && window.innerWidth < 980 && allWorks.length > 6) {
              console.log(window.innerWidth, 'all works with index higher than', 5, ' need to get display none for good display..');
              for(i = 5; i < allWorks.length; i++) {
                allWorks[i].style.display = "none";
              }
              title.scrollIntoView({block: "start", inline: "start"});
            } else if(480 < window.innerWidth && window.innerWidth < 768 && allWorks.length > 8) {
              console.log(window.innerWidth, 'all works with index higher than', 7, ' need to get display none for good display..');
              for(i = 7; i < allWorks.length; i++) {
                allWorks[i].style.display = "none";
              }
              title.scrollIntoView({block: "start", inline: "start"});
            } else if(window.innerWidth < 481 && allWorks.length > 4) {
              console.log(window.innerWidth, 'all works with index higher than', 3, ' need to get display none for good display..');
              for(i = 3; i < allWorks.length; i++) {
                allWorks[i].style.display = "none";
              }
              title.scrollIntoView({block: "start", inline: "start"});
            }
          }, 400);
          setTimeout(() => {
            writeLetters(20, index = 0, title.dataset.string.split(''), title, () => {
              details.getElementsByClassName('work-details-inner')[0].getElementsByTagName('p')[0].classList.add('visible');
              details.getElementsByClassName('work-img')[0].classList.add('visible');
              details.getElementsByClassName('back-button')[0].classList.add('visible');
            });
          }, 450);
        })
      }, 450);
    }
  }

  // on click function for the back button in work-details
  var backButton = document.getElementsByClassName('back-button')[0];
  backButton.onclick = () => {
    details.getElementsByClassName('work-details-inner')[0].getElementsByTagName('p')[0].classList.remove('visible');
    details.getElementsByClassName('work-img')[0].classList.remove('visible');
    details.getElementsByClassName('back-button')[0].classList.remove('visible');
    title.innerHTML = "<span>|</span>";
    details.style.display = "none";
    // revert for fix for bad display between 480 and 980 height
    for(i = 0; i < allWorks.length; i++) {
      if(allWorks[i].style.display === "none") {
        allWorks[i].style.display = "block";
      }
    }
    setTimeout(() => {
      revealWorks(i = 0, allWorks, () => {
        for(i = 0; i < allWorks.length; i++) {
          allWorks[i].classList.remove('grow');
        }
      })
    }, 200);
  }

}

// function that handles the navigation scrollY
function navigationScroll(id) {
  var menuIcon = document.getElementById('menu-icon');
  var navigation = document.getElementById('navigation');
  var div = document.getElementById(id);
  div.scrollIntoView({behavior: 'smooth'});
  menuIcon.classList.remove('clicked');
  navigation.classList.remove('reveal-nav');
}

// function that hides the works
function hideWorks(index, works, callback = () => {}) {
  works[index].classList.add('color-work');
  var delay = 100 - index*10;
  index++
  if(index < works.length) {
    setTimeout(() => {
      hideWorks(index, works, callback);
    }, delay);
  } else {
    return callback();
  }
}

// function that reveals the works
function revealWorks(index, works, callback = () => {}) {
  works[index].classList.remove('color-work');
  var delay = 100 - index*10;
  index++
  if(index < works.length) {
    setTimeout(() => {
      revealWorks(index, works, callback);
    }, delay);
  } else {
    return callback();
  }
}

// function that writes letters
function writeLetters(speed, index, letters, object, callback = () => {}) {
  object.innerHTML += letters[index];
  var delay = Math.floor(Math.random() * speed) + speed;
  if(letters[index] === ",") {
    delay = 600;
  }
  index++;
  if(index < letters.length) {
    setTimeout(() => {
      writeLetters(speed, index, letters, object, callback);
    }, delay);
  } else {
    return callback();
  }
}

// function that creates the work divs
function createWorkGrid(allWorksArray) {
  var grid = document.getElementById('work-main');
  var allWorks = allWorksArray;
  for(i=0;i<allWorks.length;i++) {
    var newElement = document.createElement('div');
    var newImage = document.createElement('img');
    var newText = document.createElement('p');
    var newTextDiv = document.createElement('div');
    var newTag = document.createElement('p');
    newImage.src = allWorks[i][1];
    newElement.className = "single-work";
    newTextDiv.dataset.index = i;
    newText.dataset.index = i;
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

window.onload = () => {
  main();
}
