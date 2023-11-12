pipeline {
  agent {
    label 'peppermint-vm'
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
         azureWebAppPublish azureCredentialsId: '62d71d51-6722-4cdc-9fce-58c9827a5fb8',
                   resourceGroup: 'resource-group-1', appName: 'adrian-nodejs-app',
                   filePath: '*.js', sourceDirectory: 'target', targetDirectory: 'webapps'
         }
      }  
    }
  }
