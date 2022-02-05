# Data-visualisation-backend

## Index
  * [Introduction](#introduction)
  * [Endpoints](#endpoints)
  * [Run Project Locally](#localSetup)
  * [Dependencies](#depend)
  * [How to use deployed link](#deployed)

## <a name="introduction"></a>Introduction
An API for reading and writing details of given metrices in a folder with `metrics.json` file containing basic info about each metric. <br>
User can upload his own data by changing `metrics.json` file and adding his own `.json` files for his metrics. <br>
[Backend Deployment Link](https://data-visualisation-backend.herokuapp.com/)<br>
[Frontend Deployment Link](https://data-visualisation-frontend.netlify.app/)<br>
[Frontend Repo Link](https://github.com/manavdoda7/data-visualisation-frontend/)


## <a name="endpoints"></a>Endpoints
### Upload Route
#### /api/upload (POST Request)
  * Will Fetch all the data from the folder which contains info about metrics and upload it on mongoDB server.
  * This endpoint will make diffrent collections named by the id of metrics and store the data in those collections.
  * Response example on status 200 (OK) :<br> ```{
    "success": true,
    "message": "success"
    }```
### Get Deatils of all the metrics
#### /api/metrics (GET Request)
  * Endpoint for fetching breif info about all the metrics.
  * Response example on status 200 (OK):<br> ``` "result": [
        {
            "_id": "testID",
            "dimensions": [
                {
                    "name": "country",
                    "value": "testCountry"
                },
                {
                    "name": "productfamily",
                    "value": "testProduct"
                },
                {
                    "name": "devicetype",
                    "value": "testDevice"
                },
                {
                    "name": "os",
                    "value": "testOS"
                }
            ],
            "measure": "testMeasure",
            "__v": 0
        },.....}```
  * Fetches data from the metricsDatas collection on MongoDB server.

### Get data of a Single Metric
#### /api/singlemetric/`MetricID` (GET Request)
  * Endpoint for fetching data associated to a particular metric.
  * Response example on status 200 (OK): <br> ```{
    "success": true,
    "result": [
        {
            "_id": "testID",
            "original_value": {
                "$numberDecimal": "123456.789"
            },
            "min_band": {
                "$numberDecimal": "13456.78"
            },
            "max_band": {
                "$numberDecimal": "1234567.89"
            },
            "line_status": 0,
            "timestamp": "2022-12-31T13:30:00.000Z",
            "__v": 0
        },......}```
  * Fetches all the values stored in each document and returns json file.


## <a name="localSetup"></a>Run project locally 
 * Create a fork and clone the fork to your local system: ``` git clone https://github.com/manavdoda7/data-visualisation-backend.git ```
 * Run : ``` cd data-visualisation-backend/ ```
 * Run : ``` npm install ```
 * Create a new ```.env``` file with the following data: <br>

```PORT=5000```<br>
```MONGO_DB=<YOUR_DATABASE>```(localhost for local database)<br>
```USERNAME=<USERNAME_OF_DB_USER>```<br>
```PASSWORD=<YOUR_PASSWORD>``` <br>
 * Start the express server using initial terminal: ``` npm start ```
 * Check Api status on ``` http://localhost:5000/ ``` 
 * Base URL : ``` http://localhost:3000/ ```
 * The above guide assumes node.js server is installed on your machine

## <a name="depend"></a>Dependencies 
#### "body-parser": For parsing incoming requests.
#### "cors": For relaxing the security applied to an API.
#### "dotenv": For environmental variables.
#### "express"
#### "mongodb"
#### "mongoose"
 
## <a name="deployed"></a>To use deployed link for making requests: 
 * Use the base url and append the above given endpoints
 * Example: https://data-visualisation-backend.herokuapp.com/api/metrics
