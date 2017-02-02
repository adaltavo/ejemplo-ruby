class CreateItemProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :item_products do |t|
      t.string :name
      t.string :sku
      t.decimal :purchprice
      t.decimal :saleprice
      t.string :shortdes
      t.string :longdes
      t.integer :stock

      t.timestamps
    end
  end
end
