# Vite Practice

インフラストラクチャ構築演習: Vite + React + TypeScript + Tailwind CSS。

## Windowsでの実行

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```

開発URL: http://localhost:5173/vite-practice/

GitHub Pagesのbaseは `/vite-practice/`。
mainへのpushでGitHub Actionsが依存関係のインストール、Lint、ビルドを実行し、distをGitHub Pagesへ公開します。
公開元は Settings > Pages > Source: GitHub Actions です。

Tailwind CSSは公式のViteプラグイン `@tailwindcss/vite` とCSSの `@import "tailwindcss"` で使用しています。
画面のボタンでReactの状態更新を確認できます。
