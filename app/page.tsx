'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import {useRouter} from "next/navigation";
import {signOut} from "@firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const session = sessionStorage.getItem('user')
  console.log('user', {user})

  if (!user && !session)
    router.push('/sign-up')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">BetrBeta&nbsp;</code>
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Welcome{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            This is BetrBeta site.
          </p>
        </a>
        <button
            onClick={() => {
              signOut(auth)
              sessionStorage.removeItem('user')
            }}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Log out{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Click here.
          </p>
        </button>
      </div>
    </main>
  );
}
