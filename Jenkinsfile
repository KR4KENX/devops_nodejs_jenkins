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
  }
}
