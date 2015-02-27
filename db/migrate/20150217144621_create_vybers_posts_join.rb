class CreateVybersPostsJoin < ActiveRecord::Migration


def self.up
  create_table 'vybers_posts', :id => false do |t|
  t.column 'vyber_id', :integer
  t.column'post_id', :integer
end
end

def self.down
  drop_table 'vybers_posts'
end
  end