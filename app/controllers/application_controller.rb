class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery with: :null_session

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :full_name, :bio, :image])
  end 
end
