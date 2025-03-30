// src/components/FilterBar.tsx
import { Box, Flex, Text } from '@chakra-ui/react';
// Removed css import

function FilterBar() {
  return (
    <Box mb={6} p={4} bg="gray.100" borderRadius="md">
      {' '}
      {/* Default light gray */}
      <Flex justify="space-between" align="center">
        <Text fontWeight="medium" color="gray.600">
          {' '}
          {/* Default medium gray */}
          Filters & Sorting (Coming Soon!)
        </Text>
        {/* Add Selects, Inputs, Buttons here later */}
      </Flex>
    </Box>
  );
}

export default FilterBar;
