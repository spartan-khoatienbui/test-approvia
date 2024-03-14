# _envcommon/static_website.hcl

locals {
  # Automatically load common variables
  common_vars = read_terragrunt_config(find_in_parent_folders("common.hcl"))

  # Automatically load environment-level variables
  env_vars = read_terragrunt_config(find_in_parent_folders("env.hcl"))

  # Expose the module so different versions of the module can be deployed in different environments. This will
  # be used to construct the terraform block in the child terragrunt configurations.
  base_source_url = "${local.common_vars.locals.git_terraform_module_url}//aws/static-website?ref=master"
}


terraform {
  source = local.base_source_url
}

inputs = {
  name                       = local.common_vars.locals.service_name
  stack_name                 = local.common_vars.locals.stack_name
  environment                = local.env_vars.locals.environment
  dns_name                   = local.env_vars.locals.dns_name
  route53_zone_id            = local.env_vars.locals.route53_zone_id
  route53_zone_name          = local.env_vars.locals.route53_zone_name
  global_tls_certificate_arn = local.env_vars.locals.global_tls_certificate_arn
}
