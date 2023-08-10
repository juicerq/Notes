import {
  Component,
  FileText,
  Milestone,
  MonitorSmartphone,
  Workflow,
} from 'lucide-react'
import { MdOutlineAnimation } from 'react-icons/md'
import { PiHandSwipeLeft } from 'react-icons/pi'
import Feature from './MainComponents/Feature'

export default function Features() {
  return (
    <div className="section-spacing mt-3 flex flex-col items-center justify-center lg:my-16 lg:w-screen">
      <div
        id="features"
        className="lg:w-full lg:rounded-lg lg:bg-mainPalette-bgAlt lg:px-8"
      >
        <div className="w-full">
          <h3 className="w-full bg-mainPalette-bgAlt py-4 text-center font-main text-3xl uppercase text-mainPalette-bg lg:pb-6 lg:pt-12">
            Nossa Abordagem para seu{' '}
            <span className="text-mainPalette-primaryButton">
              Site de Sucesso
            </span>
          </h3>
        </div>
        <div className="relative flex w-screen snap-x snap-mandatory scroll-p-3 gap-3 overflow-auto p-3 lg:w-full lg:snap-none lg:scroll-p-0 lg:flex-wrap lg:justify-between lg:gap-0 lg:overflow-hidden lg:p-0  xl:justify-around">
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
            icon={<MdOutlineAnimation size={35} />}
            title="Animações Cativantes"
            description="Integre animações sutis e envolventes ao design do seu site para criar uma experiência visualmente atraente e dinâmica."
          />
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 self-center bg-transparent text-mainPalette-bg lg:hidden">
            <PiHandSwipeLeft size={25} />
            <p>Arraste para o lado</p>
          </div>
        </div>
        <div className="flex w-screen snap-x snap-mandatory scroll-p-3 gap-3 overflow-auto p-3 lg:w-full lg:snap-none lg:scroll-p-0 lg:flex-wrap lg:justify-between lg:gap-0 lg:overflow-hidden lg:p-0  lg:pb-12 xl:justify-around">
          <Feature
            delay={3}
            icon={<Workflow size={35} />}
            title="Integração com Redes Sociais"
            description=" Facilite o compartilhamento de conteúdo por meio de botões de redes sociais e exiba feeds ou links para suas páginas de redes sociais."
          />
          <Feature
            delay={4}
            icon={<FileText size={35} />}
            title="Formulário de Contato"
            description="Forneçeremos formulários de contato personalizados para garantir a geração de leads de acordo com suas necessidades."
          />
          <Feature
            delay={5}
            icon={<MonitorSmartphone size={35} />}
            title="Responsividade"
            description="O seu site irá se adaptar automaticamente a diferentes dispositivos e tamanhos de tela, garantindo uma experiência consistente em smartphones, tablets e desktops."
          />
        </div>
      </div>
    </div>
  )
}
