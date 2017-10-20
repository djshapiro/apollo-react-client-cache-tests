# Test Apollo's caching by hand

- Run this repo with `npm run dev`.
- Navigate to 'http://localhost:3000/query-tester'.
- Click the buttons to fire different queries. Watch your network requests and redux dev tools to see what gets updated when.

## How to make a new test case

- Make a new file in src/components.
- Add a button and a case in the render method of src/containers/QueryTester.jsx
- Alter the schema and hardcoded resolvers in src/server/api/schema.js if you need to.
