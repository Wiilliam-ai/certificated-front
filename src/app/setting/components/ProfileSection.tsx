import { useLocation } from 'wouter'
import { Button } from '../../../components'
import { useAuthStore } from '../../../stores/auth/useAuthStore'

const url_base = 'http://localhost:3000'

export const ProfileSection = () => {
  const { user, logoutAuth } = useAuthStore((state) => state)
  const [, navigate] = useLocation()
  const nameUser = user?.name || ''
  const avatarUrl = user?.avatar.url || ''
  const srcAvatar = `${url_base}${avatarUrl}`

  const handleLogout = () => {
    logoutAuth()
    navigate('/login')
  }

  return (
    <div className="animate-fadeIn bg-white shadow-md rounded-md">
      <section className="flex gap-3 p-4 relative">
        <div>
          <img
            className="size-32 md:size-52 rounded-full object-cover"
            src={srcAvatar}
            alt={nameUser}
          />
        </div>
        <div>
          <h3 className="title-section">{nameUser}</h3>
          <p>
            <span className="font-bold">Email:</span> {user?.email}
          </p>
        </div>
        <Button
          className="absolute top-2 right-2"
          variant="destroy"
          label="Cerrar Session"
          onClick={handleLogout}
        />
      </section>
    </div>
  )
}
