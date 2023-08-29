import PageTransition from '@/components/general/PageTransition'
import Footer from '@/components/main/Footer'

export default function Team() {
  return (
    <PageTransition>
      <div className="">
        <div className="flex-center relative h-[500px] text-5xl">
          <div className="flex-center absolute top-1/2 -translate-y-1/2 flex-col gap-2 pt-16 text-center">
            <h4 className="font-main text-7xl text-mainPalette-text">
              Sobre Nós
            </h4>

            <p className="text-lg text-zinc-500">
              Conheça um pouco da equipe por trás do WebKraft
            </p>
          </div>
        </div>

        <div className="section-spacing  bg-mainPalette-bgAlt">
          <div className="flex flex-col gap-6 pt-16 lg:flex-row lg:items-center lg:justify-center lg:gap-36">
            <div className="flex flex-col gap-6 lg:w-1/3">
              <h2 className="text-5xl text-mainPalette-primaryButton">
                História
              </h2>

              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pulvinar justo at ex congue, in sodales libero interdum. Nullam
                ac orci vel erat vehicula cursus. In hac habitasse platea
                dictumst. Sed efficitur, ligula ac lacinia feugiat, tortor erat
                fermentum est, sit amet aliquam mi purus et ante.
              </p>
            </div>

            <div className="md:h-[350px] lg:h-[350px] lg:w-[350px]">
              <img
                src="https://source.unsplash.com/random/?woman-profile"
                alt="img"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="section-spacing flex-center flex-col gap-16">
            <h1 className="pt-16 font-main text-5xl text-mainPalette-text">
              Membros
            </h1>

            <div className="flex w-full flex-col justify-evenly lg:flex-row">
              <div className="h-[400px] w-[300px]">
                <img
                  src="https://source.unsplash.com/random/?man-profile"
                  alt="img"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>

              <div className="h-[400px] w-[300px]">
                <img
                  src="https://source.unsplash.com/random/?man-profile-2"
                  alt="img"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  )
}
