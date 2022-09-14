Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "home#index"
  # Defines the root path route ("/")
  # root "articles#index"
end
