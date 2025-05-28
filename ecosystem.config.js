module.exports = {
    apps: [
      {
        script: "npm start",
        watch: true,
        autorestart: true,
        name: "TSF",
        log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
        ignore_watch: ["uploads"],
        env: {
          PORT: 2012,
          DB_URI:
            "mongodb+srv://tsfilmsdev:Wpadmin123@tsfilms.uqj6tar.mongodb.net/?retryWrites=true&w=majority"
        },
      },
    ],
  };
  
