FROM node:10.4 AS base

# Pass arguments down to the webpack builder to substitute variables
# ARG REACT_APP_API_URL
# ARG REACT_APP_ROOT_URL

# Add source code
ADD . /usr/src/app

# Install & build
WORKDIR /usr/src/app/
RUN yarn install
RUN yarn build

# Reduced images size
# https://github.com/GoogleContainerTools/distroless/blob/master/examples/nodejs/Dockerfile
FROM gcr.io/distroless/nodejs
WORKDIR /usr/src/app/
COPY --from=BASE /usr/src/app/ /usr/src/app/

# Set the volume for the static app so that a proxy (NGiNX)
# can read files and serve them statically
VOLUME /usr/src/app/build

# Prepare the server for startup
WORKDIR /usr/src/app/
CMD ["server.js"]
