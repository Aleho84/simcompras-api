module.exports = {
    apps: [
        {
            name: "simcompras-api",
            script: "./src/api.js",
            watch: true,
            env: {
                "PORT": 3000,
                "NODE_ENV": "production",
                "DB_MODE": "mongoDB",
                "RUN_MODE": "fork",
                "SECRET_STRING": "ADLVFEyWItdkAi9V1KPt",
                "TIME_SESSION": 60,
                "MONGOOSE_URI": "mongodb://simcompras:simpass@192.168.0.3:27017/simcompras",
                "SERVER_SWAGGER": "http://localhost:8080",
            }
        }
    ]
}