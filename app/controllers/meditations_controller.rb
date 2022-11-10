class MeditationsController < ApplicationController

    def index
        user = User.find(session[:user_id])
        meditations = user.meditations.sort_by_date
        render json: meditations, status: :ok
    end
    
    def create
        
        # reflection = MeditationReflection.create!(question_1: "", question_2: "", question_3: "", question_4: "")
        meditation = Meditation.create!(meditation_params)
        # meditation.meditation_reflection = reflection
        theme = Theme.find_by(name: params[:theme_name])
        meditation.theme = theme
        meditation.save
        render json: meditation, status: :created
    end

    private

    def meditation_params
        params.permit(:length, :user_id, :reflection_id)
    end
end
