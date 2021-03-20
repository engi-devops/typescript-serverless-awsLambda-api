import { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'nodejs-typescript-serverless-awslambda-api',
  },

  frameworkVersion: '>=1.72.0',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    stage: 'dev',
    profile: 'user2',
    // region : 'us-east-1',
    // role: 'arn:aws:iam::216807051395:user/singhsantosh',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },

  functions: {
    getOrganizationInfo: {
      handler: 'lambdas/getInfo.organization',
      events: [
        {
          http: {
            path: 'get-organization/{information}',
            method: 'get',
            cors: true,
          }
        }
      ]
    }
  }

}

module.exports = serverlessConfiguration;
