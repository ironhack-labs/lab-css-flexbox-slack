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

:::info
In the HTML you find all the text needed! Focus on give it some style!
:::

### Iteration 1 | Large Screen (width > 1200px)

First, we need to clone the design we see on our laptops! :laptop: 💻  Oh! Remember to use **flexbox**, because it will be really helpful later on when we need to adapt it!

You should have something like this:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ed779e54fa07d95e6e16d76095719273.png)

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_19f1bac47554e9f27f308c4c426727dc.png)

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a9b8858ed069685d5a9b29a83cdd5bd6.png)

### Iteration 2 | Medium Screen (1024px > width > 960px)

This one is really simple, we just need small changes.

1. The menu on our top nav-bar is replaced by a toggle button. We just need to make the `list` disappears and show the toggle menu button. Not necessary to make the button work, remember we are practicing our design skills here :wink:

2. Change the main header layout. Instead of having them one beside the other, now we need the text on top and the image below it.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_695d94534fc503eba55bf6283909732f.png)


### Iteration 3 | Small Screen (961px > width > 767px)

On small screens, we just need one change. The companies logo, instead of 3 per row, we should display them in pairs, that means we will have 3 rows of 2 logos each.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_40c4d1eac1bd1ccb0adb7a7609f8e1de.png)

### Iteration 4 | Extra Small Screen (width < 768px)

Last one! On extra small screens we will have a lot of changes! If you notice, this is the width apply to smartphones, so our web will have some changes! Take a look of the following screenshoots and adapt your code to clone it! :muscle: :iphone:

<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0ee511e294b5b917e709d55850cc3f07.png" alt="" style="width:46%"/>
<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_c812bd17dd765972a3a5452bbf6b4e7d.png" alt="" style="width:46%"/><br><br><br>
<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_bba75f0660ec59c8af87d5bf1f792dd7.png" alt="" style="width:46%"/>
<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_65907972107d5fe7d2d410944fff8e03.png" alt="" style="width:46%"/><br><br><br>
<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5f46e018d968f92e2a4a7e1a46c9ead3.png" alt="" style="width:46%"/>
<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ce37bd622ab94fd83a4a1ea3059568ae.png" alt="" style="width:46%"/>
