#! /usr/bin/bash

# Variables
CONTEXT_NAME="hetzner"
LOCAL_CONTEXT="default"

echo "🔹 Switching to $CONTEXT_NAME context..."
docker context use $CONTEXT_NAME

echo "🔹 Deploying with docker compose on $CONTEXT_NAME..."
docker compose up -d --build

echo "🔹 Switching back to $LOCAL_CONTEXT context..."
docker context use $LOCAL_CONTEXT

echo "✅ Deployment finished!"
