import { SiteApi } from './../utils/sitesApi';
import { useFirebase } from "../utils/firebase";
import { runBackground } from '../utils/background-checks.mjs';

export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
    const db = useFirebase(config.googleApplicationCredentials)
    const siteApi = SiteApi(db)
    await runBackground(true, SiteApi(db));
    const sites = await siteApi.getSites();
    return sites
});