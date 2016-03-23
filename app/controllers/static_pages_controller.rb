class StaticPagesController < ApplicationController
  def home
  end

  def contact_me
    @contact_request = ContactRequest.new
  end
end
