
    class ApplicationController < ActionController::API
        include JwtToken
         
        before_action :authenticate_user
        
        def authenticate_user
            token = request.headers['Authorization']
            begin
                decoded_hash = jwt_decode(token)
                @current_user = User.find(decoded_hash[:user_id])
            rescue ActiveRecord::RecordNotFound => e
                render json: { error: true, message: 'User not found' }, status: :unauthorized
            rescue JWT::DecodeError => e
                render json: { error: true, message: 'Invalid Token' }, status: :unauthorized
            end
        end

        def generate_token(user)
            jwt_encode({user_id: user.id})
        end

        def jwt_key
            Rails.application.credentials.jwt_key
        end
     
        def issue_token(user)
            JWT.encode({user_id: user.id}, jwt_key, 'HS256')
        end

        def decoded_token
            begin
              JWT.decode(token, jwt_key, true, { :algorithm => 'HS256' })
            rescue JWT::DecodeError
              [{error: "Invalid Token"}]
            end
        end

         def authorized
            render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
        end
     
        def token
            request.headers['Authorization']
        end
        
         def user_id
            decoded_token.first['user_id']
        end

         def current_user
            @user ||= User.find_by(id: user_id)
        end

         def logged_in?
            !!current_user
        end
     end

