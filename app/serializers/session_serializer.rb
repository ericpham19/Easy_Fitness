class SessionSerializer < ActiveModel::Serializer
  attributes :id, :notes, :user_id, :session_exercises
end
