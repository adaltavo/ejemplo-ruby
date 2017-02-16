class ItemController < ApplicationController
  skip_before_action :verify_authenticity_token
	require 'spreadsheet';
	require 'ItemImporter';
	require 'roo';

	def index
		var = "{'huehue':'huehue'}";
		render json: var;
	end

	def all
		render json: ItemProduct.all().to_json(:except => [:created_at, :updated_at])
	end


	def cargaexcel 
		
		ActiveRecord::Base.logger.level = 1
		uploaded = params[:excel];
		temp=uploaded.original_filename
		File.open(Rails.root.join('public', 'uploads',temp), 'wb') do |file|
			file.write(uploaded.read)
		end
  	#book = Spreadsheet.open Rails.root.join('public', 'uploads', uploaded.original_filename);

  	#path= Rails.root.join('public', 'uploads', uploaded.original_filename);
  	ItemImporter.import('./public/uploads/'+temp);
  	#xlsx = Roo::Spreadsheet.open('./public/uploads/'+uploaded.original_filename);
  	render inline: "subido";

  end

  def new

  end

end
