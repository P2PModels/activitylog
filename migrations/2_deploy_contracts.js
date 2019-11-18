/* global artifacts */
var ActivityLog = artifacts.require('ActivityLog.sol')

module.exports = function(deployer) {
  deployer.deploy(ActivityLog)
}
