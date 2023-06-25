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



// let x ="sss(sd)sss(sss[sss]ssS)"
// let arr=[]
// for (let index = 0; index < x.length; index++) {
//   if (x[index]=="(" || x[index]=="{" || x[index]=="[" ) {
//     arr.push(x[index])
//   }
//  else if (x[index]==")" || x[index]=="}" || x[index]=="]" ) {
//     arr.push(x[index])
//   }

// if (x[index]==")" && x[index-1]=="(") {
//   arr.pop()
//   arr.pop()
// }
// else if (x[index]=="}" && x[index-1]=="{") {
//   arr.pop()
//   arr.pop()
// }
// else if (x[index]=="]" && x[index-1]=="[") {
//   arr.pop()
//   arr.pop()
// }


// if (arr.length==0) {
//   return true
// }else{
//   return false
// }

  
// }