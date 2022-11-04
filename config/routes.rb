Rails.application.routes.draw do
  # resources :themes
  resources :intentions, only: [:index, :create]
  # resources :meditation_reflections
  # resources :meditations
  resources :users, only: [:show, :create]


  #custom routes

  post "/login", to: 'sessions#create'
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
