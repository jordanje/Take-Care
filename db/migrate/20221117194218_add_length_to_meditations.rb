class AddLengthToMeditations < ActiveRecord::Migration[7.0]
  def change
    add_column :meditations, :length, :integer
  end
end
