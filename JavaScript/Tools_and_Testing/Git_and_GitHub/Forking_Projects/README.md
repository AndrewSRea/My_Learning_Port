# Forking Projects

After using GitHub by yourself for a while, you may find yourself wanting to contribute to someone else's project. Or maybe you'd like to use someone's project as the starting point for your own. This process is known as *forking*.

Creating a "fork" is producing a personal copy of someone else's project. Forks act as a sort of bridge between the original repository and your personal copy. You can submit *Pull Requests* to help make other people's projects better by offering your changes up to the original project. Forking is at the core of social coding at GitHub.

For this tutorial, we'll be using [the Spoon-Knife project](https://github.com/octocat/Spoon-Knife), a test repository that's hosted on GitHub.com that lets you test the Pull Request workflow.

## Fork the repository

To fork the Spoon-Knife repository, click the **Fork** button in the header of the repository.

![Image of the "Fork" button in a GitHub repository](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

Sit back and watch the forking magic. When it's finished, you'll be taken to your copy of the Spoon-Knife repository.

## Clone your fork

You've successfully forked the Spoon-Knife repository, but so far it only exists on GitHub. To be able to work on the project, you will need to clone it to your computer.

If you're using [GitHub Desktop](https://desktop.github.com/), this process is a breeze. On your fork of Spoon-Knife, navigate over to the right hand sidebar and click **Clone or Download**. How you clone is up to you. Some options are [cloning with the command line](https://lab.github.com/), or by [using GitHub Desktop](https://lab.github.com/).

<hr>

**Personal note**: I will be adding more information about using `git clone` on the Command Line Interface (CLI) in your terminal in the text below. This information comes from [GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

<hr>

## Cloning a repository

When you create a repository on GitHub, it exists as a remote repository. You can clone your repository to create a local copy on your computer and sync between the two locations.

### About cloning a repository

You can clone a repository from GitHub to your local computer to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from GitHub to your local machine.

Cloning a repository pulls down a full copy of all the repository data that GitHub has at that point in time, including all versions of every file and folder for the project. You can push your changes to the remote repository on GitHub, or pull other people's changes from GitHub. For more information, see "[Using Git](https://docs.github.com/en/get-started/using-git)"

You can clone your existing repository or clone another person's existing repository to contribute to a project.

### Cloning a repository

Here in the [GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository) instructions, there are three different versions for cloning a repository:

1. Cloning a repo using an HTTPS and an SSH key.
2. Cloning a repo using the Command Line Interface (CLI) in your terminal.
3. Cloning a repo using GitHub Desktop.

I will be using the second option, which will be described below. If you wish to use the other options, then follow the link just above and choose your choice in one of the three tabs displayed under the "Cloning a repository" header in GitHub Docs.

First, to learn more about GitHub CLI, see "[About GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli)".

To clone a repository locally (i.e. within your own computer), use the `repo clone` subcommand. Replace the `repository` parameter with the repository name. For example, `octo-org/octo-repo`, `monalisa/ocot-repo`, or `octo-repo`. If the `OWNER/` portion of the `OWNER/REPO` repository argument is omitted, it defaults to the name of the authenticating user.
```
gh repo clone repository
```
You can also use the GitHub URL to clone a repository. (`/cli/cli` here being a stand-in for the folder/file path.)
```
gh repo clone https://github.com/cli/cli
```

### Cloning an empty repository

An empty repository contains no files. It's often made if you don't initialize the repository with a README when creating it.

1. On GitHub, navigate to the main page of the repository.

2. To clone your repository using the command line using HTTPS, under "Quick setup", click the "clipboard" icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click the "clipboard" icon.

![Image of the "Quick setup" process of cloning a repo](https://docs.github.com/assets/images/help/repository/empty-https-url-clone-button.png)

Alternatively, to clone your repository in Desktop, click **Set up in Desktop** and follow the prompts to complete the clone.

![Image of the "Set up in Desktop" process of cloning a repo](https://docs.github.com/assets/images/help/repository/empty-desktop-clone-button.png)

3. Open Terminal.

4. Change the current working directory to the location where you want the cloned directory.

5. Type `git clone`, and then paste the URL you copied earlier.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

6. Press **Enter** to create your local clone.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

<hr>

:warning: Since the repository we wish to clone was forked from another repository, and therefore the repository has already been created by someone else, the only command we need on the command line is:
```
git clone https://github.com/YOUR-USERNAME/Spoon-Knife
```
You could actually just type `git clone` on the command line of your terminal, and copy and paste the URL of your `Spoon-Knife` repository, then press **Enter**.

<hr>

## Making an pushing changes

Go ahead and make a few changes to the project using your favorite text editor, like [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/). You could, for example, change the text in *index.html* to add your GitHub username.

When you're ready to submit your changes, **stage** and **commit** your changes.

<hr>

Is staging and committing changes locally too advanced right now? [Check out this on-demand training](https://lab.github.com/) for interactive tutorials to help you learn more.

<hr>

Right now, you've essentially told Git, "Okay, I've taken a snapshot of my changes!" You can continue to make more changes, and take more commit snapshots. When you're ready to push your changes up to GitHub.com, push your changes to the remote.

## Making a Pull Request

At last, you're ready to propose changes into the main project!