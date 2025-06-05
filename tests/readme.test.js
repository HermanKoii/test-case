const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should contain project overview', () => {
    expect(readmeContent).toContain('Integration Testing Framework');
  });

  test('README should describe testing methodology', () => {
    expect(readmeContent).toContain('Testing Methodology');
  });

  test('README should include installation instructions', () => {
    expect(readmeContent).toContain('npm install');
    expect(readmeContent).toContain('pip install');
  });

  test('README structure should be markdown compliant', () => {
    const headings = readmeContent.match(/^#+\s.+/gm) || [];
    expect(headings.length).toBeGreaterThan(3);
  });
});