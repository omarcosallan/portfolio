import { GetStaticProps } from 'next'
import Button from '@/components/Button'
import { api } from '@/lib/axios'

import * as Tabs from '@radix-ui/react-tabs'

import {
  Rocket,
  ArrowSquareOut,
  GraduationCap,
  ArrowUpRight,
  Certificate,
  GithubLogo,
  ClockCounterClockwise,
  Users,
  Globe,
  ArrowRight,
  ArrowDown,
} from '@phosphor-icons/react'

import {
  AtTheTime,
  CodeInsights,
  Content,
  Experiences,
  GitHubSummary,
  HomeContainer,
  Intro,
  Presentation,
  Projects,
  SummaryCards,
  TabsList,
  TitleSection,
} from '@/styles/pages/home'

import Link from 'next/link'
import IconWrapper from '@/components/IconWrapper'
import Card from '@/components/Card'

import Image from 'next/image'
import { Accordion } from '@/components/Accordion'

import blogImg from '../assets/cover.png'

export interface GithubProfile {
  name: string
  username: string
  avatar: string
  company: string
  bio: string
  followers: number
  htmlUrl: string
  publicRepos: number
  createdAt: string
}

interface RepositoryResponse {
  id: number
  name: string
  created_at: string
  languages: string[]
  html_url: string
}

interface Repository
  extends Omit<RepositoryResponse, 'created_at' | 'html_url'> {
  createdAt: string
  link: string
}

interface HomeProps {
  user: GithubProfile
  repos: Repository[]
}

