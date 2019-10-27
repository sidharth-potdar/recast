import Amplify from '@aws-amplify/core';

export function configureAmplify() {
  Amplify.configure(
  {
   Auth: {
     identityPoolId: process.env.REACT_APP_identityPoolId,
     region: process.env.REACT_APP_region,
     userPoolId: process.env.REACT_APP_userPoolId,
     userPoolWebClientId: process.env.REACT_APP_userPoolWebClientId,
    },
  Storage: { 
     bucket: process.env.REACT_APP_Bucket_name,
     region: process.env.REACT_APP_region,
     identityPoolId: process.env.REACT_APP_identityPoolId
    }
  }
 );
} 