
import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJhdmluZC1hayIsImEiOiJjbDhuZW5qMWgwczExM3Zxd3Znc3ZkaDYzIn0.gj9rfK_f9bS5LIJsajJfrQ'
export default function Map() {

  useEffect(() => {
    const map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[78.157982,11.652120],
    zoom:12
  })
  },[])

  return (

    <Wrapper id="map">Map</Wrapper>

  )
}



const Wrapper = tw.div`
bg-red-500 flex-1`
