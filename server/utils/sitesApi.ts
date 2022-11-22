export interface IFeature {
    id: string,
    title: string
}

export const SiteApi = (db: FirebaseFirestore.Firestore) => {
    const getSites = async () => {
        const featuresDB =  db.collection('sites');
        const snap = await featuresDB.get()

        return snap.docs.reduce((sites: IFeature[], feat: any) => {
            sites.push({
                id: feat.id,
                ...feat.data(),
                title: feat.data().title
            })
        return sites;
        }, []); 

        return
    }

    const update = async (id: string, data: any) => {
        const sitesDB =  db.collection('sites');
        const snap = await sitesDB.doc(id).update(data)

        return snap;
    }

    return {
        getSites,
        update
    }
}