import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kgv.parkin',
  appName: "Park'In",
  webDir: 'dist',
  android: {
    minWebViewVersion: 55,
    backgroundColor: "#00000000",
  },
  server: {
    url: "http://localhost:5173", 
    cleartext: true
  }

};


export default config;
