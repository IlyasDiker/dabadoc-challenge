Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/register' => 'users#register'
  post '/login' => 'users#login'
end
