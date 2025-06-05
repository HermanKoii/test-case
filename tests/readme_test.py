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
    
    # Print out headers for debugging
    headers = re.findall(r'^(#+)\s+(.+)$', content, re.MULTILINE)
    print("Headers found:")
    for header in headers:
        print(f"Level: {len(header[0])}, Text: {header[1]}")
    
    # Quick header sanity check
    header_levels = [len(header[0]) for header in headers]
    assert header_levels[0] == 1, "First header must be top level"
    assert all(0 < header_levels[i] <= header_levels[i-1] + 1 for i in range(1, len(header_levels))), "Header levels should progress reasonably"

def test_readme_readability():
    """Check README for basic readability and structure."""
    readme_path = 'readme.md'
    
    with open(readme_path, 'r') as readme_file:
        content = readme_file.read()
    
    # Check for grammatical structure and typical markdown elements
    assert re.search(r'\n## ', content), "Missing second-level markdown headers"
    assert len(re.findall(r'\n- ', content)) > 3, "Not enough list items for comprehensive documentation"