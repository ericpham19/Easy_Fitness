class Api::V1::ExercisesController < ApplicationController
   def index
    @exercises = Exercise.all
    render json: @exercises
   end
    def create
        @exercises = Exercises.new(exercises_params)

        if @exercises.save
            render json: @exercises
        else
            render json: {error: "exercises could not be created. Please try again."}
        end
    end

    def show
        @exercises = Exercises.find(params[:id])
        if exercises
            render json: @exercises
        else
            render json: {error: "exercises could not be found."}
        end
    end

    private

    def set_exercise
        @exercise = Exercise.find(params[:id])
    end

     def set_session
        @session = Session.find_by(id: params[:id])
    end
    

    def exercises_params
        params.require(:exercises).permit(:name)
    end

end
