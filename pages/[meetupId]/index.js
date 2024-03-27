import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

export default function MeetupDetails(props){
    return (
        <>
        <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description}/>
        {/* Because props have meetup key */}
        <MeetupDetail image={props.meetup.image} title={props.meetup.title} address={props.meetup.address} description={props.meetup.description} />
        </Head>
        </>
    )
}


//getStaticProps() require getStaticPaths(), to generate all versions of dynamic paths
export async function getStaticProps(context){
    //Fetch data for single meetup
    const meetupId = context.params.meetupId
    const client = await MongoClient.connect('mongodb+srv://mathurvidhi2505:%24VidhiM%4025@cluster0.mjodwc6.mongodb.net/meetups?authSource=admin&readPreference=primary')
    const db = client.db()
    const meetupCollection = db.collection('meetups')
    const selectedMeetup = await meetupCollection.findOne({ _id: new ObjectId(meetupId)})
    client.close()
    return {
        props: {
            meetup: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image, 
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    }
}

export async function getStaticPaths(){
  //Fetch data from API
  const client = await MongoClient.connect('mongodb+srv://mathurvidhi2505:%24VidhiM%4025@cluster0.mjodwc6.mongodb.net/meetups?authSource=admin&readPreference=primary')
  const db = client.db()
  const meetupCollection = db.collection('meetups')
  // Find all documents (no filter criteria as {}) to retrieve only id
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray()
  client.close()
    return {
        //Means consists of all supported Ids, if user entered m2, m4, would see a 404 error
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}