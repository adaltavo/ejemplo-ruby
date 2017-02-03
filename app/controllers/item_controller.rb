class ItemController < ApplicationController
  require 'spreadsheet';
  def index
  	var = "{'huehue':'huehue'}";
  	render json: var;
  end
 

  def cargaexcel 
  	uploaded = params[:excel];
  	File.open(Rails.root.join('public', 'uploads', uploaded.original_filename), 'wb') do |file|
  	    file.write(uploaded.read)
  	end
  	book = Spreadsheet.open Rails.root.join('public', 'uploads', uploaded.original_filename);
  	render inline: "subido";
  end

  def new

  end

end
