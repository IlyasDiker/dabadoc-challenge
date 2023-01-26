class UsersController < ApplicationController

    def login

    end

    def register
        user = User.new(user_params)
        
    end

    private
        def user_params
            params.require(:user).permit(:name, :email, :password)
end
