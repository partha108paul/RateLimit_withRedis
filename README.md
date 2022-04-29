1. Start the docker 
   docker network create global //creating global network, in docker-container it's not required
   docker-compose up --build
   docker container list
      docker exec -it contaier_name_or_id /bin/bash // to enter container bash of webapp
      inside bash
      (1st time only if required) npm i -D package_name // if any package is missing in package.json , it will reflect in both -- -- //-- docker and local sys
      npm start
      *now hit apis
  To test in Redis
      docker exec -it contaier_name_or_id /bin/sh  //for redis
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

3.EC2 deployment
    https://medium.com/@umairnadeem/deploy-to-aws-using-docker-compose-simple-210d71f43e67
    https://www.youtube.com/watch?v=FVNBdylX5po&list=PL6EYZe4MpYie326LYupt2dn85wtF1uOO3&index=58
    https://ljmocic.medium.com/deploy-node-js-application-with-mysql-database-to-aws-ec2-using-docker-compose-3e5034c034ce

4. In terminal go to Downloads folder(where myawsPair.pem file exists), 
   ssh -i myawsPair.pem ec2-user@13.233.255.180 // to enter remote ubuntu computer
   cd REDIS_LIMITER_WORK
   sudo docker-compose up -d
   sudo docker ps // to check the containers
   sudo docker exec -it container_id_of_redis_from_above_command_result /bin/sh 
   redis-cli
   KEYS *
   To Edit docker file in EC2...vi Dockerfile, vi docker-compose.yml, press i to insert, modify, ESC to exit, :wq to save, then 'sudo docker-compose stop' then up again
   HIT: http://ec2-13-233-255-180.ap-south-1.compute.amazonaws.com:4001/api/ping
   http://13.233.255.180:4001/api/ping