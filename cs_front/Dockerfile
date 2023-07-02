FROM node:14-alpine

WORKDIR /cs_front

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the TypeScript React app
RUN npm run build

# Set the command to start the application
CMD ["npm", "run", "preview"]
