workflow "Build and deploy on push" {
  on = "push"
  resolves = ["Deploy to AWS"]
}

action "npm install" {
  uses = "actions/npm@6309cd9"
  args = "install"
}

action "npm build" {
  uses = "actions/aws/cli@8d31870"
  args = "run build"
  needs = ["npm install"]
}

action "Deploy to AWS" {
  uses = "actions/aws/cli@8d31870"
  args = "s3 sync build/ s3://gooseman.codes"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
  needs = ["npm build"]
}

