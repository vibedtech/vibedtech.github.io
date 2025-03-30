// src/components/FilterBar.tsx
import { Box, Flex, Text } from '@chakra-ui/react';

function FilterBar() {
  return (
    <Box mb={6} p={4} bg="gray.100" borderRadius="md">
      <Flex justify="space-between" align="center">
        <Text fontWeight="medium" color="gray.600">
          Filters & Sorting (Coming Soon!)
        </Text>
      </Flex>
    </Box>
  );
}

export default FilterBar;
