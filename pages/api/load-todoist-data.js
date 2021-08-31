import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {

    const todoist_token = process.env.TODOIST_TOKEN

    const PROJECTS_ENDPOINT = `https://api.todoist.com/rest/v1/projects`
    const fireStoreRef = admin.firestore()

    // const allprojects = await fetch(PROJECTS_ENDPOINT, {
    //     headers: {
    //         Authorization: `Bearer ${todoist_token}`
    //     }
    // })
    // const projects = await allprojects.json();

    // var docs = projects.map(item => ({
    //     id: item.id.toString(),
    //     name: item.name,
    //     order: item.order || 0,
    //     color: item.color,
    //     url: item.url
    // }))

    // docs.map(async item => {
    //     try{
    //         const docExists = await fireStoreRef.collection('todoist_projects').doc(item.id).get()
    //         if(!docExists.exists){
    //             await fireStoreRef.collection('todoist_projects').doc(item.id).set({item, createdAt: admin.firestore.Timestamp.fromDate(new Date())})
    //         }
    //     } catch(e){
    //         console.log("ERROR:-----:",e)
    //     }
    // })

    const TASKS_ENDPOINT = `https://api.todoist.com/rest/v1/tasks`

    const allActiveTasks = await fetch(TASKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${todoist_token}`
        }
    })
    const activeTasks = await allActiveTasks.json();

    

    var docs = activeTasks.map(item => ({
        id: item.id.toString(),
        project_id: item.project_id.toString(),
        content: item.content,
        description: item.description || "NONE",
        estimated: item.description ? parseInt(item.description.split(",")[0]) : 0,
        actual: item.description ? parseInt(item.description.split(",")[1]) : 0,
        due: item.due ? item.due.date : "NONE",
        order: item.order || 0,
        created: item.created,
        url: item.url,
        label_ids: item.label_ids
    }))

    // console.log(docs)

    docs.map(async item => {
        try{
            const docExists = await fireStoreRef.collection('todoist_tasks').doc(item.id).get()
            if(!docExists.exists){
                await fireStoreRef.collection('todoist_tasks').doc(item.id).set({item, createdAt: admin.firestore.Timestamp.fromDate(new Date())})
            }
        } catch(e){
            console.log("ERROR:-----:",e)
        }
    })

    return res.status(200).json({ activeTasks });

}

export default handler