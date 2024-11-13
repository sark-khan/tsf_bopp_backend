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
            "mongodb+srv://tsfilmsdev:Wpadmin123@tsfilms.uqj6tar.mongodb.net/?retryWrites=true&w=majority",
            ACCESS_KEY_ID: "AKIAQYRMYITBECXNGQ4Q",
            SECRET_ACCESS_KEY: "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",
            REGION: "ap-south-1",
            BUCKET_NAME: "tsfbopp",
        },
      },
    ],
  };
  