import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { api } from '@/lib/axios'

import * as Tabs from '@radix-ui/react-tabs'
import Button from '@/components/Button'
import IconWrapper from '@/components/IconWrapper'
import Card from '@/components/Card'
import { Accordion } from '@/components/Accordion'

import {
  Rocket,
  ArrowSquareOut,
  GraduationCap,
  ArrowUpRight,
  Certificate,
  ClockCounterClockwise,
  Users,
  Globe,
  ArrowRight,
  ArrowDown,
  Circle,
} from '@phosphor-icons/react'

import {
  AtTheTime,
  CodeInsights,
  Content,
  DescriptionSection,
  Experiences,
  GitHubSummary,
  HomeContainer,
  Intro,
  Languages,
  Line,
  Presentation,
  Projects,
  SummaryCards,
  TabsList,
  Timeline,
  TimelineContent,
  TitleSection,
} from '@/styles/pages/home'

import blogImg from '../assets/cover.png'
import htmlLogo from '../assets/html-logo.svg'
import cssLogo from '../assets/css-logo.svg'
import jsLogo from '../assets/js-logo.svg'
import reactLogo from '../assets/react-logo.svg'
import tsLogo from '../assets/ts-logo.svg'

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
                <DescriptionSection>
                  Em 2021, dei início à minha jornada acadêmica ao ingressar na
                  Licenciatura em Computação. Foi nesse período que tive meu
                  primeiro contato significativo com o vasto mundo da
                  programação. Ao longo desse caminho acadêmico, explorei
                  diversas disciplinas, destacando-me especialmente em tópicos
                  como Programação Orientada a Objetos (POO) e Java.
                </DescriptionSection>
              </div>
            </Content>
            <Content value="tab2">
              <div>
                <strong>Explorando meu potencial</strong>
                <DescriptionSection>
                  Meu interesse crescente pelo potencial criativo da programação
                  me levou a participar ativamente do programa Oracle Next
                  Education (ONE) no ano seguinte. Essa experiência, resultado
                  da parceria entre a Oracle e a Alura, proporcionou uma visão
                  prática e aplicada dos conhecimentos teóricos adquiridos em
                  sala de aula, ampliando ainda mais minha perspectiva no
                  universo da computação.
                </DescriptionSection>
              </div>
            </Content>
            <Content value="tab3">
              <div>
                <strong>Rocketseat</strong>
                <DescriptionSection>
                  Minha jornada na programação ganhou novos horizontes quando
                  descobri a Rocketseat. Inicialmente focado no Back-end, meu
                  entusiasmo rapidamente se voltou para o universo fascinante do
                  Front-end após consumir uma quantidade significativa de
                  conteúdo fornecido pela plataforma.
                </DescriptionSection>
              </div>
            </Content>
          </Tabs.Root>
        </div>
      </Experiences>

      <GitHubSummary>
        <TitleSection>Resumo do GitHub</TitleSection>

        <div>
          <SummaryCards>
            <Card type="secondary">
              <IconWrapper>
                <ClockCounterClockwise size={24} weight="regular" />
              </IconWrapper>
              <strong>{user.createdAt}</strong>
              <DescriptionSection>
                Há mais de 1 ano na busca contínua de progresso na programação.
              </DescriptionSection>
            </Card>

            <Card type={'secondary'}>
              <IconWrapper>
                <Users size={24} weight="regular" />
              </IconWrapper>
              <strong>{user.followers} seguidores</strong>
              <DescriptionSection>
                Construindo uma comunidade de seguidores engajados.
              </DescriptionSection>
            </Card>

            <Card type={'secondary'}>
              <IconWrapper>
                <Globe size={24} weight="regular" />
              </IconWrapper>
              <strong>{user.publicRepos} repositórios</strong>
              <DescriptionSection>
                Contribuições em diversos repositórios, explorando várias
                tecnologias.
              </DescriptionSection>
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

      <Languages>
        <div>
          <TitleSection>Linguagens mais utilizadas</TitleSection>
          <DescriptionSection>
            Explore as linguagens de programação que mais utilizo em minha
            jornada, contribuindo para o desenvolvimento de projetos e
            aprimoramento contínuo das minhas habilidades técnicas.
          </DescriptionSection>

          <div>
            <IconWrapper>
              <Image src={htmlLogo} width={20} height={20} alt="HTML Logo" />
            </IconWrapper>
            <IconWrapper>
              <Image src={cssLogo} width={20} height={20} alt="HTML Logo" />
            </IconWrapper>
            <IconWrapper>
              <Image src={jsLogo} width={20} height={20} alt="HTML Logo" />
            </IconWrapper>
            <IconWrapper>
              <Image src={reactLogo} width={20} height={20} alt="HTML Logo" />
            </IconWrapper>
            <IconWrapper>
              <Image src={tsLogo} width={20} height={20} alt="HTML Logo" />
            </IconWrapper>
          </div>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1624377632657-3902bfd35958?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={640}
          height={426}
        />
      </Languages>

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

      <Timeline>
        <header>
          <TitleSection>
            Eventos e cursos que participei ao longo da minha carreira em
            programação
          </TitleSection>
          <p>
            Explore algumas etapas da minha trajetória e o que conquistei até
            agora com a programação.
          </p>
          <ArrowDown weight="bold" size={20} />
        </header>

        <TimelineContent>
          <Line />
          <div>
            <article>
              <strong>dsmeta</strong>
              <span>Professor Nélio Alves</span>
              <p>
                O projeto dsmeta foi desenvolvido durante um evento conduzido
                pelo professor Nélio Alves. Neste projeto, criei um site de
                gerenciamento com backend e frontend próprios. Foi meu primeiro
                contato com ReactJS e Typescript, com o backend sendo
                desenvolvido em Java.
              </p>
              <Circle size={16} />
            </article>

            <article>
              <strong>Imersão Java</strong>
              <span>Alura</span>
              <p>
                Ao iniciar o curso de Licenciatura em Computação e após meu
                primeiro contato com a linguagem Java, participei da Imersão
                Java, um período de 5 dias dedicados ao desenvolvimento de um
                projeto em Java.
              </p>
              <Circle size={16} />
            </article>

            <article>
              <strong>NLW #10</strong>
              <span>Rocketseat</span>
              <p>
                A NLW é um evento exclusivo e gratuito promovido pela Rocketseat
                para ensino de tecnologias web. No momento em que migrava minha
                carreira para o desenvolvimento web, o evento possibilitou
                aprimorar conhecimentos em HTML, CSS, JavaScript, Git e GitHub.
              </p>
              <Circle size={16} />
            </article>

            <article>
              <strong>chess-system-java</strong>
              <span>Professor Nélio Alves</span>
              <p>
                Desenvolvi um jogo de xadrez em Java como parte do curso de Java
                e POO do professor Nélio Alves.
              </p>
              <Circle size={16} />
            </article>

            <article>
              <strong>Oracle Next Education</strong>
              <span>Alura + Oracle</span>
              <p>
                No início do curso de Licenciatura em Computação, participei da
                Imersão Java, dedicando 5 dias ao desenvolvimento de um projeto
                em Java.
              </p>
              <Circle size={16} />
            </article>
          </div>
        </TimelineContent>
      </Timeline>
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
