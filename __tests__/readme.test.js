const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should contain MCP Integration Testing section', () => {
    expect(readmeContent).toContain('MCP Integration Testing');
  });

  test('README should describe testing purpose', () => {
    expect(readmeContent).toContain('Master Control Program (MCP) Integration Testing');
  });

  test('README should include test running instructions', () => {
    expect(readmeContent).toContain('npm run test:integration');
  });

  test('README structure should be markdown compliant', () => {
    const headings = readmeContent.match(/^#+\s.+/gm) || [];
    expect(headings.length).toBeGreaterThan(3);
  });

  test('README content should be professional and clear', () => {
    expect(readmeContent.length).toBeGreaterThan(500);
    expect(readmeContent).not.toContain('TODO');
  });
});