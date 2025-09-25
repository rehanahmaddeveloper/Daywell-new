// ===================== Navbar & Smooth Scroll Start ==========================
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('mainMenu');
  const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
  
  // Set active navigation item based on current page
  function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
      // Remove active class from all links first
      link.classList.remove('active');
      
      // Check if link href matches current page
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
      
      // Special case for home page
      if (currentPage === 'index.html' && link.getAttribute('href') === '#') {
        link.classList.add('active');
      }
    });
  }
  
  // Initialize active state
  setActiveNavItem();
  
  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth < 992) bsCollapse.hide();
    });
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if(window.innerWidth >= 992) {
      bsCollapse.show();
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Only prevent default if it's not the home link
      if(this.getAttribute('href') !== '#') {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }
      
      // Set active state for clicked link
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Add scroll event listener for header background
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if(window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
// ===================== Navbar & Smooth Scroll End ==========================


// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

        // Complete Article Data
        const wbArticles = [
            {
                id: 1,
                title: "Self-Care 101: How to Prioritize Your Well-Being Without Guilt",
                category: "Lifestyle",
                date: "February 17, 2024",
                image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
                author: "Daysnap Staff",
                content: `
                    <p>In today's fast-paced world, self-care often takes a backseat to our numerous responsibilities. However, prioritizing your well-being isn't selfish—it's essential. This comprehensive guide will help you understand how to incorporate self-care into your routine without feeling guilty.</p>
                    
                    <h2>Understanding Self-Care</h2>
                    
                    <p>Self-care encompasses any activity that we do deliberately to take care of our mental, emotional, and physical health. Contrary to popular belief, it's not about indulgence but about maintaining good health and preventing burnout.</p>
                    
                    <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1" alt="Bath products" class="wb-in-content-image">
                    
                    <h2>Practical Self-Care Strategies</h2>
                    
                    <p>1. <strong>Morning Routine:</strong> Start your day with 10 minutes of meditation or journaling to set a positive tone.</p>
                    
                    <p>2. <strong>Digital Detox:</strong> Designate tech-free hours to reduce stress and improve sleep quality.</p>
                    
                    <p>3. <strong>Movement Matters:</strong> Incorporate gentle exercise like yoga or walking into your daily routine.</p>
                    
                    <p>4. <strong>Nutrition:</strong> Nourish your body with wholesome foods that energize you.</p>
                    
                    <p>5. <strong>Boundaries:</strong> Learn to say no to preserve your energy for what truly matters.</p>
                    
                    <h2>Overcoming Guilt</h2>
                    
                    <p>Many people struggle with guilt when prioritizing themselves. Remember that by caring for yourself, you're better equipped to care for others. Self-care isn't selfish—it's sustainable.</p>
                `,
                featured: true
            },
            {
                id: 2,
                title: "Breaking Free From Your Comfort Zone",
                category: "Personal Growth",
                date: "February 15, 2024",
                image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
                author: "Sarah Johnson",
                content: `
                    <p>Stepping outside your comfort zone is where growth happens. This article explores practical ways to expand your boundaries and embrace new challenges.</p>
                    
                    <h2>Why Comfort Zones Limit Us</h2>
                    
                    <p>Our brains are wired to seek safety, but staying in familiar territory prevents us from reaching our full potential. Understanding this mechanism is the first step to overcoming it.</p>
                    
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" alt="Woman doing yoga at sunrise" class="wb-in-content-image">
                    
                    <h2>Strategies for Expansion</h2>
                    
                    <p>1. Start small with manageable challenges</p>
                    <p>2. Reframe fear as excitement</p>
                    <p>3. Celebrate small wins</p>
                    <p>4. Build a support system</p>
                    <p>5. Practice self-compassion</p>
                    
                    <p>Growth begins at the end of your comfort zone. Take that first step today.</p>
                `
            },
            {
                id: 3,
                title: "Morning Yoga Routine for Busy People",
                category: "Fitness",
                date: "February 12, 2024",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
                author: "Michael Chen",
                content: `
                    <p>You don't need hours to reap the benefits of yoga. This 15-minute morning sequence will energize your body and calm your mind, perfect for those with packed schedules.</p>
                    
                    <h2>The 15-Minute Sequence</h2>
                    
                    <p>1. Cat-Cow Stretch (2 minutes)</p>
                    <p>2. Downward Dog (1 minute)</p>
                    <p>3. Sun Salutations (5 minutes)</p>
                    <p>4. Warrior Flow (4 minutes)</p>
                    <p>5. Seated Meditation (3 minutes)</p>
                    
                    <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597" alt="Yoga pose at sunrise" class="wb-in-content-image">
                    
                    <h2>Benefits of Morning Yoga</h2>
                    
                    <p>Regular practice can improve flexibility, reduce stress, enhance focus, and boost energy levels throughout the day.</p>
                `
            },
            {
                id: 4,
                title: "The Power of Journaling for Mental Clarity",
                category: "Mindfulness",
                date: "February 10, 2024",
                image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
                author: "Emma Rodriguez",
                content: `
                    <p>Journaling is one of the most effective yet underutilized tools for mental well-being. Discover how putting pen to paper can transform your thought patterns and emotional health.</p>
                    
                    <h2>Different Journaling Methods</h2>
                    
                    <p><strong>1. Gratitude Journaling:</strong> List 3 things you're grateful for each day</p>
                    <p><strong>2. Stream of Consciousness:</strong> Write without filtering your thoughts</p>
                    <p><strong>3. Problem-Solving Journal:</strong> Analyze challenges objectively</p>
                    <p><strong>4. Dream Journal:</strong> Record and interpret your dreams</p>
                    
                    <img src="https://images.unsplash.com/photo-1513366208864-87536b8bd7b4" alt="Journal and pen" class="wb-in-content-image">
                    
                    <h2>Scientific Benefits</h2>
                    
                    <p>Studies show journaling can reduce anxiety, improve immune function, strengthen emotional intelligence, and enhance problem-solving abilities.</p>
                `
            },
            {
                id: 5,
                title: "Nourish Your Soul With These 5 Simple Steps",
                category: "Wellness",
                date: "February 8, 2024",
                image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
                author: "David Kim",
                content: `
                    <p>True nourishment goes beyond food. These five simple practices will feed your soul and bring deeper fulfillment to your daily life.</p>
                    
                    <h2>The 5 Soul-Nourishing Practices</h2>
                    
                    <p>1. <strong>Nature Connection:</strong> Spend at least 20 minutes outdoors daily</p>
                    <p>2. <strong>Creative Expression:</strong> Engage in any creative activity weekly</p>
                    <p>3. <strong>Meaningful Connections:</strong> Cultivate deep relationships</p>
                    <p>4. <strong>Silent Reflection:</strong> Practice daily quiet time</p>
                    <p>5. <strong>Service:</strong> Give back to others regularly</p>
                    
                    <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a" alt="Person meditating in nature" class="wb-in-content-image">
                    
                    <p>When we nourish our souls, we build resilience and find greater joy in everyday moments.</p>
                `
            },
            {
                id: 6,
                title: "The Science of Better Sleep: 7 Tips to Try Tonight",
                category: "Health",
                date: "February 5, 2024",
                image: "https://images.unsplash.com/photo-1513366208864-87536b8bd7b4",
                author: "Dr. Lisa Wong",
                content: `
                    <p>Quality sleep is the foundation of good health. These evidence-based strategies will help you fall asleep faster and wake up refreshed.</p>
                    
                    <h2>The Sleep Optimization Protocol</h2>
                    
                    <p>1. Maintain consistent sleep/wake times</p>
                    <p>2. Create a bedtime ritual</p>
                    <p>3. Optimize your sleep environment</p>
                    <p>4. Limit blue light exposure</p>
                    <p>5. Mind your caffeine intake</p>
                    <p>6. Exercise regularly (but not too late)</p>
                    <p>7. Manage stress through relaxation techniques</p>
                    
                    <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597" alt="Woman sleeping peacefully" class="wb-in-content-image">
                    
                    <h2>Why Sleep Matters</h2>
                    
                    <p>Quality sleep enhances memory, regulates mood, boosts immunity, and supports cellular repair. Prioritizing sleep is prioritizing your health.</p>
                `
            }
        ];

        // DOM Elements
        const wbArticlesGrid = document.getElementById('wb-articles-grid');
        const wbRelatedArticlesGrid = document.getElementById('wb-related-articles');
        const wbArticleTitle = document.getElementById('wb-article-title');
        const wbArticleMeta = document.getElementById('wb-article-meta');
        const wbFeaturedImage = document.getElementById('wb-featured-image');
        const wbArticleContent = document.getElementById('wb-article-content');

        // Utility Functions
        function wbFormatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Render Featured Article
        function wbRenderFeaturedArticle() {
            const featured = wbArticles.find(article => article.featured);
            if (featured && document.querySelector('.wb-featured-overlay')) {
                document.querySelector('.wb-featured-headline').textContent = featured.title;
                document.querySelector('.wb-featured-category').textContent = featured.category;
                document.querySelector('.wb-featured-date').textContent = featured.date;
            }
        }

        // Render Article Cards
        function wbRenderArticleCards(articlesToRender, targetElement) {
            if (targetElement) {
                targetElement.innerHTML = articlesToRender.map(article => `
                    <article class="wb-article-card" data-id="${article.id}">
                        <img src="${article.image}" alt="${article.title}" class="wb-article-image">
                        <div class="wb-article-content">
                            <div class="wb-article-meta">
                                <span class="wb-article-category">${article.category}</span>
                                <span class="wb-article-separator"></span>
                                <span class="wb-article-date">${article.date}</span>
                            </div>
                            <h3 class="wb-article-title">${article.title}</h3>
                        </div>
                    </article>
                `).join('');
            }
        }

        // Load Article Content
        function wbLoadArticleContent() {
            const urlParams = new URLSearchParams(window.location.search);
            const articleId = urlParams.get('id');
            
            if (articleId) {
                const article = wbArticles.find(a => a.id == articleId);
                if (article) {
                    document.title = `${article.title} | Wellness Blog`;
                    wbArticleTitle.textContent = article.title;
                    wbArticleMeta.textContent = `By ${article.author} on ${article.date}`;
                    wbFeaturedImage.src = article.image;
                    wbFeaturedImage.alt = article.title;
                    wbArticleContent.innerHTML = article.content;
                } else {
                    wbArticleContent.innerHTML = '<p>Article not found. <a href="index.html">Return to homepage</a></p>';
                }
            }
        }

        // Load Related Articles
        function wbLoadRelatedArticles() {
            if (wbRelatedArticlesGrid) {
                const urlParams = new URLSearchParams(window.location.search);
                const currentArticleId = urlParams.get('id');
                
                const relatedArticles = wbArticles
                    .filter(article => article.id != currentArticleId)
                    .slice(0, 3);
                
                wbRenderArticleCards(relatedArticles, wbRelatedArticlesGrid);
            }
        }

        // Setup Event Listeners
        function wbSetupEventListeners() {
            // Article card clicks
            document.querySelectorAll('.wb-article-card').forEach(card => {
                card.addEventListener('click', function() {
                    const articleId = this.getAttribute('data-id');
                    window.location.href = `article.html?id=${articleId}`;
                });
            });
            
            // Pagination clicks
            document.querySelectorAll('.wb-page-number').forEach(page => {
                page.addEventListener('click', function() {
                    document.querySelector('.wb-page-number.active').classList.remove('active');
                    this.classList.add('active');
                    // In a real app, you would load the corresponding articles here
                });
            });
        }

        // Initialize Page
        function wbInitPage() {
            if (window.location.pathname.includes('article.html')) {
                wbLoadArticleContent();
                wbLoadRelatedArticles();
            } else {
                // On homepage, show all articles except the featured one
                const nonFeaturedArticles = wbArticles.filter(article => !article.featured);
                wbRenderArticleCards(nonFeaturedArticles, wbArticlesGrid);
                wbRenderFeaturedArticle();
            }
            
            wbSetupEventListeners();
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', wbInitPage);

        
// ===================== Back To Top Button Start ==========================
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
// ===================== Back To Top Button End ==========================