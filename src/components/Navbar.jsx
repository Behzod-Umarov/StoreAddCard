import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../lib/slices/userSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const { currentUser, isAuthenticated } = useSelector(
    (state) => state.user || { currentUser: null, isAuthenticated: false },
  )
  const { cart } = useSelector((state) => state.products)

  const handleLogout = () => {
    dispatch(logout())
  }
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="container border-b-2 border-primary flex justify-between items-center py-3">
      <a href="/" className="flex items-center gap-5 text-primary">
        <img src="/logo.svg" alt="logo" />
        <div>
          <span className="block text-3xl font-semibold">Red Clothes</span>
          <span className="text-sm">Магазин одежды для практики </span>
        </div>
      </a>
      <div className="flex gap-5 items-center text-primary text-2xl">
        <Link to={"/cart"}>
          <i className="fa me-2 fa-shopping-cart"></i>
        </Link>
        <span>{totalPrice.toFixed(2)} ₽</span>
        <Link to={"/wishlist"}>
          <i className="fa-regular fa-heart"></i>
        </Link>
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">{currentUser?.email}</span>
            <button onClick={handleLogout} className="text-sm hover:text-red-500">
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        ) : (
          <Link to="/login">
            <i className="fa-regular fa-user"></i>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar

