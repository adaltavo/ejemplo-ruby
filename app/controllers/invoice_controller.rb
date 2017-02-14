class InvoiceController < ApplicationController
	protect_from_forgery with: :null_session
	def index
	end

	def venta
		if request.get? 
			render "venta"
		end
		if request.post?
			render json: params
		end


	end
end
