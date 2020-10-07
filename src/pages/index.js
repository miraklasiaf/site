import { useColorModeValue, Heading, Text, Flex, Stack } from '@chakra-ui/core'
import Layout from '@/components/layout'
import ProjectCard from '@/components/project-card'
import { projects } from '@/_data/projects'

export default function IndexPage() {
  const secondaryColor = useColorModeValue('gray.700', 'gray.400')

  return (
    <Layout>
      <Stack spacing={16} mx="auto" maxWidth="2xl">
        <Flex direction="column">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hi, I'm Faisal Karim
          </Heading>
          <Text color={secondaryColor}>
            I'm a software developer living in Batam, Indonesia. You’ve found my personal slice of
            the internet – everything you want to know and more is here.
          </Text>
        </Flex>
        <Flex direction="column">
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
            Projects
          </Heading>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              href={project.href}
              icon={project.icon}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </Flex>
      </Stack>
    </Layout>
  )
}
