class MeditationReflectionsController < ApplicationController

    def show
        reflection = MeditationReflection.find(params[:id])
        render json: reflection, status: :created
    end
    
    def create
        reflection = MeditationReflection.create!(reflection_params)
        meditation = Meditation.find(params[:meditation_id])
        meditation.meditation_reflection = reflection
        meditation.save

        render json: reflection, status: :created
    end

    private

    def reflection_params
        params.permit(:question_1, :question_2, :question_3, :question_4)
    end

    # def meditation_params
    #     params.permit(:meditation_id)
    # end

end
