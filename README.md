<div class="panel panel-default">

<div class="panel-body markdown-body">

# [<span class="glyphicon glyphicon-link"></span>](#heading-week-2-homework-profile-app)Week 2 - Homework - **Profile App 💁**

## [<span class="glyphicon glyphicon-link"></span>](#heading-introduction)Introduction 🌟

Let's build a beautiful profile page application using [React Native](https://facebook.github.io/react-native/) & [Expo](https://expo.io/)

* * *

## [<span class="glyphicon glyphicon-link"></span>](#heading-final-product-will-look-like-this)Final product will look like this

The final will look something similar like this

![](https://cdn.dribbble.com/users/551602/screenshots/6133396/social-dribbble.png)

## [<span class="glyphicon glyphicon-link"></span>](#heading-required-features)Required features 🍹

*   [ ] Has a beauty avatar
*   [ ] Display your full name
*   [ ] Display your current Job
*   [ ] Has Follow button
*   [ ] Has Send message button
*   [ ] Total photos, followers, following
*   [ ] List out your beautiful photos ⛰

## [<span class="glyphicon glyphicon-link"></span>](#heading-optional-feature)Optional feature 🍹

*   [ ] Style `follow button` and `send message button` has shadow ([https://facebook.github.io/react-native/docs/0.59/shadow-props](https://facebook.github.io/react-native/docs/0.59/shadow-props)) , ([https://ethercreative.github.io/react-native-shadow-generator/](https://ethercreative.github.io/react-native-shadow-generator/))
*   [ ] Create beautiful `Bottom tab` layout using `Flex + Vector icons`
*   [ ] Layout header with `Back button` and `Filter button`
*   [ ] Make button `Follow` and `Send Message` can press and alert `followed` when press follow button, alert `message sended` when press on `send message button`

* * *

# [<span class="glyphicon glyphicon-link"></span>](#heading-tips)Tips ☸

### [<span class="glyphicon glyphicon-link"></span>](#heading-some-common-color-in-this-app)Some common color in this App

Try to define some common `Color` variables to help you can reuse it later.

    const POLO_BLUE_COLOR = 'rgb(51,60,87)';
    const FOLLOW_COLOR = 'rgb(71,113,246)';
    const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

### [<span class="glyphicon glyphicon-link"></span>](#heading-list-of-images)List of Images

Create a fake array of images. Put all your images in the `assets` folder then `require` that url path.

    const imgData = [
      { id: 1, imgSource: require('./assets/1.jpeg') },
      { id: 2, imgSource: require('./assets/2.jpeg') },
      { id: 3, imgSource: require('./assets/3.jpeg') },
      { id: 4, imgSource: require('./assets/4.jpeg') },
      { id: 5, imgSource: require('./assets/5.jpeg') },
      { id: 6, imgSource: require('./assets/6.jpeg') }
    ];

### [<span class="glyphicon glyphicon-link"></span>](#heading-display-list-image-gallery)Display list image gallery

First try create a variables is the center point of `imgData`

    const centerImgData = Math.floor(imgData.length / 2);

Then slice the array into 2 part to display

![pwd](https://imgur.com/nJ96Tkf.png "pwd")

But wait ♻ !!!!!! We can't scroll anything with the list of images ? Any problems ❓❓❓How to make it can `Scroll` ❓❓❓

Before press `hint`, try figure out and research about how to make it can `scroll`.

We need a ScrollView [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html) to scroll from top to bottom.

> import { ScrollView } from 'react-native';

Then wrap it `ScrollView` outside the list of image. And then `style` it

Then we split array of images in to 2 arrays then display it as 2 `column`

![pwd](https://imgur.com/XXpngTN.png "pwd")

## [<span class="glyphicon glyphicon-link"></span>](#heading-hope-your-final-result-we-look-something-like-this)Hope your final result we look something like this

![](https://imgur.com/2Yaa1dk.png)