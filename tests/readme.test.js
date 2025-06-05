const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should contain MCP integration testing section', () => {
    expect(readmeContent).toContain('MCP Integration Testing');
    expect(readmeContent).toContain('Testing Approach');
    expect(readmeContent).toContain('Key Testing Strategies');
  });

  test('README should have clear sections and structure', () => {
    expect(readmeContent).toMatch(/## MCP Integration Testing/);
    expect(readmeContent).toMatch(/### Purpose/);
    expect(readmeContent).toMatch(/#### Key Testing Strategies/);
  });

  test('README should provide testing instructions', () => {
    expect(readmeContent).toContain('## Running Tests');
    expect(readmeContent).toContain('npm test');
  });

  test('README content should be comprehensive', () => {
    const expectedKeywords = [
      'Component Interaction Testing',
      'Error Resilience Validation',
      'Performance and Scalability Checks',
      'Contribution Guidelines'
    ];

    expectedKeywords.forEach(keyword => {
      expect(readmeContent).toContain(keyword);
    });
  });
});