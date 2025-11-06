import { useState } from 'react'
import Head from 'next/head'
import { range } from 'lodash'
import 'tailwindcss/tailwind.css'

export default function Home() {
  const [numbers, setNumbers] = useState(range(1, 76).map(String))
  const [selected, setSelected] = useState([])

  const selectNumber = () => {
    if (numbers.length === 0) {
      return
    }

    const randomIndex = Math.floor(Math.random() * numbers.length)
    const number = numbers[randomIndex]

    setNumbers(numbers => numbers.filter((_, i) => i !== randomIndex))
    setSelected(selected => [...selected, number])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bingo Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Bingo Game
        </h1>

        <p className="mt-5 text-2xl">
          Click the button to select a number
        </p>

        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={selectNumber}>
          Select Number
        </button>

        {selected.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Selected numbers:</h2>
            <ul className="mt-4 grid grid-cols-5 gap-4">
              {selected.map((number, index) => (
                <li key={index} className="text-xl font-bold">{number}</li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}