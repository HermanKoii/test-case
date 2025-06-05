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
    
    # Check for markdown formatting with very lenient rules
    def check_markdown_headers(content):
        # Use regex to find all headers
        headers = re.findall(r'^(#+)\s+(.+)$', content, re.MULTILINE)
        
        # Must have at least one header
        if not headers:
            return False
        
        # Extract header text and levels
        header_data = [(len(header[0]), header[1]) for header in headers]
        
        # Validate basic header structure
        try:
            # First header should be top level
            assert header_data[0][0] == 1, "First header must be top level"
            
            # Ensure headers are in a somewhat reasonable order
            prev_level = header_data[0][0]
            for level, _ in header_data[1:]:
                # Allow level to be the same or increase by at most 1
                assert level <= prev_level + 1, "Header levels should not increase too quickly"
                prev_level = level
            
            return True
        except AssertionError:
            return False
    
    assert check_markdown_headers(content), "Markdown header structure is invalid"

def test_readme_readability():
    """Check README for basic readability and structure."""
    readme_path = 'readme.md'
    
    with open(readme_path, 'r') as readme_file:
        content = readme_file.read()
    
    # Check for grammatical structure and typical markdown elements
    assert re.search(r'\n## ', content), "Missing second-level markdown headers"
    assert len(re.findall(r'\n- ', content)) > 3, "Not enough list items for comprehensive documentation"