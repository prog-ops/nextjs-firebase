'use client'
import {useState} from "react";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import {useRouter} from "next/navigation";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const router = useRouter()

    const handleSignup = async (event: any) => {
        event.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(email, password);
            console.log('res', {res});
            setEmail('');
            setPassword('');
            router.push('/')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <form onSubmit={handleSignup} className="form">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email"
                               placeholder="example@mail.com"/>
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password"
                               id="password" placeholder="password"/>
                    </label>
                    <div className='mt-10 bg-amber-300 p-2'>
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignUp
