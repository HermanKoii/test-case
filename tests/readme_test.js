const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should have a comprehensive test documentation section', () => {
    expect(readmeContent).toContain('## Testing Philosophy and Approach');
    expect(readmeContent).toContain('### Testing Frameworks and Methodologies');
  });

  test('Test documentation should be sufficiently detailed', () => {
    const testSections = readmeContent.match(/### [^\n]+/g) || [];
    expect(testSections.length).toBeGreaterThanOrEqual(4);
  });

  test('README should have a clear explanation of test running', () => {
    expect(readmeContent).toMatch(/```bash\nnpm test/);
  });

  test('Test note should cover key testing aspects', () => {
    const requiredKeywords = [
      'unit testing', 
      'integration testing', 
      'code coverage', 
      'testing frameworks',
      'test-driven development'
    ];

    requiredKeywords.forEach(keyword => {
      expect(readmeContent.toLowerCase()).toContain(keyword);
    });
  });
});