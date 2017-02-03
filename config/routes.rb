Rails.application.routes.draw do
  get 'user/index'

  resources :user

  get 'custom/route' => 'user#index'

  get 'invoicedetail/index'

  get 'item/index'

#GET	/photos	photos#index	display a list of all photos
#GET	/photos/new	photos#new	return an HTML form for creating a new photo
#POST	/photos	photos#create	create a new photo
#GET	/photos/:id	photos#show	display a specific photo
#GET	/photos/:id/edit	photos#edit	return an HTML form for editing a photo
#PATCH/PUT	/photos/:id	photos#update	update a specific photo
#DELETE	/photos/:id	photos#destroy	delete a specific photo

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
