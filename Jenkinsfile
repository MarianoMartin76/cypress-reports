pipeline{
    agent any

    stages{
        stage("Descargar imagen cypress"){
            agent {
                docker {
                    image 'cypress/included:14.17.0'
                    args '-u root:root'
                }
            }
            steps{
                echo "======== Descargando ========"
                sh 'npm --version'
                sh 'cypress verify'
            }
        }
        stage("Test"){
            steps{
                echo "========executing Test ========"
                script {
                    def test = 2 + 2 > 3 ? 'cool' : 'not cool'
                    echo test
                }
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========Test executed successfully========"
                }
                failure{
                    echo "========Test execution failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}