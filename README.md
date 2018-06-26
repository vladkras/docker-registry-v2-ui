# docker-registry-ui

Vue based Docker Registry v2 UI

## RUN


```
$ git clone https://github.com/graphitlab/docker-registry-v2-ui.git

$ cd docker-registry-v2-ui

$ docker run --rm -d \
    -p 80:8080 \
    -v "$(pwd):/app" \
    -w /app \
    -e REGISTRY_HOST=http://localhost:5000 \
    -e VUE_DEV=true \
    node:slim \
    /bin/bash -c "npm install && node server"
```

Change REGISTRY_HOST to your value

## LICENSE
This project is licensed under [Apache 2.0 License](https://github.com/graphitlab/docker-registry-v2-ui/blob/master/LICENSE).
