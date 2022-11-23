class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :set
      t.integer :weight_kg
      t.integer :reps
      t.boolean :completed
     

      t.timestamps
    end
  end
end
