
# Account Federation

API Gateway and Lambda Function to manage AWS Account Federation

![aws-services][aws-services-image]

## How to Run API Gateway Interface

path
```
/federation?federateAccount=<federate_account_num>&federateRoleName=<federate_role_name>&account=<target_account_num>&roleName=<target_account_role_name>
```

headers
```
roleExternalId:<externl_id_of_target_account_to_federate>
```

return
```
{"statusCode":200,"body":{"ResponseMetadata":{"RequestId":""},"Credentials":{"AccessKeyId":"","SecretAccessKey":"","SessionToken":"","Expiration":""},"AssumedRoleUser":{"AssumedRoleId":"","Arn":""}}}
```

## How To Setup

    AWS CodePipeline, 'aws-services-federation'
    ./docs/pipeline.json


## How To Test Lambda Function

    $ node test.js

[aws-services-image]: ./docs/images/logo.png?raw=true
