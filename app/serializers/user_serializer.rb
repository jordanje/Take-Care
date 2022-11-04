class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :firstname, :lastname
end
