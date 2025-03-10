import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { signUp } from "../lib/slices/userSlice"

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { users } = useSelector((state) => state.user)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.password) {
      setError("Barcha maydonlarni to'ldiring")
      return
    }
    const userExists = users.find((user) => user.email === formData.email)
    if (userExists) {
      setError("Bu email bilan foydalanuvchi allaqachon mavjud")
      return
    }
    const newUser = {...formData,id: Date.now().toString(),}
    dispatch(signUp(newUser))
    navigate("/")
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-primary">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Ro'yxatdan o'tish</h2>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
              Ism
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div className="mb-4">
            <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Emailingizni kiriting"
            />
          </div>

          <div className="mb-6">
            <label className="block text-primary text-sm font-bold mb-2" htmlFor="password">
              Parol
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Parolingizni kiriting"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-primary/90"
          >
            Ro'yxatdan o'tish
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Hibosingiz bormi?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp

