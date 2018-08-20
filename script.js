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
    array.push(allSections[i].getElementsByTagName('h1')[0].offsetTop);
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
  document.getElementsByTagName('body')[0].onscroll = () => {
    for(i = 1; i < allSectionsOffset.length; i++) {
      if(window.scrollY > allSectionsOffset[i-1][0] && allSectionsOffset[i][1] == false && allSections[i]) {
        // console.log('div passed...');
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

window.onload = () => {
  main();
}
