import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const apiKeys = `2n_T11KN6acX6xRKB13dEcY8W_pHKqVYUfMVhmBBLzyEglfzS2cYKPy8enXiIq-igD6iDPJHdEoBhhHx1T6oW7xhKH05axyWeAZnOdN86HqOFFCfX9nU-No2yv04ZXYx`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.yelp.com/v3/businesses/search",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/yelp-api/, ""),
      },
    },
  },
});
