import { MongoClient } from "mongodb"

export default async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body
        const client = await MongoClient.connect('mongodb+srv://mathurvidhi2505:%24VidhiM%4025@cluster0.mjodwc6.mongodb.net/meetups?authSource=admin&readPreference=primary')
        const db = client.db()
        const meetupCollection = db.collection('meetups')
        await meetupCollection.insertOne(data)
        client.close()
        res.status(200).json({message: 'Inserted one'})
    }
}