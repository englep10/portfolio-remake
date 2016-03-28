class AddDateToContactRequests < ActiveRecord::Migration
  def change
    add_column :contact_requests, :date, :string
  end
end
