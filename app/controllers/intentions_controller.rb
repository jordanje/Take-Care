class IntentionsController < ApplicationController

  def index
    intentions = Intention.all 
    render json: intentions
  end

  def create
    intention = Intention.create!(intention_params)
    render json: intention, status: :created
  end

  private
  
  def intention_params
    params.permit(:user_id, :question_1, :question_2, :question_3)
  end
end
