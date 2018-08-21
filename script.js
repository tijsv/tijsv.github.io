function main() {

  var allSections = document.getElementsByClassName('section');
  // Start of experience in header
  var h2Element = document.getElementById('home-inner').children[0];
  var h2String = h2Element.dataset.string.split('');
  var h1Element = document.getElementById('home-inner').children[1];
  var h1String = h1Element.dataset.string.split('');
  var pElement = document.getElementById('home-inner').children[2];
  writeLetters(30, i = 0, h2String, h2Element, () => {
    setTimeout(() => {
      writeLetters(60, i = 0, h1String, h1Element, () => {
        setTimeout(() => {
          pElement.classList.add('visible');
          h2Element.classList.add('fade-up');
        }, 500);
      });
    }, 500);
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
            }, 500);
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
      "website + logo + video"
    ],
    [
      "Van Dessel Plastics",
      "works/vandesselplastic.png",
      "website"
    ],
    [
      "Waardevol Werk",
      "works/waardevolwerk.png",
      "website"
    ],
    [
      "cinema.me (own project + under construction)",
      "works/cinemame.png",
      "website"
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
    setTimeout(() => {
      revealWorks(i = 0, allWorks, () => {
        for(i = 0; i < allWorks.length; i++) {
          allWorks[i].classList.remove('grow');
        }
      })
    }, 200);
  }
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
