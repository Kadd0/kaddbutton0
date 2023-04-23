import React from 'react'

import { Button } from 'kaddbutton0'
import 'kaddbutton0/dist/index.css'

const App = () => {
  return (
  <div>

  <Button text='Primary Button' type='primary' />

  <Button text='Default Button ' type='default' />

  <Button text='Dashed Button' type='dashed' />
 
  <Button text='Text Button' type='text' />
  
  <Button text='Link Button' type='link' />
</div>
  )
}

export default App
