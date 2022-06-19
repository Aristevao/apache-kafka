<h1 align="center">
Microservice with Node.js and Apache Kafka
</h1>

<p align="center">REST API in Node.js that integrates with a microservice using Apache Kafka.</p>

<hr>

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://docs.docker.com/install/)

## Getting started

1. Clone this repository;
3. Run `yarn` in `./api repository` to install dependencies.<br />
4. Run `yarn` in `./certification` repository to install dependencies.<br />
5. Run `yarn dev` in both above repositories.
6. Run Docker
7. Call `POST localhost:3333/certifications` to send the message from the microservice(api system/Publisher) to "certification" system (Consumer).

# Useful source

- [Guide to Setting Up Apache Kafka Using Docker](https://www.baeldung.com/ops/kafka-docker-setup)
- [Apache Kafka](https://kafka.apache.org/quickstart)
- [What is Kafka | Youtube](https://www.youtube.com/watch?v=FKgi3n-FyNU)
- [Apache Kafka + Kafdrop + Docker Compose | Medium](https://medium.com/azure-na-pratica/apache-kafka-kafdrop-docker-compose-montando-rapidamente-um-ambiente-para-testes-606cc76aa66)
