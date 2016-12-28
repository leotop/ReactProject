import mongoose from "mongoose";

import config from '../../config/config.json';//


const Schema = mongoose.Schema({
    title     : { type: String },
    text      : { type: String, require: true },
    color     : { type: String },
    createdAt : { type: Date}
});


const Tasks = mongoose.model('Task',Schema);

mongoose.Promise = global.Promise;
// connect database
export function setUpconnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

// function seek note by id
// export function listNotes(id) {
//     return Note.find();
// }


// function create new notes
export function createNote(data) {
    const note = new Note({
        title     : data.title,
        text      : data.text,
        color     : data.color,
        createdAt : new Date()
    });

    return note.save();
}


// function delete node by id
export function deleteNote(id) {
    return Note.findById(id).remove();
}
