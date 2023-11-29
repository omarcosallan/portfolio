import { GetStaticProps } from 'next'
import Button from '@/components/Button'
import { api } from '@/lib/axios'
import {
  Rocket,
  ArrowSquareOut,
  MedalMilitary,
  GraduationCap,
} from '@phosphor-icons/react'

import {
  AboutMe,
  Card,
  HomeContainer,
  IconWrraper,
  Intro,
} from '@/styles/pages/home'

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

      <AboutMe>
        <Card>
          <IconWrraper>
            <GraduationCap weight="bold" size={24} />
          </IconWrraper>

          <h2>Início</h2>

          <p>
            Em 2021, inicie a Licenciatura em COmputação na UFERSA. Cursei
            diversas disciplinas na area da programação, incluindo POO e Java.
          </p>
        </Card>

        <Card>
          <IconWrraper>
            <MedalMilitary weight="bold" size={24} />
          </IconWrraper>

          <h2>Progresso</h2>

          <p>
            No ano seguinte, participei do programa Oracle Next Education (ONE),
            parceria Oracle e Alura.
          </p>
        </Card>

        <Card>
          <IconWrraper>
            <Rocket weight="bold" size={24} />
          </IconWrraper>

          <h2>Rocketseat</h2>

          <p>
            Iniciei no Back-end, mas me apaixonei pela programação Front-end
            depois de consumir muito conteúdo da Rocket.
          </p>
        </Card>
      </AboutMe>
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
    revalidate: 60 * 60 * 24, // 1 hour
  }
}
