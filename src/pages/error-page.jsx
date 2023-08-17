import { useRouteError } from 'react-router-dom'
import { withNav } from '../components/nav'

function ErrorPage() {
  const error = useRouteError();
  console.log(error)

  return (
    <div className=' h-[80vh] flex items-center justify-center'>
      <div className='prose text-center'>
        {error.status && <h1>{error.status}</h1>}
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
    
  )
}

export default withNav(ErrorPage)