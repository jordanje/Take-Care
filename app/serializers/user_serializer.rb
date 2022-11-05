class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname

  has_many :meditations
end
