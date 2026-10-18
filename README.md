# nomad003.github.io

[Nomad](https://nomad003.github.io) 的公开主页。游戏后端，正在学 AI Agent。静态 HTML / CSS / JS，无构建，无统计。

视觉与 [n-workspace](https://github.com/nomad003/n-workspace) 相同：中性色、靛蓝 `#5B63D3`、字号 12/14/17/26、间距 4/8/16/24/32、明暗主题。

## 预览

```sh
python3 -m http.server 4173
```

打开 <http://127.0.0.1:4173>。`?theme=light` 或 `?theme=dark` 只影响这一次打开。页头按钮会把选择记在 `localStorage`。

## GitHub Pages

源是 **Deploy from a branch**：`main` 的 `/`。合并到 `main` 后发布到 <https://nomad003.github.io>。

`.nojekyll` 让 Pages 直接提供这些文件。[`pages.yml`](.github/workflows/pages.yml) 只检查文件是否齐全。不要把 Pages 源改成 GitHub Actions，否则不会再从 `main` 根目录发布。

拉丁字母用自带的 Inter（`fonts/inter-latin.woff2`，[OFL](fonts/OFL.txt)）。中文用系统字体。
