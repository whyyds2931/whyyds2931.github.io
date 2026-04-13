/* ============================================
   DIGITAL GARDEN — JavaScript
   ============================================ */

// --- Article Data ---
const articles = [
  {
    slug: 'claude-github-pages-blog',
    title: '使用 Claude 和 GitHub 搭建免费静态博客',
    date: '2026-04-13',
    tag: '技术',
    readtime: '6 分钟',
    excerpt: '不需要服务器，不需要费用，只需要 Claude、AI 写作助手和 GitHub，就能拥有自己的个人博客。这篇文章记录了我搭建这个博客的完整过程。',
    content: `
      <p>你有没有想过拥有一个自己的博客？不需要复杂的服务器，不需要每月的费用，只需要一个 GitHub 账号和一点好奇心。</p>
      <p>这篇文章是我的亲身实践，记录了如何用 Claude + GitHub Pages 从零搭建一个优雅的静态博客。</p>

      <h2>为什么选择这个方案？</h2>
      <p>在开始之前，我想先回答一个问题：为什么不使用 WordPress、Notion、Hexo、Hugo？</p>
      <p>因为这个方案有这些不可替代的优势：</p>
      <ul>
        <li><strong>完全免费</strong> — GitHub Pages 是免费的，域名也可以用 GitHub 提供的免费子域名</li>
        <li><strong>零维护</strong> — 没有服务器，没有数据库，不用担心安全更新</li>
        <li><strong>快速加载</strong> — 纯静态文件，全球 CDN 加速</li>
        <li><strong>数据可控</strong> — 所有文件都在你自己的仓库里，不会被平台绑架</li>
        <li><strong>版本控制</strong> — 用 Git 管理文章，写错了随时可以回滚</li>
      </ul>
      <p>而 Claude 的加入，让写作本身变得更轻松。你可以用它来起草、修改、润色文章，让写作的阻力大大降低。</p>

      <h2>准备工作</h2>
      <p>在开始之前，你需要准备：</p>
      <ul>
        <li>一个 GitHub 账号（<a href="https://github.com" target="_blank">免费注册</a>）</li>
        <li>GitHub CLI（gh）已安装</li>
        <li>一个终端环境（PowerShell 或 Git Bash）</li>
      </ul>

      <h2>第一步：创建 GitHub 仓库</h2>
      <p>GitHub Pages 需要一个特定格式的仓库名才能自动部署。格式是：</p>
      <p><code>用户名.github.io</code></p>
      <p>如果你的 GitHub 用户名是 <code>whyyds2931</code>，那么仓库名就是 <code>whyyds2931.github.io</code>。</p>
      <p>创建仓库后，你的博客就可以通过 <code>https://whyyds2931.github.io</code> 访问了。</p>

      <h2>第二步：克隆仓库到本地</h2>
      <p>打开终端，运行：</p>
      <pre><code>git clone https://github.com/你的用户名/你的用户名.github.io.git
cd 你的用户名.github.io</code></pre>

      <h2>第三步：创建博客文件</h2>
      <p>一个基本的静态博客只需要几个文件：</p>
      <ul>
        <li><code>index.html</code> — 首页</li>
        <li><code>style.css</code> — 样式</li>
        <li><code>script.js</code> — 交互逻辑</li>
      </ul>
      <p>你可以参考这个博客的源码。它的设计风格是「温暖编辑风」——象牙白底色、优雅衬线字体、琥珀色点缀。</p>

      <h2>第四步：用 Claude 写文章</h2>
      <p>这是最有趣的部分。你可以这样和 Claude 对话：</p>
      <blockquote>「帮我写一篇关于 [你感兴趣的话题] 的博客文章，大约 800 字，语言风格温暖而有深度，像一个朋友在和你聊天。」</blockquote>
      <p>Claude 会帮你生成初稿。你可以根据自己的经历修改调整，然后保存为 HTML 文件。</p>
      <p>文章的格式很简单，只需要一个 HTML 模板加上你的正文内容：</p>
      <pre><code>&lt;article&gt;
  &lt;h1&gt;文章标题&lt;/h1&gt;
  &lt;p&gt;段落内容...&lt;/p&gt;
&lt;/article&gt;</code></pre>

      <h2>第五步：发布到 GitHub</h2>
      <p>写完文章后，只需要几步就能上线：</p>
      <pre><code>git add .
git commit -m "Add new post: 文章标题"
git push</code></pre>
      <p>推送完成后，等待一两分钟，GitHub Pages 会自动构建，你的博客就上线了。</p>

      <h2>进阶技巧</h2>

      <h3>绑定自定义域名</h3>
      <p>如果你有自定义域名，可以在仓库的 Settings → Pages 中配置。GitHub Pages 支持免费 HTTPS。</p>

      <h3>使用静态网站生成器</h3>
      <p>如果你的文章多了，手动管理 HTML 会变得繁琐。这时可以用 <strong>Hexo</strong> 或 <strong>Pelican</strong> 这样的静态博客生成器，用 Markdown 写文章，自动生成网站。</p>

      <h3>加入评论区</h3>
      <p>静态博客没有数据库，但你可以通过 <strong>Giscus</strong> 或 <strong>Disqus</strong> 接入评论系统，让读者互动。</p>

      <h2>我的写作流程</h2>
      <p>最后分享一下我个人的写作流程：</p>
      <ol>
        <li>用 Claude 头脑风暴，确定文章主题和核心观点</li>
        <li>让 Claude 生成初稿</li>
        <li>加入自己的经历和思考，修改润色</li>
        <li>发布到 GitHub</li>
      </ol>
      <p>这个流程让我每天能稳定输出 1-2 篇文章，而不用担心「没什么可写的」。</p>

      <h2>写在最后</h2>
      <p>写作是思考的最好形式。当你把想法写成文字，你会发现自己对某些问题的理解比以前深了很多。</p>
      <p>不需要等「准备好」才开始。现在就去注册一个 GitHub 账号，搭起你的博客吧。</p>
      <p>种一棵树最好的时间是十年前，其次是现在。</p>
    `
  },
  {
    slug: '自我欺骗而不自知吗',
    title: '自我欺骗而不自知吗？',
    date: '2026-04-13',
    tag: '随笔',
    readtime: '1 分钟',
    excerpt: '陶醉于痛苦何尝不是一种自我欺骗···',
    content: '<p>陶醉于痛苦何尝不是一种自我欺骗···</p>'
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
