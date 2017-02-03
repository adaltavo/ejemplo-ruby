class ItemImporter < ActiveImporter::Base
	imports ItemProduct;

	column 'nombre', :name
	column 'sku', :sku
	column 'preciocompra', :purchprice
	column 'precioventa', :saleprice
	column 'des_corta', :shortdes
	column 'des_larga', :longdes
	column 'stock', :stock

end
