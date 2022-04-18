1. Start the docker 
   docker network create global //creating global network
   docker-compose up --build

2. In local terminal "npm run dev"
    And trigger api:: http://localhost:4000/api/pin
    from both PC and Phone(http://external_ip_of_pc:4000/api/pin)
    *Phone and PC should be connected with same WiFi
    *external_ip_of_pc will be available at System Preferences>Network>Click WiFi on left side of Dialog box>IP will be available at right side of the dialog box under status:Connected
3. To enter redis cli 
   Go to Docker-Desktop, Click CLI icon of the Redis container
   use command: "redis-cli"
   check IP addresses:  "KEYS *"
