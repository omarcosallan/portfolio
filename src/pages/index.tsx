import { GetStaticProps } from 'next'
import Button from '@/components/Button'
import { api } from '@/lib/axios'
import {
  Rocket,
  ArrowSquareOut,
  MedalMilitary,
  GraduationCap,
  Users,
  Globe,
  ClockCounterClockwise,
  ArrowUpRight,
} from '@phosphor-icons/react'

import {
  CodeInsights,
  Experiences,
  GitHubSummary,
  HomeContainer,
  Intro,
  IntroducingMyself,
  Presentation,
  Projects,
  SummaryCard,
  Tags,
  TitleSection,
} from '@/styles/pages/home'

import Link from 'next/link'
import IconWrapper from '@/components/IconWrapper'
import Card from '@/components/Card'

import blogImg from '../assets/blog.png'
import Image from 'next/image'

interface GithubProfile {
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
          <h1>Bem vindo à Marcos Dev</h1>
          {/* <p>{user.bio.substring(0, user.bio.indexOf(' #'))}</p> */}
          <p>
            Apaixonado por desenvolvimento web, sempre buscando as melhores
            tecnologias para aprimorar minhas habilidades. Atualmente, estou
            mergulhado no universo da programação enquanto curso Licenciatura em
            Computação na UFERSA e consumo o conteúdo disponível na internet e
            nos livros
          </p>

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
              explorei diversas disciplinas na área da programação,
              destacando-me em tópicos como Programação Orientada a Objetos
              (POO) e Java.
            </p>
          </Card>

          <Card>
            <IconWrapper>
              <MedalMilitary weight="bold" size={24} />
            </IconWrapper>

            <h2>Progresso</h2>

            <p>
              No ano seguinte, participei do programa Oracle Next Education
              (ONE), uma colaboração entre a Oracle e a Alura. Essa experiência
              enriqueceu meu conhecimento e me proporcionou uma visão mais
              prática e aplicada dos conceitos aprendidos em sala de aula.
            </p>
          </Card>

          <Card>
            <IconWrapper>
              <Rocket weight="bold" size={24} />
            </IconWrapper>

            <h2>Rocketseat</h2>

            <p>
              Minha jornada na programação ganhou novos horizontes quando
              descobri a Rocketseat. Inicialmente focado no Back-end, meu
              entusiasmo rapidamente se voltou para o universo fascinante do
              Front-end após consumir uma quantidade significativa de conteúdo
              fornecido pela plataforma.
            </p>
          </Card>
        </IntroducingMyself>
      </Presentation>

      <GitHubSummary>
        <TitleSection>Resumo do GitHub</TitleSection>

        <div>
          <SummaryCard>
            <IconWrapper>
              <ClockCounterClockwise weight="bold" size={24} />
            </IconWrapper>
            <div>
              <span>Usuário desde</span>
              <strong>{user.createdAt}</strong>
            </div>
          </SummaryCard>

          <SummaryCard>
            <IconWrapper>
              <Users weight="bold" size={24} />
            </IconWrapper>
            <div>
              <span>Seguidores</span>
              <strong>{user.followers}</strong>
            </div>
          </SummaryCard>

          <SummaryCard>
            <IconWrapper>
              <Globe weight="bold" size={24} />
            </IconWrapper>
            <div>
              <span>Repositórios públicos</span>
              <strong>{user.publicRepos}</strong>
            </div>
          </SummaryCard>
        </div>

        <figcaption>
          <Image src={user.avatar} width={56} height={56} alt="" />
          <div>
            <strong>{user.name}</strong>
            <span>{user.username}</span>
          </div>
        </figcaption>
      </GitHubSummary>

      <Experiences>
        <TitleSection>Experiências</TitleSection>

        <div>
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
        </div>
      </Experiences>

      <Projects>
        <TitleSection>Projetos</TitleSection>

