class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :meno

      t.timestamps
    end
  end
end
