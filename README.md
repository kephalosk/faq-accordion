# Frontend Mentor - Social links profile solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS/hub). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

Desktop
![Desktop](./screenshots/screenshot_desktop.png)

Mobile
![Mobile](./screenshots/screenshot_mobile.png)

Active1
![Active](./screenshots/screenshot_active1.png)

Active2
![Active](./screenshots/screenshot_active2.png)

Active3
![Active](./screenshots/screenshot_active3.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/kephalosk/faq-accordion)
- Live Site URL: [Add live site URL here](https://kephalosk.github.io/faq-accordion/)

## My process

1. download Project


2. move Project to target folder


3. open Project in IDE


4. read README


5. add .gitignore-file


6. check files


7. check design


8. initialize repo
* create repo on GitHub
* git init
* git add .
* git commit -m "initial commit"
* git remote add origin git@github.com:kephalosk/${projectname}.git
* git push -u origin master

9. check html
* build general structure
* open index.html in browser for comparison

10. check css
* image styling
* font styling
* color styling
* frame styling
* spacing styling

11. check transitions


12. check mobile/responsive design


13. check accessability
* semantic html
* headings
* alternative texts
* language
* clear language
* link texts

14. extract css


15. add screenshots


16. update README


17. publish website

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Desktop-first workflow

### What I learned

I learned to use tabindex and add Event Listeners for keyboard accessability
```html
<div class="accordionHeader" tabindex="1">
  <h2>What is Frontend Mentor, and how will it help me?</h2>
  <div class="accordionIconContainer">
    <img src="assets/images/icon-plus.svg" class="accordionIcon" alt="plus icon">
  </div>
</div>
```

```javascript
    const accordionHeaders = document.querySelectorAll('.cardBoxAccordion');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', toggleAccordion);
        header.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                toggleAccordion.call(this);
                event.preventDefault();
            }
        });
    });
```

I learned that transitions dont work with block properties.

I learned to use transitions to show and hide text-blocks.
```css
.accordionContent {
    margin: 0;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.4s ease;
    width: 100%;
}

.accordionContent.open {
    max-height: 1000px;
    opacity: 1;
}
```

I learned to add and remove classes from html elements
```javascript
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            text.classList.remove('open');
            icon.src = "assets/images/icon-plus.svg";
            this.setAttribute('aria-expanded', 'false');
        } else {
            content.classList.add('open');
            text.classList.add('open');
            icon.src = "assets/images/icon-minus.svg";
            this.setAttribute('aria-expanded', 'true');
        }
```

I improved html, css and javascript skills in general.

### Continued development

* improve html
* improve css

### Useful resources

- [w3schools](https://www.w3schools.com/) - HTML and CSS knowledge
- [selfhtml](https://wiki.selfhtml.org/wiki/HTML) - HTML knowledge

## Author

- Website - [kephalosk](https://easywebpath.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

None.