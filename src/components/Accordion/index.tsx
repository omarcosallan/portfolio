import { CaretDown } from '@phosphor-icons/react'
import {
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Content,
  ContentText,
} from './styles'

export function Accordion() {
  return (
    <AccordionRoot type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span>Desenvolvimento WEB</span>
          <CaretDown />
        </AccordionTrigger>

        <Content>
          <ContentText>
            Trabalhando com o ReactJS para desenvolver uma aplicação WEB
            atrativa e intuitiva.
          </ContentText>
        </Content>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          <span>Fundamentos</span>
          <CaretDown />
        </AccordionTrigger>

        <Content>
          <ContentText>
            Aplicando a utilização de hooks, contextos, estados e diversos
            outros conceitos do ReactJS para o desenvolvimento WEB.
          </ContentText>
        </Content>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          <span>Consumo de API</span>
          <CaretDown />
        </AccordionTrigger>

        <Content>
          <ContentText>
            Construi um blog interativo totalmente integrado a API do GitHub.
          </ContentText>
        </Content>
      </AccordionItem>
    </AccordionRoot>
  )
}
