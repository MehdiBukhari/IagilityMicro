import mongoose, { Mongoose } from "mongoose";
export class DbMongo {
    mongoose: Mongoose
    constructor() {
        this.mongoose = mongoose
    }
    connect(h: string, p: number, dbName: string, u?: string, pass?: string) {
        let connectionuri = `mongodb://${h}:${p}/${dbName}`;
        if (u != undefined && pass != undefined) {
            connectionuri = `mongodb://${u}:${pass}@${h}:${p}/${dbName}`;
        }
        mongoose.connect(connectionuri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        },
            (err) => {
                if (err)
                    console.log('DataBase Connection Falied')
                else
                    console.log('connected with database')
            })
    }
}
export let MonStatConnection = new DbMongo().mongoose.connection.readyState