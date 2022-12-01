class Exercise < ApplicationRecord
    has_many :session_exercises
    has_many :sessions, through: :session_exercises
end
