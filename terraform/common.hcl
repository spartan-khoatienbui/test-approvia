locals {
  stack_name   = "spartan"
  service_name = "spartan-template-react"
  aws_region   = "us-west-1"

  git_terraform_module_url = "git::https://github.com/c0x12c/spartan-libs-terraform.git"
}
