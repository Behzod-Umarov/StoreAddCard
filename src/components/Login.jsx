import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { login } from "../lib/slices/userSlice"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError("Barcha maydonlarni to'ldiring")
      return
    }

    dispatch(login(formData))

    setTimeout(() => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"))
      if (currentUser) {
        navigate("/")
      } else {
        setError("Noto'g'ri email yoki parol")
      }
    }, 100)
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-primary">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Kirish</h2>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
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
            Kirish
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Hisobingiz yo'qmi?{" "}
            <Link to="/signup" className="text-primary font-semibold hover:underline">
              Ro'yxatdan o'tish
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

