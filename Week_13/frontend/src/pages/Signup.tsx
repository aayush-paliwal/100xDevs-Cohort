import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = () => {
  return (
    <div className="grid max-md:grid-cols-1 grid-cols-2 h-screen">
      <Auth type="signup" />
      <Quote />
    </div>
  )
}

