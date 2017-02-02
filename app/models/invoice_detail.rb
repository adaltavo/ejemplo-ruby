class InvoiceDetail < ApplicationRecord
  belongs_to :invoice
  belongs_to :itemProduct
  belongs_to :itemService
end
