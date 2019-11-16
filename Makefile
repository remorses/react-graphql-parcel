
start:
	HOST='0.0.0.0' parcel public/index.html

mock:
	MOCKING=1 concurrently -k 'make start-mock-server' 'make start'

start-mock-server:
	graphql-easy-mocks --port 9000 -f schema.graphql -m src/graphqlMocks.js

gen:
	npx graphql-codegen --config ./.graphqlconfig.yml
