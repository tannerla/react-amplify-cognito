# Notes

Run sls deploy once to create the User Pool

Then add the arn to the function authorizers in serverless.yml

then re-run sls deploy to setup the authoriser in api gateway
