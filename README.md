# TriviaStack 

Progetto Reti di Calcolatori

- Tamer Hayek
- Maria Diana Calugaru
- Samuele Cervo

# Requisiti

- Il servizio REST che implementate (lo chiameremo SERV) deve offrire a terze parti delle API documentate

- SERV si deve interfacciare con almeno due servizi REST di terze parti (e.g. google maps)

- Almeno uno dei servizi REST esterni deve essere “commerciale” (es: twitter, google, facebook, pubnub, parse, firebase etc)

- Almeno uno dei servizi REST esterni deve richiedere oauth (e.g. google calendar), Non è sufficiente usare oauth solo per verificare le credenziali è necessario accedere al servizio

- La soluzione deve prevedere l'uso di protocolli asincroni. Per esempio Websocket e/o AMQP (o simili es MQTT)

- Il progetto deve prevedere l'uso di Docker e l'automazione del processo di lancio, configurazione e test

- Il progetto deve essere su GIT (GITHUB, GITLAB ...) e documentato don un README che illustri almeno lo scopo del progetto, architettura di riferimento e tecnologie usate (con un diagramma) e chiare indicazioni sul soddisfacimento dei requisiti, istruzioni per l'installazione, istruzioni per il test, Documentazione delle API fornite per esempio con APIDOC

- Deve essere implementata una forma di CI/CD per esempio con le Github Actions

- Requisiti minimi di sicurezza devono essere considerati e documentati. Self-signed certificate sono più che sufficienti per gli scopi del progetto.

# Tecnologie

NodeJS
HTML, CSS, Javascript
DB (?) CouchDB, MongoDB
Mocha (test)

- API:
    - Quiz API [https://quizapi.io/]
    - Google Translate [https://cloud.google.com/translate/]
    - Google Text to Speech [https://cloud.google.com/text-to-speech/]
    - Google oAuth
    - Facebook o/e Twitter oAuth (Share API)


# IDEA

La nostra applicazione è un gioco su quiz di natura informatica che si basa su una serie di domande e risposte, che vengono generate tramite una richiesta REST a QuizAPI.
Si può effettuare l'accesso con una credenziale Google o Facebook o Twitter. Inoltre si possono condividere i risultati con FB e TW.
Le domande possono essere lette tramite Text-to-Speech e tradotte tramite Google Translate.



