FROM public.ecr.aws/lambda/nodejs:14

ENV NODE_PATH=dist/

COPY . ./
COPY package*.json ./
RUN npm install
RUN npm run build

# CMD [ "/bin/bash" ]  
#Heroku run command

EXPOSE 4001
CMD ["npm", "start"]