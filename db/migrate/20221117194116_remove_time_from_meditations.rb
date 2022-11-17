class RemoveTimeFromMeditations < ActiveRecord::Migration[7.0]
  def change
    remove_column :meditations, :time, :integer
  end
end
