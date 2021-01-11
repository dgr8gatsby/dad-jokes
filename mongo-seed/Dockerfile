FROM mongo
COPY jokes.json /jokes.json
CMD mongoimport --host mongo --db dadjokes --collection jokes --type json --file /jokes.json --jsonArray
