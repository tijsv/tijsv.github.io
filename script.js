function main() {

  var allSections = document.getElementsByClassName('section');
  // home
  var h2Element = document.getElementById('home-inner').children[0];
  var h2String = h2Element.dataset.string.split('');
  var h1Element = document.getElementById('home-inner').children[1];
  var h1String = h1Element.dataset.string.split('');
  var pElement = document.getElementById('home-inner').children[2];
  writeLetters(i = 0, h2String, h2Element, () => {
    setTimeout(() => {
      writeLetters(i = 0, h1String, h1Element, () => {
        setTimeout(() => {
          pElement.classList.add('visible');
          h2Element.classList.add('fade-up');
        }, 500);
      });
    }, 500);
  });

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
  console.log(allSectionsOffset);
  document.getElementsByTagName('body')[0].onscroll = () => {
    for(i = 1; i < allSectionsOffset.length; i++) {
      if(window.scrollY > allSectionsOffset[i-1][0] && allSectionsOffset[i][1] == false && allSections[i]) {
        console.log('div passed...');
        allSectionsOffset[i][1] = true;
        var object = allSections[i].getElementsByTagName('h1')[0];
        var string = object.dataset.string.split('');
        var rest = allSections[i].getElementsByClassName('content')[0];
        setTimeout(() => {
          writeLetters(i = 0, string, object, () => {
            setTimeout(() => {
              rest.classList.add('visible');
              object.classList.add('fade-out');
            }, 500);
          });
        }, 500);
        break;
      }
    }
  }

  createWorkGrid();

}

// function that writes letters
function writeLetters(index, letters, object, callback = () => {}) {
  object.innerHTML += letters[index];
  var delay = Math.floor(Math.random() * 40) + 60;
  if(letters[index] === ",") {
    delay = 1000;
  }
  index++;
  if(index < letters.length) {
    setTimeout(() => {
      writeLetters(index, letters, object, callback);
    }, delay);
  } else {
    return callback();
  }
}

// function that creates the work divs
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

window.onload = () => {
  main();
}
