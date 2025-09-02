import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    fs: {
      // 允许服务超出项目根目录的文件
      allow: ['..']
    },
    middlewareMode: false
  },
  assetsInclude: ['**/*.xml'],
  plugins: [
    {
      name: 'vite-plugin-xml-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.endsWith('.xml')) {
            res.setHeader('Content-Type', 'application/xml');
          }
          next();
        });
      }
    }
  ]
})