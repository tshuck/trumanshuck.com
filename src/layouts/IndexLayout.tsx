import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'

import { Heading, Box, Flex } from 'rebass'
import { Container } from '../components'

const Content: React.FC = ({children}) => <Flex
  sx={{
    maxWidth: 800,
    mx: 'auto',
    px: 3,
  }}
  color="foreground"
  bg="selection"
  flexDirection="column"
  width="100%"
>
  {children}
</Flex>

const MainLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: GraphQL.data) => (
      <Box bg='background'>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'truman, software, poems, oranges' }
          ]}
        />
        <Content>
          <Heading color='accent' width="100%" p={2}>
              {data.site.siteMetadata.title}
          </Heading>

          {children}
        </Content>
      </Box>
    )}
  />
)

export default MainLayout
