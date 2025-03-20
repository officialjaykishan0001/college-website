import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'

const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const position = [25.633308965287924, 82.99061549400415]; 

const MapComponent = () => {
  return (
    <div  className="w-[335px] sm:w-[400px] h-[250px] overflow-hidden rounded-lg shadow-md">
      <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>SGR PG College</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
