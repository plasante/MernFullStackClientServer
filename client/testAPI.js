import { createStory } from './src/api/index.js';

async function testAPI() {
  const story = { caption: 'Test Caption', username: 'Test User'};
  const response = await createStory(story);

  console.log(response);
}

testAPI();