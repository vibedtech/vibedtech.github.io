// src/components/Header.tsx
import { Box, Flex, Heading, HStack, Image, Link } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

function Header() {
  return (
    <Box bg="blue.600" py={3} px={6} shadow="sm">
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Image src="/logo.png" alt="VibEdTech Logo" boxSize="40px" mr={3} />
          <Heading as="h1" size="md" color="white">
            VibEdTech
          </Heading>
        </Flex>
        <Flex>
          <Link
            href="https://github.com/vibedtech"
            color="blue.100"
            ml={4}
            _hover={{ color: 'white', textDecoration: 'underline' }} // Hover effect
          >
            <HStack>
              GitHub <LuExternalLink />
            </HStack>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
