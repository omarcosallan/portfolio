import { GetStaticProps } from 'next'
import Button from '@/components/Button'
import { api } from '@/lib/axios'
import {
  Rocket,
  ArrowSquareOut,
  MedalMilitary,
  GraduationCap,
} from '@phosphor-icons/react'

import { HomeContainer, Intro, IntroducingMyself } from '@/styles/pages/home'

import Link from 'next/link'
import IconWrapper from '@/components/IconWrapper'
import Card from '@/components/Card'

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

      <IntroducingMyself>
        <Card>
          <IconWrapper>
            <GraduationCap weight="bold" size={24} />
          </IconWrapper>

          <h2>Início</h2>

          <p>
            Em 2021, iniciei minha jornada acadêmica na UFERSA, onde me
            matriculei na Licenciatura em Computação. Durante esse período,
            explorei diversas disciplinas na área da programação, destacando-me
            em tópicos como Programação Orientada a Objetos (POO) e Java.
          </p>
        </Card>

        <Card>
          <IconWrapper>
            <MedalMilitary weight="bold" size={24} />
          </IconWrapper>

          <h2>Progresso</h2>

          <p>
            No ano seguinte, participei do programa Oracle Next Education (ONE),
            uma colaboração entre a Oracle e a Alura. Essa experiência
            enriqueceu meu conhecimento e me proporcionou uma visão mais prática
            e aplicada dos conceitos aprendidos em sala de aula.
          </p>
        </Card>

        <Card>
          <IconWrapper>
            <Rocket weight="bold" size={24} />
          </IconWrapper>

          <h2>Rocketseat</h2>

          <p>
            Minha jornada na programação ganhou novos horizontes quando descobri
            a Rocketseat. Inicialmente focado no Back-end, meu entusiasmo
            rapidamente se voltou para o universo fascinante do Front-end após
            consumir uma quantidade significativa de conteúdo fornecido pela
            plataforma.
          </p>
        </Card>
      </IntroducingMyself>
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
