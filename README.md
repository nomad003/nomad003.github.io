# nomad003.github.io

陈垚的公开主页，地址是 [https://nomad003.github.io](https://nomad003.github.io)。

视觉与 [n-workspace](https://github.com/nomad003/n-workspace) 同一套设计：中性色、靛蓝 `#5B63D3`、字号 12/14/17/26、间距 4/8/16/24/32、圆角与阴影、Inter 与中文系统字体、明暗主题。页面是静态 HTML / CSS / JS，没有构建步骤，也没有统计脚本。

## 本地预览

```sh
python3 -m http.server 4173
```

打开 <http://127.0.0.1:4173>。主题跟随系统，页头按钮会把选择记在本机 `localStorage`。预览时可以在地址后加 `?theme=light` 或 `?theme=dark`，这个参数只影响当次打开，不会写入 `localStorage`。

## GitHub Pages

仓库 `nomad003.github.io` 的 Pages 源是 **Deploy from a branch**：分支 `main`，目录 `/`（仓库根）。合并到 `main` 之后，GitHub 会把根目录发布到 <https://nomad003.github.io>。

根目录的 `.nojekyll` 让 Pages 按原样提供这些静态文件，不经过 Jekyll。

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) 在推送到 `main` 和 pull request 上检查首页文件是否齐全，并确认页面没有外链脚本或邮箱。发布本身由上面的分支源完成，不依赖这个检查。不要把 Pages 源改成 GitHub Actions，除非同时换成会上传站点产物的 workflow；当前配置下，改成 Actions 会停止从 `main` 根目录自动发布。

## 内容

只写公开信息：姓名、上海、GitHub 账号，以及公开仓库 [n-workspace](https://github.com/nomad003/n-workspace)、[pi-analysis](https://github.com/nomad003/pi-analysis) 和本站。不放邮箱、电话、公司、账号清单或私人仓库里的内容。

## 字体

拉丁字母使用自托管的 Inter 可变字体（`fonts/inter-latin.woff2`，[SIL Open Font License](fonts/OFL.txt)）。中文使用访客机器上的 PingFang SC、Microsoft YaHei、Noto Sans CJK SC 或 Source Han Sans SC。
