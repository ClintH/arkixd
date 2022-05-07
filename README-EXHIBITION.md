# Exhibition instructions

Each exhibition project is documented in its own Markdown file. This is a plain text file that you can create in VS Code/Notepad/TextEdit with a 'md' file extension.

At the top of the file is the _front-matter_. It starts and ends with lines containing `---`. Each line within the front-matter is a key-value pair, separated by `:`.

For example: `course: "studio 1"`, sets the key 'course' to the value 'studio 1'. Numeric values aren't enclosed in inverted commas, and some keys can have several values, using the array syntax `[ ... ]`.

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

The Markdown file must be submitted as 'lastname.md', where 'lastname' is your last name, eg 'bengtsson.md'.

A primary image must be provided in JPEG format, named ‘lastname-0.jpg’ (again, your last name). This should be at least 1600x1200px. It is the image that appears for your project.

Additional images and GIFs can be provided as well. They should be named and referenced in ‘additionalImages’. Make sure the GIFs are not too large in file size. If there are no additional images, this line can be removed. 

If you have a video, upload this to [play.mau.se](http://play.mau.se). After uploading, note its ID. It will be something like `0_64nbc2ai`, appearing in the address bar when you look at the video (eg https://play.mau.se/media/t/0_64nbc2ai).

Before submitting, please verify:
* Text is spell-checked
* Frontmatter is correctly formatted and filled out
* All images referenced are good quality, large enough resolution (around 1600x1200px) and named with your last name
* Markdown file is named properly and saved in a plain-text editor
* Create a ZIP with all of these files in one directory

A minimal ZIP file for Jane Smith should consist of:
* smith.md
* smith-0.jpg

