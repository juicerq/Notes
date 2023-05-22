import Link from 'next/link'

export default function Login() {
  return (
    <>
      <form
        action=""
        className="flex relative flex-col gap-4 items-center justify-center m-12"
      >
        <h2 className="text-3xl font-bold text-zinc-300 text-center">
          Sign in
        </h2>
        <label className="" htmlFor="email"></label>
        <input
          className="p-2 w-[240px] rounded bg-zinc-700"
          type="text"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="password" />
        <input
          className="p-2 w-[240px] rounded bg-zinc-700"
          type="text"
          name="password"
          placeholder="Password"
        />
        <div className="flex w-[240px] justify-between items-center mt-3">
          <Link
            className="text-zinc-400 underline hover:text-zinc-300 transition-colors"
            href={'/user/signup'}
          >
            Sign up
          </Link>
          <button
            className="rounded hover:bg-zinc-500 transition-colors text-white text-sm bg-zinc-800 py-1 px-6 border uppercase leading-relaxed"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  )
}
