const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README contains MCP integration testing section', () => {
    expect(readmeContent).toContain('MCP Integration Testing');
  });

  test('README has comprehensive testing description', () => {
    const requiredSections = [
      'Purpose',
      'Testing Approach',
      'Key Testing Objectives',
      'Testing Methodology',
      'Best Practices'
    ];

    requiredSections.forEach(section => {
      expect(readmeContent).toContain(section);
    });
  });

  test('README maintains professional formatting', () => {
    expect(readmeContent).toMatch(/^# /m);  // Starts with a top-level header
    expect(readmeContent).toMatch(/^## /m); // Contains section headers
  });

  test('README provides clear testing instructions', () => {
    expect(readmeContent).toContain('How to Run Integration Tests');
    expect(readmeContent).toContain('npm run test:integration');
  });
});