pipeline {
    agent any

    stages {
        stage('Sin Docker') {
            steps {
                sh '''
                    echo "Sin Docker"
                    ls -lha
                    touch container-no.txt
                '''
            }
        }
        stage('Con Docker') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "Con Docker"
                    ls -lha
                    touch container-yes.txt
                '''
            }
        }
    }
}