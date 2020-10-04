const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    product_id: Number,
    orderId: Number,
    order_status: String,
    order_completed: Boolean,

}, {
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);