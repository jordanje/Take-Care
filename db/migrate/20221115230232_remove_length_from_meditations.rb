class RemoveLengthFromMeditations < ActiveRecord::Migration[7.0]
  def change
    remove_column :meditations, :length, :integer
  end
end
