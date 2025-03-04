FROM nginx

LABEL author="Mohan Reddy"

WORKDIR /usr/share/nginx/html

COPY /dist .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]