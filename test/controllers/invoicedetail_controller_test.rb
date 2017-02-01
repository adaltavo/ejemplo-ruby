require 'test_helper'

class InvoicedetailControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get invoicedetail_index_url
    assert_response :success
  end

end
