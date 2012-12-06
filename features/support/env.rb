ENV['RACK_ENV'] = 'test'
ENV['RMAGICK_BYPASS_VERSION_TEST'] = "true"

require 'rubygems'
require 'capybara'
require 'capybara/cucumber'
require 'capybara/dsl'
require 'rspec'
require 'capybara/poltergeist'

# Capybara.default_driver = :selenium
Capybara.javascript_driver = :poltergeist