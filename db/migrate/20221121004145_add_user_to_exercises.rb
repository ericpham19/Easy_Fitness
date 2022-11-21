class AddUserToExercises < ActiveRecord::Migration[7.0]
  def change
    add_reference :exercises, :user, null: false, foreign_key: true
  end
end
