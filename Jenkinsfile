@Library('global-jenkins-library@2.0.0-beta') _

env.NODE_VERSION = '8 --lts'
env.SLACK_TEAM = 'adidas-npm'
env.SLACK_CHANNEL = 'jenkins'
env.SLACK_CREDENTIALS = 'npm-slack-token'

// project config
def projectName
def version
def repo

// docker config
def dockerRepo = 'tools.adidas-group.com:5000'
def dockerPrefix = 'pabb'
def dockerCredentials = 'docker-automation'

// k8s config
def k8sCluster = 'k8s-on-prem-dev-agp'
def k8sNamespace = 'adidas-github-portal'
def dns = 'dev.github.adidas.com'

node {
    meta.pipelines.withDefaults()
    notifications.slack.send message: 'Started'

    try {
        stage('Collect info') {
            checkout scm

            projectName = tools.npm.getConfig 'name'
            version = tools.npm.getConfig 'version'
            repo = tools.git.getOriginUrl()
        }

        stage('Setup') {
            tools.npm.setupPrivateRegistry()

            tools.npm.withNvm {
                sh 'npm install'
            }
        }

        stage('Build') {
            tools.npm.withNvm {
                sh 'npm run lint'

                withEnv([
                    'API_HOST=https://dev.api.adidas.com/github',
                    'API_KEY=fkmswmh44ngwr6r7hsjau4tm'
                ]) {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            tools.npm.withNvm {
                sh 'npm run test'

                tools.sonar.run branch: env.BRANCH_NAME, version: version
            }
        }

        if (env.BRANCH_NAME == 'develop') {
            stage('Publish') {
                sh 'rm -rf node_modules'

                flows.docker.publish(
                    repo: dockerRepo,
                    image: "${dockerPrefix}/${projectName}",
                    tags: ['dev'],
                    credentials: dockerCredentials
                )

                flows.git.tag repositoryUrl: repo, tag: version, credentials: 'bitbucket-automation', force: true
                notifications.slack.send message: 'Published'
            }

            stage('Deploy') {
                def date = new Date()

                withCredentials([
                    file(credentialsId: k8sCluster, variable: 'KUBECONFIG'),
                ]) {
                    withEnv([
                        "LAST_BUILD_DATE=${date}",
                        "NAMESPACE=${k8sNamespace}",
                        "DNS=${dns}",
                        "TAG=dev"
                    ]) {
                        sh 'envsubst < ./deploy/all.yml > ./deploy.yml'
                        sh "kubectl --kubeconfig=${env.KUBECONFIG} apply -f deploy.yml"
                    }
                }

                notifications.slack.send message: 'Deployed'
            }

            stage('Build Prod') {
                tools.npm.withNvm {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }

            stage('Publish Prod') {
                sh 'rm -rf node_modules'

                flows.docker.publish(
                    repo: dockerRepo,
                    image: "${dockerPrefix}/${projectName}",
                    tags: ['prod'],
                    credentials: dockerCredentials
                )

                notifications.slack.send message: 'Published prod'
            }
        }

        notifications.slack.send message: 'Success'
    } catch (def e) {
        currentBuild.result = 'FAILURE'
        notifications.slack.send message: e.message, level: 'error'
    }
}
