import { Schema, model, models } from 'mongoose'

const orderSchema = new Schema({
  line_items: Object,
  name: String,
  email: String,
  city: String,
  postalCode: String,
  streetAddress: String,
  country: String,
  paid: Boolean,
})

export const Order = models?.Order || model('Order', orderSchema)
