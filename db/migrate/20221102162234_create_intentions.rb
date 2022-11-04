class CreateIntentions < ActiveRecord::Migration[7.0]
  def change
    create_table :intentions do |t|
      t.string :question_1
      t.string :question_2
      t.string :question_3
      t.integer :user_id

      t.timestamps
    end
  end
end
