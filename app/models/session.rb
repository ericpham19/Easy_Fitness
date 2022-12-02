class Session < ApplicationRecord
    has_many :session_exercises
    has_many :exercises, through: :session_exercises

    belongs_to :user
    accepts_nested_attributes_for :session_exercises
end
