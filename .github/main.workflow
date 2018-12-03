workflow "Build and deploy on push" {
  on = "push"
  resolves = ["Deploy to AWS"]
}

action "npm build" {
  uses = "actions/npm@6309cd9"
  runs = "npm run build"
  args = "npm run build"
}

action "Deploy to AWS" {
  uses = "actions/aws/cli@8d31870"
  needs = ["npm build"]
}
