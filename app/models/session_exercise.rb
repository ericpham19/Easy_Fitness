
class SessionExercise < ApplicationRecord
    has_many :exercise_sets, dependent: :destroy
    belongs_to :exercise
end
