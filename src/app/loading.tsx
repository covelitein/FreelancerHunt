//@ts-nocheck
import { Spinner } from '@nextui-org/react'
import React from 'react'

export default function Loading(){
  return (
    <div className='h-screen flex items-center bg-black justify-center'>
      <Spinner size='lg' color='danger'/>
    </div>
  )
}

