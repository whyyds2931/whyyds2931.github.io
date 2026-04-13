/* ============================================
   DIGITAL GARDEN — JavaScript
   ============================================ */

// --- Article Data (in production, load from JSON/markdown) ---
const articles = [
  {
    slug: 'first-post',
    title: '欢迎来到我的数字花园',
    date: '2025-07-22',
    tag: '随笔',
    readtime: '3 分钟',
    excerpt: '这是一个开始，也是一个承诺。从今天起，我会在这里记录我的思考、学习与成长。希望这些文字能像种子一样，在你心中生根发芽。',
    content: `
      <p>欢迎来到这里。这不是一个普通的博客，而是一个数字花园——在这里，思想像植物一样慢慢生长，文字像阳光一样温暖人心。</p>

      <h2>为什么叫"数字花园"？</h2>
      <p>花园不同于工厂，它不追求批量生产；花园不同于流水线，它允许想法慢慢萌芽。每个来到这里的人都可以慢慢探索，发现那些在时间中自然生长的思想。</p>

      <blockquote>「写作是思考的最好形式。当你觉得没有东西可写时，那只是因为你还没有深入挖掘。」</blockquote>

      <h2>你会在这里找到什么？</h2>
      <p>技术笔记、学习心得、读书感悟、生活思考……形式不拘，重要的是真实。这里没有爆款攻略，只有认真写下的每一个字。</p>

      <h2>如何阅读？</h2>
      <p>你可以随意浏览，也可以顺着时间线慢慢追溯。每一篇文章都像是花园里的一株植物，有它自己的生长节奏。</p>

      <p>感谢你的到来。愿这些文字能带给你一些启发，一点温暖。</p>
    `
  },
  {
    slug: 'learning-in-public',
    title: '公开学习的意义',
    date: '2025-08-15',
    tag: '方法论',
    readtime: '5 分钟',
    excerpt: '把学习过程公开出来，不是为了展示，而是为了更好地学习。当你知道有人在看，你会更认真、更深入地思考。',
    content: `
      <p>我开始在网上记录自己的学习过程时，只是抱着试试看的心态。几个月后回头看，才发现这个习惯带来了意想不到的改变。</p>

      <h2>公开学习的三个好处</h2>

      <h3>1. 加深理解</h3>
      <p>当你知道有人会读你的文字时，你会不自觉地更加严谨地组织自己的想法。这种"教学相长"的效果，比单纯阅读要深刻得多。</p>

      <h3>2. 找到同路人</h3>
      <p>你在学习的东西，也许正是别人正在探索的。通过公开分享，我们更容易找到志同道合的伙伴，相互鼓励，共同进步。</p>

      <h3>3. 建立积累</h3>
      <p>零散的学习容易遗忘，但写成文字就变成了可追溯的积累。几年后回看，你会惊讶于自己一路走来的成长轨迹。</p>

      <blockquote>「不要等到完美才开始。完成比完美更重要。」</blockquote>

      <h2>如何开始？</h2>
      <p>不需要复杂的系统，不需要精美的排版。只需要一个简单的习惯：<strong>每天写一点</strong>。哪怕只是几句话，也是珍贵的记录。</p>
    `
  },
  {
    slug: 'tools-for-thought',
    title: '思考工具的演化',
    date: '2025-09-03',
    tag: '工具',
    readtime: '6 分钟',
    excerpt: '从纸笔到数字工具，人类一直在寻找更好的方式来捕捉和组织思想。工具在塑造我们的思维方式。',
    content: `
      <p>你有没有想过，我们使用的工具如何塑造了我们的思维方式？</p>

      <h2>纸笔时代</h2>
      <p>最朴素的方式往往最持久。纸笔没有自动保存，没有云同步，但正因为如此，每一次落笔都更加慎重。线性书写天然地训练了逻辑思维。</p>

      <h2>数字工具时代</h2>
      <p>Roam Research、Obsidian、Notion……这些工具带来了双向链接、大纲笔记、块引用。它们让非线性思考变得自然，让知识网络成为可能。</p>

      <h2>AI 时代</h2>
      <p>现在，我们有了新的可能。AI 可以帮助我们整理思路、生成草稿、发现联系。但它终究是工具，而不是主人。思考的深度，还是取决于我们自己。</p>

      <blockquote>「工具不是答案，而是问题的延伸。」</blockquote>

      <h2>我的选择</h2>
      <p>我使用最简单的工具组合：纯文本编辑器 + 版本控制 + 这个博客。简单意味着专注，意味着不会被工具本身分散注意力。</p>

      <p>重要的不是用什么工具，而是持续地思考和记录。</p>
    `
  },
  {
    slug: 'on-reading',
    title: '关于阅读的一些思考',
    date: '2025-10-20',
    tag: '阅读',
    readtime: '4 分钟',
    excerpt: '阅读不是为了炫耀藏书量，而是为了让别人的思想照亮自己的路。读十本不如读透一本。',
    content: `
      <p>在这个信息爆炸的时代，我们有看不完的文章、书籍、课程。但真正留在脑海中的有多少？真正改变我们行为的又有多少？</p>

      <h2>阅读的两种心态</h2>
      <p>一种是消费心态——快速浏览，获取谈资，满足好奇心。另一种是投资心态——仔细研读，反复思考，让书籍成为自己的血肉。</p>

      <h2>深度阅读的技巧</h2>
      <p><strong>带着问题去读。</strong>在翻开一本书之前，先问问自己：我想从这本书里得到什么？</p>
      <p><strong>做笔记，但不只是摘抄。</strong>写下自己的思考，哪怕只是"这段话让我想到了什么"。</p>
      <p><strong>间隔重复。</strong>读过的书，隔几个月再翻一翻，往往会有新的发现。</p>

      <blockquote>「书非借不能读也。」—— 这句话在今天依然适用。拥有太多的书，反而让我们失去了紧迫感和专注力。</blockquote>
    `
  },
  {
    slug: 'building-this-blog',
    title: '用 GitHub Pages 搭建免费博客',
    date: '2025-11-12',
    tag: '技术',
    readtime: '8 分钟',
    excerpt: '不需要服务器，不需要数据库，只需要一个 GitHub 账号和一个静态网页生成器，就能拥有自己的博客。',
    content: `
      <p>这篇文章记录了我搭建这个博客的过程，希望能给想拥有自己博客但不知从何下手的朋友一些参考。</p>

      <h2>为什么选择 GitHub Pages？</h2>
      <ul>
        <li>完全免费</li>
        <li>无需维护服务器</li>
        <li>绑定域名简单</li>
        <li>自带 HTTPS</li>
        <li>通过 Git 管理，版本控制无忧</li>
      </ul>

      <h2>技术栈</h2>
      <p>这个博客使用纯 HTML + CSS + JavaScript 构建，没有任何框架依赖。为什么要这么做？</p>
      <p>因为<strong>简单即是美</strong>。不需要构建工具，不需要包管理器，直接用浏览器打开就能正常工作。维护成本极低，速度极快。</p>

      <h2>写文章的方法</h2>
      <p>每篇文章都是独立的 HTML 文件，存放在项目中。只需要复制模板，填写内容，就可以发布。这种方式虽然不如动态博客方便，但也带来了极简和可控。</p>

      <h2>部署流程</h2>
      <p>写完文章后，只需要把文件推送到 GitHub，GitHub Pages 会自动构建并发布。整个过程不超过两分钟。</p>

      <blockquote>「最完美的工具，就是当你需要时它就在手边，不需要时它不会打扰你。」</blockquote>
    `
  },
  {
    slug: 'about-time',
    title: '时间管理与深度工作',
    date: '2026-01-05',
    tag: '效率',
    readtime: '5 分钟',
    excerpt: '我们无法管理时间，能管理的只有自己的注意力。深度工作不是在桌子上摆弄东西，而是在桌子前认真思考。',
    content: `
      <p>时间是最公平的资源，每个人每天都只有24小时。但为什么有些人能完成那么多事，而我们却总是觉得时间不够用？</p>

      <h2>注意力 vs 时间</h2>
      <p>我们无法管理时间，能管理的只有自己的注意力。一个小时全神贯注的工作，可能比一个下午被打断的工作更有价值。</p>

      <h2>深度工作的障碍</h2>
      <p>最大的障碍不是不知道方法，而是<strong>手机</strong>。每次点亮屏幕，都是对专注力的打断。研究表明，重新进入深度状态平均需要23分钟。</p>

      <h2>我的实践</h2>
      <p>每天早上起床后的第一个小时，是我的"黄金时间"。这段时间不开手机，不看消息，只做最重要的一件事。效果出乎意料地好。</p>

      <blockquote>「繁忙不代表高效。」—— 卡尔·纽波特《深度工作》</blockquote>

      <p>新的一年，我给自己设定了每周至少30小时深度工作的目标。愿我们都能在这个喧嚣的时代，守住一片宁静的思考空间。</p>
    `
  }
];

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initArticles();
  initAnimations();
  initWriteForm();
  initHeroTitle();
});

