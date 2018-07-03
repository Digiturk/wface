// import * as System from '@wface/system'; export { System }
// import * as SampleProject from '@wface/sample-project'; export { SampleProject }

try { module.exports.System = require('@wface/system'); } catch (ex) {} 
try { module.exports.SampleProject = require('@wface/sample-project'); } catch (ex) {}