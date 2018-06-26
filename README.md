# docker-registry-ui

RUN
===

```
docker run --rm \
 -p 80:8080 \
 -v "$(pwd):/app" \
 -w /app node:10 \st:5000 \
 -e REGISTRY_HOST=http://localho
 /bin/bash -c "npm install && node server"
```
