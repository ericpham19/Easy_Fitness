class ExerciseSet < ApplicationRecord
  belongs_to :session_exercise
  validates :completed, presence: true, acceptance: { accept: true }
  validates :reps, numericality: { greater_than: 0 }
end

