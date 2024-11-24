import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
    {
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        category: {
            type: String,
            required: true,
        },
        type: {
            type: String, 
            required: true,
        },
        streetAddress: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String, 
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        bedroomCount: {
            type: Number,
            required: true,
        },
        bathroomCount: {
            type: Number,
            required: true,
        },
        amenities: {
            type: Array,
            default: [],
        },
        // photos for listing. Could be multiple photos. need public_id adn url for cloudinary
        listingPhotoPaths: [
            {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        ],

        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Listing = mongoose.model("Listing", ListingSchema);
export default Listing;