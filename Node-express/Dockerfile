# We are considering to take our base Image as node:16 were it will install OS(linux) and node js 
FROM node:16

# inside our container creating the working directory with folder name app were all our code will be stored
WORKDIR /app 

# Copying the file from the local folder machine to the current directory in the container
COPY ./package*.json ./

# After the copying we will install the dependencies 
RUN npm install

# we the copying the whole src code from local machine to --> container directory 
COPY . .  

# NOTE - EXPOSE COMMANDS (not work) is used for only documentation purpose only here(we have expose the port through cli commands only)
EXPOSE 5500 

# CMD is commands it will run the src code
CMD ["npm","run","dev"]