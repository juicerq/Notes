import { Atom } from 'lucide-react'
import Feature from './MainComponents/Feature'

export default function Features() {
  return (
    <div className="section-spacing flex flex-col items-center justify-center gap-20">
      <div
        id="features"
        className="flex w-screen snap-x snap-mandatory scroll-p-3 gap-3 overflow-auto p-3 md:w-full lg:snap-none lg:scroll-p-0 lg:flex-wrap lg:justify-around lg:gap-6 lg:overflow-hidden lg:rounded-lg lg:bg-mainPalette-bgAlt lg:py-12 xl:justify-around"
      >
        <Feature
          icon={<Atom size={35} />}
          title="Animações Cativantes"
          description="Integre animações sutis e envolventes ao design do seu site para criar uma experiência visualmente atraente e dinâmica."
        />
        <Feature
          icon={<Atom size={35} />}
          title="Design Atrativo & Intuitivo"
          description="Um design visualmente atraente e uma navegação intuitiva facilitam a interação do usuário com o site e tornam a experiência mais agradável."
        />
        <Feature
          icon={<Atom size={35} />}
          title="Navegação Clara"
          description="Uma estrutura de menu clara e uma hierarquia de páginas bem definida ajudam os usuários a encontrar facilmente o que estão procurando."
        />
        <Feature
          icon={<Atom size={35} />}
          title="Integração com Redes Sociais"
          description=" Facilite o compartilhamento de conteúdo por meio de botões de redes sociais e exiba feeds ou links para suas páginas de redes sociais."
        />
        <Feature
          icon={<Atom size={35} />}
          title="Formulário de Contato"
          description="Forneça formulários de contato, chat ao vivo ou outras opções de interação para que os usuários possam se comunicar diretamente com você."
        />
        <Feature
          icon={<Atom size={35} />}
          title="Responsividade"
          description="O site deve se adaptar automaticamente a diferentes dispositivos e tamanhos de tela, garantindo uma experiência consistente em smartphones, tablets e desktops."
        />
      </div>
    </div>
  )
}
