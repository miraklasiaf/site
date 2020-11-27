import { useColorModeValue, Heading, Text, Flex, Stack } from '@chakra-ui/react'
import { Page } from '@/components/common'
import { ProjectCard } from '@/components/ui'
import { projects } from '@/constants/projects'

export default function Index() {
  const secondaryColor = useColorModeValue('gray.700', 'gray.400')

  return (
    <Page title="Home">
      <Stack as="section" direction="column" spacing={4}>
        <Heading letterSpacing="tight" as="h1" size="2xl">
          Hi, I'm Faisal Karim
        </Heading>
        <Text color={secondaryColor}>
          I'm a software developer living in Batam, Indonesia. You’ve found my personal slice of the
          internet – everything you want to know and more is here.
        </Text>
      </Stack>
      <Flex as="section" direction="column" mt={8}>
        <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
          Projects
        </Heading>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            icon={project.icon}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </Flex>
    </Page>
  )
}
