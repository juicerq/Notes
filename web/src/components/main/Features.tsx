import {
  Component,
  FileText,
  Milestone,
  MonitorSmartphone,
  Workflow,
} from 'lucide-react'
import { MdOutlineAnimation } from 'react-icons/md'
import { PiHandSwipeLeft } from 'react-icons/pi'

import Feature from './mainComponents/Feature'

export default function Features() {
  return (
    <div
      id="features"
      className="section-spacing flex flex-col items-center justify-center bg-mainPalette-bgAlt 2xl:py-36"
    >
      <div className="flex flex-col items-center justify-center lg:w-full">
        <div className="w-full">
          <h3 className="bg-mainPalette-bgAlt px-4 py-8 text-center font-main text-3xl text-mainPalette-bg md:py-16 lg:pb-24 lg:pt-0">
            Nossa abordagem para seu{' '}
            <span className="text-mainPalette-primaryButton">
              site de sucesso
            </span>
          </h3>
        </div>
        <div className="flex h-full flex-col lg:gap-8">
          <div className="relative flex w-screen snap-x snap-mandatory scroll-p-3 gap-8 overflow-auto overflow-y-hidden p-3 lg:w-full lg:snap-none lg:scroll-p-0 lg:flex-wrap lg:overflow-hidden lg:p-0">
            <Feature
              icon={<Component size={35} />}
              delay={0}
              title="Design Atrativo & Intuitivo"
              description="Um design visualmente atraente e uma navegação intuitiva facilitam a interação do usuário com o site e tornam a experiência mais agradável."
            />
            <Feature
              delay={1}
              icon={<Milestone size={35} />}
              title="Navegação Clara"
              description="Uma estrutura de menu clara e uma hierarquia de páginas bem definida ajudam os usuários a encontrar facilmente o que estão procurando."
            />
            <Feature
              delay={2}
              icon={<MonitorSmartphone size={35} />}
              title="Responsividade"
              description="O seu site irá se adaptar automaticamente a diferentes dispositivos e tamanhos de tela, garantindo uma experiência consistente em smartphones, tablets e desktops."
            />
          </div>
          <div className="flex w-full justify-center bg-transparent p-4 text-mainPalette-bg lg:hidden">
            <PiHandSwipeLeft size={25} />
            <p>Arraste para o lado</p>
          </div>
          <div className="flex w-screen snap-x snap-mandatory scroll-p-3 gap-8 overflow-auto overflow-y-hidden p-3 lg:w-full lg:snap-none lg:scroll-p-0 lg:flex-wrap lg:overflow-hidden lg:p-0  lg:pb-12">
            <Feature
              delay={3}
              icon={<Workflow size={35} />}
              title="Integração com Redes Sociais"
              description=" Facilite o compartilhamento de conteúdo por meio de botões de redes sociais e exiba feeds ou links para suas páginas de redes sociais."
            />
            <Feature
              delay={4}
              icon={<MdOutlineAnimation size={35} />}
              title="Animações Cativantes"
              description="Integre animações sutis e envolventes ao design do seu site para criar uma experiência visualmente atraente e dinâmica."
            />
            <Feature
              delay={5}
              icon={<FileText size={35} />}
              title="Formulário de Contato"
              description="Forneçeremos formulários de contato personalizados para garantir a geração de leads de acordo com suas necessidades."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
