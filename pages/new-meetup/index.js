import { useRouter } from "next/router";
import MeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

export default function newMeetupPage(){
    const router = useRouter()
    async function addMeetUpHandler(enteredData){
        const response = await fetch('/api/new-meetup', {
            body: JSON.stringify(enteredData),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        router.push('/')
    }
    return (
    <>
    <Head>
        <title>React Meetups</title>
        {/* What displays when searched on browser */}
        <meta name="description" content="Add your own meetups and create amazing networking opportunities"/>
        <MeetupForm onAddMeetup={addMeetUpHandler}/>
    </Head>
    </>
    )
}