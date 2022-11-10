class CreateMeditationReflections < ActiveRecord::Migration[7.0]
  def change
    create_table :meditation_reflections do |t|
      t.string :question_1
      t.string :question_2
      t.string :question_3
      t.string :question_4

      t.timestamps
    end
  end
end
