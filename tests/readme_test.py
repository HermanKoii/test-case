import os
import re

def test_readme_mcp_section():
    """Validate MCP Integration Testing section in README."""
    readme_path = 'readme.md'
    
    # Check file exists
    assert os.path.exists(readme_path), "README file does not exist"
    
    # Read README content
    with open(readme_path, 'r') as readme_file:
        content = readme_file.read()
    
    # Check for key MCP section markers
    assert "## MCP Integration Testing" in content, "MCP Integration Testing section missing"
    
    # Validate presence of key subsections
    required_subsections = [
        "### Overview",
        "### Testing Methodology",
        "### Key Testing Principles",
        "### Test Categories",
        "### Component Interaction Strategies",
        "### Test Coverage",
        "### Running Integration Tests",
        "### Best Practices",
        "### Troubleshooting",
        "### Reporting",
        "### Limitations"
    ]
    
    for subsection in required_subsections:
        assert subsection in content, f"Required subsection {subsection} is missing"
    
    # Validate content length and structure
    assert len(content) > 500, "README content seems too short"
    
    # Simplified header validation
    def validate_markdown_headers(content):
        """Check if headers follow a basic markdown structure."""
        # Find all headers
        headers = re.findall(r'^(#+)\s+(.+)$', content, re.MULTILINE)
        
        # Must have at least one header
        if not headers:
            return False
        
        # Ensure first header is top-level
        if len(headers[0][0]) != 1:
            return False
        
        # Quick check: headers have a reasonable progression
        levels = [len(h[0]) for h in headers]
        return all(0 < levels[i] <= levels[i-1] + 1 for i in range(1, len(levels)))
    
    assert validate_markdown_headers(content), "Markdown header structure is invalid"

def test_readme_readability():
    """Check README for basic readability and structure."""
    readme_path = 'readme.md'
    
    with open(readme_path, 'r') as readme_file:
        content = readme_file.read()
    
    # Check for grammatical structure and typical markdown elements
    assert re.search(r'\n## ', content), "Missing second-level markdown headers"
    assert len(re.findall(r'\n- ', content)) > 3, "Not enough list items for comprehensive documentation"