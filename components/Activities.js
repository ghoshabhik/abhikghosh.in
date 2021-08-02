import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState } from 'react'
import { formatDistance } from 'date-fns'

export default function Activities() {

    const [activities, setActivities] = useState([])

    firebase.firestore()
                .collection('activities').onSnapshot((snapshot) => {
                    const data = snapshot.docs.map((doc) => ({
                      id: doc.id,
                      ...doc.data(),
                    }));
                    // console.log("All data in 'activities' collection", data)
                    setActivities(data)
                  });
    // console.log('activities --',activities)

    return (
        <div className="relative border dark:border-gray-600 border-gray-200 rounded-md px-3 py-2 mb-3 h-96 overflow-x-hidden overflow-y-auto no-scrollbar">
           <div className="flex space-x-2 items-center my-4 font-semibold p-1 sticky  top-0 bg-gray-200 dark:bg-gray-700 rounded">
           <p><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24" ><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"/></svg></p>
           <p>Recent Activities</p> 
           </div> 
           {activities?.sort(
      (a, b) =>
        Number(b.createdAt.toDate()) - Number(a.createdAt.toDate())
    ).map( (activity, index) => {
                    return(
                    <div key={index} className="flex flex-col justify-between mb-4">
                        <p className="text-black dark:text-gray-100"><a href={activity.url} rel="nofollow noreferrer"  target="_blank">{activity.message}</a> - <span className="text-md text-gray-500 dark:text-gray-400">{formatDistance(
                        activity.createdAt.toDate(),  new Date(),  { addSuffix: true })}</span></p>
                        
                    </div>)
            })}
        </div>
    )
}
