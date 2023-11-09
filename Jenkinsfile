pipeline {
  agent {
    docker { image 'node:20.9.0-alpine3.18' }
  }
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/KR4KENX/js_web_app', credentialsId:'github-pass', branch: 'main')
        sh 'ls -l'
      }
    }
    stage('Setup enviroment'){
      sh 'echo hello'
    }

  }
}