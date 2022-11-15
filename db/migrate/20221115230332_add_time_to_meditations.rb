class AddTimeToMeditations < ActiveRecord::Migration[7.0]
  def change
    add_column :meditations, :time, :integer
  end
end
