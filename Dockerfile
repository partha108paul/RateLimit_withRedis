FROM public.ecr.aws/lambda/nodejs:14

ENV NODE_PATH=dist/

COPY . ./
RUN npm install
RUN npm run build

CMD [ "/bin/bash" ]