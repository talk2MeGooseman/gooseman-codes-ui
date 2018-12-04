workflow "Build and deploy on push" {
  on = "push"
  resolves = [
    "Deploy to AWS",
    "Install",
  ]
}

action "Install" {
  uses = "actions/npm@6309cd9"
  args = "install"
}

action "Build" {
  uses = "actions/npm@6309cd9"
  args = "run build"
  needs = ["Install"]
}

action "Deploy to AWS" {
  uses = "actions/aws/cli@8d31870"
  args = "s3 sync build/ s3://gooseman.codes"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
  needs = ["Build"]
}
