class User < ApplicationRecord
    has_secure_password
    has_many :sessions
    has_many :exercises, through: :sessions
end
