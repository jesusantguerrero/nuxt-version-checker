import { useFirebase } from "../utils/firebase";
interface IFeature {
    id: string,
    title: string
}
export default defineEventHandler(async event => {
    const config = useRuntimeConfig();
    const site = await readBody(event);
    const db = useFirebase(config.googleApplicationCredentials)
    const sitesDB =  db.collection('sites');
    const snap = await sitesDB.add({
        title: site.title,
        url: site.url,
        selector: site.selector,
        actions: site.actions
    }); 
    
    return snap
});