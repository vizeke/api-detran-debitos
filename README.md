[![Pipeline Tests](https://gitlab.es.gov.br/espm/apis/api-detran/badges/master/build.svg)](https://gitlab.es.gov.br/espm/apis/api-detran/pipelines)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)] (http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Quality Gate](http://sonar.10.243.9.12.xip.io/api/project_badges/measure?project=api-detran&metric=alert_status)](http://sonar.10.243.9.12.xip.io/dashboard?id=api-detran)
[![Bugs](http://sonar.10.243.9.12.xip.io/api/project_badges/measure?project=api-detran&metric=bugs)](http://sonar.10.243.9.12.xip.io/dashboard?id=api-detran)
[![Codesmells](http://sonar.10.243.9.12.xip.io/api/project_badges/measure?project=api-detran&metric=code_smells)](http://sonar.10.243.9.12.xip.io/dashboard?id=api-detran)
[![Vulnerabilities](http://sonar.10.243.9.12.xip.io/api/project_badges/measure?project=api-detran&metric=vulnerabilities)](http://sonar.10.243.9.12.xip.io/dashboard?id=api-detran)


# Api Detran Debitos

## Variáveis de ambiente configuráveis para o Docker
```bash
NODE_ENV                # Definir como 'production' para o swagger operar usando HTTPS
REDIS_CACHE_TIME        # Tempo de cache - padrão 1 hora
REDIS_HOST              # Apontar o IP do servidor do Redis
REDIS_PORT              # Apontar a porta do servidor do Redis
DETRAN_URL              # Endpoint do Webservice Internet Banking
DETRAN_USER             # Usuario do Webservice Internet Banking
DETRAN_PASS             # Senha de login do Webservice Internet Banking
```
## Description

Prodest | DETRAN ES API

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Enviroments


