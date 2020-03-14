import mongoose from 'mongoose';
import { INOTES } from '../DL/INOTES';
const INotesShema = new mongoose.Schema(
    {
        NoteText: { type: String, required: true },
        displayingId: { type: String, required: true },
        NotesPersonId: { type: String, required: true },
    },
    { timestamps: true }
);
export const InotesShema = mongoose.model<INOTES>('IComments', INotesShema);
