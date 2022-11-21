class SessionSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :user_id, :exercises
end
