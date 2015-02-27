class CreateVybers < ActiveRecord::Migration
  def change
    create_table :vybers do |t|
      t.string :catering

      t.timestamps
    end
  end
end
