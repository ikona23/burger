class Post < ActiveRecord::Base
  validates :vyber_id, :meno, :email, :telefon,  presence: true
  # validates_associated :vyber
  belongs_to :vybers
  # validates :vyber_id
  # belongs_to :vybers
  # validates :email, uniqueness: true

end

