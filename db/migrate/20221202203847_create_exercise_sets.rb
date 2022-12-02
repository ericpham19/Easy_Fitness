class CreateExerciseSets < ActiveRecord::Migration[7.0]
  def change
    create_table :exercise_sets do |t|
      t.integer :number
      t.references :session_exercise, null: false, foreign_key: true
      t.integer :weight
      t.integer :reps
      t.boolean :completed

      t.timestamps
    end
  end
end
