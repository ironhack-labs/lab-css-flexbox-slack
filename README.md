![Ironhack logo](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# CSS | Slack clone with Flexbox

## Introduction

**Slack** is a cloud-based set of team collaboration tools and services, or in simpler terms, an online chat application.

We use Slack app almost every day to keep our communications with our classmates and the **Ironhack** team, but today we will be focusing on their landing page. In today's lab, we'll recreate Slack's landing page while ensuring it's responsive and adapts well to different screens. You can see the web page that we will be cloning [here](https://www.figma.com/proto/k77VYVA70WcPYRLvg4QmIf/LAB-CSS-Slack-Clone?node-id=125%3A3&scaling=scale-down-width&page-id=125%3A2&starting-point-node-id=125%3A3&hide-ui=1).



The goal of the lab is to create a *responsive* landing page using **CSS**, **Flexbox**, and **media queries**.




## Requirements

- Fork this repo
- Clone this repo

  

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can check your work.



## Instructions

The `starter_code` folder contains all the files you'll need. The `images` folder contains all the images you'll need for your page, although most of them are already displayed on the page.



**The `index.html` already contains all the text and content needed.  We will be focusing on the CSS and the styling!**



During each iteration, the first step you should do is to inspect the provided screenshots. These are included in each iteration, along with a preview of the final result. Use these as a starting point for implementing your styles.

<br />

<!--

## Iteration 0 | Introduction to Figma

The first step during every iteration will be to inspect the design files. These were created using Figma are usually handed of to developers by designers. [Figma](https://www.figma.com/) is a web-based UI (User Interface) design tool, used for creating design prototypes for websites and applications.

Figma is great because it allows designers and developers to collaborate on projects while also making it simple to share and preview the web page designs.

When you begin working as a developer, it is very likely that your team will use Figma to handoff the designs of the features you will be asked to create. We're going to assume you've never seen Figma before, so don't worry. The following short videos should get you up to speed:

- [What is Figma?](https://www.youtube.com/watch?v=_d8GG2QZYAM)
- [Figma for Frontend developers [ in 5 minutes ]](https://www.youtube.com/watch?v=hbN9RGcQFNU)

-->

----

### Iteration 1 | Mobile Screens (width < 768px)

Mobile first right? :wink: 

We will start by focusing on the styles for mobile screens first! 📱 Oh! Remember to use **Flexbox** to create the layout and display the content in rows or columns from the start. You'll be working on adapting the layout to different screen sizes in the following iterations, so it's essential that you start using Flexbox from start to end!



<br>

When done, your page should look like this: [Preview - Mobile](https://www.figma.com/proto/k77VYVA70WcPYRLvg4QmIf/LAB-CSS-Slack-Clone?node-id=68%3A2762&scaling=scale-down&page-id=68%3A2761&starting-point-node-id=68%3A2762&show-proto-sidebar=1&hide-ui=1)



<br>

Use the following page screenshot as the guide:

<details>
  <summary>Screenshot - Mobile Screens</summary>
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack/Home+Page+-+420px.png" width="200px"/>
  <br/>

  [Back to top](#iteration-1--mobile-screens-width--768px)
</details>





<!--

You can inspect the page styles here:

[Figma file - Mobile]()

-->



<br>



----




### Iteration 2 | Small Screens (width > 768px and width < 1024px)

Let's start growing our screen size. Focus on small screens (iPads, tablets or bigger smartphones). Notice we have some changes. You need to work on the following ones: 

- The **header** should go from 1 column to display 2 columns; one with the content and buttons and the other with the image.
- The **company logos** should be displayed in a single row
- The **images** in the sections in the **main** part should be fully displayed and aligned to the left or right side of the page, respectively.
- The **section "Team large and small rely on Slack"** should have the list items and the buttons displayed horizontally as rows.
- The **subfooter** items, previously displayed as a column, should now be displayed in a single row.



<br>

When done, your page should look like this: [Preview - Small Screens](https://www.figma.com/proto/k77VYVA70WcPYRLvg4QmIf/LAB-CSS-Slack-Clone?node-id=49%3A1508&scaling=scale-down&page-id=68%3A2976&starting-point-node-id=49%3A1508&hide-ui=1)



<br>

Use the following page screenshot as the guide:

<details>
  <summary>Screenshot - Small Screens</summary>
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack/Home+Page+-+768px.png" width="550px"/>
  <br/>

  [Back to top](#iteration-2--small-screens-width--768px-and-width--1024px)
</details>



<!--

You can inspect the page styles here:

[Figma file - Small Screens]()

-->





<br>



----



### Iteration 3 | Medium Screens (width > 1024px and width < 1440px)

The easiest change we will have. We'll continue by focusing on the meduim screen size devices (notebooks and bigger tablets):



- The **navbar** should now display all the menu links. The previously displayed menu icon should now be hidden.
- The **sections** in the **main** part should now display the content in 2 columns; one column for the heading and text and the other for the image.
- The **section "Welcome to your new digital HQ"** should now have the buttons displayed horizontally as rows.



<br>

When done, your page should look like this: [Preview - Medium Screens](https://www.figma.com/proto/k77VYVA70WcPYRLvg4QmIf/LAB-CSS-Slack-Clone?node-id=49%3A2159&scaling=scale-down&page-id=68%3A2977&starting-point-node-id=49%3A2159&hide-ui=1)



<br>

Use the following page screenshot as the guide:

<details>
  <summary>Screenshot - Medium Screens</summary>
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack/Home+Page+-+1024px.png" />
  <br/>

  [Back to top](#iteration-3--medium-screens-width--1024px-and-width--1440px)
</details>



<!--

You can inspect the page styles here:

[Figma file - Medium Screens]()

-->



<br>



----




### Iteration 4 | Large Screens (width > 1440px)

Last one! Some small changes and we are done! In this iteration we are targeting the large screen devices such as desktops and laptops:

- The **sign up buttons** in the **header** should now be displayed horizontally, next to each other. Additionaly, the image shown in the **header** should be centered and fully visible.

  

<br>

When done, your page should look like this: [Preview - Large Screens](https://www.figma.com/proto/k77VYVA70WcPYRLvg4QmIf/LAB-CSS-Slack-Clone?node-id=49%3A2489&scaling=scale-down&page-id=68%3A2978&starting-point-node-id=49%3A2489&hide-ui=1)



<br>

Use the following page screenshot as the guide:

<details>
  <summary>Screenshot - Large Screens</summary>
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m1/lab-flexbox-slack/Home+Page+-+1440px.png" />
  <br/>


  [Back to top](#iteration-4--large-screens-width--1440px)

</details>



<!--

You can inspect the page styles here: [Figma file - Large Screens]()

-->



<br />



Happy coding! ❤️
