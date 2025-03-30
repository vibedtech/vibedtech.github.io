// src/pages/LandingPage.tsx
import { Container, SimpleGrid, Heading } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import FilterBar from '../components/FilterBar';

// Define the Project type/interface
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; // For preview image/placeholder
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  paid?: boolean; // Default to false or handle appropriately
  category?: string; // e.g., 'Math', 'Language', 'Logic'
}

// Sample project data (move to a separate file later, e.g., src/data/projects.ts)
const initialProjects: Project[] = [
   { id: 'math-blaster', title: 'Math Blaster', description: 'Arithmetic challenges with falling numbers.', tags: ['Game', 'Math', 'Arithmetic'], category: 'Math' },
   { id: 'word-wizard', title: 'Word Wizard', description: 'Form words from falling letters.', tags: ['Game', 'Language', 'Spelling'], category: 'Language' },
   { id: 'geo-quest', title: 'Geo Quest', description: 'Geography quiz: countries, flags, capitals.', tags: ['Quiz', 'Geography'], category: 'Social Studies' },
   { id: 'spellbound', title: 'Spellbound', description: 'Word puzzle game with scrambled letters.', tags: ['Puzzle', 'Language', 'Spelling'], category: 'Language'},
   { id: 'shape-shifter', title: 'Shape Shifter', description: 'Recognize and match shapes and colors.', tags: ['Game', 'Early Learning', 'Shapes'], category: 'Early Learning'},
   { id: 'fraction-frenzy', title: 'Fraction Frenzy', description: 'Puzzle game centered on fractions.', tags: ['Puzzle', 'Math', 'Fractions'], category: 'Math' },
   // Add the rest of your app ideas here...
];

function LandingPage() {
  const projects = initialProjects;

  return (
    // Use default body background via theme or set explicitly like Container bg='gray.50'
    <Container maxW="container.xl" py={8}>
      <FilterBar />
      <Heading as="h2" size="lg" mb={6} color="gray.700">
        {' '}
        {/* Default dark gray */}
        Explore EdTech Apps
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default LandingPage;
