class CreateInvoices < ActiveRecord::Migration[5.0]
  def change
    create_table :invoices do |t|
      t.string :number
      t.date :date
      t.decimal :amount
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
