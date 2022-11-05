class MeditationReflection < ApplicationRecord

    belongs_to :meditation
    belongs_to :user, through: :meditation
end
