FROM ubuntu:18.04  # ⚠️ EOS

RUN apt update && apt install -y curl nginx

ENV GITHUB_TOKEN=ghp_1234567890abcdefhijklmnopqrs  # ⚠️ Hardcode

COPY . /app
WORKDIR /app
EXPOSE 8080

RUN curl -sL http://example.com/install.sh | bash  # ⚠️ sh script hardcode

CMD ["node", "app/server.js"]  # ⚠️ root user does not restrict
