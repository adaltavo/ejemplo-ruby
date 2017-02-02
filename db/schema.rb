# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170202193436) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "invoice_details", force: :cascade do |t|
    t.integer  "invoice_id"
    t.integer  "item_product_id"
    t.integer  "item_service_id"
    t.integer  "quantity"
    t.decimal  "unitprice"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["invoice_id"], name: "index_invoice_details_on_invoice_id", using: :btree
    t.index ["item_product_id"], name: "index_invoice_details_on_item_product_id", using: :btree
    t.index ["item_service_id"], name: "index_invoice_details_on_item_service_id", using: :btree
  end

  create_table "invoices", force: :cascade do |t|
    t.string   "number"
    t.date     "date"
    t.decimal  "amount"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_invoices_on_user_id", using: :btree
  end

  create_table "item_products", force: :cascade do |t|
    t.string   "name"
    t.string   "sku"
    t.decimal  "purchprice"
    t.decimal  "saleprice"
    t.string   "shortdes"
    t.string   "longdes"
    t.integer  "stock"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "item_services", force: :cascade do |t|
    t.string   "name"
    t.string   "sku"
    t.decimal  "purchprice"
    t.decimal  "saleprice"
    t.string   "shortdes"
    t.string   "longdes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "password"
    t.string   "correo"
    t.string   "rfc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "invoice_details", "invoices"
  add_foreign_key "invoice_details", "item_products"
  add_foreign_key "invoice_details", "item_services"
  add_foreign_key "invoices", "users"
end
