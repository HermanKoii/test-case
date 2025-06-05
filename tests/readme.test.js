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

  test('README includes key testing strategy information', () => {
    const requiredSections = [
      'Overview',
      'Testing Strategy',
      'Key Testing Principles',
      'Test Coverage',
      'Running Integration Tests',
      'Best Practices',
      'Troubleshooting'
    ];

    requiredSections.forEach(section => {
      expect(readmeContent).toContain(section);
    });
  });

  test('README structure should be markdown compliant', () => {
    const headings = readmeContent.match(/^#+\s.+/gm) || [];
    expect(headings.length).toBeGreaterThan(3);
  });

  test('README has proper markdown formatting', () => {
    // Check for headers
    expect(readmeContent).toMatch(/^#\s/m);
    expect(readmeContent).toMatch(/^##\s/m);
  });

  test('README should include test running instructions', () => {
    expect(readmeContent).toContain('npm run test:integration');
  });

  test('README content should be professional and clear', () => {
    expect(readmeContent.length).toBeGreaterThan(500);
    expect(readmeContent).not.toContain('TODO');
  });
});