import { GetStaticProps } from 'next'
import Button from '@/components/Button'
import { api } from '@/lib/axios'
import { ArrowSquareOut } from '@phosphor-icons/react'

import { HomeContainer, Intro } from '@/styles/pages/home'
import Link from 'next/link'

interface GithubProfile {
  name: string
  bio: string
  followers: number
  html_url: string
}

interface HomeProps {
  user: GithubProfile
}

export default function Home({ user }: HomeProps) {
  return (
    <HomeContainer>
      <Intro>
        <h1>Marcos Dev</h1>
        <p>{user.bio}</p>

        <Link href={user.html_url} target="_blank">
          <Button>
            GitHub
            <ArrowSquareOut weight="bold" />
          </Button>
        </Link>
      </Intro>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('users/omarcosallan')

  const user = await response.data

  return {
    props: {
      user,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
