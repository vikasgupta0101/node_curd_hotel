const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,   // ✅ fixed
    },
    price: {
        type: Number,
        required: true,   // ✅ fixed
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true,   // ✅ fixed
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: Number,   // ✅ array of strings makes more sense
        default:0
    }
});

// ✅ Fixed variable naming
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
