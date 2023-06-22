const mongoose=require('mongoose')


// Order collection schema
const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    }],
    total: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
    // Additional fields like payment method, shipping details, timestamps, etc.
  },{timestamp:true});


  module.exports=mongoose.model("order" ,orderSchema )