class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:notice] = 'Merci pour votre message. Nous vous recontacterons très vite!'
      redirect_to :root
    else
      flash[:alert] = 'Un problème est survenu. Veuillez réessayer svp.'
      redirect_to :root
    end
  end

end
