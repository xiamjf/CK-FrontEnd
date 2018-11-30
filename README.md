<!-- [![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# browser-template

A template for starting front-end projects. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Installation

1. [Download](../../archive/master.zip) this template.
1. Move to the `wdi/projects` directory, then unzip the template directory with
    `unzip /Users/<user-name>/Downloads/browser-template-master.zip`.
1. Rename the template directory from `browser-template-master` to
    `<project-name>-client`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.browser-template` with the name of
    your project.
1. Move into the new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.
1. Install dependencies with `npm install`.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.
1. Follow the instructions on your new repository's setup page. For details on
   how to push to Github, refer to the section on Github entitled "…or push an existing
   repository from the command line." Further documentation can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/app.js`](assets/scripts/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b) -->
My full stack project is going to be a website that attempts to reroute violent behavior in elementary school aged youth. It will be called Community Kids, because it is modeled after Martin Luther King’s idea of the Beloved (this can be change to Healthy/Peaceful) Community.

Okay so I’m building a website thats purpose is to basically reroute children’s responses to violent situations to nonviolent reactions. It’s at a super basic level cause the most important thing is building a website that’s clickable and functions, not the ideology behind it. However I just personally need actual situations so that I can map out the logic of how it’s all gonna work together. I’m trying to think of at least 3 common situations that children experience. (Basically the site works like this: a student logs on, chooses a scenario and then how they would respond to it, and then gets feedback based on this response)

Do these scenarios make sense? I know the language would have to be simplified if it was actually used on children but i just wanna know if these questions are in the right general sphere(They’re the ones I saw most in the schools last year)

Bullying scenario - responses: gather a group of friends and try to reach out to the bully, gather a group of friends and confront/shame the bully, tell on them, or some combination
(this goes with the principle 2, the beloved community)

How likely are you to go “0-100”? -
1 (when someone or something upsets me, I get over it quickly)
2 (when someone
upsets me, I am emotional but I can still work through the problem without getting physical)
3 (..., it can be difficult to focus on solving the problem without getting physical and I might lash out instead)
4 (..., its hard to focus on the problem so I may ignore it or just lash out without thinking first)
5 (..., I will definitely lash out and solve the problem that way)
(Types and levels of conflict handout)

Friendships / He say - She say - You heard that someone you used to be friends with has been saying mean things about you. Do you..

A) assume bad intent: confront this person one on one
B) assume good intent: confront this person one on one
C) spread information about this person as well
D) immediately inform a teacher or parent
E) some combination
(Steps of Nonviolence- 1. Gather info)

Cliques - Your friends are always making jokes about a particular student in the class, you don’t feel comfortable with it and you know the person they are making jokes about doesn’t like it either. Do you

A) Join in on the jokes because you want to stay with your friend group
B) Stick up for the student in your class by telling your friends to stop making jokes
C) Stick up for the student in your class by reporting your friends to the teacher
D) Ignore the situation, don’t join in but let the student defend their self
E) None of things/ some combination
(Principle 1 & step 3)


All of that is to describe the functionality of my website. So what’s useful here is that I want my responses back to the students to include a principle or step, anything in the nonviolence training for them to remember as they apply this knowledge to actual scenarios.

This is the ERD: There are 4 tables: Users (students), Questions, User_Questions, and Responses

Here was the full scope:
My project idea is a website that encourages elementary schoolers to choose nonviolent principles through an interactive "choose-your-own-ending" style game. It can also be used by teachers or child psychologists to analyze behavioral patterns, and see what types of thing make a child at risk for chronic violent behavior, and whether or not this game will have an effect on patterns that already exist.

I came up with the idea by thinking of the areas that I have been focusing on in the past couple of years: youth development, STEM for early learners, and Nonviolence as a way of life.

User Stories:
<student> will <pick> a <character>
<character> will <move in a direction> on <keypress>
<scenario_maker> will <select> a <story>
<student> will <respond> to <story>
<tracker> will <store: answers>
<teacher> will <view> <"student's" answers>

[Imgur](https://i.imgur.com/PzsJpJP.png)

Wire Frame:

[Imgur](https://i.imgur.com/eMgnSZ3.png)

Table/Column  Planning
A table for students: username, password, school, grade, first name, last name, teacher (possibly risk level, which will be hidden from the student and only the teacher can see this)

A table for teachers: first name, last name, username, password, school, students

A table for character - Tables for sprites and costumes
A table for scenarios - which has responses to questions

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
