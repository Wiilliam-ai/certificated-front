import { useFetchModules } from '../../../hooks/useFetchModules'

export const FormEvent = () => {
  const { modules } = useFetchModules()

  console.log(modules)

  return <div>FormEvent</div>
}
