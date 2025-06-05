const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should contain comprehensive MCP integration testing details', () => {
    const requiredSections = [
      'Master Control Program.*Integration Testing',
      'Purpose',
      'Testing Approach',
      'Key Testing Principles',
      'Testing Methodology',
      'Best Practices'
    ];

    requiredSections.forEach(section => {
      expect(readmeContent).toMatch(new RegExp(section, 'is'));
    });
  });

  test('README should describe testing strategies and methodologies', () => {
    const expectedKeywords = [
      'Component Interaction Testing',
      'Error Resilience Validation',
      'Performance and Scalability Checks',
      'Simulated Environments',
      'Performance Monitoring'
    ];

    expectedKeywords.forEach(keyword => {
      expect(readmeContent).toMatch(new RegExp(keyword, 'i'));
    });
  });

  test('README should include comprehensive testing instructions', () => {
    const testInstructions = [
      'npm install',
      'pip install',
      'npm test',
      'pytest tests/',
      'npm run test:integration'
    ];

    testInstructions.forEach(instruction => {
      expect(readmeContent).toContain(instruction);
    });
  });

  test('README structure should be professionally formatted', () => {
    const headings = readmeContent.match(/^#+\s.+/gm) || [];
    expect(headings.length).toBeGreaterThan(8);
    expect(headings[0]).toMatch(/^# /);  // Starts with top-level header
    
    // Verify section headers exist
    const sectionHeaders = headings.filter(heading => heading.startsWith('## '));
    expect(sectionHeaders.length).toBeGreaterThan(0);
  });

  test('README provides troubleshooting and contribution guidance', () => {
    const guidanceSections = [
      'Troubleshooting',
      'Contribution Guidelines',
      'Best Practices'
    ];

    guidanceSections.forEach(section => {
      expect(readmeContent).toMatch(new RegExp(section, 'i'));
    });
  });
});