class CreateSessions < ActiveRecord::Migration[7.0]

  def change
    create_table :sessions do |t|
      t.text :notes
      t.datetime :duration

      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
