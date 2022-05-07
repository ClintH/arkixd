# Exhibition instructions

Each exhibition project is documented in its own Markdown file. This is a plain text file that you can create in VS Code/Notepad/TextEdit with a 'md' file extension.

At the top of the file is the _front-matter_. It starts and ends with lines containing `---`. Each line within the front-matter is a key-value pair, separated by `:`.

For example: `title: "Hello"`, sets the key 'title' to the value 'Hello'. Numeric values aren't enclosed in inverted commas, and some keys can have several values, using the array syntax `[ ... ]`.

Here's a basic template to copy and paste as a starting point:

```md
---
title: "A Report System that Decreases Toxic Behavior Between Video Game Players"
creators: "Thomas Bengtsson"
image: "bengtsson-0.jpg"
additionalImages: ["bengtsson-1.jpg", "bengtsson-2.gif"]
videoMauPlay: "0_64nbc2ai"

---

Some text with Markdown formatting. _Italics_.

* bullet
* point

```

# 1. Prepare media

## 1.1 Gather
* Identify the key image for your project. It needs to be at least 1600x1200px.
* Optionally collect up to three additional images and GIFs for your project.
* If your project is best shown in a video, upload this to [play.mau.se](http://play.mau.se).

If you have uploaded a video, note its ID. It will be something like `0_64nbc2ai`, appearing in the address bar when you look at the video (eg https://play.mau.se/media/t/0_64nbc2ai)

## 1.2 Optimise 

Make sure your images aren't too large in file size, aim for no more than 500KB. Use [Squoosh](https://squoosh.app/) to optimise images, and resize if you have to. GIFs should also be [optimised](https://ezgif.com/optimize), aiming for less than 1MB or otherwise uploaded as a video. 

## 1.3 Name

* Name your images 'lastname-0.jpg', 'lastname-1.jpg' and so on, where 'lastname' is your last name. Eg. 'bengtsson-0.jpg'.
  
At this point, you should have a folder with at least 'lastname-0.jpg'.

# 2. Project description

## 2.1 Create a Markdown file

1. Create a plain-text file named 'lastname.md', where 'lastname' is your last name. Eg. 'bengtsson.md'. Use something like VS Code, Notepad (Win) or TextEdit (Mac).
2. Copy and paste the template above

## 2.2 Edit front-matter

* Edit the front-matter values as appropriate. It should be pretty obvious.
* `image` should be set to your main image name (ie. 'lastname-0.jpg')
* Additional images are set as an array in `additionalImages`. If there are no additional images, this line can be removed.
* For `videoMauPlay`, set the ID of your video if you have one, or otherwise remove this line.

## 2.3 Write description

Write a paragraph or two about your project. It should be concise, stating the insights/conclusions and enough of the problem/context as necessary.

Save the Markdown file when done.

# 3. Submit

Before submitting, please verify:
* Text is spell-checked
* Frontmatter is correctly formatted and filled out
* All images referenced are good quality, large enough resolution (around 1600x1200px) and named with your last name
* Markdown file is named properly and saved in a plain-text editor
* Create a ZIP with all of these files in one directory

A minimal ZIP file for Jane Smith should consist of:
* smith.md
* smith-0.jpg

