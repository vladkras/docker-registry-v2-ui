# docker-registry-ui

RUN
====

```
docker run --rm -d \
    -p 80:8080 \
    -v "$(pwd):/app" \
    -w /app \
    -e REGISTRY_HOST=http://localhost:5000 \
    -e VUE_DEV=true \
    node:10 \
    /bin/bash -c "npm install && node server"
```

Change REGISTRY_HOST

TODO
====
 - Move tags to component
 - Add error box
