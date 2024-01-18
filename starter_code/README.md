![Ironhack logo](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# CSS | Flexbox Slack Clone

<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack-simple/Slack%2BHome%2BPage%2BIntro%2BTablet.png" alt="slack landing page mobile" width="500" />
</p>


<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Develop a fully responsive webpage using the provided designs as a guide.
- Use CSS _media queries_ to adapt the page layout to different screen sizes.
- Use _Flexbox_ to layout and position elements on a webpage dynamically as either rows or columns.
- Use the CSS `position` property to position elements on a webpage.
- Display images on a webpage and make them responsive according to the viewport size.
- Submit completed work using Git and GitHub by creating a Pull Request.

  <br>
  <hr>

</details>

<br>

## Introduction

**Slack** is a cloud-based set of team collaboration tools and services, or in simpler terms, an online chat application.

Slack app is used in daily communications within different teams in companies, but today we will be focusing on their landing page. In today's lab, we'll recreate Slack's landing page while ensuring it's responsive and adapts well to different screens. You can see the _desktop (large) screen_ version of the web page we will be cloning [here](<https://www.figma.com/proto/IBsxB8TITYkHS35t14Ae84/LAB-CSS-Slack-Clone-(v2---simple)?type=design&node-id=27920-474&t=bsnVpQHUC4XwXcyM-1&scaling=scale-down-width&page-id=125%3A2&starting-point-node-id=27920%3A474&mode=design&hide-ui=1>).

<br>

The lab's goal is to create a _responsive_ landing page using **CSS** and **Flexbox**, starting with the styles for the mobile (small) screens first and then adapting the layout to larger screens using _media queries_.

We have provided you with the all the HTML and the images you will need for the page, as well as the screenshots to guide you with the styles and layout for each screen size.

<br>

## Getting Started

- Fork this repo
- Clone this repo

<br>

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.

<br>

## Instructions

The `starter_code` folder contains all the files you'll need. The `images` folder contains all the images you'll need for your page, although most of them are already displayed on the page.

**The `index.html` already contains all the text and content needed. We will be focusing on the CSS and styling!**

During each iteration, the first step you should do is to inspect the provided screenshots. These are included in each iteration, along with a preview of the final result. Use these as a starting point for implementing your styles.

<br />

---

### Iteration 1 | Mobile Screens (width < 768px)

Mobile first, right? :wink:

We will start by focusing on the styles for mobile screens first! :iphone: Oh! Remember to use **Flexbox** to create the layout and display the content in rows or columns from the start. You'll be working on adapting the layout to different screen sizes in the following iterations, so it's essential that you start using Flexbox from beginning to end!

<br>



When done, your page should look like this: [Preview - Mobile](<https://www.figma.com/proto/IBsxB8TITYkHS35t14Ae84/LAB-CSS-Slack-Clone-(v2---simple)?type=design&node-id=27905-2817&t=4UQZ5O1FjodswKev-8&scaling=scale-down&page-id=68%3A2761&starting-point-node-id=27905%3A2817&hide-ui=1>)

<br>

Use the following page screenshot as the guide:

<details>
  <summary><b>Screenshot - Mobile Screens</b></summary>
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack-simple/Slack%2BHome%2BPage%2B-%2B420px.png" width="420px"/>
  <br/>


[Back to top](#iteration-1--mobile-screens-width--768px)

</details>

<br>

---

### Iteration 2 | Small Screens (width > 768px and width < 1024px)

Let's start growing our screen size. In this iteration, you will work on making the website look great on small screens (iPads, tablets, or larger smartphones). You will have to use CSS [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to apply the style and layout changes. Take a look at the preview and the screenshot to see the changes that are needed. Your task is to work on the following:

- The **header** should go from 1 column to display 2 columns: one with the content and buttons and the other with the image.
- In the **section "TRUSTED BY COMPANIES..."**, the **company logos** should be displayed in a single row.
- The **section "Teams large and small rely on Slack"** should have the **list elements** displayed horizontally as rows.
- In the **footer**, the **list elements** that were previously displayed as a column should now be displayed horizontally in a row.

<br>



When done, your page should look like this: [Preview - Small Screens](<https://www.figma.com/proto/IBsxB8TITYkHS35t14Ae84/LAB-CSS-Slack-Clone-(v2---simple)?type=design&node-id=27920-208&t=GG6xsZqUwaSq21fe-8&scaling=scale-down&page-id=68%3A2976&starting-point-node-id=27920%3A208&hotspot-hints=0&hide-ui=1>)

<br>

Use the following page screenshot as the guide:

<details>
  <summary><b>Screenshot - Small Screens</b></summary>
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack-simple/Slack%2BHome%2BPage%2B-%2B768px.png" width="768px"/>


  <br/>

[Back to top](#iteration-2--small-screens-width--768px-and-width--1024px)

</details>

<br>

---

### BONUS: Iteration 3 | Medium Screens (width > 1024px and width < 1440px)

We'll continue by focusing on devices with medium-sized screens (notebooks and bigger tablets). Similar to the previous iteration, you will have to use CSS media queries to apply the style and layout changes. The most noticeable changes in this viewport size are:

- The **navbar** should now display **all the menu links**. The previously displayed **menu icon** should now be hidden.
- The **section "Welcome to your new digital HQ"** should now display the buttons horizontally next to each other.

<br>



When done, your page should look like this: [Preview - Medium Screens](<https://www.figma.com/proto/IBsxB8TITYkHS35t14Ae84/LAB-CSS-Slack-Clone-(v2---simple)?type=design&node-id=27920-291&t=pq37L62mzfeHEFnN-1&scaling=scale-down&page-id=68%3A2977&starting-point-node-id=27920%3A291&hotspot-hints=0&hide-ui=1>)

<br>

Use the following page screenshot as the guide:

<details>
  <summary><b>Screenshot - Medium Screens</b></summary>
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack-simple/Slack%2BHome%2BPage%2B-%2B1024px.png" />
  <br/>


[Back to top](#iteration-3--medium-screens-width--1024px-and-width--1440px)

</details>

<br>

---

### BONUS: Iteration 4 | Large Screens (width > 1440px)

Last one! Some small changes and we are done! In this iteration we are targeting large-screen devices such as desktops and laptops:

- The **signup buttons** in the **header** should now be displayed horizontally, next to each other.
- Additionally, the **image** in the **header** should be centered and fully visible.

<br>



When done, your page should look like this: [Preview - Large Screens](<https://www.figma.com/proto/IBsxB8TITYkHS35t14Ae84/LAB-CSS-Slack-Clone-(v2---simple)?type=design&node-id=27920-383&t=A1gXFjJ0doVfgZvR-8&scaling=scale-down&page-id=68%3A2978&starting-point-node-id=27920%3A383&hotspot-hints=0&hide-ui=1>)

<br>

Use the following page screenshot as the guide:

<details>
  <summary><b>Screenshot - Large Screens</b></summary>
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack-simple/Slack%2BHome%2BPage%2B-%2B1440px.png" />
  <br/>


[Back to top](#iteration-4--large-screens-width--1440px)

</details>

<br />

**Happy coding!** :blue_heart:

<br>

## FAQs

<br>

<details>
  <summary>I am stuck in the exercise and don't know how to solve the problem or where to start.</summary>
  <br>

If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources.

Once you have a clear understanding of the problem, you will be able to start working toward the solution.

[Back to top](#faqs)

</details>

<details>
  <summary>How do I center align HTML text elements?</summary>
  <br>

To center align HTML _text elements_, you can use the `text-align` property and set it to `center`. This property can be applied to any _inline_ or _block-level_ element.

Here is an example of how you can use the `text-align` property to center align multiple text elements:

**HTML**

```html
<div>
  <h2>This is a title</h2>

  <p>This is some text in here</p>
</div>
```

**CSS**

```css
/* CSS */

p {
  text-align: center; /* Center align all p elements */
}

h2 {
  text-align: center; /* Center align all h2 elements */
}
```

This will center align all `p` and `h2` elements within the parent `div`.

For more information, check: [W3C: Centering Things](https://www.w3.org/Style/Examples/007/center.en.html)

[Back to top](#faqs)

</details>

<details>
  <summary>How do I center align HTML block elements?</summary>
  <br>

To center align a block-level element, such as a `div`, `h1`, etc., you can use the `margin` property and set it to `auto`. This will center the element horizontally within its parent container.

Here is an example of how you can do this:

**HTML**

```html
<section>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>
</section>
```

**CSS**

```css
/* CSS */

div {
  width: 500px;
  margin: 0 auto;
}
```

This will set the `width` property of the `div` to 500 pixels and we set the left and right margins to be equal by using `margin: 0 auto;`.

[Back to top](#faqs)

</details>

<details>
  <summary>How do I center align an HTML image element?</summary>
  <br>

There are a few ways you can center align an image element.

##### 1. Align an image using `text-align`

To center an image element in HTML, you can use the `text-align` property on the parent element, such as `div`. Example:

**HTML**

```html
<div>
  <img src="https://placehold.co/300x150.png" />
</div>
```

**CSS**

```css
div {
  text-align: center;
}
```

This will center align all the children elements within the `section` element, including the `img` element.

<br>

##### 2. Align an image as a block element

The other way is converting the image into a block element and using `margin: 0 auto`. Here is an example:

**HTML**

```html
<section>
  <img src="https://placehold.co/300x150.png" />
</section>
```

**CSS**

```css
img {
  display: block;
  margin: 0 auto;
}
```

This will center the image horizontally within the parent `section` element. The `display: block` property is used to make the image a _block-level_ element, allowing the `margin: 0 auto` property to work. The `margin: 0 auto` property sets the left and right margins to be equal, centering the element within its parent container.

[Back to top](#faqs)

</details>

<details>
  <summary>How can I center align elements within a Flexbox container?</summary>
  <br>
To center align elements within a Flexbox parent container, you can use the `justify-content` property and set it to `center`. This will horizontally center the elements within the Flexbox container.

**Example:**

```css
.container {
  display: flex;
  justify-content: center; /* Center elements horizontally */
}
```

You can also use the `align-items` property and set it to `center` to vertically center align the elements within the Flexbox container.

Example:

```css
.container {
  display: flex;
  justify-content: center; /* Center elements horizontally */
  align-items: center; /* Center elements vertically */
}
```

<br>

For more information and an interactive Flexbox guide, check: [An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox)

<br>

[Back to top](#faqs)

</details>

<details>
  <summary>How can I change the header from having 1 column to having 2 columns using Flexbox?</summary>
  <br>

To change the header of an HTML page from having one column to having two columns using Flexbox, you should do the following in your CSS:

1.  Use the `display` property and set it to `flex`.
2.  Add the `flex-direction` property and set it to `column` to arrange the elements in a column.
3.  Add the `justify-content` property to align the elements horizontally
4.  Use the `align-items` property to align them vertically.

```css
header {
  display: flex;
  flex-direction: column; /* Arrange elements in a column */
  justify-content: space-between; /* Align horizontally */
  align-items: center; /* Align vertically */
}
```

To make the header responsive and change it to a two column layout on screens that are wider than 800 pixels, use a media query and set the `flex-direction` property to `row`:

```css
@media (min-width: 800px) {
  header {
    flex-direction: row;
  }

  /* Change the width of nested div elements */
  header > div {
    width: 50%;
  }
}
```

The header will maintain a single-column layout on smaller screens, but on screens larger than 800 pixels wide, it will change to a two-column layout.

[Back to top](#faqs)

</details>

<details>
  <summary>Why are my media query styles not displaying properly on my browser?</summary>
  <br>

When using media queries to create a responsive layout, it is recommended to start with the default styles for mobile (smaller) screens and then use media queries at the end of your stylesheet to apply styles for each increasing viewport size.

There are a few possible reasons why your media query styles may not be properly displayed on your browser.

1. Where applicable, check that you already have default styles for mobile screens. These styles should be placed at the beginning of your stylesheet before your media queries.
2. Ensure you have placed your media queries at the end of your stylesheet after your regular styles. This is because media queries are applied after regular styles, so if you place them before your regular styles, they will be overridden.
3. Ensure you have the correct syntax in your media query. The correct syntax is `@media (expression) {...}`.
4. Make sure that you are using the correct media query expression. For example, if you are trying to target screens that are wider than 800 pixels, you should use the `min-width` in your expression, like this: `@media (min-width: 800px) {...}.`

For more information on CSS media queries, check: [MDN: Beginner's guide to media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)

[Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>
  <br>

There are a couple of possible reasons why you may be unable to _push_ changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

```bash
git add .
git commit -m "Your commit message"
git push
```

2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a _Fork_ first, you do not have write access to the repository.
   To check which remote repository you have cloned, run the following terminal command from the project folder:

```bash
git remote -v
```

If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first and then clone your fork to your local machine to be able to push the changes.

**Note**: You should make a copy of your local code to avoid losing it in the process.

[Back to top](#faqs)

</details>
