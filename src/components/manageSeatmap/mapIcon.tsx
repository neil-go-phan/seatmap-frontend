import React from 'react'
import { MapIconContainer, MapIconDeleteBtn, MapIconImage, MapIconName } from './style'
import mapImage from "./mapimage.png";

const MapIcon: React.FC = () => {
  return (
    <MapIconContainer>
      <MapIconImage src={mapImage}/>
      <MapIconDeleteBtn />
      <MapIconName>Map</MapIconName>
    </MapIconContainer>
  )
}

export default MapIcon