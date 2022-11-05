class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :length, :reflection_id, :user_id, :theme_id, :created_at
end
