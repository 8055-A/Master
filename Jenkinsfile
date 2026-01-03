pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Test') {
      steps {
        // mocha-junit-reporter will produce a JUnit XML file that Jenkins can read
        sh 'npm test'
      }
      post {
        always {
          // Publish test results to Jenkins
          junit allowEmptyResults: true, testResults: 'test-results/results.xml'
        }
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts artifacts: '**/dist/**', allowEmptyArchive: true
      }
    }
  }

  post {
    success {
      echo "Build succeeded: ${env.JOB_NAME} #${env.BUILD_NUMBER}"
    }
    failure {
      echo "Build failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}"
    }
    always {
      cleanWs()
    }
  }
}
