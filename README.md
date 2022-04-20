1. Start the docker 
   docker network create global //creating global network, in docker-container it's not required
   docker-compose up --build
   docker container list
      docker exec -it contaier_name_or_id /bin/bash // to enter container bash of webapp
   inside bash
      (1st time only if required) npm i -D package_name // if any package is missing in package.json , it will reflect in both -- -- -- docker and local sys
      npm run build
      npm run dev
      *now hit apis
  To test in Redis
      docker exec -it contaier_name_or_id /bin/bash  //of redis
      Inside bash
          redis-cli
             KEYS *
  

NOTE: to remove a file "rm -rf dist"
      to open a file in terminal "cat filename"
2. In local terminal "npm run dev"
    And trigger api:: http://localhost:4000/api/ping
    from both PC and Phone(http://external_ip_of_pc:4000/api/ping)
    *Phone and PC should be connected with same WiFi
    *external_ip_of_pc will be available at System Preferences>Network>Click WiFi on left side of Dialog box>IP will be available at right side of the dialog box under status:Connected
3. To enter redis cli 
   Go to Docker-Desktop, Click CLI icon of the Redis container
   use command: "redis-cli"
   check IP addresses:  "KEYS *"
