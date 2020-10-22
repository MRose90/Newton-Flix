# Newton Flix
This project was designed to search through OMDb and find all movies that include Newton in the name. It was developed with a Node.js backend and a React frontend. 
## Running The Application
1. Before running the application, make sure to get OMDb credentials from https://www.omdbapi.com/. These credentials need to be activated by clicking the link in the email that the service will send to you. 
2. Once you have acquired your credentials, create a folder in the root directory named `config`. Within the directory, create a file named `default.json`. Within the file write the following lines:
```json
{
    "api_key": "myKey"
}
```
3. Replace `myKey` with the key provided by OMDb.

4. To run this application, if Node.js is installed, simply navigate via command line to the directory where the files are located, run `npm install` and `npm start`.

5. Now that the application is running, navigate to http://localhost:9003. If your computer has no internet connection, the search button will not appear due to the inability to load some javascript files from the internet.

## Running The Tests
Navigate via command line to the root folder. Run `npm test`. If the server is not running, manye tests will fail, but they will still execute.

Note: If the tests fail to run due to mocha not being installed, run `npm install` or `npm install mocha`.
## Future Development
This application has been developed so that the backend routing can be expanded to make any title search requests to OMDb. This would require a search box on the frontend that passes the query to the backend by making an API call. Routing would need to be done similar to how `/newton` was written, except it would request whatever query was issued. 
