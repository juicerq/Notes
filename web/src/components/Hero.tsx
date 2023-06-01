export default function Hero() {
  const highlight = 'text-mainPalette-accent uppercase'

  return (
    <main className="text-center font-alt font-bold h-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center w-full gap-6 md:w-2/3 px-4">
        <h1 className="text-zinc-300 text-5xl">
          Welcome to{' '}
          <span className="text-mainPalette-primaryButton"> WebCraft</span>{' '}
          <br /> showcase website
        </h1>
        <p className="text-mainPalette-text text-lg leading-relaxed w-2/3 ">
          With a deep understanding of your unique needs, I&apos;ll create a{' '}
          <span className={highlight}>website</span> that reflects the essence
          of your <span className={highlight}>brand</span>, whether you&apos;re
          a company, restaurant, or artist. Together, we&apos;ll embark on a
          collaborative journey, where your vision meets my expertise, resulting
          in a captivating <span className={highlight}>online presence</span>{' '}
          that resonates with your audience. From elegant designs to seamless
          functionality, I&apos;ll ensure your{' '}
          <span className={highlight}>website</span> leaves a lasting impression
          while staying true to your identity. Let&apos;s work together to bring
          your digital aspirations to life and unlock the potential for{' '}
          <span className={highlight}>success</span> in the vast online realm.
        </p>
      </div>
    </main>
  )
}
