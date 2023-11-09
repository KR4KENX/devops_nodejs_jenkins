pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/KR4KENX/js_web_app', credentialsId:'github-jenkins-1', branch: 'main')
      }
    }

  }
}