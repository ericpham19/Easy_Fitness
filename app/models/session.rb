class Session < ApplicationRecord
    has_many :session_exercises, dependent: :destroy
    has_many :exercises, through: :session_exercises, dependent: :destroy

    belongs_to :user
    accepts_nested_attributes_for :session_exercises
    validates :notes , presence: true
    validates :notes,uniqueness: true
end
