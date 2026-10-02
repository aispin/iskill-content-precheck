window.PROMO = {
  name: "ISKILL-CONTENT-PRECHECK",
  brand: "#f59e0b",
  brand2: "#22d3ee",
  repo: "https://github.com/aispin/iskill-content-precheck",
  repoLabel: "aispin/iskill-content-precheck",
  license: "MIT",

  platform: "all",

  lang: {
    /* ── 中文 ───────────────────────────────────────────────────────── */
    zh: {
      meta: {
        title: "ISKILL-CONTENT-PRECHECK · 发布前最后一道闸",
        description: "对照五类违禁词清单逐条扫描，再从钩子/共鸣/表达/合规四维打分，给出「放行 / 改后放行 / 打回」的明确结论。"
      },
      a11y: { skip: "跳到主要内容" },
      ui: { copy: "复制", copied: "已复制", failed: "复制失败" },
      nav: { features: "能力", shots: "截图", how: "上手", faq: "问答" },

      hero: {
        badge: "AI 技能",
        titlePre: "发布前最后一道闸：",
        titleAccent: "违禁词 + 爆款四维",
        titlePost: "",
        sub: "对照五类违禁词清单逐条扫描，命中即给替代表述；再从钩子、共鸣、表达、合规四维各打 1–5 分，最后给出「放行 / 改后放行 / 打回」的明确结论。",
        ctaPrimary: "复制安装提示词",
        ctaSecondary: "看源码",
        meta1: "纯提示词",
        meta2: "无需脚本",
        meta3: "四维评分"
      },
      chat: {
        title: "AI Agent · 对话现场",
        status: "在线",
        userLabel: "你",
        agentLabel: "AI",
        messages: [
          { role: "user", text: "帮我预检这篇口播稿，发布平台是视频号" },
          { role: "agent", text: "出违禁词清单（每处都给替代表述）+ 四维评分 + 放行结论，报告按原稿名落盘。", tag: "已读 平台规则" },
          { role: "user", text: "结论是什么？" },
          { role: "agent", text: "修改后放行——3 处高风险，最关键的是第二段那句绝对化表述，改成「多数人反馈」就能发。" }
        ]
      },


      stats: [
        { value: "5", label: "违禁词类别", note: "极限词 / 绝对化承诺 / 医疗功效 / 收益金融 / 引流敏感" },
        { value: "4 × 5", label: "爆款四维评分", note: "钩子 / 共鸣 / 表达 / 合规，每维 1–5 分" },
        { value: "20", label: "总分满分", note: "≥16 放行 · 12–15 改后放行 · <12 打回" },
        { value: "3", label: "结论档位", note: "放行 / 改后放行 / 打回，不许含糊" }
      ],

      compare: {
        eyebrow: "对比",
        title: "以前 vs 现在",
        sub: "",
        before: { title: "没有这个技能", items: ["全凭感觉发，违规了才被平台限流", "极限词、绝对化承诺藏在句子里，肉眼扫不出来", "稿子到底能不能火，没有人给结构化意见"] },
        after: { title: "有了这个技能", items: ["五类违禁词逐条命中即报，并给合规替代表述", "四维打分 + 一句理由，看清短板在哪一维", "三选一结论，附最关键 3 条修改建议"] }
      },

      features: {
        eyebrow: "能力",
        title: "它能做什么",
        sub: "",
        items: [
          { icon: "check", title: "违禁词扫描", desc: "五类清单逐条扫，命中即报并给替代表述（如「全网最低价」→「这个价格我确实没见过更低的」）。" },
          { icon: "gauge", title: "四维评分", desc: "钩子 / 共鸣 / 表达 / 合规各 1–5 分，每维附一句理由。" },
          { icon: "cross", title: "三档结论", desc: "≥16/20 放行、12–15 改后放行、<12 打回，不许含糊。" },
          { icon: "copy", title: "发布文案同级受检", desc: "标题 / 描述 / 标签与口播稿分别出报告，额外关注标题党尺度与标签敏感组合。" },
          { icon: "shield", title: "按平台从严", desc: "用户说明了发布平台（视频号 / 抖音 / 小红书）就按该平台的加码规则收紧。" },
          { icon: "arrow", title: "打回上游", desc: "医疗 / 收益类硬违禁且无合规替代时，退回 iskill-viral-copywriter 重写并写明原因。" }
        ]
      },

      showcase: {
        eyebrow: "实拍",
        title: "看一眼真东西",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "上手",
        title: "三步跑起来",
        sub: "命令由 agent 跑，你只说要什么、看结果。",
        items: [
          { title: "交给 AI 装", desc: "把这句话粘进对话框，agent 会自己拉代码、读文档，再告诉你用法。", codeKey: "install" },
          { title: "把稿子发过去预检", desc: "平台说清楚评分口径才准；稿子可以直接贴在对话里。", codeName: "prompt", code: "帮我预检这篇口播稿，发布平台是视频号；违禁词给替代表述，四维打分并给结论。" },
          { title: "只看结论那一行", desc: "报告落在这个路径，你只要看放行结论：放行 / 修改后放行 / 不建议发；命中清单和评分是给 agent 改稿用的。", codeName: "path", code: "viral-video-team-output/文案/<原稿名>-预检.md" }
        ]
      },


      faq: {
        eyebrow: "问答",
        title: "常见问题",
        items: [
          { q: "需要 API key 或脚本吗？", a: "都不需要。这是纯提示词技能：没有脚本、没有构建步骤，装完直接说「帮我预检这篇」即可。" },
          { q: "能代替平台终审吗？", a: "不能。本 skill 做的是文案层预检，平台机审仍可能误伤，命中后要走平台的申诉入口。" },
          { q: "违禁词表在哪、能改吗？", a: "在 references/banned-words.md，五类清单。要加自己行业的词，直接改这个文件即可。" },
          { q: "它会直接帮我改稿吗？", a: "不会。预检只提修改建议，不直接改稿——改稿是 iskill-copy-deslop 的活，保持职责单一。" },
          { q: "什么情况会被打回？", a: "医疗 / 收益类硬违禁且没有合规替代表述，或四维总分低于 12 分，会退回 iskill-viral-copywriter 重写。" },
          { q: "涉及产品功效 / 数据怎么办？", a: "涉及具体功效、数据出处的判断会标注「需用户提供证明材料」，不替你担保。" }
        ]
      },

      cta: { title: "发之前先过一遍", desc: "把稿子粘给 AI，30 秒拿到违禁词清单与四维结论。", primary: "去 GitHub 看看", secondary: "复制安装提示词" },
      footer: { license: "MIT 许可", madeWith: "由 iskill-promo-page 生成" }
    },

    /* ── English ────────────────────────────────────────────────────── */
    en: {
      meta: {
        title: "ISKILL-CONTENT-PRECHECK · The last gate before you publish",
        description: "Scan against five banned-word categories, then score hook / resonance / delivery / compliance on a four-axis scale and return a clear pass / fix-then-pass / reject verdict."
      },
      a11y: { skip: "Skip to content" },
      ui: { copy: "Copy", copied: "Copied", failed: "Copy failed" },
      nav: { features: "Features", shots: "Screens", how: "Get started", faq: "FAQ" },

      hero: {
        badge: "AI skill",
        titlePre: "The last gate before you publish: ",
        titleAccent: "banned words + four-axis score",
        titlePost: "",
        sub: "Scan against five banned-word categories and get a compliant replacement for every hit; then score hook, resonance, delivery and compliance from 1–5 each, and end with a clear pass / fix-then-pass / reject verdict.",
        ctaPrimary: "Copy install prompt",
        ctaSecondary: "View source",
        meta1: "Prompt-only",
        meta2: "No scripts",
        meta3: "Four-axis score"
      },
      chat: {
        title: "AI Agent · live session",
        status: "online",
        userLabel: "You",
        agentLabel: "AI",
        messages: [
          { role: "user", text: "Pre-check this script for me — it's going out on WeChat Channels" },
          { role: "agent", text: "You get a banned-word list (each with a replacement), four-dimension scores and a verdict. The report is written to disk under the original filename.", tag: "read platform rules" },
          { role: "user", text: "So what's the verdict?" },
          { role: "agent", text: "Ship after edits — 3 high-risk hits. The big one is the absolute claim in paragraph two; soften it to \"most people report\" and it's fine." }
        ]
      },


      stats: [
        { value: "5", label: "banned-word categories", note: "superlatives / absolute promises / medical claims / earnings / off-platform funnels" },
        { value: "4 × 5", label: "four-axis score", note: "hook / resonance / delivery / compliance, 1–5 each" },
        { value: "20", label: "maximum total", note: "≥16 pass · 12–15 fix-then-pass · <12 reject" },
        { value: "3", label: "verdict tiers", note: "pass / fix-then-pass / reject — no hedging" }
      ],

      compare: {
        eyebrow: "Comparison",
        title: "Before vs after",
        sub: "",
        before: { title: "Without it", items: ["You publish on instinct and only find out when the platform throttles you", "Superlatives and absolute promises hide in sentences — the eye skips them", "Nobody gives structured feedback on whether it can actually go viral"] },
        after: { title: "With it", items: ["Five categories scanned line by line, each hit reported with a compliant replacement", "A four-axis score with one reason per axis, so you see the weak spot", "A single verdict plus the three most important edits"] }
      },

      features: {
        eyebrow: "Features",
        title: "What it does",
        sub: "",
        items: [
          { icon: "check", title: "Banned-word scan", desc: "Five categories scanned line by line; each hit gets a replacement (e.g. “lowest price anywhere” → “I really haven't seen lower”)." },
          { icon: "gauge", title: "Four-axis score", desc: "Hook / resonance / delivery / compliance, 1–5 each, with one reason per axis." },
          { icon: "cross", title: "Three verdict tiers", desc: "≥16/20 pass, 12–15 fix-then-pass, <12 reject — no hedging." },
          { icon: "copy", title: "Publish text checked too", desc: "Title / description / tags get their own report, watching clickbait limits and risky tag combos." },
          { icon: "shield", title: "Platform-strict", desc: "Name the platform (Video Account / Douyin / Xiaohongshu) and it tightens to that platform's extra rules." },
          { icon: "arrow", title: "Sent back upstream", desc: "Hard medical or earnings violations with no compliant rewrite are returned to iskill-viral-copywriter with reasons." }
        ]
      },

      showcase: {
        eyebrow: "Screens",
        title: "See the real thing",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "Get started",
        title: "Up and running in three steps",
        sub: "The agent runs the commands. You say what you want and check the result.",
        items: [
          { title: "Let your agent install it", desc: "Paste the line into the chat — it clones the repo, reads the docs, and tells you how to use it.", codeKey: "install" },
          { title: "Send the script for pre-check", desc: "Name the platform or the scoring is off. You can paste the script straight into the chat.", codeName: "prompt", code: "Pre-check this script — it's going out on WeChat Channels. Flag banned words with alternatives, score the four dimensions, and give me a verdict." },
          { title: "Read the verdict line", desc: "The report lands at this path; all you need is ship / ship after edits / don't ship. The lists are for the agent to fix.", codeName: "path", code: "viral-video-team-output/文案/<script-name>-precheck.md" }
        ]
      },


      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked",
        items: [
          { q: "Do I need an API key or scripts?", a: "Neither. This is a prompt-only skill: no scripts, no build step. Install it and say “precheck this for me”." },
          { q: "Does it replace the platform's final review?", a: "No. It only does a copy-level precheck; platform automation may still misfire, and you should use the platform's appeal entry when it does." },
          { q: "Where is the banned-word list, and can I edit it?", a: "In references/banned-words.md, five categories. Add your industry's terms by editing that file directly." },
          { q: "Will it rewrite my script?", a: "No. Precheck only suggests edits — rewriting is iskill-copy-deslop's job, keeping responsibilities single." },
          { q: "What gets rejected?", a: "Hard medical / earnings violations with no compliant rewrite, or a four-axis total below 12, are sent back to iskill-viral-copywriter." },
          { q: "What about product claims or data?", a: "Judgments about specific efficacy or data sources are flagged “needs user-supplied evidence” — it won't vouch for you." }
        ]
      },

      cta: { title: "Run it before you publish", desc: "Paste the script into your agent and get the banned-word list and a four-axis verdict in 30 seconds.", primary: "Open on GitHub", secondary: "Copy install prompt" },
      footer: { license: "MIT licensed", madeWith: "Built with iskill-promo-page" }
    }
  }
};
