FROM php:8.1-fpm

RUN apt-get update && apt-get install -y \
    software-properties-common \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    nodejs \
    npm \
    zip \
    unzip \
    --no-install-recommends && docker-php-ext-install pdo pdo_pgsql

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www
