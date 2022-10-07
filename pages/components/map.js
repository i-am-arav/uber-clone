
import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJhdmluZC1hayIsImEiOiJjbDhuZW5qMWgwczExM3Zxd3Znc3ZkaDYzIn0.gj9rfK_f9bS5LIJsajJfrQ'
export default function Map({pickupCoordinates,dropCoordinates}) {

  useEffect(() => {
    const map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[78.157982,11.652120],
    zoom:8
  })
  if(pickupCoordinates) {
    addToMap(map,pickupCoordinates);
  }
  if(dropCoordinates) {
    addToMap(map,dropCoordinates);
  }
  if(pickupCoordinates && dropCoordinates) {
    map.fitBounds([pickupCoordinates,dropCoordinates], {
      padding:60
    })
  }
  
  
 
  },[pickupCoordinates,dropCoordinates]);

  const addToMap = (map,coordinates) => {
     const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map); 
  }

  return (

    <Wrapper id="map">Map</Wrapper>

  )
}



const Wrapper = tw.div`
bg-red-500 flex-1`
