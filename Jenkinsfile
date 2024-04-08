@Library('spartan@master') _

yarnBuildPipeline {
  cloudName = "aws"
  cloudRegion = "us-west-1"

  nodeBuildLabel = 'builder'

  extraLibProperties = [
    JENKINS_NODE_JS_VERSION: "Node 18"
  ]

  yarnBuildCommands = ["install" , "build"]

  serviceConfigurations = [
    name              : 'spartan-template-react',
    sourceDir         : 'dist',
    path              : '/*'
  ]

  deployVarsMode = "ssm"

  buildEnabled = { ctx, buildEnv ->
      buildEnv.isDefaultBranchBuild() || buildEnv.isPullRequestBuild()
  }

  devDeploymentEnabled = { ctx, buildEnv ->
      buildEnv.isDefaultBranchBuild()
  }

  informStageEnabled = false

  codeQualityStageEnabled = false

}
