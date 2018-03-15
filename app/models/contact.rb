class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :mail,      :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :offer,     :validate => true
  attribute :tel,       :validate => true
  attribute :message,   :validate => true
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Nouveau contact",
      :to => "hellosteryz@gmail.com",
      :from => %("#{name}" <#{mail}>)
    }
  end
end
