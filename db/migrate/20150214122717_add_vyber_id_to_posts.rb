class AddVyberIdToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :vyber_id, :integer
  end
end
