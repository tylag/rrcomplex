# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :port           => ENV['SIB_SMTP_PORT'],
  :address        => ENV['SIB_SMTP_SERVER'],
  :user_name      => ENV['SIB_SMTP_LOGIN'],
  :password       => ENV['SIB_SMTP_PASSWORD'],
  :domain         => 'rrcomplex.herokuapp.com',
  :authentication => :plain,
}
ActionMailer::Base.delivery_method = :smtp