// --- Header Scroll Effect ---
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// --- Mobile Menu ---
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// --- Load Articles ---
function initArticles() {
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;

  // Check if we're on a post page
  const isPostPage = window.location.pathname.includes('/post/') ||
                      document.getElementById('postContent');

  if (isPostPage) {
    loadPost();
    return;
  }

  // Sort by date descending
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  grid.innerHTML = sorted.map((article, i) => `
    <article class="article-card" style="animation-delay: ${i * 0.1}s" onclick="window.location.href='post.html?slug=${article.slug}'">
      <div class="article-meta">
        <span class="article-date">${formatDate(article.date)}</span>
        <span class="article-tag">${article.tag}</span>
      </div>
      <h3 class="article-title">${article.title}</h3>
      <p class="article-excerpt">${article.excerpt}</p>
      <div class="article-footer">
        <span class="article-readtime">${article.readtime} 阅读</span>
        <span class="article-arrow">→</span>
      </div>
    </article>
  `).join('');

  // Also populate archive if on archive page
  initArchive();
}

// --- Load Single Post ---
function loadPost() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (!slug) return;

  const article = articles.find(a => a.slug === slug);
  if (!article) return;

  const container = document.getElementById('postContent');
  if (!container) return;

  container.innerHTML = `
    <div class="post-hero">
      <div class="post-hero-tag">${article.tag}</div>
      <h1 class="post-hero-title">${article.title}</h1>
      <div class="post-hero-meta">
        <span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          ${formatDate(article.date)}
        </span>
        <span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          ${article.readtime}
        </span>
      </div>
    </div>
    <div class="post-divider"></div>
    <div class="post-content">
      ${article.content}
    </div>
  `;

  document.title = `${article.title} — 聆语会数锯分析`;
}

