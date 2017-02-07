Rails.application.routes.draw do
  get 'user/index'

  resources :user
  post 'user/new' => 'user#new'
  
  post 'user/insertar' => 'user#insertar'

  get 'custom/route' => 'user#index'

  get 'invoicedetail/index'

  get 'item/index'

  get 'item/new'

  post 'item/cargaexcel' => 'item#cargaexcel'



#GET	/photos	photos#index	display a list of all photos
#GET	/photos/new	photos#new	return an HTML form for creating a new photo
#POST	/photos	photos#create	create a new photo
#GET	/photos/:id	photos#show	display a specific photo
#GET	/photos/:id/edit	photos#edit	return an HTML form for editing a photo
#PATCH/PUT	/photos/:id	photos#update	update a specific photo
#DELETE	/photos/:id	photos#destroy	delete a specific photo

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
