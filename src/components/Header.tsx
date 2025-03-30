// src/components/Header.tsx
import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';
// Removed css import

function Header() {
  return (
    // Use Chakra props for styling
    <Box bg="blue.600" py={3} px={6} shadow="sm">
      {' '}
      {/* Example: Using default blue */}
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Image src="/logo.png" alt="VibEdTech Logo" boxSize="40px" mr={3} />
          <Heading as="h1" size="md" color="white">
            {' '}
            {/* Use default white */}
            VibEdTech
          </Heading>
        </Flex>
        <Flex>
          <Link
            href="https://github.com/vibedtech"
            color="blue.100" // Lighter blue for contrast
            ml={4}
            _hover={{ color: 'white', textDecoration: 'underline' }} // Hover effect
          >
            GitHub <LuExternalLink />
          </Link>
          {/* Add other links similarly */}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
