// import { useEffect, useRef } from 'react';
// import { GoogleMap } from '@capacitor/google-maps';
// import { Geolocation } from '@capacitor/geolocation';

// export default function RenderMapsOnHome() {
//   const divRef = useRef<HTMLDivElement>(null);
//   const mapRef = useRef<GoogleMap | null>(null);
//   const watchIdRef = useRef<string | null>(null);
//   const markerIdRef = useRef<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       // 1) Demander les permissions de localisation
//       await Geolocation.requestPermissions();

//       // 2) Position initiale
//       const { coords } = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });
//       const center = { lat: coords.latitude, lng: coords.longitude };

//       // 3) Créer la carte native dans ce container
//       mapRef.current = await GoogleMap.create({
//           id: 'home-map', // identifiant unique
//           element: divRef.current!,
//           // L'API key est lue depuis le Manifest (Android) / Info.plist (iOS)
//           config: { center, zoom: 16 },
//           apiKey: 'AIzaSyDxdwEIjs9ZZrLJGsgiZ4K_N8wuJlukfGA'
//       });

//       // 4) Marqueur "moi"
//       markerIdRef.current = await mapRef.current.addMarker({
//         coordinate: center,
//         title: 'Ma position',
//       });

//       // 5) Suivi en temps réel
//       watchIdRef.current = await Geolocation.watchPosition(
//         { enableHighAccuracy: true },
//         async (pos) => {
//           if (!pos || !mapRef.current) return;
//           const cur = { lat: pos.coords.latitude, lng: pos.coords.longitude };

//           // Déplace la caméra
//           await mapRef.current.setCamera({ coordinate: cur, animate: true });

//           // Met à jour le marqueur (remove + add pour rester simple)
//           if (markerIdRef.current) {
//             await mapRef.current.removeMarker(markerIdRef.current);
//           }
//           markerIdRef.current = await mapRef.current.addMarker({
//             coordinate: cur,
//             title: 'Ma position',
//           });
//         }
//       );
//     })();

//     // 6) Clean-up
//     return () => {
//       if (watchIdRef.current) Geolocation.clearWatch({ id: watchIdRef.current });
//       mapRef.current?.destroy();
//       mapRef.current = null;
//     };
//   }, []);

//   // Container de la carte (ajuste la hauteur comme tu veux)
//   return <div ref={divRef} style={{ height: 260, borderRadius: 12, overflow: 'hidden' }} />;
// }
