class UsersController < ApplicationController

    def login
        @user = User.find_by(email: login_params[:email])

        if @user && @user.authenticate(login_params[:password])
            token = encode_token({ user_id: @user.id})
            render json: {
                user: @user,
                token: token
            }, status: :ok
        else 
            render json: {
                error: 'Invalid username or password'
            }, status: :unprocessable_entity
        end
    end

    def create
        @user = User.create(user_params)

        if @user.save
            token = encode_token({ user_id: @user.id})
            render json: {
                user: @user,
                token: token
            }, status: :ok
        else 
            render json: {
                error: 'Invalid email or password'
            }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    def login_params
        params.require(:user).permit(:email, :password)
    end
end
