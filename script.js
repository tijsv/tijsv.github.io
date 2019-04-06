class Portfolio {
    constructor() {
        this.JFS = this.initJFS();
        this.navigationItems = document.querySelectorAll('[data-navigation-item]');
        this.navigationElements = document.querySelectorAll('[data-navigation-element]');
        this.sectionObjects = this.initSectionObjects();
        this.toggleTime = 800;
        this.transitioning = false;
        this.initNavigation();
        this.hideAllButOneSection();
    }

    hideAllButOneSection() {
        for(let i = 0; i < this.sectionObjects.length; i++) {
            if(!this.sectionObjects[i].selected) {
                this.sectionObjects[i].section.style.display = "none";
                this.toggleSectionElements(this.sectionObjects[i]);
            }
        }
    }

    initSectionObjects() {
        let sections = document.querySelectorAll('[data-section]');
        let sectionObjects = [];
        for(let i = 0; i < sections.length; i++) {
            let selected = false;
            if((i === 0 && window.location.hash === "") || window.location.hash.slice(1) === sections[i].id) selected = true;
            sectionObjects.push({
                section: sections[i],
                elements: sections[i].querySelectorAll('[data-section-element]'),
                selected
            })
        }
        return sectionObjects;
    }

    initNavigation() {
        for(let i = 0; i < this.navigationItems.length; i++) {
            this.navigationItems[i].onclick = (e) => {
                e.preventDefault();
                this.toggleNavigation(e.target);
            }
        }
    }

    toggleNavigation(navItem) {
        if(this.transitioning) return;
        else this.transitioning = true;
        let navItemId = navItem.getAttribute('href');
        this.triggerClickAnimation(navItem);
        this.togglePreviousSection();
        this.toggleNavigationElements();
        this.toggleNavigationItems(navItem);
        setTimeout(() => {
            this.scrollToSection(navItemId);
            this.toggleNextSection(navItemId);
            this.toggleNavigationElements(navItem, true);
            this.toggleNavigationItems(navItem);
            setTimeout(() => {
                this.transitioning = false;
            },this.toggleTime)
        },this.toggleTime);
    }

    togglePreviousSection() {
        for(let i = 0; i < this.sectionObjects.length; i++) {
            if(this.sectionObjects[i].selected) {
                this.sectionObjects[i].selected = false;
                this.toggleSection(`#${this.sectionObjects[i].section.id}`);
            }
        }
    }

    toggleNextSection(id) {
        for(let i = 0; i < this.sectionObjects.length; i++) {
            this.sectionObjects[i].section.style.display = "none";
            if(this.sectionObjects[i].section.id === id.slice(1)) {
                this.sectionObjects[i].section.style.display = "flex";
                this.sectionObjects[i].selected = true;
                setTimeout(() => {
                    this.toggleSection(`#${this.sectionObjects[i].section.id}`);
                },50);
            }
        }
    }

    toggleNavigationElements(navItem, changeColor = false) {
        for(let i = 0; i < this.navigationElements.length; i++) {
            if(changeColor) this.navigationElements[i].style.backgroundColor = navItem.dataset.navigationItem;
            this.JFS.toggleAnimation(this.navigationElements[i]);
        }
    }

    triggerClickAnimation(navItem) {
        navItem.classList.remove('click-animation'); 
        setTimeout(function() {
            navItem.classList.add('click-animation');
        },50);
    }

    toggleNavigationItems(navItem) {
        for(let i = 0; i < this.navigationItems.length; i++) {
            if(this.navigationItems[i] !== navItem) {
                this.JFS.toggleAnimation(this.navigationItems[i]);
            } 
        }
    }

    toggleSection(id) {
        for(let i = 0; i < this.sectionObjects.length; i++) {
            if(this.sectionObjects[i].section.id === id.slice(1)) {
                this.toggleSectionElements(this.sectionObjects[i]);
                break;
            }
        }
    }

    toggleSectionElements(sectionObject) {
        for(let j = 0; j < sectionObject.elements.length; j++) {
            this.JFS.toggleAnimation(sectionObject.elements[j]);
        }
    }

    scrollToSection(id) {
        for(let i = 0; i < this.sectionObjects.length; i++) {
            if(this.sectionObjects[i].section.id === id.slice(1)) {
                this.sectionObjects[i].section.scrollIntoView();
                break;
            }
        }
    }

    initJFS() {
        return new JFS([
            {
                name: "hide-line-left",
                style: "transform: scaleX(0); transform-origin: left"
            },
            {
                name: "hide-line-right",
                style: "transform: scaleX(0); transform-origin: right"
            },
            {
                name: "hide",
                style: "transform: scale(0); opacity: 0 !important;"
            },
            {
                name: "hide-content",
                style: "transform: scale(0.8); opacity: 0 !important;"
            }
        ], {
            default: {
                easing: 'cubic-bezier(0.13, 0.92, 0.37, 1)'
            }
        });
    }

}

new Portfolio();