![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# CSS | Slack Clone with Flexbox

## Introduction

You should be reaaaaally familiar with [Slack](https://www.slack.com/) at this point, but just to make it more clear, **Slack** is a cloud-based set of team collaboration tools and services or in simpler terms, it is a chatting program.

We use the app almost every day to keep our communications with our classmates and the **Ironhack** team, so we know perfectly the chat interface but today we are going to clone their landing page. [Here](https://www.slack.com/) you can visit the website and check what are we going to do. :stuck_out_tongue_winking_eye:

We want to practice our new **Flexbox** skill, so we are going to implement the *"responsiveness"* of the landing page. No worries, we will show you what we need!


## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Include both the client and server applications in your submission.

## Submission

- Upon completion, run the following commands

```
git add .
git commit -m "done"
git push origin master
```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Exercise

The **starter_code** contains the basic structure of an HTML & CSS project to start working. You will also find and **images** folder where all the images you will need for the project are stored.

**In the HTML you find all the text needed! Focus on give it some style!**

### Iteration 1 | Extra Small Screen (width < 768px)

Mobile first right? :wink: 

Firs, we are going to clone the mobile design of the webpage! 📱 Oh! Remember to use **flexbox**, because it will be really helpful later on when we need to adapt it to different screen-size!
 
After doing your magic, you should have something like this:

<img src="https://user-images.githubusercontent.com/23629340/33178991-38f26dcc-d068-11e7-8ebd-3e0ef8d72ad4.gif" alt="mobile-1" style="width:23%">


<img src="https://user-images.githubusercontent.com/23629340/33178659-3a19db82-d067-11e7-85a5-62eeb67a0645.png" alt="mobile-1" style="width:23%">

<img src="https://user-images.githubusercontent.com/23629340/33178689-508d3b48-d067-11e7-9b9f-e6548b71cecd.png" alt="mobile-1" style="width:23%">

<img src="https://user-images.githubusercontent.com/23629340/33178733-685542ac-d067-11e7-8a72-39ac499bf0f4.png" alt="mobile-1" style="width:23%">

<img src="https://user-images.githubusercontent.com/23629340/33178749-6e4442bc-d067-11e7-9d0b-b141b790baa0.png" alt="mobile-1" style="width:23%">

<img src="https://user-images.githubusercontent.com/23629340/33178753-74a135de-d067-11e7-8e96-6b27ea3f258f.png" alt="mobile-1" style="width:23%">

<img src="https://user-images.githubusercontent.com/23629340/33178771-7cf0f440-d067-11e7-9676-0a61eb7c8568.png" alt="mobile-1" style="width:23%">


### Iteration 2 | Small Screen (961px > width > 767px)

Let's start growing our screen size. Focus on small screens (iPads, tablets or bigger smartphones). Notice we have some changes. You need to work on the following ones: 

1. The buttons and inputs stop occupying 100%.

2. Now we have 2 companies logos on each row.

3. The **subfooter** goes from 2 columns, to display all the 4 columns in the same row.

4. The **footer** goes from 3 different rows of content to a simple row displaying some info at the left and some to the right.

<img src="https://user-images.githubusercontent.com/23629340/33179399-8b29965a-d069-11e7-881a-667a1ca65f09.gif" alt="small-1" style="width:30%">

<img src="https://user-images.githubusercontent.com/23629340/33179329-53cf51fe-d069-11e7-8445-fd29ea7f72b7.png" alt="small-1" style="width:30%">

<img src="https://user-images.githubusercontent.com/23629340/33179319-4baeedc2-d069-11e7-8b93-9faf914bf856.png" alt="small-1" style="width:30%">

<img src="https://user-images.githubusercontent.com/23629340/33179312-433f1374-d069-11e7-86e9-cc329b545dbc.png" alt="small-1" style="width:30%">

<img src="https://user-images.githubusercontent.com/23629340/33179339-5a8e8f28-d069-11e7-909b-045ee2f6126b.png" alt="small-1" style="width:30%">

### Iteration 3 | Medium Screen (1024px > width > 960px)

The easiest change we will have. You should display 3 logos per row on the **"You're in good company"** section. Easy peasy!

<img src="https://user-images.githubusercontent.com/23629340/33180156-17eac5e4-d06c-11e7-85b6-60197aa9ec48.gif" alt="medium-1" style="width:50%">


### Iteration 4 | Large Screen (width > 1200px)

Last one! Some small changes and we are done! 

1. Our **nav-bar** starts to show all the menu links, so go ahead, remove the collapse icon and add the list.

2. On the top of the webpage, the image is displayed in line with the "Where work happens" text. If you are using `flex-box` (you must :wink: ), this should be super easy!

<img src="https://user-images.githubusercontent.com/23629340/33180433-f5016870-d06c-11e7-96d4-ac6e08ccd008.gif" alt="medium-1" style="width:48%">

<img src="https://user-images.githubusercontent.com/23629340/33180340-a19dc6f6-d06c-11e7-9ab6-a6090940d613.png" alt="medium-1" style="width:48%">

<img src="https://user-images.githubusercontent.com/23629340/33180353-b49700b0-d06c-11e7-9e87-e54735699ad5.png" alt="medium-1" style="width:48%">

<img src="https://user-images.githubusercontent.com/23629340/33180357-bda7665e-d06c-11e7-8a2f-4d647de32944.png" alt="medium-1" style="width:48%">