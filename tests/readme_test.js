const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  test('README should have a comprehensive test note section', () => {
    expect(readmeContent).toContain('## Testing Strategy');
    expect(readmeContent).toContain('### Test Coverage and Approach');
  });

  test('Test note should be sufficiently detailed', () => {
    const testNoteLines = readmeContent.split('\n')
      .filter(line => line.includes('Testing') || line.includes('Test'));
    
    expect(testNoteLines.length).toBeGreaterThan(5);
  });

  test('Test note should cover key testing aspects', () => {
    const requiredKeywords = [
      'unit testing', 
      'integration testing', 
      'code coverage', 
      'testing frameworks'
    ];

    requiredKeywords.forEach(keyword => {
      expect(readmeContent.toLowerCase()).toContain(keyword);
    });
  });
});