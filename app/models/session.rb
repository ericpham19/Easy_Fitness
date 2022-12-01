class Session < ApplicationRecord
    has_many :session_exercises
    has_many :exercises, through: :session_exercises

    belongs_to :user
end
