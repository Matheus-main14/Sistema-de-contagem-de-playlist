FROM node:22-alpine

WORKDIR /app

# Instala as dependências (Tailwind e servidor local)
COPY package*.json ./
RUN npm ci

# Copia o restante do projeto
COPY . .

EXPOSE 8080

# Gera o CSS (modo watch) e abre o servidor na porta 8080
CMD ["npm", "run", "dev"]
