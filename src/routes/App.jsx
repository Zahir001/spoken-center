import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function App() {

  return (
    <>
      <div className='app-container'>

        <Sidebar />
        <div className='rightSection'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
