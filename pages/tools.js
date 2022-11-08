import React from 'react'
import tw from 'tailwind-styled-components'

export default function tools() {
  return (
    <Wrapper>
        
        <ToolNavBar>

        </ToolNavBar>
    </Wrapper>
  )
}

const Wrapper = tw.div`h-screen bg-gray-200`

const ToolNavBar = tw.div` h-full w-1/4 bg-red-500`


