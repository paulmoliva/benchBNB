Rails.application.routes.draw do
  root :to =>'pages#index'
  resources :pages, only: [:index]
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:create, :index]
  end
end