// --- Archive Page ---
function initArchive() {
  const archiveList = document.getElementById('archiveList');
  if (!archiveList) return;

  // Group by year
  const byYear = {};
  articles.forEach(article => {
    const year = article.date.split('-')[0];
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(article);
  });

  const years = Object.keys(byYear).sort((a, b) => b - a);

  archiveList.innerHTML = years.map(year => `
    <div class="archive-year-group">
      <div class="archive-year">${year}</div>
      ${byYear[year].map(article => `
        <a href="post.html?slug=${article.slug}" class="archive-item">
          <span class="archive-item-title">${article.title}</span>
          <span class="archive-item-date">${formatDate(article.date)}</span>
        </a>
      `).join('')}
    </div>
  `).join('');
}

// --- Date Formatter ---
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
}

// --- Scroll Animations ---
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.article-card').forEach(card => {
    observer.observe(card);
  });
}

// --- Hero Title Click Interaction ---
function initHeroTitle() {
  const title = document.getElementById('heroTitle');
  if (!title) return;
  title.addEventListener('click', () => {
    title.classList.toggle('clicked');
  });
}

// --- Write Form ---
function initWriteForm() {
  const form = document.getElementById('writeForm');
  if (!form) return;

  const previewBtn = document.getElementById('previewBtn');
  const preview = document.getElementById('preview');
  const editor = document.getElementById('editor');
  const titleInput = document.getElementById('titleInput');
  const contentInput = document.getElementById('contentInput');
  const previewContent = document.getElementById('previewContent');

  // Toggle preview
  if (previewBtn && preview && editor) {
    previewBtn.addEventListener('click', () => {
      const isPreview = preview.classList.toggle('active');
      editor.style.display = isPreview ? 'none' : 'block';
      previewBtn.textContent = isPreview ? '编辑' : '预览';

      if (isPreview) {
        // Render preview
        const content = contentInput.value || '<p>文章内容为空...</p>';
        const title = titleInput.value || '无标题';
        previewContent.innerHTML = `
          <div class="post-hero">
            <h1 class="post-hero-title">${title}</h1>
          </div>
          <div class="post-content">${simpleMarkdown(content)}</div>
        `;
      }
    });
  }

  // Generate slug from title
  if (titleInput && document.getElementById('slugInput')) {
    titleInput.addEventListener('input', () => {
      const slug = titleInput.value
        .toLowerCase()
        .replace(/[^\w\s\u4e00-\u9fff]/g, '')
        .replace(/\s+/g, '-');
      document.getElementById('slugInput').value = slug;
    });
  }

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    generatePost();
  });
}

