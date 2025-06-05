const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  const readmeContent = fs.readFileSync(path.resolve(__dirname, 'readme.md'), 'utf8');

  test('README should contain MCP integration testing section', () => {
    expect(readmeContent).toContain('MCP Integration Testing');
  });

  test('README should have a comprehensive description of MCP testing', () => {
    expect(readmeContent).toMatch(/Master Control Program.*integration testing/is);
  });

  test('README formatting should be valid markdown', () => {
    // Check for common markdown headers and formatting
    expect(readmeContent).toMatch(/^#/m);
  });
});