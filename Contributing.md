# Contributing
This contributing guide was created with hopes and intentions to make collaboration as painless as possible on this project. In other to achieve that, there is room for this document to get better overtime so feel free to improve it if there is something you think can have a better documentation.

After cloning the repository, every new ticket should be created on its own separate branch.

```
git fetch && git checkout -b new-ticket-branch
```

Make changes as needed on this branch and push those changes up to a remote for the custom branch. From that updated branch, you may now create a pull request for code review.

No code can be pushed directly into `staging` or `master` branch, so all your contributions will have to get pushed into your branch's remote.

After review and approval, pull requests get merged into `staging` and becomes available for preview at [https://staging--styleq.netlify.com/]()