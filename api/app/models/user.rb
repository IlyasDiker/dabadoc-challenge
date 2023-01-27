class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  has_secure_password validations: false

  field :name, type: String
  field :email, type: String
  field :password_digest, type: String

  attr_accessor :password_digest, :password

  validates :password, presence: true, length: { minimum: 6 }, on: :create
  validates :email, presence: true, uniqueness: true

  before_save :encrypt_password
  
  def authenticate(plain_password)
    BCrypt::Password.new(password_digest) == plain_password
  end

  private
  
  def encrypt_password
    self.password_digest = BCrypt::Password.create(password) if password.present?
  end

end
