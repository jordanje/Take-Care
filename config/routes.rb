Rails.application.routes.draw do
  resources :themes, only: [:index]
  resources :intentions, only: [:index, :create]
  resources :meditation_reflections, only: [:index, :show, :create]
  resources :meditations, only: [:index, :create]
  resources :users, only: [:show, :create]


  #custom routes

  post "/login", to: 'sessions#create'
  get '/authorized_user', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
