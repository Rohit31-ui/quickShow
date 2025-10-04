import mongoose from 'mongoose';

const showSchema = new mongoose.Schema(
    {
       movie: {type: String,required:true,ref:'Movie'},
       showDateTime: {type:Date,required:true},
       showPrice: {type:Number,required:true},
       occuipiedSeats: {type:Object,default:{}},


    },{minimize:true}
)

const Show = mongoose.model('Show',showSchema);

export default Show;