const core = require('@actions/core')
const exec = require('child_process').exec

try {
  installPMD()
} catch (error) {
  core.setFailed(error.message)
}

function installPMD(){
  var download = 'wget https://github.com/pmd/pmd/releases/download/pmd_releases%2F6.19.0/pmd-bin-6.19.0.zip -P /tmp'
  var unzip = 'unzip /tmp/pmd-bin-6.19.0.zip -d /tmp'
  var mk = 'mkdir $HOME/pmd'
  var mv = 'mv /tmp/pmd-bin-6.19.0/* $HOME/pmd'
  exec(download+' && '+unzip+' && '+mk+' && '+mv, function(error, stdout, stderr){
    if(error) core.setFailed(stderr)
    core.debug(stdout)
    referencePMD()
  })
}

function referencePMD(){
  var mk = 'mkdir $HOME/bin'
  var pt = 'export PATH="$PATH:$HOME/bin/"'
  var cmd = 
`echo '#! /bin/sh
$HOME/pmd/run.sh pmd "$@"' > $HOME/bin/pmd
`
  exec(mk+' && '+pt+' && '+cmd, function(error, stdout, stderr){
    if(error) core.setFailed(stderr)
    core.debug(stdout)
  })
}
