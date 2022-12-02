class SessionSerializer < ActiveModel::Serializer
  attributes :id, :notes, :user_id

  has_many :session_exercises
end
