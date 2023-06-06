export default function Hero() {
  return (
    <main className="flex h-full flex-col items-center justify-center text-center font-alt font-bold">
      <div className="w-full items-center gap-6 px-4">
        <div className="flex flex-col items-center gap-5">
          <h1 className="w-full text-7xl text-zinc-300">
            Welcome to
            <span className="text-mainPalette-primaryButton">
              {' '}
              WebCraft
            </span>{' '}
            showcase website
          </h1>
          <p className="w-1/2 text-lg leading-relaxed text-mainPalette-text ">
            With a deep understanding of your unique needs, I&apos;ll create a{' '}
            <span className="highlight">website</span> that reflects the essence
            of your <span className="highlight">brand</span>, whether
            you&apos;re a company, restaurant, or artist. Together, we&apos;ll
            embark on a collaborative journey, where your vision meets my
            expertise, resulting in a captivating{' '}
          </p>
        </div>
      </div>
    </main>
  )
}
