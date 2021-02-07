const mongoose =  require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    address: {
        building: {
            type: Number,
            default: 0,
            trim: true,
            validate(value){
                if (value < 0){
                    throw new Error("Negative restaurant id.")
                }
            }
        },
        street: {
            type: String,
            required: [true, 'Please enter a street name'],
            trim: true
        },
        zipcode: {
            type: Number,
            default: 0,
            trim: true,
            validate(value){
                if (value < 0){
                    throw new Error("Negative zip code.")
                }
            }
        }
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    cuisine: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    restaurant_id: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0){
                throw new Error("Negative restaurant id.")
            }
        }
    },
})

RestaurantSchema.post('init', (doc) => {
    console.log('%s has been initialized from the database', doc._id);
});

RestaurantSchema.post('validate', (doc) => {
    console.log('%s has been validated but not saved at the moment', doc._id);
});

RestaurantSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
});

RestaurantSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
});

const restaurants = mongoose.model("restaurants", RestaurantSchema);
module.exports = restaurants;