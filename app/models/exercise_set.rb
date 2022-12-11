class ExerciseSet < ApplicationRecord
  belongs_to :session_exercise
  validates :completed, acceptance: { accept: true }
  validates :reps, presence: true, numericality: { greater_than: 0 }
  validates :weight, presence: true
end

