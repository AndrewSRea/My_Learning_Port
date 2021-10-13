# Hello World

The **Hello World** project is a time-honored tradition in computer programming. It is a simple exercise that gets you started when learning something new. Let's get started with GitHub!

You'll learn how to:

* Create and use a repository
* Start and manage a new branch.
* Make changes to a file and push them to GitHub as commits.
* Open and merge a pull request.

## What is GitHub?

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

This tutorial teaches you GitHub essentials like *repositories*, *branches*, *commits*, and *Pull Requests*. You'll create your own Hello World repository and learn GitHub's Pull Request workflow, a popular way to create and review code.

### No coding necessary

To complete this tutorial, you need a [GitHub.com account](https://github.com/join) and Internet access. You don't need to know how to code, use the command line, or install Git (the version control software GitHub is built on).

<hr>

**Tip**: OPen this guide in a separate browser window (or tab) so you can see it while you complete the steps in the tutorial.

<hr>

## Step 1. Create a Repository

A **repository** is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs. We recommend including a *README*, or a file with information about your project. GitHub makes it easy to add one at the same time you create your new repository. *It also offers other common options such as a license file*.

Your `hello-world` repository can be a place where you store ideas, resources, or even share and discuss things with others.

### To create a new repository

1. In the upper right corner, next to your avatar or identicon, click `+` and then select **New repository**.
2. Name your repository `hello-world`.
3. Write a short description.
4. Select **Initialize this repository with a README**.

![Image of a GitHub repository initialization](https://guides.github.com/activities/hello-world/create-new-repo.png)

5. Click **Create repository**.

## Step 2. Create a Branch

**Branching** is the way to work on different versions of a repository at one time.

By default, your repository has one branch named `main`, which is considered to be the definitive branch. We use branches to experiment and make edits before committing them to `main`.

When you create a branch off the `main` branch, you're making a copy, or snapshot, of `main` as it was at that point in time. If someone else made changes to the `main` branch while you were working on your branch, you could pull in those updates.

This diagram shows:

* The `main` branch.
* A new branch called `feature` (because we're doing "feature work" on this branch).
* The journey that `feature` takes before it's merged into `main`.

![Image of a GitHub repo branch from a main branch](https://guides.github.com/activities/hello-world/branching.png)

Have you ever saved different versions of a file? Something like:

* `story.txt`
* `story-joe-edit.txt`
* `story-joe-edit-reviewed.txt`

Branches accomplish similar goals in GitHub repositories.

Here at GitHub, our developers, writers, and designers use branches for keeping bug fixes and feature work separate from our `main` (production) branch. When a change is ready, they merge their branch into `main`.

### To create a new branch

1. Go to your new repository `hello-world`.
2. Click the dropdown at the top of the file list that says **branch: main**.
3. Type a branch name, `readme-edits`, into the new branch text box.
4. Select the blur **Create branch** box or hit "Enter" on your keyboard.

![Gif showing creation of a new branch from a repo's main branch](https://guides.github.com/activities/hello-world/readme-edits.gif)

Now you have two branches, `main` and `readme-edits`. They look exactly the same, but not for long! Next we'll add our changes to the new branch.