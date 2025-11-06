import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'

const LoginPage: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const login = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      })

      if (!result.ok) {
        throw new Error(result.error)
      }

      router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 py-8 pt-8" onSubmit={login}>
        <div className="px-4 pb-4">
          <label htmlFor="email" className="text-sm block font-bold pb-2">Email Address</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="px-4 pb-4">
          <label htmlFor="password" className="text-sm block font-bold pb-2">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="px-4 pb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage