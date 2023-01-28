class Answer
  include Mongoid::Document
  include Mongoid::Timestamps
  field :message, type: String
  belongs_to :user
  belongs_to :question
end
