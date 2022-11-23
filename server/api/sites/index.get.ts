import { SiteApi } from '../../utils/sitesApi';
import { useFirebase } from "../../utils/firebase";
interface IFeature {
    id: string,
    title: string
}
export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
    const db = useFirebase(config.googleApplicationCredentials)
    const siteApi = SiteApi(db);
    const sites = await siteApi.getSites();
    
    return sites
});