Rails.application.routes.draw do

  
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show, :index]
      resources :sessions
      resources :exercises
        post '/login', to: 'auth#create'
        get '/sign_in', to: 'auth#new'
        get '/current_user', to: 'auth#show'
        post '/sign_up', to: 'users#create'
        get '/users', to: 'users#index'
    end
  end
end
