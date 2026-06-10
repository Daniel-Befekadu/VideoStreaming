import IEvent from "../interfaces/event.interface";
import mongoose, { Schema, Document } from "mongoose";
import StreamOrEventSchema from "./streamOrEvent.model";


const EventSchema = new Schema<IEvent> ({
    isOnline: {
        type: Boolean,
        default: false
    },
});

// extend the StreamOrEventSchema
EventSchema.add(StreamOrEventSchema);

export default mongoose.model('Event', EventSchema);


// Path: server/src/models/user.model.ts