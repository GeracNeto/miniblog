import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

const useAuth = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    // Faz o cleanup - evita 'vazamento de memória'
    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }


}

export default useAuth