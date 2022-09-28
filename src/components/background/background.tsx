import './background.css'
import BackgroundCircle from './backgroundCircle'
import { TypeComponent } from '@/@types/types'

function Background ({ children }: TypeComponent): JSX.Element {
  return (
    <>
      <div className="background">
        <BackgroundCircle />
        {children}
      </div>
    </>
  )
}

export { Background }
