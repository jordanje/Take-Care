class MeditationReflection < ApplicationRecord

    has_one :meditation
    has_one :user, through: :meditation
end
