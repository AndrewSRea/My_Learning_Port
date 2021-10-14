# Pull Requests

Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

## About pull requests

<hr>

**Note**: When working with pull requests, keep the following in mind:

* If you're working in the [shared repository model](https://docs.github.com/en/github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models), we recommend that you use a topic branch for your pull request. While you can send pull requests from any branch or commit, with a topic branch you can push follow-up commits if you need to update your proposed changes.
* When pushing commits to a pull request, don't force push. Force pushing can corrupt your pull request.

<hr>

You can create pull requests on GitHub.com, with [GitHub Desktop](https://desktop.github.com/), in [Codespaces](https://github.com/features/codespaces), on [GitHub for mobile](https://github.com/mobile), and when using [GitHub CLI](https://cli.github.com/).

After initializing a pull request, you'll see a review page that shows a high-level overview of the changes between your branch (the compare branch) and the repository's base branch. You can add a summary of the propsed changes, review the changes made by commits, add labels, milestones, and assignees, and @mention individual contributors or teams. For more information, see "[Creating a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)".

Once you've created a pull request, you can push commits from your topic branch to add them to your existing pull request. These commits will appear in chronological order within your pull request and the changes will be visible in the "Files changed" tab.

Other contributors can review your proposed changes, add review comments, contribute to the pull request discussion, and even add commits to the pull request.

You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. For more information, see "[Viewing deployment activity for a repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)."

After you're happy with the proposed changes, you can merge the pull request. If you're working in a shared repository model, you create a pull request and you, or someone else, will merge your changes from your feature branch into the base branch you specify in your pull request. For more information, see "[Merging a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)."

If status checks are required for a repository, the required status checks must pass before you can merge your branch into the protected branch. For more information, see "[About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)."

You can link a pull request to an issue to show that a fix is in progress and to automatically close the issue when someone merges the pull request. For more information, see "[Linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)."