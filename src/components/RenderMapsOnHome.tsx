import { useRef, useState } from "react";
import { useIonViewDidEnter, useIonViewWillLeave } from "@ionic/react";
import { GoogleMap } from "@capacitor/google-maps";
import { Geolocation } from "@capacitor/geolocation";
import "./styles/RenderMapsOnHome.css";

const RenderMapsOnHome: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<GoogleMap | null>(null);
  const watchIdRef = useRef<string | null>(null);
  const [loading, setLoading] = useState(true);

  useIonViewDidEnter(() => {
    (async () => {
      try {
        setLoading(true);

        await Geolocation.requestPermissions();
        const { coords } = await Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });

        if (containerRef.current) {
          mapRef.current = await GoogleMap.create({
            id: "home-map",
            element: containerRef.current, // le div existe déjà dans le DOM
            apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "TA_CLE_API",
            config: {
              center: { lat: coords.latitude, lng: coords.longitude },
              zoom: 16,
            },
          });

          await mapRef.current.enableCurrentLocation(true);
          await mapRef.current.addMarker({
            coordinate: { lat: coords.latitude, lng: coords.longitude },
            title: "Vous êtes ici",
          });

          const id = await Geolocation.watchPosition(
            { enableHighAccuracy: true, maximumAge: 0 },
            async (pos) => {
              if (!pos || !mapRef.current) return;
              const { latitude, longitude } = pos.coords;
              await mapRef.current.setCamera({
                coordinate: { lat: latitude, lng: longitude },
                zoom: 16,
              });
            }
          );
          if (id) watchIdRef.current = id as string;

          setLoading(false); // carte prête → on cache l’overlay
        }
      } catch (e) {
        console.error(e);
        // Fallback visuel : Sherbrooke
        if (containerRef.current && !mapRef.current) {
          mapRef.current = await GoogleMap.create({
            id: "home-map",
            element: containerRef.current,
            apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "TA_CLE_API",
            config: { center: { lat: 45.404, lng: -71.892 }, zoom: 12 },
          });
        }
        setLoading(false);
      }
    })();
  });

  useIonViewWillLeave(() => {
    (async () => {
      if (watchIdRef.current) {
        await Geolocation.clearWatch({ id: watchIdRef.current });
        watchIdRef.current = null;
      }
      if (mapRef.current) {
        await mapRef.current.destroy();
        mapRef.current = null;
      }
      setLoading(true); // réinitialise pour la prochaine entrée
    })();
  });

  return (
    <div className="maps--div">
      <div className="maps--div-child">
        {/* Le conteneur est TOUJOURS rendu */}
        <div ref={containerRef} id="home-map" className="maps--capacitor--div" />
        {/* Overlay "Please wait..." par-dessus */}
        {loading && <div className="maps--overlay">Please wait...</div>}
      </div>
    </div>
  );
};

export default RenderMapsOnHome;
