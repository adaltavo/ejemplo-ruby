class ItemController < ApplicationController

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
		File.open(Rails.root.join('public', 'uploads', uploaded.original_filename), 'wb') do |file|
			file.write(uploaded.read)
		end
  	#book = Spreadsheet.open Rails.root.join('public', 'uploads', uploaded.original_filename);

  	#path= Rails.root.join('public', 'uploads', uploaded.original_filename);
  	ItemImporter.import('./public/uploads/'+uploaded.original_filename);
  	#xlsx = Roo::Spreadsheet.open('./public/uploads/'+uploaded.original_filename);
  	render inline: "subido";

  end

  def new

  end

  def ajax
  	render json: ItemProduct.where("sku LIKE ?", "%#{params[:sku]}%")
  end

  def show
  	render json: ItemProduct.find(params[:id].to_i).to_json(:except => [:created_at, :updated_at])
  end

end
