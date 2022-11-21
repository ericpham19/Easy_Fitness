class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show, :index]
  
    

    def index
    @users= User.all
    render json: @users
    end

    def profile
      @user = User.find(params[:id])
      render json: {user: current_user}
    end
    

    def show
      @user = User.find(params[:id])
      if @user
          render json: @user, include: ["sessions"]
         
      else
          render json: {error: "user could not be found."}
      end
  end
    def new
      @user = User.new(user_params)
    end
 
    def create
      @user = User.new(user_params)
      if @user.valid?
          @user.save
          @token = issue_token(@user)
          render json: { user: @user, jwt: @token }
      else
          render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end


      private

      def user_params
          params.require(:user).permit(:username, :email, :password)
      end
end
