class AddTimeToContactRequests < ActiveRecord::Migration
  def change
    add_column :contact_requests, :time, :string
  end
end
