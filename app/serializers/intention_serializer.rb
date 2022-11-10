class IntentionSerializer < ActiveModel::Serializer
  attributes :id, :question_1, :question_2, :question_3, :user_id, :created_at

  def created_at
    object.created_at.strftime("%A, %B %d, %Y")
  end
end
