import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import { Construct } from "constructs";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'InfrastructureQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const websiteBucket = new s3.Bucket(this, "StaticWebsiteBucket", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicPolicy: false,
      }),
    });

    const distribution = new cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket, { originPath: "/" }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",
    });

    new BucketDeployment(this, "StaticWebsiteBucketDeployment", {
      sources: [Source.asset("../web-app/out")],
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ["/*"],
    });
  }
}
