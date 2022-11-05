class MeditationsController < ApplicationController

    def create
        meditation = Meditation.create!(meditation_params)
        
    end

    private

    def meditation_params
        params.permit(:length, :user_id, :theme_id, :reflection_id)
    end
end
