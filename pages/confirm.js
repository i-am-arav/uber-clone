import React from 'react'
import tw from 'tailwind-styled-components';
import Map from './components/map';
export default function confirm() {
  return (
    <Wrapper>
        <MapContainer></MapContainer>
        <RideContainer>
            <InfoText>Choose a ride or swipe up for more</InfoText>
        </RideContainer>
    </Wrapper>
  )
}


const Wrapper = tw.div`h-screen bg-white flex flex-col`
const MapContainer = tw.div`flex-1 bg-gray-600`

const RideContainer = tw.div`flex-1`
const InfoText = tw.div`text-sm text-center text-zinc-500 py-1 border border-b-1 border-gray-300`


