import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length) // Fixing the random index calculation
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numberAllowed, charAllowed, setpassword])

  return (
    <div className="bg-slate-450 flex justify-center items-center min-h-screen rounded-lg">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Password Generator</h1>

        {/* Length Slider */}
        <div className="mb-6">
          <label htmlFor="length" className="block text-gray-700 font-medium mb-2">
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            id="length"
            min="10"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        {/* Checkbox Options */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="numberAllowed"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="mr-2 h-5 w-5 text-blue-600 accent-blue-600"
            />
            <label htmlFor="numberAllowed" className="text-gray-700 font-bold" >Include Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="charAllowed"
              checked={charAllowed}
              onChange={(e) => setcharAllowed(e.target.checked)}
              className="mr-2 h-5 w-5 text-blue-600 accent-blue-600"
            />
            <label htmlFor="charAllowed" className="text-gray-700 font-bold">Include Special Characters</label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-blue-500 text-black py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Generate Password
        </button>
        <br />
        <br />

        {/* Password Display */}
        <div className="w-full bg-blue-500 text-black py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 ">
          {password ? password : "Your password will appear here"}
        </div>
      </div>
    </div>
  )
}

export default App
