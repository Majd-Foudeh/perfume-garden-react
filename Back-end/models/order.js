const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Order collection schema
const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        perfumeId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        perfumeName: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
    shippingAddress: { type: String },
    date: {
      type: Date,
      default: Date.now,
    },
    // Additional fields like payment method, shipping details, timestamps, etc.
  },
  { timestamp: true }
);

module.exports = mongoose.model("order", orderSchema);

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
