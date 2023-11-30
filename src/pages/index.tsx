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
  Experiences,
  GitHubSummary,
  HomeContainer,
  Intro,
  IntroducingMyself,
  SummaryCard,
  TitleSection,
} from '@/styles/pages/home'

import Link from 'next/link'
import IconWrapper from '@/components/IconWrapper'
import Card from '@/components/Card'

interface GithubProfile {
  name: string
  bio: string
  followers: number
  htmlUrl: string
  publicRepos: number
  createdAt: string
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

        <Link href={user.htmlUrl} target="_blank">
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

      <GitHubSummary>
        <TitleSection>Resumo do GitHub</TitleSection>

        <div>
          <SummaryCard>
            <span>Seguidores</span>
            <strong>{user.followers}</strong>
          </SummaryCard>

          <SummaryCard>
            <span>Repositórios públicos</span>
            <strong>{user.publicRepos}</strong>
          </SummaryCard>

          <SummaryCard>
            <span>Usuário desde</span>
            <strong>{user.createdAt}</strong>
          </SummaryCard>
        </div>
      </GitHubSummary>

      <Experiences>
        <TitleSection>Experiências</TitleSection>

        <Card filled>
          <p>
            Em 2021, dei início à minha jornada acadêmica ao ingressar na
            Licenciatura em Computação. Foi nesse período que tive meu primeiro
            contato significativo com o vasto mundo da programação. Ao longo
            desse caminho acadêmico, explorei diversas disciplinas,
            destacando-me especialmente em tópicos como Programação Orientada a
            Objetos (POO) e Java.
          </p>

          <p>
            Meu interesse crescente pelo potencial criativo da programação me
            levou a participar ativamente do programa Oracle Next Education
            (ONE) no ano seguinte. Essa experiência, resultado da parceria entre
            a Oracle e a Alura, proporcionou uma visão prática e aplicada dos
            conhecimentos teóricos adquiridos em sala de aula, ampliando ainda
            mais minha perspectiva no universo da computação.
          </p>

          <p>
            Atualmente, meu foco principal está em me desenvolver como um
            dedicado desenvolvedor front-end. Ao explorar tecnologias amplamente
            reconhecidas globalmente, como React e Next, busco não apenas
            aprimorar minhas habilidades técnicas, mas também contribuir para
            projetos inovadores e impactantes.
          </p>
        </Card>
      </Experiences>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('users/omarcosallan')
  const data = await response.data

  const user = {
    name: data.name,
    bio: data.bio,
    followers: data.followers,
    htmlUrl: data.html_url,
    publicRepos: data.public_repos,
    createdAt: new Intl.DateTimeFormat('pt-BR', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(data.created_at)),
  }

  return {
    props: {
      user,
    },
    revalidate: 60 * 60 * 24, // 1 hour
  }
}
