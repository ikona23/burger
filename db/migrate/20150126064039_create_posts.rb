class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :meno
      t.string :email
      t.string :telefon

      t.timestamps
    end
  end
end
