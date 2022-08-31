// CSS
import styles from './Login.module.css'

// Libs
import { useEffect, useState } from 'react'

// Hooks
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const { login, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            email,
            password
        }

        const res = await login(user)
        console.log(res)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }

    }, [authError])

    return (
        <div className={styles.login}>
            <h1>Entrar</h1>
            <p>Faça o login para poder utilizar o sistema</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name='email'
                        placeholder='E-mail do usuário'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name='password'
                        placeholder='Insira sua senha'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                </label>
                {!loading ? (
                    <button className='btn'>Entrar</button>
                ) : (
                    <button className='btn' disabled >Aguarde...</button>
                )}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Login