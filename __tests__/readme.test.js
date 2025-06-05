const fs = require('fs');
const path = require('path');

describe('README.md Test Documentation', () => {
  const readmePath = path.resolve(__dirname, '../readme.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf8');

  test('README should contain a test documentation section', () => {
    expect(readmeContent).toContain('Testing Overview');
  });

  test('Test documentation should be at least 3 paragraphs long', () => {
    const testSections = readmeContent.match(/### [^\n]+/g) || [];
    expect(testSections.length).toBeGreaterThanOrEqual(3);
  });

  test('README should have a clear explanation of test running', () => {
    expect(readmeContent).toMatch(/```bash\nnpm test/);
  });
});