// --- Generate Post HTML ---
function generatePost() {
  const title = document.getElementById('titleInput').value;
  const slug = document.getElementById('slugInput').value;
  const tag = document.getElementById('tagInput').value;
  const date = new Date().toISOString().split('T')[0];
  const content = document.getElementById('contentInput').value;

  if (!title || !slug || !content) {
    alert('请填写标题、别名和内容');
    return;
  }

  // Estimate read time
  const words = content.length;
  const readtime = Math.ceil(words / 400) + ' 分钟';

  const postHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — 聆语会数锯分析</title>
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>">
</head>
<body>
  <div class="grain-overlay"></div>
  <header class="site-header scrolled">
    <div class="header-inner">
      <a href="../index.html" class="logo">
        <span class="logo-mark">✦</span>
        <span class="logo-text">聆语会数锯分析</span>
      </a>
      <nav class="main-nav">
        <a href="../index.html" class="nav-link">文章</a>
        <a href="../archive.html" class="nav-link">归档</a>
        <a href="../about.html" class="nav-link">关于</a>
      </nav>
    </div>
  </header>
  <main class="main-content">
    <div id="postContent"></div>
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-left">
        <span class="footer-logo">✦ 聆语会数锯分析</span>
        <p class="footer-desc">用文字捕捉思维的吉光片羽</p>
      </div>
      <div class="footer-right">
        <a href="https://github.com/whyyds2931" class="footer-link" target="_blank">GitHub</a>
      </div>
    </div>
  </footer>
  <script>
    const article = {
      slug: '${slug}',
      title: '${title}',
      date: '${date}',
      tag: '${tag}',
      readtime: '${readtime}',
      excerpt: '${content.substring(0, 100).replace(/\n/g, ' ')}...',
      content: ${JSON.stringify(simpleMarkdown(content))}
    };

    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('postContent');
      container.innerHTML = \`
        <div class="post-hero">
          <div class="post-hero-tag">\${article.tag}</div>
          <h1 class="post-hero-title">\${article.title}</h1>
          <div class="post-hero-meta">
            <span>\${new Date(article.date).toLocaleDateString('zh-CN', {year:'numeric',month:'long',day:'numeric'})}</span>
            <span>\${article.readtime}</span>
          </div>
        </div>
        <div class="post-divider"></div>
        <div class="post-content">\${article.content}</div>
      \`;
      document.title = article.title + ' — 聆语会数锯分析';
    });
  </script>
</body>
</html>`;

  // Create download
  const blob = new Blob([postHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slug}.html`;
  a.click();
  URL.revokeObjectURL(url);

  alert(`文章 "${title}" 已生成！\n\n文件名: ${slug}.html\n\n请将文件保存到 posts 文件夹中，然后推送到 GitHub。`);
}

// --- Simple Markdown Renderer ---
function simpleMarkdown(text) {
  return text
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
}

// --- Make articles globally accessible ---
window.articles = articles;
