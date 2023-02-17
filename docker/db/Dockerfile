FROM postgres:15.2-alpine

# alpineコンテナにエイリアスを適用
ENV ENV="/etc/profile"
COPY .alias ./
RUN cat .alias > "$ENV"

# Time Zone
ENV TZ Asia/Tokyo

# Language
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8