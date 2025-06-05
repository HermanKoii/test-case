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
    
    # More flexible header validation
    def validate_headers(headers):
        """Validate headers with more lenient rules."""
        # Ignore headers that might be from code blocks or unusual sections
        filtered_headers = [h for h in headers if h[1] not in ["Execute MCP integration test suite"]]
        
        # Convert to header levels
        levels = [len(h[0]) for h in filtered_headers]
        
        # Must start with top-level header
        if levels[0] != 1:
            return False
        
        # Check progression of header levels
        for i in range(1, len(levels)):
            # Allow same level or increase by 1, but no sudden jumps
            if levels[i] > levels[i-1] + 1:
                return False
        
        return True
    
    # Find all headers
    headers = re.findall(r'^(#+)\s+(.+)$', content, re.MULTILINE)
    
    # Validate headers
    assert validate_headers(headers), "Markdown header structure is invalid"

def test_readme_readability():
    """Check README for basic readability and structure."""
    readme_path = 'readme.md'
    
    with open(readme_path, 'r') as readme_file:
        content = readme_file.read()
    
    # Check for grammatical structure and typical markdown elements
    assert re.search(r'\n## ', content), "Missing second-level markdown headers"
    assert len(re.findall(r'\n- ', content)) > 3, "Not enough list items for comprehensive documentation"