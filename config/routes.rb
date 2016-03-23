Rails.application.routes.draw do
  root 'static_pages#home'

  get 'contact_me' => 'static_pages#contact_me'

  resources 'contact_requests', :only => [:new, :create]

end
