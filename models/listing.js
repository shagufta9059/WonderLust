const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
       type: String,
       required:true,
    },
    description :String,
    image : {
        type: String,
       
        default:
            "https://unsplash.com/photos/a-window-with-a-view-of-a-forest-outside-agvvXjG40hI",
        set:  (v) => v === "" ? "https://unsplash.com/photos/a-window-with-a-view-of-a-forest-outside-agvvXjG40hI" : v,
    },
    price: Number,
    location: String,
    country : String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;