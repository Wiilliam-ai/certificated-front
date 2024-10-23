import { Button } from '../../../components'
import { useAuthStore } from '../../../stores/auth/useAuthStore'

export const AccountSection = () => {
  const { logoutAuth, user } = useAuthStore((state) => state)

  const userProfile = user!
  const url_base = 'http://localhost:3000'

  return (
    <div className="animate-fadeIn">
      <section className="text-center mt-5">
        <h1 className="title-section">Cuentas</h1>
      </section>

      <section>
        <Button variant="destroy" label="Cerrar Session" onClick={logoutAuth} />

        <img
          className=""
          src={`${url_base}${userProfile?.avatar?.url}`}
          alt=""
        />
      </section>
    </div>
  )
}
