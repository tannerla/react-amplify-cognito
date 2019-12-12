import { Auth } from "aws-amplify";

const awsmobile = {
  aws_cloud_logic_custom: [
      {
          endpoint: 'https://bq7z392jk7.execute-api.eu-west-2.amazonaws.com/dev',
          name: 'ApiGatewayRestApi',
          region: 'eu-west-2',
          custom_header: async () => { 
            return { Authorization: (await Auth.currentSession()).idToken.jwtToken } 
          }
      }
  ],
  aws_cognito_region: 'eu-west-2',
  aws_project_region: 'eu-west-2',
  aws_user_pools_id: 'eu-west-2_7NdterzK3',
  aws_user_pools_web_client_id: '50omoh26u9vronme6qkvn89617'
};

export default awsmobile;
