// This is just an example, and is not required
module.exports = {
    timeout: 100,
    load: {
      before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
      order: [
        "Define the middlewares' load order by putting their name in this array is the right order",
      ],
      after: ['parser', 'router'],
    },
    settings: {
      favicon: {
        path: "favicon.ico",
        maxAge: 86400000
      },
      public: {
        path: "./public",
        maxAge: 60000
      },
      gzip: {
        enabled: true
      },
      responseTime: {
        enabled: true
      },
      poweredBy: {
        enabled: true,
        value: 'Viauco <viauco.com>'
      },
      csp: {
        enabled: false,
        policy: undefined
      },
      p3p: {
        enabled: false,
      },
      hsts: {
        enabled: false,
        maxAge: 31536000,
        includeSubDomains: true
      },
      xframe: {
        enabled: true,
        value: 'SAMEORIGIN'
      },
      xss:{
        enabled: true
      },
      cors: {
        enabled: true,
        origin: '*',
        expose: ["WWW-Authenticate", "Server-Authorization", "Authorization"],
        maxAge: 31536000,
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
        headers: ["Content-Type", "Authorization", "X-Frame-Options"]
      },
      ip: {
        enabled: false,
        whiteList: [],
        blackList: []
      },
      cache: {
        enabled: true,
        models: ['categories', 'colors', 'settings', 'sizes', 'tags', 'posts'],
      },
    },
};