import { useColorModeValue, Heading, Text, Flex } from '@chakra-ui/react'
import { Page } from '@/components/common'
import { ProjectCard } from '@/components/ui'
import { projects } from '@/constants/projects'

export default function Index() {
  const secondaryColor = useColorModeValue('gray.700', 'gray.400')

  return (
    <Page title="Home">
      <Flex as="section" direction="column">
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          Hi, I'm Faisal Karim
        </Heading>
        <Text color={secondaryColor}>
          I'm a software developer living in Batam, Indonesia. You’ve found my personal slice of the
          internet – everything you want to know and more is here.
        </Text>
      </Flex>
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
