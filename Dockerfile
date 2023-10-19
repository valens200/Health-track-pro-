# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose a port for the application (if your app listens on a specific port)
EXPOSE 4000

# Command to start your Node.js application
CMD ["node", "app.js"]
