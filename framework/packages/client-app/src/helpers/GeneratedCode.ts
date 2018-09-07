const Projects:any = {};
export default Projects;

try { Projects.System = require('@wface/system'); } catch (ex) {} 
try { Projects.SampleProject = require('@wface/sample-project'); } catch (ex) {}


try { Projects.ScheduledTaskWface = require('scheduled-task-wface'); } catch (ex) {}