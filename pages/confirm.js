import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components';
import Map from './components/map';
export default function confirm() {

  const [pickup,setPickup] = useState();
  const [drop,setDrop] = useState();

  const getDropCoordinates = () => {
    const dropLocation = 'Namakkal';
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropLocation}.json?` +
    new URLSearchParams({
      access_token : "pk.eyJ1IjoiYXJhdmluZC1hayIsImEiOiJjbDhuZW5qMWgwczExM3Zxd3Znc3ZkaDYzIn0.gj9rfK_f9bS5LIJsajJfrQ",
      limit:1
    })
    )
      .then(res => res.json())
      .then((data) => {
        setDrop(data.features[0].center)
      }); 
  }
  const getPickupCoordinates = () => {
    const pickupLocation = 'Salem,TamilNadu';
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLocation}.json?` +
    new URLSearchParams({
      access_token : "pk.eyJ1IjoiYXJhdmluZC1hayIsImEiOiJjbDhuZW5qMWgwczExM3Zxd3Znc3ZkaDYzIn0.gj9rfK_f9bS5LIJsajJfrQ",
      limit:1
    })
    )
      .then(res => res.json())
      .then(data => {setPickup(data.features[0].center)});
  }
  useEffect(() => {
    getDropCoordinates();
    getPickupCoordinates();
  }, [])
  return (
    <Wrapper>
        <Map
        pickupCoordinates={pickup}
        dropCoordinates={drop}
        />
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


