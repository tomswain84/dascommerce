import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPropsContext } from 'next'
import Search from '@archive/components/search'

export async function getStaticProps(context: GetStaticPropsContext) {
  return getSearchStaticProps(context)
}

export default Search
