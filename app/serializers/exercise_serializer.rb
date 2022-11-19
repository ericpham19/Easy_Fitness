class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :set, :weight_kg, :reps
end
