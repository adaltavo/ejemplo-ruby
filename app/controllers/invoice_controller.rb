class InvoiceController < ApplicationController
  def index
  end

  def venta
  	if request.get? 
  		render "venta"
  	end
  	
  end
end
