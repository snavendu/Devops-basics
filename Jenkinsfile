pipeline {
    agent any

    environment {
        RELEASE_NAME = 'node-dev'
        NAMESPACE = 'discussion'
        ECR_REPOSITORY = 'docker-registry'
        ECR_HOST = '157021024645.dkr.ecr.us-east-1.amazonaws.com ';
        APP_ENV = 'prod'
        IMAGE = "${ECR_HOST}/${ECR_REPOSITORY}"
        TAG = "${APP_ENV}-${currentBuild.number}"
    }

    stages {
        stage('Build & Push to ECR') {
            steps {
                // Log in to ECR
                script {
                    sh "aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin ${ECR_HOST}"
                }
                // building an image
                script {
                    sh "docker build . -t ${IMAGE}:${TAG}"
                }
                // Push the Docker image to ECR
                script {
                    sh "docker push ${IMAGE}:${TAG}"
                }
            }
        }

        // stage('Deploy to EKS') {
        //     steps {
        //         // Configure kubectl
        //         script {
        //             sh "helm upgrade -i ${RELEASE_NAME} -n ${NAMESPACE} --set image.repository=${IMAGE} --set image.tag=${TAG} deployment --kube-context=${EKS_CLUSTER_NAME} --wait"
        //         }
        //     }
        // }
    }
}