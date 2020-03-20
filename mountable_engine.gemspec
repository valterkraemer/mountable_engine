$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "mountable_engine/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "mountable_engine"
  s.version     = MountableEngine::VERSION
  s.authors     = ["Valter Kraemer"]
  s.email       = ["valterkraemer@users.noreply.github.com"]
  s.homepage    = ""
  s.summary     = "Summary of MountableEngine."
  s.description = "Description of MountableEngine."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.1.6", ">= 5.1.6.2"
end
