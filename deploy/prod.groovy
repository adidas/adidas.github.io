def k8sCluster = 'k8s-on-prem-prod-agp'
def k8sNamespace = 'adidas-github-portal'
def dns = 'github.adidas.com'
def date = new Date()

node {
    stage('Setup') {
        checkout scm
    }

    stage('Deploy') {
        withCredentials([file(credentialsId: k8sCluster, variable: 'KUBECONFIG')]) {
            withEnv([
                "LAST_BUILD_DATE=${date}",
                "NAMESPACE=${k8sNamespace}",
                "DNS=${dns}",
                "TAG=prod"
            ]) {
                sh 'envsubst < deploy/all.yml > deploy.yml'
                sh "kubectl --kubeconfig=${env.KUBECONFIG} apply -f deploy.yml"
            }
        }
    }
}
