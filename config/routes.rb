Rails.application.routes.draw do
  get 'user/index'

  resources :user

  get 'invoice/index'

  get 'invoicedetail/index'

  get 'item/index'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
