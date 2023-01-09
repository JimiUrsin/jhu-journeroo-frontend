# Journeroo
This is the user facing front end of the Journeroo application, which is my submission for the Solita Dev Academy pre-assignment. This front-end was created using React, the [back-end](https://github.com/JimiUrsin/jhu-journeroo-backend) is implemented in Kotlin and it uses a PostgreSQL database. All of these (Front-end, Back-end and DB) have been separately deployed to cloud. The front-end and back-end are deployed to cloud using Dockerfiles.

## How to operate
Visit https://jhu-journeroo-frontend.fly.dev/

The back-end has a RESTful API that the front-end calls, and the back-end has a connection to the cloud database. Deploying the database separately was a good idea, since it means that I don't have to prepopulate the database every time the back-end gets deployed, and it also saves space on the back-end image.

## How to operate locally
If you would like to operate the whole stack locally for some reason, you can just deploy the front-end and back-end on Docker and have a PostgreSQL instance running on your machine.


## Implementation details
- All of the data imported was validated as it was being loaded to the database.
    - No journeys were imported that lasted less than ten seconds
    - No journeys were imported that covered distances shorter than 10 meters.
    - No journeys were imported in which any of the columns were null
- The application uses pagination to limit results (to a hardcoded maximum of 30)
- Fun fact: I am paying money for running these servers on the cloud as we speak, as the 256 megabytes of RAM on the free tier of Fly was not nearly enough for Spring or Nodejs.

## Known problems
- The app is slow
    - This is due to it being on a Shared VM, buying more resources would fix this.
- Changing the page does not work if you press "Next" or "Previous" too fast
    - That's to prevent flooding
- The encoding is all messed up
    - Yeah
