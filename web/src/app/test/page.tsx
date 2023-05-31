'use client'

import { NewNoteForm } from '@/components/NewNoteForm'
import Resume from '@/components/Resume'

import { CloudMoonRain, Plus } from 'lucide-react'
import { useState } from 'react'

export default function Test() {
  const [active, setActive] = useState('resume')
  // const resume =
  //   'Como parte do meu negócio, é fundamental para mim que os visitantes possam facilmente entrar em contato comigo e enviar consultas, sugestões ou solicitações por meio de um formulário de contato eficiente e intuitivo.Sendo assim, meu pedido é que você crie um formulário de contato atraente e funcional, que inclua campos para nome, endereço de e-mail e mensagem. Além disso, seria ótimo se o formulário pudesse ser integrado a uma ferramenta de gerenciamento de e-mails, para que eu possa acompanhar e responder prontamente a todas as comunicações recebidas.Tenho plena confiança em sua capacidade de implementar essa solicitação com sucesso, levando em consideração as melhores práticas de design e usabilidade. Se você tiver alguma dúvida ou precisar de mais informações, estou à disposição para discutir detalhes adicionais.Agradeço antecipadamente pelo seu comprometimento contínuo em tornar meu site uma plataforma eficaz para minha empresa. Estou ansioso para ver essa nova adição e tenho certeza de que ajudará a melhorar significativamente a interação dos usuários.Atenciosamente,'
  function renderComponent() {
    switch (active) {
      case 'resume':
        return <Resume />
      case 'newNote':
        return <NewNoteForm />
    }
  }

  return (
    <div className="w-[1200px] h-full mt-40 flex relative justify-between bg-zinc-900 rounded-lg">
      <div className="flex flex-col w-96 space-y-4 h-full m-6">
        {/* Forms */}
        <div className="border-pallete-accent justify-center items-center border-2 bg-pallete-bg rounded-sm">
          {renderComponent()}
        </div>
        {/* Etiquetas */}
        <div className="absolute font-sans -left-32 flex space-y-6 flex-col">
          <div
            onClick={() => setActive('resume')}
            className={`text-pallete-text cursor-pointer rounded-sm w-[154px] border-pallete-accent justify-center items-center py-1 px-3 gap-1 flex border-2 ${
              active === 'resume'
                ? 'bg-pallete-bg border-r-0'
                : 'bg-zinc-900 text-pallete-extra'
            }`}
          >
            <span className="uppercase">Resumo</span>
          </div>
          <div
            onClick={() => setActive('colors')}
            className={`text-pallete-text cursor-pointer w-[154px] border-pallete-accent justify-center  items-center py-1 px-3 gap-1 flex border-2 bg-pallete-bg rounded-sm ${
              active === 'colors'
                ? 'bg-pallete-bg border-r-0'
                : 'bg-zinc-900 text-pallete-extra'
            }`}
          >
            <CloudMoonRain className="w-5 h-5 text-pallete-primaryButton" />
            <span className="uppercase">Cores</span>
          </div>
          <div
            onClick={() => setActive('newNote')}
            className={`text-pallete-text cursor-pointer w-[154px] border-pallete-accent justify-center  items-center py-1 px-3 gap-1 flex border-2 bg-pallete-bg rounded-sm ${
              active === 'newNote'
                ? 'bg-pallete-bg border-r-0'
                : 'bg-zinc-900 text-pallete-extra'
            }`}
          >
            <Plus className="w-5 h-5 text-pallete-primaryButton" />
            <span className="uppercase">Nota</span>
          </div>
        </div>
      </div>
      <div className="m-6 flex flex-1 justify-center items-start flex-wrap gap-8">
        <div className="flex flex-col w-[640px] h-[512px] border-2 border-pallete-accent">
          <div>Navbar</div>
          <div>Conteúdo</div>
        </div>

        {/* Note: */}

        {/* <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="relative w-[300px] border border-pallete-darkgold rounded bg-gray-900"
        >
          <div className="text-pallete-text p-6 flex flex-col items-center gap-4 ">
            <h1 className="text-xl font-bold text-zinc-300">
              Adicionar contato
            </h1>
            <p className="text-sm indent-4 leading-relaxed">
              {resume.substring(0, 115).concat('...')}
            </p>
            <p className="text-xs">21 de Maio de 2023</p>
          </div>
          <button
            onClick={() => {}}
            className="text-red-500 absolute right-2 bottom-2 z-10"
          >
            <Trash2 />
          </button>
        </motion.div> */}
      </div>
    </div>
  )
}
