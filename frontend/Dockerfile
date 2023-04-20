# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /backend
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the backend when the container launches
CMD ["npm", "start"]
