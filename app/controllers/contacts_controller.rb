class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:notice] = 'Merci pour votre message. Nous vous recontacterons très vite!'
      redirect_to root_path
    else
      flash[:alert] = 'Un problème est survenu. Veuillez réessayer svp.'
      redirect_to root_path
    end
  end

end
