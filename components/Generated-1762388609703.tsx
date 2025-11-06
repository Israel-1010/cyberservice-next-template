import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'

type FormData = {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const router = useRouter()

  const onSubmit = ({ email, password }: FormData) => {
    console.log(email, password)
    // Implement login logic here
    // On successful login, redirect to homepage
    router.push('/')
  }

  return (
    <div className="flex items-center min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div className="py-12 p-10 bg-white rounded-xl">
          <div className="mb-6 text-3xl font-light text-center text-gray-800">Login</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input 
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring" 
                  {...register('email')} 
                  required 
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input 
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring" 
                  type="password" 
                  {...register('password')} 
                  required 
                />
              </div>
              <button 
                className="w-full py-2 text-lg font-semibold text-white bg-gray-800 rounded-lg"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage