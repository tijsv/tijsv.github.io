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
  writeLetters(20, i = 0, h2String, h2Element, () => {
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

  // [ TITLE, [ IMAGES ], TAGS, CONTENT ]
  var allWorksArray = [
    [
      "Landingpage Zenjoy Technologies",
      ["works/landingspage.png", "works/landingspage_large.png"],
      "front-end & logo & video",
      `
      <p>
        For my bachelor's thesis I built a landing page directed towards technology companies for Zenjoy, my internship company at the time. A lot of research went into this project. I started with understanding the basic fundamentals of a landing page, then examined the best marketing models for the job and also questioned multiple businesses about their experience with Zenjoy.<br>
        After I accumulated this information, I started designing a template for different kinds of landing pages that might be needed in the future, with one finished design for Zenjoy Technology. I was asked to keep a clear link between the main Zenjoy brand and the different landing pages in doing so.<br>
        Then I built the page from scratch, making use of Zenjoys own CMS Nimbu. All content you see on the website is made by me.
        To top of my thesis, I also made an introduction video that brings together all information on the landing page.
      </p>
      <a href="http://tech.zenjoy.be/" target="_blank">website</a>
      <a href="https://www.youtube.com/watch?v=r6qCmm3rf9E" target="_blank">video</a>
      `
    ],
    [
      "Van Dessel Plastics",
      ["works/vandesselplastic.png", "works/vandesselplastic_large.png"],
      "front-end",
      `
      <p>
        For the base of this website I used a template chosen by the customer, Van Dessel Plastics. This template was written in PHP, so in the end I still had to write a lot of the HTML and CSS myself. <br>Also I had to think a lot about the right data structure used in the back-end, so it would be easy for the customer to add content to the website through the CMS. Their are a lot of different products to show and it had to be done in a basic and easily understandable way.<br>
        While trying to fit everything together, I couldn't find a good way to display the former logo of Van Dessel Plastics. So I contacted the customer and asked if they would mind me designing a present-day logo, which they agreed to. Today, Van Dessel Plastics uses both website and logo made by me.
      </p>
      <a href="https://www.vdplastics.be/" target="_blank">website</a>
      `
    ],
    [
      "Waardevol Werk",
      ["works/waardevolwerk.png", "works/waardevolwerk_large.png"],
      "front-end",
      `
      <p>
        At the end of my internship at Zenjoy I was assigned to design and build a website for VIVO. I went to VIVO in Brussels to attend a meeting where we exchanged ideas to start the project. We tackled a lot of problems concerning the way they wanted to visualize all the information on their website. The content consists of nine subjects, which had to be easy to access by the user. That's why I came up with a three by three grid to show these nine subjecs on the front page of the website. I found a template that fit this idea and started to build the website.
      </p>
      <a href="https://www.waardevolwerk.be/" target="_blank">website</a>
      `
    ],
    [
      "cinema.me (under construction)",
      ["works/cinemame.png", "works/cinemame_large.png"],
      "front-end & back-end",
      `
      <p>
        This website is a personal project. I love to watch movies and series, but I found myself forgetting which ones I already watched. That's why I wanted to make a website where people can save the movies and series they watched, and get notified when a sequel or new season comes out. <br>
        To realise this, it was necessary for me to learn how to build not only the front-end, but also the back-end of a website myself. The back-end of the website is written with Node.js and Express. I used MongoDB and the Mongoose module to make a database where I store user data as well as some of the data I retrieve from the TMDB API. To secure users data I used Passport.js. Finally for the front-end I used the EJS templating language, SASS and vanilla JavaScript.<br>
        This project is still under construction, but users can already make accounts and use a few of the final features.
      </p>
      <a href="http://cinemame.herokuapp.com/" target="_blank">website</a>
      `
    ],
    [
      "Subbassmentz",
      ["works/subbassmentz.png", "works/subbassmentz_2.png"],
      "logo & 3D",
      `
      <p>
        This is a logo I designed for a new music event called Subbassmentz. For their facebook page they needed a logo and a banner that fit perfectly with the underground and bass music genres.<br>
        The logo itself clearly tells you the name of the event, with a staircase shape in the top right corner of the logo. The staircase going down links to the name of the music event originating from the words sub and basement.<br>
        To make the banner, I made a 3D version of it with a fitting material to the style I was going for.
        Overall the finished graphics have a grungy feeling that goes well with the music genres which Subbassmentz stands for.
      </p>
      <a href="https://www.facebook.com/subbassmentz" target="_blank">Facebook page</a>
      `
    ],
    [
      "Grietje",
      ["works/grietje.png", "works/grietje_2.png"],
      "poster & video",
      `
      <p>
        This poster I made for a school assignment. I had to make a poster and advertising video for a new play named 'Grietje' (Hansel and Gretel).
        <br>I tried out a lot of illustration styles for this project and I finally chose to create a feeling of depth by lightening the colors of further placed objects. The idea for the poster was to be atrractive to children, as they were the primary target audience for the play. This is why i chose a warm color palette, rather than going for realistic colors.
        All illustrations were made by me, using photoshop and a WACOM tablet. <br>
        The video was constructed using the photoshop layers in after effects, to keep the overal look and feel exactly the same as that of the poster.
      </p>
      <a href="works/grietje_pdf.pdf" target="_blank">poster</a>
      <a href="https://www.youtube.com/watch?v=ExQB65SE-fg" target="_blank">video</a>
      `
    ],
    [
      "Another World",
      ["works/anotherworld.png", "works/anotherworld_2.png"],
      "poster & video",
      `
      <p>
        This poster I also made for a school assignment. This time I had to make a poster and a five second long advertising video for video billboards to advertise a new exhibition called 'Een andere wereld' (Another world) in Museum Dr. Guislain, Gent.
        The exhibition showed works revolving around psychosis over a period of two centuries. We got to see a few of the works, to get a feel for the subject, before starting with the design process.<br>
        The main graphic on the poster represents a brain, made out of puzzle pieces, exploding... Or coming together?<br>
        I made the puzzle pieces using 3DS Max and animated them to make the five second video.
      </p>
      <a href="works/anotherworld_pdf.pdf" target="_blank">poster</a>
      <a href="https://www.youtube.com/watch?v=jnIsE1uFigQ" target="_blank">video</a>
      `
    ],
    [
      "Bezorgde Berlaarse Burgers",
      ["works/bbb.png", "works/bbb_2.png"],
      "logo",
      `
      <p>
        For this project I was contacted by people I knew in my home town Berlaar. They represented a new organisation called 'Bezorgde Berlaarse Burgers' (Concerned citizens of Berlaar) and were in need of a logo. They explained to me that they wanted to preserve nature and older buildings in our town and this had to be visible in the logo I made.
        I thought of the more iconic places in Berlaar and made a very simple representation of them with the least possible amount of lines. Fitting them together was not an easy job, but I managed to create a coherent image at the end.
      </p>
      `
    ]
  ];

  // create a grid of all works
  createWorkGrid(allWorksArray);

  var allWorks = document.getElementsByClassName('single-work');
  var details = document.getElementById('work-details');
  var title = details.getElementsByTagName('h4')[0];
  var text = details.getElementsByClassName('text')[0].getElementsByClassName('content')[0];
  var image = details.getElementsByClassName('work-img')[0];
  var nextImage = image.getElementsByClassName('next-img')[0];
  // on click function for every single work
  for(i = 0; i < allWorks.length; i++) {
    allWorks[i].onclick = (e) => {
      // fix: i is not in scope of onclick function!!!
      var i = parseInt(e.target.dataset.index);
      title.dataset.string = allWorksArray[i][0];
      image.style.backgroundImage = 'url( ' + allWorksArray[i][1][0] + ')';
      text.innerHTML = allWorksArray[i][3];

      // if there are multiple image for this work
      if(allWorksArray[i][1].length > 1) {
        image.dataset.images = allWorksArray[i][1];
        image.style.backgroundImage = 'url( ' + allWorksArray[i][1][1] + ')';
        image.dataset.index = 1;
        nextImage.style.display = "block";
        nextImage.onclick = () => {
          var imageIndex = parseInt(image.dataset.index)+1;
          if(imageIndex == allWorksArray[i][1].length) {
            imageIndex = 0;
          }
          image.dataset.index = imageIndex;
          image.style.backgroundImage = 'url( ' + allWorksArray[i][1][imageIndex] + ')';
        }
      } else {
        nextImage.style.display = "none";
      }
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
              details.getElementsByClassName('work-details-inner')[0].getElementsByClassName('content')[0].classList.add('visible');
              image.classList.add('visible');
              details.getElementsByClassName('back-button')[0].classList.add('visible');
              // fix for bad display lower than 1441 height
              if(window.innerWidth < 1441) {
                var newHeightDiv = document.getElementById('work').offsetHeight;
                var workHeight = Math.floor(newHeightDiv/allWorks.length);
                console.log(title.offsetHeight, text.offsetHeight, image.offsetHeight, workHeight)
                var totalHeight = title.offsetHeight + text.offsetHeight + image.offsetHeight; // 600 for some margins
                if(window.innerWidth < 980) {
                  totalHeight += 600;
                }
                var indexOfLastVisibleDiv = allWorks.length-1;
                console.log(totalHeight, newHeightDiv);
                while(totalHeight < newHeightDiv) {
                  console.log(totalHeight, newHeightDiv);
                  allWorks[indexOfLastVisibleDiv].style.display = "none";
                  indexOfLastVisibleDiv -= 1;
                  newHeightDiv -= workHeight;
                }
                if(window.innerWidth < 980) {
                  title.scrollIntoView({block: "start", inline: "start"});
                }
              }
            });
          }, 450);
        })
      }, 450);
    }
  }

  // on click function for the back button in work-details
  var backButton = document.getElementsByClassName('back-button')[0];
  backButton.onclick = () => {
    details.getElementsByClassName('work-details-inner')[0].getElementsByClassName('content')[0].classList.remove('visible');
    image.classList.remove('visible');
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
    delay = 200;
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
    newImage.src = allWorks[i][1][0];
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
