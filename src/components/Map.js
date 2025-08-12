import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "1.5rem",
};

const destination = {
  lat: 8.983833,
  lng: 38.726861,
};

export default function Map() {
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [googleInstance, setGoogleInstance] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [activeTab, setActiveTab] = useState("station");
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setLoadingLocation(false);
        },
        (err) => {
          console.error("Failed to get user location", err);
          setLoadingLocation(false); // stop loading even if error
        }
      );
    } else {
      setLoadingLocation(false); // Geolocation not supported
    }
  }, []);

  // Handle directions response
  const handleDirectionsCallback = (response, status) => {
    if (status === "OK") {
      setDirections(response);
    } else {
      console.error("Directions request failed", status);
    }
  };

  return (
    <div className="relative py-20 bg-light">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeIn">
          Find a Charging Station
        </h2>
        <p className="text-lg text-secondary max-w-xl mx-auto animate-fadeIn delay-100">
          Locate available AddisPlug charging Ports near you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl shadow-2xl overflow-hidden border border-gray-200 bg-white transition-transform transform hover:scale-[1.02] duration-300">
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={destination}
              zoom={14}
              onLoad={() => {
                setIsMapLoaded(true);
                setGoogleInstance(window.google);
              }}
              options={{
                streetViewControl: false,
                fullscreenControl: false,
              }}
            >
              {/* Destination red pin */}
              {isMapLoaded && (
                <MarkerF
                  position={destination}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  }}
                />
              )}

              {/* User blue pin */}
              {isMapLoaded && userLocation && (
                <MarkerF
                  position={userLocation}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  }}
                />
              )}

              {/* Directions */}
              {isMapLoaded && userLocation && !directions && (
                <DirectionsService
                  options={{
                    destination,
                    origin: userLocation,
                    travelMode: "DRIVING",
                  }}
                  callback={handleDirectionsCallback}
                />
              )}

              {/* Render route */}
              {directions && (
                <DirectionsRenderer
                  options={{
                    directions,
                    suppressMarkers: true,
                    polylineOptions: {
                      strokeColor: "#007bff",
                      strokeWeight: 5,
                    },
                  }}
                />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

      {/* Loading or Open Google Maps Button */}
      <div className="absolute bottom-6 right-60 z-20">
        {loadingLocation ? (
          <div className="bg-primary text-white text-sm px-4 py-2 rounded-full shadow-md animate-pulse">
            ⏳ Loading your location...
          </div>
        ) : (
          <a
  href={
    userLocation
      ? `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${destination.lat},${destination.lng}&travelmode=driving`
      : `https://www.google.com/maps/search/?api=1&query=${destination.lat},${destination.lng}`
  }
  target="_blank"
  rel="noopener noreferrer"
  className=" m-[-10px]
    bg-accent hover:bg-green-600 text-white 
    text-sm px-4 py-2 rounded-full shadow-md animate-bounce 
    sm:px-6 sm:py-3 sm:text-base
    flex items-center justify-center
    w-60 sm:w-60
    min-w-[48px] sm:min-w-auto
    max-w-full
  "
  aria-label="Open Google Maps"
>

  <span className=" sm:inline ">📍 Open Google Maps</span>
          </a>

        )}
      </div>

      {/* Animation CSS */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
