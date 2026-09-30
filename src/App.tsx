import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold text-blue-700">インフラストラクチャ構築演習</p>
        <h1 className="mt-3 text-4xl font-bold">Vite Practice</h1>
        <h2 className="mt-4 text-2xl font-semibold" data-testid="deployment-text">
          GitHub Pages Update Test
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Vite + React + TypeScript + Tailwind CSSで作成したWebサイトです。
          GitHubへのpushをきっかけに、GitHub Actionsでビルドして公開します。
        </p>
        <div className="mt-6 rounded-lg bg-blue-50 p-4 text-blue-800">
          背景色・余白・角丸・文字色はTailwind CSSで指定しています。
        </div>
        <button
          type="button"
          className="mt-6 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          onClick={() => setCount((current) => current + 1)}
        >
          React動作確認: {count}
        </button>
      </section>
    </main>
  )
}

export default App
