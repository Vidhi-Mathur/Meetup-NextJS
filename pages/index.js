import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

export default function HomePage(props){
  /* const [meetups, setMeetups] = useState([])
  useEffect(() => {
    Send request and data fetched, but initially is empty. So when HTML Page is pre=generated, it doesn't wait for second render cycle. 
    Means page pre-rendered is snapshot after first component render cycle as its content. So, it may miss crucial data. After HTML page is received, React will take over, page is hydrated (React will turn it into SPA, useEffect() executed, data fetched and pages updated in browser) 
    Pre-render page with data, so initially return HTML code already contains data, built-in pre-rendering process has to be configured
    So, we have two options - static generation and server - side rendering 
    setMeetups(DUMMY_MEETUPS)
  }, []) 
  return <MeetupList meetups={meetups} /> */
  return (
    <>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of highly active react meetups"/>
      <MeetupList meetups={props.meetups} />
    </Head>
    </>
  )
} 

//Pre-rendered during production. Reserved() for page component only. First calls this before HomePage component(). SSG (Server-side generation), automatically prerendered as static HTML + JSON(uses getStaticProps). /new-meetup page (NewMeetupForm component()) is static as no data fetched from server, so prerendered as static content/ HTML. 
export async function getStaticProps(props){
  //Fetch data from API
  const client = await MongoClient.connect('mongodb+srv://mathurvidhi2505:%24VidhiM%4025@cluster0.mjodwc6.mongodb.net/meetups?authSource=admin&readPreference=primary')
  const db = client.db()
  const meetupCollection = db.collection('meetups')
  const meetups = await meetupCollection.find().toArray()
  client.close()
    return {
      props: {
        meetups: meetups.map(meetup => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString()
        }))
      },
      //Problem is that data may be outdated if added data after deployment. Enables incremental static generation, means updated after a couple of seconds as specified 
      revalidate: 1
    }
}

/*
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup.',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup.',
  },
];
Regenerate for every incoming request, so dynamically after deployment
export async function getServerSideProps(context){
  const req = context.req
  const res = context.res
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
} */
