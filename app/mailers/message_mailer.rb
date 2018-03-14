class MessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.newmessage.subject
  #
  def newmessage
    mail(to: "adobbels@gmail.com",
      subject: 'New message for Steryz'
      )
    # This will render a view in `app/views/user_mailer`!
  end
end
