class CreateMeditations < ActiveRecord::Migration[7.0]
  def change
    create_table :meditations do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :reflection_id
      t.integer :user_id
      t.integer :theme_id

      t.timestamps
    end
  end
end
