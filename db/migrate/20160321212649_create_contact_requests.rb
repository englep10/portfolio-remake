class CreateContactRequests < ActiveRecord::Migration
  def change
    create_table :contact_requests do |t|
      t.string :purpose
      t.string :name
      t.string :email
      t.string :phone
      t.string :company
      t.string :role
      t.string :stack
      t.text :message

      t.timestamps null: false
    end
  end
end
