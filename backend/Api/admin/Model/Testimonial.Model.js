const mongoose = require("mongoose");
const TestimonialSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer_name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    isDelete: {
        type: Boolean,
        default: false
    },
},

    {
        timestamps: true,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            dateFormat: 'YYYY-MM-DD HH:mm:ss'
        }
    });

module.exports = mongoose.model("Testimonial", TestimonialSchema);