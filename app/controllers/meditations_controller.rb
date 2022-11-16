class MeditationsController < ApplicationController

    before_action :authorize

    def index
        user = User.find(session[:user_id])
        userMeditations = user.meditations.sort_by_date
        render json: userMeditations, status: :ok
    end

    def show
        meditation = Meditation.where(user_id: session[:user_id]).find(params[:id])
        render json: meditation
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
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def meditation_params
        params.permit(:length, :user_id, :reflection_id)
    end
end
