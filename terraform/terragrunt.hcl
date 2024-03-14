locals {
  aws_version         = "5.40"
  aws_region          = "us-west-1"
  aws_s3_bucket_state = "spartan-terraform-states"

  common_vars = read_terragrunt_config(find_in_parent_folders("common.hcl"))
}

# Generate an AWS provider block
generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite_terragrunt"

  contents = <<EOF
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "${local.aws_version}"
    }
  }
}

provider "aws" {
  region = "${local.aws_region}"
}
EOF
}

# Configure Terragrunt to automatically store tfstate files in an S3 bucket
remote_state {
  backend = "s3"
  config = {
    encrypt        = true
    bucket         = local.aws_s3_bucket_state
    key            = "${local.common_vars.locals.service_name}/terraform.tfstate"
    region         = local.aws_region
    dynamodb_table = "terraform-locks"
  }
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
}
