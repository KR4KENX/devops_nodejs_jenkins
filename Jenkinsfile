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
    stage('Build project'){
      steps {
        sh 'npm start'
      }  
    }
  }
}
