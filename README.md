# Dad jokes

This application is designed to help ordinary people tell the best possible dad jokes!


Setup
    `npm install`

To develop locally:
    `npm run dev` - runs nodemon locally uses parcel to build dist folder
    
Testing
    `npm run test` - runs jest

Run in prod
    `npm run build` - Creates a production build with minified code


# Features

1. View a joke - Has a mock joke for viewing
2. Add a joke - Has a simple form for adding a new joke 
3. Authentication through Auth0 in a feature branch

# TODOs

## Client
1. Login control
2. Rating control
3. Search control

## API
1. GetAllJokes
2. GetRandomJoke
3. GetJokeByID
4. SearchJokes

## Database
1. Do not allow duplicate jokes to be saved
2. Create Approval Flow for new jokes