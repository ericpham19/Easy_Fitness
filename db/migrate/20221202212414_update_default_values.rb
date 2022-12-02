class UpdateDefaultValues < ActiveRecord::Migration[7.0]
  def change
    change_column :exercise_sets, :weight, :integer, default: 0
    change_column :exercise_sets, :reps, :integer, default: 0
  end
end
