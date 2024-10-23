import { useState } from 'react'
import { Button } from '../../components'
import { useAuthStore } from '../../stores/auth/useAuthStore'
import { UserModel } from '../../models'
import { ApiFetch } from '../../plugins/http/api-fetch'
import { toast } from 'react-toastify'
import { useLocation } from 'wouter'

export const LoginView = () => {
  const { loginAuth } = useAuthStore((state) => state)
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const { email, password } = state
  const [, navigate] = useLocation()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !password) {
      return
    }

    const http = new ApiFetch({ token: '' })

    const useModel = new UserModel(http)

    const result = await useModel.login({
      email,
      password,
    })

    if (result && result.data) {
      toast.success(result.message)
      const { data } = result
      loginAuth(data?.user, data?.token)
      navigate('/')
    }
  }

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto space-y-3">
      <section className="text-center mt-5">
        <h1 className="title-section">Login</h1>
      </section>

      <form
        className="flex flex-col space-y-3 bg-white p-5 rounded-md shadow-md"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </div>

        <Button
          variant="primary"
          type="submit"
          label="Login"
          onClick={() => {}}
        />
      </form>
    </div>
  )
}
