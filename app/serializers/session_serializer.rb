class SessionSerializer < ActiveModel::Serializer
  attributes :id, :notes, :user_id, :created_at, :duration

  has_many :session_exercises
end
