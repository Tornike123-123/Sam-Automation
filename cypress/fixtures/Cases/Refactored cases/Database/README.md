# Database Test Suite

This directory contains the refactored and standardized test cases for the Database module. All tests have been restructured to follow best practices and maintain consistency.

## 📁 File Structure

```
Database/
├── README.md                    # This documentation file
├── databaseConfig.js            # Configuration and test data
├── databaseHelpers.js           # Reusable helper functions
├── database.js                  # Filter functionality tests
└── Add and Delete Equipment.js  # Equipment management tests
```

## 🏗️ Architecture

### Configuration (`databaseConfig.js`)
- **Centralized test data**: All test credentials, URLs, and data in one place
- **Wait time constants**: Standardized wait times for better reliability
- **Setup functions**: Common test setup and navigation functions

### Page Object Model (`DatabaseElements.js`)
- **Organized selectors**: Grouped by functionality (filters, equipment actions, forms, etc.)
- **Descriptive method names**: Clear, self-documenting method names
- **Comprehensive coverage**: All UI elements properly mapped
- **JSDoc documentation**: Each method documented with purpose and usage

### Helper Functions (`databaseHelpers.js`)
- **Reusable operations**: Common database operations as reusable functions
- **Helper class**: `DatabaseHelpers` class for complex operations
- **Standalone functions**: Simple operations as standalone functions
- **Error handling**: Proper wait times and error handling

## 🧪 Test Cases

### 1. Database Filters (`database.js`)
**Purpose**: Tests filtering functionality in the database
- Tests branch filter
- Tests category filter
- Tests operator filter
- Tests order by filter
- Tests status filter
- Verifies equipment visibility after filtering

### 2. Add and Delete Equipment (`Add and Delete Equipment.js`)
**Purpose**: Tests equipment creation and deletion functionality
- Creates new equipment
- Deletes the equipment
- Cleans up test data

## 🚀 Usage

### Running Individual Tests
```bash
# Run specific test file
npx cypress run --spec "cypress/fixtures/Cases/Refactored cases/Database/database.js"

# Run all Database tests
npx cypress run --spec "cypress/fixtures/Cases/Refactored cases/Database/**/*.js"
```

### Using Helper Functions
```javascript
import { testDatabaseFilters, addAndDeleteEquipment } from './databaseHelpers.js';

// Use in your tests
testDatabaseFilters();
addAndDeleteEquipment();
```

### Using Configuration
```javascript
import { DATABASE_CONFIG, setupDatabaseTest } from './databaseConfig.js';

// Access test data
const { testData, waitTimes } = DATABASE_CONFIG;

// Use setup function
beforeEach(() => {
    setupDatabaseTest();
});
```

## 📋 Best Practices Implemented

### ✅ Code Organization
- **Separation of concerns**: Configuration, helpers, and tests separated
- **Consistent naming**: All files and functions follow naming conventions
- **Modular structure**: Reusable components and functions

### ✅ Maintainability
- **DRY principle**: No code duplication
- **Centralized configuration**: All test data in one place
- **Clear documentation**: JSDoc comments and README

### ✅ Reliability
- **Proper wait times**: Standardized wait times for stability
- **Error handling**: Proper error handling and cleanup
- **Data cleanup**: Tests clean up after themselves

### ✅ Readability
- **Descriptive names**: Clear, self-documenting code
- **Comments**: Meaningful comments where needed
- **Structure**: Logical file and function organization

## 🔧 Configuration

### Test Data
All test data is centralized in `databaseConfig.js`:
- **Credentials**: Test user credentials
- **URLs**: Application URLs
- **Test data**: Equipment names, filter values, etc.
- **Wait times**: Standardized wait times

### Environment Setup
Tests use session-based authentication for better performance and reliability.

## 📝 Notes

- All tests are designed to be independent and can run in any order
- Tests clean up after themselves to avoid test pollution
- Configuration allows easy modification of test data without code changes
- Helper functions can be reused across different test scenarios

## 🐛 Troubleshooting

### Common Issues
1. **Test failures due to timing**: Adjust wait times in configuration
2. **Element not found**: Check if selectors are still valid
3. **Authentication issues**: Verify credentials in configuration

### Debug Mode
Enable debug mode by adding `cy.debug()` in test files or using Cypress debugger.

---

**Last Updated**: December 2024  
**Maintainer**: QA Team
