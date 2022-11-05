class Meditation < ApplicationRecord

    belongs_to :user
    has_one :theme
    has_one :meditation_reflection
end
