include "root" {
  path = find_in_parent_folders()
}

include "static_website" {
  path   = "${dirname(find_in_parent_folders())}/_envcommon/static_website.hcl"
  expose = true
}

inputs = {}
