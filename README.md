# Newton Flix
This project was designed to search through OMDb and find all movies that included Newton in the name. It was developed with a nodeJS backend and a React frontend. 
## Running The Application
Before running the application, make sure to get OMDb credentials from [https://www.omdbapi.com/]. These credentials need to be activated by clicking the link in the email that the service will send to you. 
Once you have acquired your credentials, create a folder in the root directory named `config`. Within the directory, create a file named `default.json`. Within the file write the following lines:
```json
{
    "api_key": "myKey"
}
```
Replace `myKey` with the key provided by OMDb.

To run this application, if nodeJS is installed, simply navigate to the directory where the files are located, run `npm install` and `npm start`.
## Future Development
This application has been developed so that the backend routing can be expanded to make any title search requests to OMDb. This will require a search box on the frontend that passes the query to the backend by making an API call. Routing will need to be done similar to how `/newton` was written, except it will request whatever query was issued. 
