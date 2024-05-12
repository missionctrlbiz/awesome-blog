# USING BASH SCRIPT TO TAG AND UPLOAD AN IMAGE TO DOCKER HUB

#!/usr/bin/env bash

# Assumes that an image is built via `run_docker-compose.sh`

# Step 1:
# Create dockerpath
dockerpath=awesome-blog-frontend
user=biibiiking

docker build -t ${dockerpath}:v1 .

# Step 2:  
# Authenticate & tag
echo "Docker ID and Image: $dockerpath"
docker login -u $user

#Step 3:
# Tag the images with your Docker ID
docker tag $dockerpath:v1 $user/$dockerpath:v1

# Step 4:
# Push image to a docker repository
docker push $user/$dockerpath:v1