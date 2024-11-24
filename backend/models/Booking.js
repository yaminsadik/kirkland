import mongoose, { mongo } from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
        hostId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
        listingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Listings",
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
