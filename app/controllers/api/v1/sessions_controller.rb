class Api::V1::SessionsController < ApplicationController
   
    before_action :set_session, only: %i[ show edit update destroy ]
    
    def index
        @session= Session.all
    end
    def create
        @session = Session.new(session_params)

        if @session.save
            render json: @session
        else
            render json: {error: "session could not be created. Please try again."}
        end
    end

    def show
        @session = Session.find(params[:id])
        if session
            render json: @session
        else
            render json: {error: "session could not be found."}
        end
    end

    private

    def set_session
        @session = Session.find(params[:id])
      end

    def session_params
        params.require(:session).permit(:name, :notes, :exercise_name, :user_id)
    end

end
