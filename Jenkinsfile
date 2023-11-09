pipeline {
  agent {
    docker { image 'nodejs-web' }
  }
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/KR4KENX/js_web_app', credentialsId:'github-pass', branch: 'main')
        sh 'ls -l'
      }
    }
    stage('Setup enviroment'){
      steps{
        sh 'echo hello'
      }
    }

  }
}