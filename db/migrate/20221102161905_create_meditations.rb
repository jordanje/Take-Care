class CreateMeditations < ActiveRecord::Migration[7.0]
  def change
    create_table :meditations do |t|
      t.integer :length
      t.integer :time
      t.integer :meditation_reflection_id
      t.integer :user_id
      t.integer :theme_id

      t.timestamps
    end
  end
end
