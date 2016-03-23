class ContactRequestsController < ApplicationController
  def new
    contact_request = ContactRequest.new
  end

  def create
    contact_request = ContactRequest.new(contact_request_params)
		if contact_request.save
			redirect_to root_url
		else
			redirect_to root_url
		end
  end

  private

  def contact_request_params
    params.require(:contact_request).permit(:purpose, :name, :email, :phone, :company, :role, :stack, :message)
  end
end
