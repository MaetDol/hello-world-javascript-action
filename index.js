const core = require('@actions/core');
const github = require('@actions/github');

try {
  // action 메타데이터 파일에 정의된 입력
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}`);

  const time = new Date().toTimeString();
  core.setOutput('time', time);

  // 이벤트를 트리거한 웹훅 JSON 페이로드를 가져온다
  const payload = JSON.stringify(github.context.payload, null, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
