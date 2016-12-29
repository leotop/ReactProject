import mongoose from "mongoose";

import config from '../../config/config.json';

mongoose.Promise = global.Promise;

export function setUpconnection() {
    mongoose.connect(`localhost:27017/test`);
};


const Schema = mongoose.Schema({
    name:      { type: String, required: true },
    password:  { type: String, required: true },
    createdAt: { type: Date }
})

export const Users = mongoose.model('users', Schema)
