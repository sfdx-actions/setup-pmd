const core = require('@actions/core')
const exec = require('child_process').exec

try {
  installPMD()
} catch (error) {
  core.setFailed(error.message)
}

function installPMD(){
  var home = 'cd $HOME'
  var download = 'https://github.com/pmd/pmd/releases/download/pmd_releases%2F6.19.0/pmd-bin-6.19.0.zip'
  var unzip = 'unzip pmd-bin-6.19.0.zip'
  var alias = 'pmd="$HOME/pmd-bin-6.19.0/bin/run.sh pmd"'
  exec(home+' && '+download+' && '+unzip+' && '+alias, function(error, stdout, stderr){
    if(error) throw(stderr)
	console.log(stdout)
  })
}