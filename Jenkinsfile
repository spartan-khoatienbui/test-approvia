@Library('spartan@master') _

Closure<Void> terraformPipelineConfig = {
  cloudName = "aws"
  cloudRegion = "us-west-2"

  nodeBuildLabel = "lightweight"

  workingDirs = ['terraform/dev']

  buildEnabled = true

  terraformFmtStageEnabled = true
  terraformPlanStageEnabled = true
  terraformValidateStageEnabled = true

  terragruntEnabled = true
}


Closure<Void> yarnPipelineConfig = {
  cloudName = "aws"
  cloudRegion = "us-west-2"

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

  buildEnabled = true

  testStageEnabled = false

  informStageEnabled = false

  codeQualityStageEnabled = false
}

parallel terraformPipeline: {
  terraformPipeline terraformPipelineConfig
  }, yarnPipeline: {
  yarnBuildPipeline yarnPipelineConfig
}
