class Api::V1::SessionsController < ApplicationController
   
    before_action :set_session, only: %i[ show edit update destroy ]
    before_action :set_user_session, only: %i[:show, :update, :destroy]

    def index
        @session= Session.all
    end

    def create
        @session = Session.new(session_params)

        if @session.save
            @session.session_exercises.each do |e| 
                sets = exercise_sets_params[:sets].select{|s| s[:exercise_id] == e.exercise_id }
                sets.each {|s| e.exercise_sets.create(s.as_json(except: [:exercise_id])) }
            end
            render json: @session, status: :created
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

    def set_user_session
        @session = @user.sessions.find_by!(id: params[:id]) if @user
    end

    def exercise_sets_params
        params.require(:session).permit(:sets => [:weight, :reps, :number, :completed, :exercise_id])
    end

    def session_params
        session_params = params.require(:session).permit(:notes, :duration, ).merge(
            user_id: @current_user.id,
            session_exercises_attributes: params.require(:session)[:exercises].map{|e| {exercise_id: e[:id]}},
        )
    end

end