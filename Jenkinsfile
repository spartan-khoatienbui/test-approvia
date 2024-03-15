@Library('spartan@master') _

String cloudName = "aws"
String cloudRegion = "us-west-2"

Closure<Void> terraformPipelineConfig = {
  cloudName = cloudName
  cloudRegion = cloudRegion

  nodeBuildLabel = "lightweight"

  workingDirs = { ctx, buildEnv ->
    if (buildEnv.isEnabledDevDeployment()) {
      ['terraform/environments/dev']
    } else if (buildEnv.isEnabledProdDeployment()) {
      ['terraform/environments/prod']
    } else if (buildEnv.isPullRequestBuild()) {
      ['terraform/environments/dev', 'terraform/environments/prod']
    }
  }
}

Closure<Void> yarnPipelineConfig = {
  cloudName = cloudName
  cloudRegion = cloudRegion

  nodeBuildLabel = 'builder'

  serviceConfigurations = [
    name              : 'spartan-template-react',
    namespace         : 'spartan-template-react',
    clusterNamePrefix : 'spartan-eks-',
    sourceDir         : 'dist',
    path              : '/*'
  ]

  testStageEnabled = { ctx, buildEnv ->
    buildEnv.isPullRequestBuild()
  }

  informStageEnabled = { ctx, buildEnv ->
    buildEnv.isEnabledDevDeployment() || buildEnv.isEnabledProdDeployment()
  }

  codeQualityStageEnabled = false
}

if (env.'BRANCH_NAME' ==~ /^PR-\d+$/) {
  parallel terraformPipeline: {
    terraformPipeline terraformPipelineConfig
    }, yarnPipeline: {
    yarnBuildPipeline yarnPipelineConfig
  },
  failFast: true
} else {
  script {
    terraformPipeline terraformPipelineConfig
    yarnBuildPipeline yarnPipelineConfig
  }
}
