pipeline {
  agent {
    label 'peppermint-vm'
  }
  environment {
    MY_CRED = credentials('azure_cred')
  }
  stages {
    stage('Setup enviroment') {
      steps {
        sh 'node'
        sh 'npm install package-lock.json'
      }
    }
    stage('Test'){
      steps {
        sh 'npm test'
      }
    }
    stage('Publish'){
      steps {
         def RESOURCE_GROUP = 'resource-group-1' 
         def FUNC_NAME = 'adrian-js-app'
         // login Azure
         withCredentials([usernamePassword(credentialsId: '62d71d51-6722-4cdc-9fce-58c9827a5fb8', passwordVariable: $MY_CRED_CLIENT_SECRET, usernameVariable: $MY_CRED_CLIENT_ID)]) {
         sh '''
             az login --service-principal -u $MY_CRED_CLIENT_ID -p $MY_CRED_CLIENT_SECRET -t $MY_CRED_TENANT_ID
             az account set -s $MY_CRED_SUBSCRIPTION_ID
         '''
         }
         sh 'cd $PWD/target/azure-functions/odd-or-even-function-sample && zip -r ../../../archive.zip ./* && cd -'
         sh "az functionapp deployment source config-zip -g $RESOURCE_GROUP -n $FUNC_NAME --src archive.zip"
         sh 'az logout'
         }
      }  
    }
  }
}
