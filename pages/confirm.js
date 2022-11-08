import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components';
import Map from './components/map';
import RideSelector from './components/RideSelector';
import { useRouter } from 'next/router';

export default function Confirm() {
  const router = useRouter();
  const { pickup, drop } = router.query;


  const [pickupCoordinates,setPickupCoordinates] = useState();
  const [dropCoordinates,setDropCoordinates] = useState();

  const getDropCoordinates = (dropLocation) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropLocation}.json?` +
    new URLSearchParams({
      access_token : process.env.accessToken,
      limit:1
    })
    )
      .then(res => res.json())
      .then((data) => {
        setDropCoordinates(data.features[0].center)
      }); 
  }
  const getPickupCoordinates = (pickupLocation) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLocation}.json?` +
    new URLSearchParams({
      access_token : "pk.eyJ1IjoiYXJhdmluZC1hayIsImEiOiJjbDhuZW5qMWgwczExM3Zxd3Znc3ZkaDYzIn0.gj9rfK_f9bS5LIJsajJfrQ",
      limit:1
    })
    )
      .then(res => res.json())
      .then(data => {setPickupCoordinates(data.features[0].center)});
  }


  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropCoordinates(drop);

  }, [pickup,drop])
  return (
    <Wrapper>
        {/* <Map
        pickupCoordinates={pickupCoordinates}
        dropCoordinates={dropCoordinates}
        /> */}
        <MapContainer></MapContainer>
        <RideContainer>
            <RideSelector />
            <ConfirmButtonContainer>
              <ConfirmButton>
                Confirm Button
              </ConfirmButton>
            </ConfirmButtonContainer>
            
        </RideContainer>
    </Wrapper>
  )
}


const Wrapper = tw.div`h-screen bg-white`
const MapContainer = tw.div`flex-1 bg-gray-600 h-1/2`

const RideContainer = tw.div`flex-1 h-1/2`



const ConfirmButtonContainer = tw.div`p-2 border-t-2 border-gray-200`
const ConfirmButton = tw.div`bg-black text-white text-center py-3`

