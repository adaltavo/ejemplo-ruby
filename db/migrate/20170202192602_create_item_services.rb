class CreateItemServices < ActiveRecord::Migration[5.0]
  def change
    create_table :item_services do |t|
      t.string :name
      t.string :sku
      t.decimal :purchprice
      t.decimal :saleprice
      t.string :shortdes
      t.string :longdes

      t.timestamps
    end
  end
end
