Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "home#index"
  # Defines the root path route ("/")
  # root "articles#index"
  get '/auth', to: 'home#index'
  get '/auth/login', to: 'home#index'
  get '/auth/register', to: 'home#index'
  get '/auth/verify', to: 'home#index'
  get '/auth/forget-password', to: 'home#index'
end
