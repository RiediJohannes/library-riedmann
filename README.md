# Report

_Johannes Riedmann_

This document summarizes the process of creating the [Library Riedmann webpage](https://ae9614.pages.labranet.jamk.fi/web-visualization/final/src/index.html). The following chapters will explain time investment, technology choices and some general decisions and thoughts in regards to the project.


---

## 1. Technology Choices

### 1.1 Protyping

For the prototyping stage, [Figma](https://www.figma.com/de/) was my design tool of choice. This was a very easy choice for me, as Figma is basically the most popular free tool for webdesign and as I had some previous experience with the program.

The prototypes were created in a mobile first manner and set the guidelines for colour choices and general component design early on.

### 1.2 Static Webpage

The website was creating using a rather conventional technology stack, i.e., no Javascript framework was used as it is often the case for modern, dynamic webpages. In fact, Javascript was at first hardly used at all, as this project was intended as an exercise for creating a **responsive, static website** as opposed to a full web application.

However, the development of this simple, static website was aided by **modern CSS tools** that make writing styles a lot simpler and more organised.

In practice, the following CSS tools were used:

+ [**Bulma**](https://bulma.io/)  
  Bulma a popular CSS library which streamlines the process of styling components on a webpage by providing a plethora of **style classes** that can be readily applied to the HTML elements.

  I chose Bulma because it provides and extensive collection of style classes to create a very modern-looking design. At the same time, Bulma is less opinionated than libraries like Bootstrap, because it lets you customize basically everything and easily take over control of styles by yourself. Additionally, Bulma does not include any Javascript or fully fledged-out components, which was very important for me.  
  Personally, I see the benefits of using a CSS library but I dislike when there is some "intransparent magic" going on behind the scenes (which describes my experience with Bootstrap and Material UI very accurately.). Thus, Bulma was the perfect choice for me.

+ [**SCSS**](https://www.npmjs.com/package/sass)  
  Of course, the default style classes of Bulma will not be enough to create a unique webpage with some artistic freedom. Therefore, some parts of the CSS will usually still require to be written by hand.

  To make this process easier, there has long existed a **CSS-preprocessor** called **SASS** as well as the alternative syntax **SCSS**. For this project, I used the SCSS syntax to write my own styles because I am not a fan of the bracket-less syntax of SASS.

  The use of SCSS enabled a much cleaner code structure for my styles thanks to **SCSS modules** and **nested styles**. Although these features are nowadays also part of standard CSS, they are not widely supported as of 2023. Additionally, I made use of the more advanced features of SCSS by using a few **mixins** and the **@for** keyword. Lastly, writing SCSS is a no-brainer if you want to have something else than the default theme of Bulma, as the simplest way of customising Bulma's look is to overwrite its initial **SCSS variables** - which I did.

+ [**PostCSS**](https://postcss.org/)  
  To ensure compatibility across various (older) browsers, PostCSS can be used to modify a CSS file and make it more universally understandable. For this project, the **Autoprefixer** and **CSSnano** plugins of PostCSS was used. Autoprefixer adds a fallback-value of specific CSS attributes with browser-specific prefixes to the CSS file (e.g. `--webkit`, `--moz`) where necessary. CSSnano drastically reduced the file size of the final CSS file by removing all whitespaces and comments and discarding unused CSS classes.

### 1.3 Scripting
In addition to the requirement of simply creating a static webpage, there was also a significant amount of scripting added to the page to enable an actual shopping cart, dynamically loaded shop items and a working searchbar for the shop.

The following technologies were used:

  + [**Typescript**](https://www.typescriptlang.org)   
  Instead of using plain Javascript I tried something new for me by using Typescript. Typescript is a superset of Javascript which requires type annotations and thus adds **typesafety** and **decent static code analysis** support to an otherwise inherently error-prone language. Switching to Typescript early on provided a huge quality of life increase for me and I do not plan to go back to plain JS (which I also did not like before). Obviously, browser cannot run typescript directly but the **Typescript compiler (TSC)** converts the typescript code to normal JS code that can be shipped to the user.

  + [**Babel**](https://babeljs.io)
  Of course, using the newest features of a programming language is always desirable. However, in the world of web development, browser compatibility is often a concern. Luckily, there are tools like Babel which allow developers to **write code using modern features** which are then **transpiled** by Babel to ensure compatibility with a specific version of Javascript (this can be configured in the `.babelrc` file - though I used the default settings).

So, I wrote my website's logic in Typescript which was then compiled to plain JS using `tsc` (typescript compiler) and Babel sees theses changes and transpiles the new version of the outputted JS file to a highly-compatible JS script.

### 1.4 Workspace

The setup of the workspace was created using the **[bulma-start](https://bulma.io/bulma-start/) npm package** recommended by Bulma. Even though this is still a relatively new package, it included every technology I planned to use anyway (Bulma, SCSS, PostCSS, Babel).

A short explanation on how to use bulma-start can be found in the `deploy.md` file at [/final/src/deploy.md](./src/deploy.md).

 However, I ended up modifying the actual packages I was using a little bit. The exact version numbers of the packages and tools I used can be found in the `package.json` or `package-lock.json` file.


### 1.5 Graphics

For the creation of **custom vector graphics** (SVG) [Inkscape](https://inkscape.org) was used. I chose this program due to its popularity among SVG designers as well as its powerful toolset. I had no prior experience in Inkscape before but I have created a few SVGs in a simple online tool called [Boxy SVG](https://boxy-svg.com/).

---

## 2. Implementation

This chapter focuses on some general thoughts about my implementation of the webpage.

### 2.1 General Idea

The vision of this project was to create a **prototype** of a simple **online shop for books**. I say prototype because I did not intend to create every single page required for a comprehensive online shop (e.g. order form, connection to payment service, profile settings, order history, etc.) as this would clearly exceed the scope of the course's assignment. One of my main goals, however, was to accomplish a very modern look for my webpage, taking inspirations from other popular webpages with a **dark theme option** like [GitHub](https://github.com) and [Stackoverflow](https://stackoverflow.com). Of course, another goal of this project was to implement as much of the things we have learned in the Web Visualization course as possible. More about this in the next few chapters.

### 2.2 CSS-Framework

As mentioned earlier, I used the popular CSS framework _Bulma_ to streamline the styling of my webpage. As suggested by Bulma's documentation, I used SCSS to overwrite some of Bulma's variables to **customize the framework** according to my needs. After some initial complications (mostly about how to set this up and how to structure the files), this customization worked very well and really enhanced my experience when working with a CSS framework. I was able to easily change the general theme colours and define some content spacings or font families that were adopted for everyone of Bulma's components.

### 2.3 Custom Styles With SCSS

Obviously, just using a CSS framework on its own will often not suffice, at least if you want to create a unique experience. That's why I wrote some additional styles using the popular CSS pre-processor SASS (more specifically the variation SCSS). Of course, I made use of a lot of SCSS-specific features:

1. I structured my SCSS code in a **neatly organised tree of separate files** using SCSS modules. This way, it was easy to find a specific part of the styling code and apply changes to it.

2. I used lots of **SCSS variables** which I used in other modules (e.g. theme colours or font families), which leads to a single place (the `_variables.scss` module) where these presets can be quickly changes.

3. Common **function** like `lighten()` or `darken()` that are included in the SASS package were applied to create variations of my theme colours.

4. **Mixins** accelerated the process of writing re-occurring style snippets. I used some mixins from Bulma a lot (`from` and `until`), which enable quick insertion of media-queries using Bulma's own breakpoints, but I also wrote two mixins by myself.

5. **Loops** are also part of the SCSS specification. I found an interesting usecase for a `@for` loop when animating one of my vector graphics. I wanted to create a "wiggling animation" which makes a pen look like it is writing on a sheet of paper. To make this very repetitive motion easier to write and especially to change, I used a for-loop in conjunction with a custom mixin I created.


### 2.4 Graphic Design

One requirement of the assignment was to play with some SVGs (vector graphics). Therefore, I designed my home page in a way that it uses multiple SVGs to create a modern look. **Every SVG** on my website - except for small icon like the shopping cart - have been **drawn and animated by myself**. For full disclosure, I used the following tutorials for two graphics:

- [Modern Waves Tutorial](https://www.youtube.com/watch?v=kuJRlMfG0HQ) to create the funky waves with coloured with a gradient that can be seen a the top of the home page.

- [Simple Gear Tutorial](https://www.youtube.com/watch?app=desktop&v=dSkLGigmIKU) to created the small gears spinning inside the brain as can be seen at the bottom of the home page.

The other items sketched by vector graphics (pen, paper, sword, shield, coat of arms, brain) were created **without instructions** from my own creativity.

For the **logo** of the bookstore, I used an SVG of some books which I modified to add custom writing. The book on the 404 page is also just a reused part of the original graphic.

**Remark:**  
I tried to include my SVGs via the `<img>` tag wherever possible, however, this does not work when animating them with CSS. CSS can unfortunately only animate **inline SVGs** right in the HTML. The only two solutions would be to either put all of the animating CSS code into the SVG file (which I did not want to do because of the violation of my code structure) or to dynamically add the SVG into the page on load with either Javascript or a server-side technology like PHP. So, in the end, I left the SVG code of animated graphics inside the HTML, even though it clutters the HTML file.

### 2.5 Scripting

Even though it was not a requirement to add actual logic to the webpage using Javascript, a webshop that was not function felt very odd and lifeless to me. That's why I decided to **add some functionality** after I was done with the design process. The finished prototype includes the following functionality:

  1. **Dynamic Shop Items**  
  The books that are on display on the shop are dynamically loaded from a **JSON file** using Javascript's **fetch API**. New books can simply be added to the store by adding another entry into the `books/books.json` file.

  2. **Functional Shopping Cart**   
  If you select a book that you like, you can actually add it to the shopping cart and come back to it later. The current state of the shopping cart is saved by **serializing a custom shopping cart class** to JSON and saving it in the browser's `localStorage` property ([see docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage?retiredLocale=de)).

  3. **Clearing Your Cart**  
  In addition to adding items to your cart and saving the state, the **clear button** on the shopping cart page also works as expected by removing all items form the cart. If the cart is not empty, the **buy buttons** are also active. However, the do nothing besides also emptying the cart and sending the user back to the home page.

  4. **Search Bar**  
  The shop page also includes a simple search bar which allows the user to search for specific books by name or author. The search happend on the client side and checks for an **exact match** (altough case-insensitive) of the search term in a **book's title or author name**.

  5. **Item Count Mark** (desktop only)  
  If you have put some items into your shopping cart and have not yet removed or bought them, a small mark with the number of items in the cart appear at the corner of the shopping cart button. This feature is currently only supported on the desktop view of the website though.


### 2.6 File Size Optimizations

After basically finishing my website, I started to care about optimizing its loading speed. Therefore I applied three measures:

1. **Compressing Images**  
First, I simply used an image compression program to reduce the file size of the images I used (lots of book covers) and scale them down to a height of a maximum of 800px (which looks good enough).

2. **Adding Preview Images**  
Secondly, I created a lot smaller version of the book covers to use them as **preview images** on the shop page. Thus, the full image of the book cover is only loaded as soon as the user actually clicks on a book. This drastically reduced the size of images on the shop page from `9.5 MB` to just `820 kB`.

3. **Minifying The CSS Stylesheet**  
Lastly, I added **CSSnano** to my project which reduces the size of the final stylesheet `main.css` by removing all unnecessary whitespace and comment as well as discard styles that are never used (which includes a lot of the styles that come with Bulma). This reduced the file size of the final stylesheet from `350 kB` to a mere `133 kB`.


All in all, the page now has much more satisfying load speed, especially on the shop page.

---

## 3. Missing Pieces

In this chapter I would like to quickly highlight an outlook into the future of some features that are still missing or lacking in their implementation.

### 3.1 Additional Pages

The most obvious missing piece to have a full online shop are obviously some more sub-pages. This includes the following pages for a comprehensive user experience:
- order form (name, address, choose shipping and payment option)
- connection to one or ideally more actual payment services
- profile settings screen
- sign up button and page
- order history
- copyright and contact pages

These are the additions I would have in mind for an actual online shop but of course, this wildly exceeds the scope of the course.

### 3.2 Account System

While there is already a **login** button and login page, filling out this form does not actually do something at the moment. Moreover, even though the page presents a way to log in, there is no way to **create a new account**. Additionally, a logged in user should not see the login button anymore. Instead, there would be some sort of profile name or picture to indicate that the user is now logged in.

### 3.3 Pagination

Pagination is the act of splitting the content of a section up into multiple pages that can be accessed and loaded sequentially. Currently, the shop loads all of the books specified in the `books.json` file at once. If the file grows larger, this will heavily slow down the loading time of the shop page. Therefore, only a set number of books (e.g. 15 or 20) should be loaded at a time, while the rest of the books should either load in when the customer scrolls to the bottom or made accessible through a small control to jump to the next page.

---

## 4. Learning Outcomes

Luckily, I wasn't a complete newcomer to modern CSS technologies and web development in general. However, there were still some learning outcomes that could be made from this project (and by extension this course).

### 4.1 Proper Use Of CSS Libraries
Previously, I did not have a lot of experience when it comes to CSS libraries like Bootstrap, Bulma or Material UI. I have used all of the aforementioned tools before, however, I had never gone past the basics and had never modified the default theme. During this project, I learned how to customize a CSS library like Bulma by overwriting its default styles. This made using the library a lot more fun and useful, thus improving my opinion on these libraries a lot.

### 4.2 Clear Structuring Of SCSS Modules
The structure of my CSS or more accurately SCSS code has benefitted tremendously from this project. Even though I have used SCSS before, I had never used multiple SCSS modules and did not know how to properly structure my modules. Using the tree structure taught during this course made my SCSS codebase a lot easier to traverse and thus simpler to modify.

### 4.3 Animating SVGs

A newly obtained skill from this course in general was the method of animating inline-SVGs. I have seen `@keyframes` before but I had never used them in a project and I did not know how to animated SVGs. This task turned out to be a lot of fun for me, so I am glad this was taught in the course.

### 4.4 Using Typescript

This project was the first time I used typescript even though I've heard a lot about it. My experience with it was overly positive (compared to plain JS), as the added typesafety and support for proper code suggestions by IDEs were game-changing. Using typescript for this project, I learned about the tools needed to get it running and gained some more knowledge about web scripting in general (e.g. how to `serialize/deserialize JS classes` from/to JSON, using `localStorage` to save some data on the client side, etc.).

---

## 5. Resourcing

I divided my time records into three parts:

| activity                         |      time |
| :------------------------------- | --------: |
| prototyping                      |     6 h   |
| implementation (HTML, CSS, SVGs) |    37 h   |
| scripting (JS) + data collection |    23 h   |
| report                           |   4.5 h   |
| **total**                        | **70.5h** |

In total, 70.5 hours have been invested into creating this webpage so far. However, this includes the prototyping stage and writing the report you are currently reading. 

---

_11.12.2023, Johannes Riedmann_
