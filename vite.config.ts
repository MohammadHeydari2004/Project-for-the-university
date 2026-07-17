import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// ✅ استفاده از import.meta.dirname (Node 20.11+) یا fallback به fileURLToPath
const __dirname =
  import.meta.dirname ?? path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // ✅ بهبود Code Splitting برای کاهش حجم bundle اولیه
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // جداسازی React و Router
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/") ||
              id.includes("/react-router-dom/")
            ) {
              return "react-vendor";
            }
            // جداسازی کتابخانه‌های چارت (حجم بالا)
            if (
              id.includes("/recharts/") ||
              id.includes("/@nivo/") ||
              id.includes("/d3-")
            ) {
              return "chart-vendor";
            }
            // سایر کتابخانه‌ها
            return "vendor";
          }
        },
      },
    },
  },
});

// import react from "@vitejs/plugin-react";
// import path from "path";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "#": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     sourcemap: true,
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             if (
//               id.includes("/react/") ||
//               id.includes("/react-dom/") ||
//               id.includes("/react-router-dom/")
//             ) {
//               return "react-vendor";
//             }
//             return "vendor";
//           }
//         },
//       },
//     },
//   },
// });
