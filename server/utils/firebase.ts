import { App, getApps, initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

let firebaseApp: App|null = null
export const useFirebase = (credentialsPath: string) => {
    const apps = getApps()
    if (!apps.length) {
        firebaseApp = initializeApp({
            credential: cert(credentialsPath)
        })
    } else {
        firebaseApp = apps[0]
    }

    return getFirestore(firebaseApp);
}



