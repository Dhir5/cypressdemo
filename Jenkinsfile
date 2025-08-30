pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // make sure you configured NodeJS in Jenkins Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Dhir5/cypressdemo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cypress:run'
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                sh 'npm run merge-reports'
                sh 'npm run generate-report'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/reports/html/**/*.*', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/reports/junit/*.xml', allowEmptyArchive: true
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    reportDir: 'cypress/reports/html',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report',
                    keepAll: true
                ])
            }
        }
    }

    post {
        always {
            junit 'cypress/reports/junit/*.xml'  // JUnit test trend in Jenkins
            cleanWs()
        }
    }
}
