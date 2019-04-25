export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-api-r01-prod-serverlessdeploymentbucket-1c3wwxszxsnup"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://wtrfv0ztj2.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ZT1uyBJr0",
    APP_CLIENT_ID: "52skpoq5ojuvk2m79hqqncjrfd",
    IDENTITY_POOL_ID: "us-east-2:d380772e-21b6-4f23-a9ff-54160f8e25ce"
  }
};
