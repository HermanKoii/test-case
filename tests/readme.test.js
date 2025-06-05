const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should contain project overview and MCP integration testing details', () => {
    expect(readmeContent).toContain('Integration Testing Framework');
    expect(readmeContent).toContain('MCP Integration Testing');
  });

  test('README should describe testing methodology and approach', () => {
    expect(readmeContent).toContain('Testing Approach');
    expect(readmeContent).toContain('Key Testing Strategies');
  });

  test('README should include installation and testing instructions', () => {
    expect(readmeContent).toContain('npm install');
    expect(readmeContent).toContain('pip install');
    expect(readmeContent).toContain('npm test');
  });

  test('README structure should be markdown compliant', () => {
    const headings = readmeContent.match(/^#+\s.+/gm) || [];
    expect(headings.length).toBeGreaterThan(5);
  });

  test('README should cover comprehensive testing aspects', () => {
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