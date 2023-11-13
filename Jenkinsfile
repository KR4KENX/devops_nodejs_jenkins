pipeline {
  agent {
    label 'peppermint-vm'
  }
  enviroment{
    dockerImage = ''
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
    stage('Build Docker image'){
      steps {
         sh 'sudo docker build -t js-web-app .'
        dockerImage = docker.build registry + ":$BUILD_NUMBER"
         }
      }  
    }
  }
