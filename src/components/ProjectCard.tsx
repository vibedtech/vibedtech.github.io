// src/components/ProjectCard.tsx
import {
  Box,
  VStack,
  Heading,
  Text,
  AspectRatio,
  Tag,
  Flex,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  paid?: boolean;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <LinkBox
      as="article"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      borderColor="gray.200"
      transition="all 0.2s ease-in-out"
      _hover={{
        shadow: 'md',
        transform: 'translateY(-2px)',
        borderColor: 'gray.300',
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Box
          bg="gray.50" // Background for the placeholder area
        >
          <Text fontSize="sm" color="gray.500">
            Preview Here
          </Text>
        </Box>
      </AspectRatio>

      <VStack p={4} align="start" gap={2}>
        <Heading as="h3" size="sm" color="gray.800">
          <LinkOverlay
            href={project.liveUrl || project.repoUrl}
            _hover={{ color: 'blue.600' }}
          >
            {project.title} <LuExternalLink />
          </LinkOverlay>
        </Heading>
        <Text fontSize="xs" color="gray.600" lineClamp={2}>
          {project.description}
        </Text>
        <Flex wrap="wrap" gap={1} pt={1}>
          {project.tags.slice(0, 3).map((tag) => (
            <Tag.Root size="sm" key={tag} variant="subtle" colorScheme="teal">
              {tag}
            </Tag.Root>
          ))}
        </Flex>
      </VStack>
    </LinkBox>
  );
}

export default ProjectCard;