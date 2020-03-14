import mongoose from 'mongoose';
import { IComments } from '../DL/IComments';
const ICommentsShema = new mongoose.Schema(
    {
        CommentText: { type: String, required: true },
        displayingId: { type: String, required: true },
        CommetingPersonId: { type: String, required: true },
    },
    { timestamps: true }
);
export const ICommentsSchema = mongoose.model<IComments>('IComments', ICommentsShema);
