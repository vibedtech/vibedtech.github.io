// src/components/Header.tsx
import { Box, Flex, HStack, Image, Link } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

function Header() {
  return (
    <Box bg="rgb(244, 223, 201)" py={3} px={6} shadow="sm">
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Image src="/logo-alt.png" alt="VibEdTech Logo" boxSize="45px" mr={3} />

          <Image src="/logo-text.png" alt="VibEdTech Logo" boxSize="40px" w={155}/>
        </Flex>
        <Flex>
          <Link
            href="https://github.com/vibedtech"
            color="rgb(31, 21, 1)"
            fontSize="lg"
            fontWeight="bold"
            ml={4}
            _hover={{ color: 'rgb(155, 35, 241)', textDecoration: 'underline' }} // Hover effect
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