        <ul>
          {repos.map((repo) => {
            return (
              <Link key={repo.id} href={repo.link} target="_blank">
                <Card>
                  <div>
                    <span>{repo.createdAt}</span>
                    <strong>
                      {repo.name}
                      <ArrowUpRight weight="bold" size={24} />
                    </strong>
                  </div>
                  <Tags>
                    {repo.languages &&
                      repo.languages.map((language) => {
                        return <p key={language}>{language}</p>
                      })}
                  </Tags>
                </Card>
              </Link>
            )
          })}
        </ul>

        <Button color="transparent">
          <Link
            href="https://github.com/omarcosallan?tab=repositories"
            target="_blank"
          >
            Mais projetos
          </Link>
        </Button>
      </Projects>

      <CodeInsights>
        <TitleSection>Code Insights: a jornada do meu GitHubBlog</TitleSection>

        <div>
          <div>
            <div>
              <span>Desenvolvimento Web</span>
              <p>
                Trabalhando com o ReactJS para desenvolver uma aplicação Web.
              </p>
            </div>
            <div>
              <span>Fundamentos</span>
              <p>
                Fundamentos da programação web com React, utilizando hooks,
                contextos, estados e diversos outros conceitos.
              </p>
            </div>
            <div>
              <span>Consumo de API</span>
              <p>Construindo um blog interativo integrado a API do GitHub.</p>
            </div>
          </div>
          <Image src={blogImg} alt="" width={533} />
        </div>

        <Link href="https://github-blog-coral.vercel.app" target="_blank">
          <Button color="transparent">
            Visitar blog
            <ArrowUpRight weight="bold" />
          </Button>
        </Link>
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
    const responseLanguages = await api.get(
      `repos/omarcosallan/${repo.name}/languages`,
    )
    const languages = Object.keys(responseLanguages.data)

    return {
      id: repo.id,
      name: repo.name,
      createdAt: new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
      }).format(new Date(repo.created_at)),
      languages,
      link: repo.html_url,
    }
  })

  const repos = await Promise.all(reposPromises)

  // const user = {
  //   name: 'Marcos Allan',
  //   username: 'omarcosallan',
  //   bio: 'Desenvolvedor em formação. Cursando Licenciatura em Computação pela UFERSA. Apaixonado por computação. #HTML #CSS #JavaScript #React',
  //   followers: 20,
  //   htmlUrl: '',
  //   publicRepos: 30,
  //   createdAt: new Intl.DateTimeFormat('pt-BR', {
  //     month: 'long',
  //     year: 'numeric',
  //   }).format(new Date('2023-11-28T21:13:23Z')),
  // }

  // const repos = [
  //   {
  //     id: 724816159,
  //     name: 'portfolio',
  //     createdAt: new Intl.DateTimeFormat('pt-BR', {
  //       month: 'long',
  //       year: 'numeric',
  //     }).format(new Date('2023-11-28T21:13:23Z')),
  //     language: 'Typescript',
  //     link: 'https://github.com/omarcosallan/portfolio',
  //   },
  //   {
  //     id: 724221556,
  //     name: 'ignite-shop',
  //     createdAt: new Intl.DateTimeFormat('pt-BR', {
  //       month: 'long',
  //       year: 'numeric',
  //     }).format(new Date('2023-11-28T21:13:23Z')),
  //     language: 'Typescript',
  //     link: 'https://github.com/omarcosallan/portfolio',
  //   },
  //   {
  //     id: 724221556,
  //     name: 'ignite-shop',
  //     createdAt: new Intl.DateTimeFormat('pt-BR', {
  //       month: 'long',
  //       year: 'numeric',
  //     }).format(new Date('2023-11-28T21:13:23Z')),
  //     language: 'Typescript',
  //     link: 'https://github.com/omarcosallan/portfolio',
  //   },
  //   {
  //     id: 724221556,
  //     name: 'ignite-shop',
  //     createdAt: new Intl.DateTimeFormat('pt-BR', {
  //       month: 'long',
  //       year: 'numeric',
  //     }).format(new Date('2023-11-28T21:13:23Z')),
  //     language: 'Typescript',
  //     link: 'https://github.com/omarcosallan/portfolio',
  //   },
  // ]

  return {
    props: {
      user,
      repos,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
