import { useEffect, useState } from 'react'

import { db } from '../firebase/config'
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    QuerySnapshot
} from 'firebase/firestore'
import { async } from '@firebase/util'

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // Deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {

        async function loadData() {
            if (cancelled) return

            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {

                let q

                q = await query(collectionRef, orderBy("createdAt", "desc"))

                await onSnapshot(q, (QuerySnapshot) => {
                    setDocuments(
                        QuerySnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })

                setLoading(false)

            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(false)
            }
        }

        loadData()

    }, [docCollection, search, uid])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { documents, loading, error }
}