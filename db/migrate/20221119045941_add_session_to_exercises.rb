class AddSessionToExercises < ActiveRecord::Migration[7.0]
  def change
    add_reference :exercises, :session, null: false, foreign_key: true
  end
end
