class Meditation < ApplicationRecord

    belongs_to :user
    belongs_to :theme, optional: :true
    belongs_to :meditation_reflection, optional: :true

    def self.sort_by_date
        Meditation.all.sort{|a, b| b.created_at <=> a.created_at}
    end

end
