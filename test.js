
var federateAccount = '089476987273';
var federateRoleName = 'federate';
var roleName = 'sgas_dev_admin';
var account = '290093585298';
var roleExternalId = 'ccb6cfce-057c-4fbc-84b9-1ee10e8b6560';

var roles = [];
roles.push({roleArn: 'arn:aws:iam::' + federateAccount + ':role/' + federateRoleName});
roles.push({roleArn: 'arn:aws:iam::' + account + ':role/' + roleName, externalId: roleExternalId});
console.log(roles);

event = {
  roles: roles,
  sessionName: "session1",
  durationSeconds: 0
}

var i = require('./index.js');
var context = null;
i.handler(event, context, function(err, data) {
  if (err)  console.log("failed : " + err);
  else console.log("completed: " + JSON.stringify(data));
});
