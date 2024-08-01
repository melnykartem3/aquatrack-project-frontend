import { Suspense } from 'react'
import Loader from '../Loader/Loader'
import css from './SharedLayout.module.css'


const SharedLayout = ({ children }) => {
    return (
    <>
            <Suspense fallback={<Loader />}>
          <main className={css.container}>{children} </main>
        </Suspense>
        </>
    
    
  )
}

export default SharedLayout