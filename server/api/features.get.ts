import { useFirebase } from "../utils/firebase";
interface IFeature {
    id: string,
    title: string
}
export default defineEventHandler(async event => {
    const config = useRuntimeConfig();
    const db = useFirebase(config.googleApplicationCredentials)
    const featuresDB =  db.collection('features');
    const snap = await featuresDB.get()

    const totalFeatures: IFeature[] = snap.docs.reduce((features: IFeature[], feat) => {
        features.push({
            id: feat.id,
            ...feat.data(),
            title: feat.data().title
        })
        return features;
    }, []); 
    
    return {
        count: totalFeatures.length || 0,
        features: totalFeatures
    }
});