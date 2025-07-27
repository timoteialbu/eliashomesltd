terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

# Configure the Cloudflare provider
# You need to set CLOUDFLARE_API_TOKEN and CLOUDFLARE_EMAIL environment variables
# or configure them directly here.
provider "cloudflare" {}

resource "cloudflare_workers_script" "eliashomesltd_worker" {
  account_id = var.cloudflare_account_id
  name       = "eliashomesltd"
  content    = file("worker.js")
  # You can add more configurations here, like `kv_namespace_bindings`, `r2_bucket_bindings`, etc.
}

resource "cloudflare_workers_route" "eliashomesltd_route" {
  zone_id    = var.cloudflare_zone_id
  pattern    = "eliashomesltd.timotei.dev/*"
  script_name = cloudflare_workers_script.eliashomesltd_worker.name
}

variable "cloudflare_account_id" {
  description = "The Cloudflare account ID."
  type        = string
  sensitive   = true
}

variable "cloudflare_zone_id" {
  description = "The Cloudflare zone ID for your domain."
  type        = string
  sensitive   = true
}
