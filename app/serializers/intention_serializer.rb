class IntentionSerializer < ActiveModel::Serializer
  attributes :id, :question_1, :question_2, :question_3, :user_id, :created_at
end
