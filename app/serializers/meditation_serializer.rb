class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time, :reflection_id, :user_id, :theme_id
end
