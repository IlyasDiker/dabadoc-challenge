class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  has_secure_password

  field :name, type: String
  field :email, type: String
  field :password_digest, type: String

  validates :email, presence: true, uniqueness: true
  
  def authenticate(plain_password)
    BCrypt::Password.new(password_digest) == plain_password
  end
end
