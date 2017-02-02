class CreateInvoiceDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :invoice_details do |t|
      t.references :invoice, foreign_key: true
      t.references :item_product, foreign_key: true
      t.references :item_service, foreign_key: true
      t.integer :quantity
      t.decimal :unitprice

      t.timestamps
    end
  end
end
