class UpdateSessionsAttributes < ActiveRecord::Migration[7.0]
  def change
    change_column :sessions, :duration, :string
    rename_column :session_exercises, :sessions_id, :session_id
  end
end
