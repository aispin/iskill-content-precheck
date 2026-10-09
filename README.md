# iskill-content-precheck

当用户要在发布短视频文案/口播稿前做最后检查，问「这篇能不能发」「检查违禁词」「敏感词筛查」「评估爆款潜力」时使用。触发词：内容预检、发布前检查、违禁词、敏感词、爆款评估。输入任意文案（通常为 iskill-copy-deslop 产出的 v2 稿），输出预检报告：违禁词清单 + 四维评分 + 修改建议 + 放行结论。

完整用法见 [SKILL.md](SKILL.md)。

> 依赖同步：本仓库含 iskill 共享真源的 vendored 副本（清单见 `package.json` 的 `iskillDeps`），**不要手改**。使用前请同时安装 iskill-dep-sync：对 agent 说「请帮我安装 Skill：aispin/iskill-dep-sync」；用法见 SKILL.md「依赖同步」节。
