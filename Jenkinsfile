pipeline {
  environment {
    DOCKER_CREDS = credentials('docker-hub')
  }
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
    stage('Build Docker image'){
      steps {
          sh 'docker build -t js-web-app .'
         }
      }
    stage('Login to Docker Hub'){
      steps{
        sh 'echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin'
      }
    }
    stage('Push'){
      steps{
        sh 'docker push adzik2048/my-node-app1'
      }
    }
    }
  post {
    always {
      sh 'docker logout'
    }
  }
  }
