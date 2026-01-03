# Master

# simple-jenkins-node

Minimal Node.js repo intended for a Jenkins demo.

What it contains
- Jenkinsfile: Declarative pipeline that runs `npm ci`, `npm test`, publishes JUnit test results and archives artifacts.
- Simple functions in `index.js` and tests in `test/test.js` (Mocha).
- `package.json` uses `mocha-junit-reporter` so Jenkins can read test results from `test-results/results.xml`.

How to use with Jenkins
1. Commit these files and push to a GitHub/Git repo.

2. In Jenkins:
   - For a single pipeline:
     - New Item → Pipeline
     - Pipeline definition: "Pipeline script from SCM"
     - SCM: Git
     - Repository URL: (your repo URL — use SSH or HTTPS with credentials)
     - Branch: main (or master)
     - Save and Build Now

   - For automatic branch/PR jobs:
     - New Item → Multibranch Pipeline
     - Add Source → Git (or GitHub)
     - Configure credentials and scan repository
     - Jenkins will discover branches with a `Jenkinsfile`.

3. Ensure Node.js is available on the Jenkins agent
   - Either run the job on an agent that has Node.js installed, or use a Docker agent that has Node.js.
   - Example Docker agent (requires Docker plugin/agent setup):
     - Replace `agent any` with `agent { docker { image 'node:18' } }` in the Jenkinsfile.

4. Test results
   - After a build, go to the job → Test Results to see test reports. The Jenkinsfile publishes `test-results/results.xml` via the `junit` step.

5. Troubleshooting
   - If you see `npm ci` fail, check Node version on agent.
   - If Jenkins cannot find tests, confirm `mocha` is installed (devDependencies are installed by `npm ci`).
   - If the `junit` step reports no results, confirm `test-results/results.xml` exists in the workspace after `npm test`.

Notes
- This project is for learning/testing Jenkins pipelines. For production, extend the pipeline (linting, coverage, docker build, publishing artifacts).
- If you use a Jenkins agent container, make sure the agent has `git`, `node`, and `npm` or use a Node Docker image as agent.

Enjoy — let me know if you want:
- the Jenkinsfile adjusted to run inside a Docker agent (Node image),
- a GitHub Actions workflow instead,
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
- or a Java/Maven version of the same demo.
# main
