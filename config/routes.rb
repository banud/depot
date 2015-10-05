Rails.application.routes.draw do
  get 'admin' => 'admin#index'

  controller :sessions do
    get   'login' => :new
    post  'login' => :craete
    delete 'logout' => :destroy
  end

  resources :users
  resources :orders
  resources :line_items
  resources :carts
  get 'store/index'

  resources :products

  root 'store#index', as: 'store'
  end
