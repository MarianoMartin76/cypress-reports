pipeline{
    agent any

    stages{
        stage("Build"){
            steps{
                echo "========executing Build ========"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========Build executed successfully========"
                }
                failure{
                    echo "========Build execution failed========"
                }
            }
        }
        stage("Test"){
            steps{
                echo "========executing Test ========"
                script {
                    def test = 2 + 2 > 3 'cool' : 'not cool'
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