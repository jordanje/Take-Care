class MeditationSerializer < ActiveModel::Serializer
  attributes :id, :length, :user_id, :created_at, :meditation_reflection, :theme

  has_one :meditation_reflection
  has_one :theme

  def created_at
    object.created_at.strftime("%b %e, %l:%M %p")
  end

end
