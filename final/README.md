---
title: "Report - Final Assignment"
author: "Johannes Riedmann"
date: 2023-12-03
---

# Report - Final Assignment

_Johannes Riedmann, AE9614_

This document summarizes the process of creating the [Library Riedmann webpage](https://ae9614.pages.labranet.jamk.fi/web-visualization/final/src/index.html). The following chapters will explain time investment, technology choices and some general decisions and thoughts in regards to the project.


## Resourcing

I divided my time records into three parts:

| activity        | time          |
| :-------------- | ------------: |
| prototyping     | 6h            |
| implementation  | 34h 30min     |
| report          | 2h            |
| **total**       | **42h 30min** |

In total, ... have been invested into creating this webpage so far. However, this includes the prototyping stage and writing the report you are currently reading. 


## Technology Choices

### Protyping

For the prototyping stage, [Figma](https://www.figma.com/de/) was my design tool of choice. This was a very easy choice for me, as Figma is basically the most popular free tool for webdesign and as I had some previous experience with the program.

The prototypes were created in a mobile first manner and set the guidelines for colour choices and general component design early on.

### Webpage

The website was creating using a rather conventional technology stack, i.e., no Javascript framework was used as it is often the case for modern, dynamic webpages. In fact, Javascript was hardly used at all, as this project was intended as an exercise for creating a **responsive, static website** as opposed to a full web application.

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
  To ensure compatibility across various (older) browsers, PostCSS can be used to modify a CSS file and make it more universally understandable. For this project, the **autoprefixer** of PostCSS was used. It adds a fallback-value of specific CSS attributes with browser-specific prefixes to the CSS file (e.g. `--webkit`, `--moz`) where necessary.


#### Workspace

The setup of the workspace was created using the **[bulma-start](https://bulma.io/bulma-start/) npm package** recommended by Bulma. Even though this is still a relatively new package, it included every technology I planned to use anyway (Bulma, SCSS, PostCSS).

A short explanation on how to use bulma-start can be found in the `deploy.md` file at [/final/src/deploy.md](./src/deploy.md).


### Graphics

For the creation of **custom vector graphics** (SVG) [Inkscape](https://inkscape.org) was used. I chose this program due to its popularity among SVG designers as well as its powerful toolset. I had no prior experience in Inkscape before but I have created a few SVGs in a simple online tool called [Boxy SVG](https://boxy-svg.com/).


## Implementation

This chapter focuses on some general thoughts about my implementation of the webpage.

/*
  Chapter pending
*/


## Learning Outcomes

Luckily, I wasn't a complete newcomer to modern CSS technologies and web development in general. However, there were still some learning outcomes that could be made from this project (and by extension this course).

### Proper Use Of CSS Libraries
Previously, I did not have a lot of experience when it comes to CSS libraries like Bootstrap, Bulma or Material UI. I have used all of the aforementioned tools before, however, I had never gone past the basics and had never modified the default theme. During this project, I learned how to customize a CSS library like Bulma by overwriting its default styles. This made using the library a lot more fun and useful, thus improving my opinion on these libraries a lot.

### Clear Structuring Of SCSS Modules
The structure of my CSS or more accurately SCSS code has benefitted tremendously from this project. Even though I have used SCSS before, I had never used multiple SCSS modules and did not know how to properly structure my modules. Using the tree structure taught during this course made my SCSS codebase a lot easier to traverse and thus simpler to modify.

### Animating SVGs

A newly obtained skill from this course in general was the method of animating inline-SVGs. I have seen `@keyframes` before but I had never used them in a project and I did not know how to animated SVGs. This task turned out to be a lot of fun for me, so I am glad this was taught in the course.


## Grade proposal

**Pending**  
_A grade proposal will follow as soon as the project is completely finished. The proposal will also depend on the feedback of the halfway assessment._
