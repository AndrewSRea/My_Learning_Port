# Command line crash course

In your development process, you'll undoubtedly be required to ruhn some command in the terminal (or on the "command line" -- these are effectively the same thing). This article provides an introduction to the terminal, the essential commands you'll need to enter into it, how to chain commands together, and how to add your own command line interface (CLI) tools.

## Welcome to the terminal

The terminal is a text interface for executing text-based programs. If you're running any tooling for web development, there's a near-guaranteed chance that you'll have to poop open the command line and run some commands to use your chosen tools (you'll often see such tools referred to as **CLI tools** -- command line interface tools).

A large number of tools can be used by typing commands into the command line; many come pre-installed on your system, and a huge number of others are installable from package registries. Package registries are like app stores, but (mostly) for command line based tools and software. We'll see how to install some tools later on in this chapter, and we'll learn more about package registries in the next chapter.

One of the biggest criticisms of the command line is that it lacks hugely in user experience. Viewing the command line for the first time can be a daunting experience: a blank screen and a blinking cursor, with very little obvious help available on what to do.

On the surface, they're far from welcoming but there's a lot you can do with them, and we promise that, with a bit of guidance and practice, using them will get easier! This is why we are providing this chapter -- to help you get started in this seemingly unfriendly environment.

<hr>

**Personal note**: I am already fairly versed in using the command line, as far as Git is concerned, although I have not had a whole lot of practice with using npm package managers or other tools accessible through the terminal.

I added this whole **Tools_and_Testing** folder to the overall **JavaScript** folder for the soon-to-be-added "client-side frameworks", and all the JavaScript-related languages such as React, Vue, and Angular.

<hr>

### Where did the terminal come from?

The terminal originates from around the 1950s-60s and its original form really doesn't resemble what we use today (for that, we should be thankful). You can read a bit of the history on Wikipedia's entry for [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal).

Since then, the terminal has remained a constant feature of all operating systems -- from desktop machines, to servers tucked away in the cloud, to microcomputers like the Raspberry PI Zero, and even to mobile phones. It provides direct access to the computer's underlying file system and low-level features, and is therefore incredibly useful for performing complex tasks rapidly, if you know what you are doing.

It is also useful for automation -- for example, to write a command to update the titles of hundreds of files instantly, say from "ch01-xxxx.png" to "ch02-xxxx.png". If you updated the file names using your finder or explorer GUI app, it would take you a long time.

Anyway, the terminal is not going away anytime soon.

### What does the terminal look like?

Below you can see some of the different flavors of programs that are available that can get you to a terminal.

The next images show the command prompts available in Windows -- there's a good range of options from the "cmd" program to "powershell" -- which can be run from the start menu by typing the program name.

![Image of two different terminals using Windows](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line/win-terminals.png)

And below, you can see the macOS terminal application.

![Image of a terminal is use with macOS](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line/mac-terminal.png)

### How do you access the terminal?

Many developers today are using Unix-based tools (e.g. the terminal, and the tools you can access through it). Many tutorials and tools that exist on the web today support (and sadly assume) Unix-based systems, but not to worry -- they available on most systems. In this section, we'll look at how to get access to the terminal on your chosen system.

#### Linux/Unix

As hinted above, Linux/Unix systems have a terminal available by default, listed among your Applications.

#### macOS

macOS has a system called Darwin that sits underneath the graphical user interface. Darwin is the Unix-like system, which provides the terminal, and access to the low-level tools. macOS Darwin mostly has parity with Unix, certainly good enough to not cause us any worries as we work through this article.

The terminal is available on macOS at Applications/Utilities/Terminal.

#### Windows

As with some other programming tools, using the terminal (or command line) on Windows has traditionally not been simple or easy as on other operating systems. But things are getting better.

Windows has traditionally had its own terminal-like program called cmd ("the command prompt") for a long time, but this definitely doesn't have parity with Unix commands, and is equivalent to the old-style Windows DOS prompt.

Better programs exist for providing a terminal experience on Windows, such as Powershell ([see here to find installers](https://github.com/PowerShell/PowerShell)), and Gitbash (which comes as part of the [git for Windows](https://gitforwindows.org/) toolset).

However, the best option for Windows in the modern day is the Windows Subsystem for Linux (WSL) --  a compatibility layer for running Linux operating systems directly from inside Windows 10, allowing you to run a "true terminal" directly on Windows, without needing a virtual machine.

This can be installed directly from the Windows store for free. You can find all the documentation you need in the [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl/).

In terms of what option to choose on Windows, we'd strongly recommend trying to install the WSL. You could stick with the default command prompt (`cmd`), and many tools will work OK, but you'll find everything easier if you have better parity with Unix tools.