class User < ApplicationRecord
    include ActiveModel::SecurePassword
    
    has_secure_password
    has_many :sessions
    has_many :exercises, through: :sessions

    validates :username, :email, uniqueness: { case_sensitive: false}
    validates :username, :email, presence: true
    validates :email, presence: true, format: { with: /\A[a-zA-Z0-9.!\#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\z/, message: "Please try a valid email name" }

end
