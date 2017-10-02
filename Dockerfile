FROM swaggerapi/swagger-ui

RUN mkdir /usr/share/nginx/html/api
COPY api /usr/share/nginx/html/api
COPY api-index.html /usr/share/nginx/html
COPY icon-api.png /usr/share/nginx/html
COPY api-config.js /usr/share/nginx/html
COPY handlebars-v4.0.10.js /usr/share/nginx/html

RUN ls -ls 
RUN ls -ls /usr/share/nginx/html/api


