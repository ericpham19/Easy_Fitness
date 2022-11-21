Rails.application.routes.draw do
  resources :exercises
  resources :sessions
  resources :users
  
  namespace :api do
    namespace :v1 do
      resources :users
      resources :sessions
      resources :exercises
        post '/login', to: 'auth#create'
        get '/current_user', to: 'auth#show'
        post '/sign_up', to: 'users#create'
        get '/users', to: 'users#index'
    end
  end
end
