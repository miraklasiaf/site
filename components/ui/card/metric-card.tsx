import { Text, Flex, Box, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function MetricCard({ header, link, metric }) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" minWidth="xs">
      <Link href={link} isExternal>
        <Flex align="center">
          {header}
          <ExternalLinkIcon mx={2} />
        </Flex>
      </Link>
      <Text mt={2} fontSize="3xl" fontWeight="bold" lineHeight="short">
        {metric || '-'}
      </Text>
    </Box>
  )
}
