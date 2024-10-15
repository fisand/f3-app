import { useNavigate, useRoutes } from 'react-router-dom'
import { Toaster } from 'sonner'

import routes from '~react-pages'

function Redirect({ to }: { to: string }) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [navigate, to])
  return null
}

export function App() {
  return (
    <>
      {useRoutes([...routes, { path: '*', element: <Redirect to="/" /> }])}
      <Toaster position="top-center" />
    </>
  )
}
