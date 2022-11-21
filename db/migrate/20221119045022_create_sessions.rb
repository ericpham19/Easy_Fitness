class CreateSessions < ActiveRecord::Migration[7.0]

  def change
    create_table :sessions do |t|
      t.string :name
      t.text :notes
      t.text :exercise_name

      t.timestamps
    end
  end
end
