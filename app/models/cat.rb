class Cat < ActiveRecord::Base

  validates_presence_of :meno
  has_many :posts
end
