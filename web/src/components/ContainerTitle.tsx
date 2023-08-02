interface ContainerTitleProps {
  title: string
  color: string
}

export default function ContainerTitle(props: ContainerTitleProps) {
  return (
    <div className="flex h-20 w-full flex-row items-center justify-center gap-4 md:h-20 lg:h-24 xl:h-32">
      <h1
        className={`text-center text-2xl uppercase ${props.color}  lg:text-3xl`}
      >
        {props.title}
      </h1>
    </div>
  )
}
