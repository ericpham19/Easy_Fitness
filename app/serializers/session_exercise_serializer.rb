
class SessionExerciseSerializer < ActiveModel::Serializer
    attributes :id, :exercise_id, :exercise_sets, :name

    def name
        object.exercise.name
    end
end
  