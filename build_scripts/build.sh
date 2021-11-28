docker build --target coverage -qf ./Dockerfile -t algorithms .
docker run -it --rm algorithms