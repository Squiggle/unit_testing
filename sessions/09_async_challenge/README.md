# Umbrella App

Every minute, poll the weather API and return a friendly message depending on
the weather forecast.

- If there is any rainfall forecast, "you'll need your umbrella"
- If the temperature is less than 10 celsius, "you'll need a jacket"
- If the temperature is greater than 25 celsius and the status is 'sunny',
  "you'll need some sunscreen"

The API integration code has been provided for you, using node-fetch.

Example output

```
You'll need your umbrella

You'll need your umbrella
You'll need your jacket


You'll need your umbrella

You'll need your umbrella. You'll need your jacket

You'll need some sunscreen
```

## Structure

- `app.ts` entry point, sets up an interval `scheduler`, triggers `report`. Not
  necessary to test.
- `scheduler/schedule.ts` triggers an action regularly at given intervals
- `reporter/reporter.ts` asynchronously queries the API and calculates the
  resulting message to return.