export default function Home({ user, repos }: HomeProps) {
  return (
    <HomeContainer>
      <Presentation>
        <Intro>
          <h1>Marcos Dev, transformando paixão em código</h1>
          <p>
            Sou um apaixonado por desenvolvimento web, sempre buscando as
            melhores tecnologias para aprimorar minhas habilidades.
          </p>

          <Link href={user.htmlUrl} target="_blank">
            <Button>
              Visite meu GitHub
              <ArrowSquareOut weight="bold" size={20} />
            </Button>
          </Link>

          <ArrowDown weight="bold" size={20} />
        </Intro>
      </Presentation>

      <AtTheTime>
        <TitleSection>Foco no desenvolvimento Web</TitleSection>
        <p>
          Neste momento, estou totalmente dedicado ao aprimoramento das minhas
          habilidades como desenvolvedor front-end. Ao mergulhar profundamente
          em tecnologias amplamente reconhecidas globalmente, como React e
          Next.js, meu objetivo é não apenas elevar minhas competências
          técnicas, mas também contribuir para projetos inovadores e
          impactantes.
        </p>

        <figure>
          <Image src={user.avatar} alt="" width={56} height={56} />
          <figcaption>
            <strong>{user.name}</strong>
            <span>{user.username}</span>
          </figcaption>
        </figure>
      </AtTheTime>

      <Experiences>
        <TitleSection>Formação acadêmica</TitleSection>

        <div>
          <Tabs.Root defaultValue="tab1" orientation="vertical">
            <TabsList>
              <Tabs.Trigger value="tab1">
                <GraduationCap weight="regular" size={52} />
                <span>Início</span>
              </Tabs.Trigger>
              <Tabs.Trigger value="tab2">
                <Certificate weight="regular" size={52} />
                <span>Progresso</span>
              </Tabs.Trigger>
              <Tabs.Trigger value="tab3">
                <Rocket weight="regular" size={52} />
                <span>Rocketseat</span>
              </Tabs.Trigger>
            </TabsList>
            <Content value="tab1">
              <div>
                <strong>Primeiros passos</strong>
                <p>
                  Em 2021, dei início à minha jornada acadêmica ao ingressar na
                  Licenciatura em Computação. Foi nesse período que tive meu
                  primeiro contato significativo com o vasto mundo da
                  programação. Ao longo desse caminho acadêmico, explorei
                  diversas disciplinas, destacando-me especialmente em tópicos
                  como Programação Orientada a Objetos (POO) e Java.
                </p>
              </div>
            </Content>
            <Content value="tab2">
              <div>
                <strong>Explorando meu potencial</strong>
                <p>
                  Meu interesse crescente pelo potencial criativo da programação
                  me levou a participar ativamente do programa Oracle Next
                  Education (ONE) no ano seguinte. Essa experiência, resultado
                  da parceria entre a Oracle e a Alura, proporcionou uma visão
                  prática e aplicada dos conhecimentos teóricos adquiridos em
                  sala de aula, ampliando ainda mais minha perspectiva no
                  universo da computação.
                </p>
              </div>
            </Content>
            <Content value="tab3">
              <div>
                <strong>Rocketseat</strong>
                <p>
                  Minha jornada na programação ganhou novos horizontes quando
                  descobri a Rocketseat. Inicialmente focado no Back-end, meu
                  entusiasmo rapidamente se voltou para o universo fascinante do
                  Front-end após consumir uma quantidade significativa de
                  conteúdo fornecido pela plataforma.
                </p>
              </div>
            </Content>
          </Tabs.Root>
        </div>
      </Experiences>

      <GitHubSummary>
        <TitleSection>Resumo do GitHub</TitleSection>

        <div>
          <GithubLogo weight="regular" />
          <SummaryCards>
            <Card type="secondary">
              <IconWrapper>
                <ClockCounterClockwise size={24} weight="regular" />
              </IconWrapper>
              <strong>{user.createdAt}</strong>
              <p>
                Há mais de 1 ano na busca contínua de progresso na programação.
              </p>
            </Card>

            <Card type={'secondary'}>
              <IconWrapper>
                <Users size={24} weight="regular" />
              </IconWrapper>
              <strong>{user.followers} seguidores</strong>
              <p>Construindo uma comunidade de seguidores engajados.</p>
            </Card>

            <Card type={'secondary'}>
              <IconWrapper>
                <Globe size={24} weight="regular" />
              </IconWrapper>
              <strong>{user.publicRepos} repositórios</strong>
              <p>
                Contribuições em diversos repositórios, explorando várias
                tecnologias.
              </p>
            </Card>
          </SummaryCards>
        </div>
      </GitHubSummary>

      <Projects>
        <TitleSection>Meus projetos em destaque</TitleSection>

        <ul>
          {repos.map((repo) => {
            return (
              <Link key={repo.id} href={repo.link} target="_blank">
                <Card type="secondary">
                  <div>
                    <span>{repo.createdAt}</span>
                    <strong>
                      {repo.name}
                      <ArrowUpRight weight="bold" size={24} />
                    </strong>
                  </div>
                </Card>
              </Link>
            )
          })}
        </ul>

        <Link
          href="https://github.com/omarcosallan?tab=repositories"
          target="_blank"
        >
          <Button color="secondary">
            Mais projetos
            <ArrowRight size={24} />
          </Button>
        </Link>
      </Projects>

      <CodeInsights>
        <Card type="secondary">
          <TitleSection>
            Code insights: a jornada do meu GitHubBlog
          </TitleSection>

          <div>
            <Accordion />
            <Link href="https://github-blog-coral.vercel.app" target="_blank">
              <Image src={blogImg} alt="" width={1600} />
            </Link>
          </div>
        </Card>
      </CodeInsights>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const responseUser = await api.get('users/omarcosallan')
  const dataUser = await responseUser.data

  const responseRepos = await api.get('users/omarcosallan/repos', {
    params: {
      sort: 'created',
      direction: 'desc',
      per_page: '8',
    },
  })
  const dataRepos = await responseRepos.data

  const user = {
    name: dataUser.name,
    username: dataUser.login,
    avatar: dataUser.avatar_url,
    company: dataUser.company,
    bio: dataUser.bio,
    followers: dataUser.followers,
    htmlUrl: dataUser.html_url,
    publicRepos: dataUser.public_repos,
    createdAt: new Intl.DateTimeFormat('pt-BR', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(dataUser.created_at)),
  }

  const reposPromises = dataRepos.map(async (repo: RepositoryResponse) => {
    return {
      id: repo.id,
      name: repo.name,
      createdAt: new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
      }).format(new Date(repo.created_at)),
      link: repo.html_url,
    }
  })

  const repos = await Promise.all(reposPromises)

  return {
    props: {
      user,
      repos,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
