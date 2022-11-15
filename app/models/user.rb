class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: true

    has_many :intentions
    has_many :meditations
    has_many :meditation_reflections, through: :meditations
end
