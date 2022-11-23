import { useFirebase } from "~~/server/utils/firebase";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(); 
    const id = event.context.params.id;
    const db = useFirebase(config.googleApplicationCredentials)
    await db.collection('sites').doc(id).delete();

    return "Item deleted";
})
