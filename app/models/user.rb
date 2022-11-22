class User < ApplicationRecord
    has_secure_password
    has_many :sessions
    has_many :exercises, through: :sessions

    validates :username, :email, uniqueness: { case_sensitive: false}
end
