# docker-registry-ui

RUN
===

```
docker run --rm -p 80:8080 -v "$(pwd):/app" -w /app node:10 /bin/bash -c "npm install && node server"
```
