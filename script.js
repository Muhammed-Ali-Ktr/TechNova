    // DOM Elements
    const loading = document.getElementById('loading');
    const navbar = document.getElementById('navbar');
    const commentInput = document.getElementById('commentInput');
    const addCommentBtn = document.getElementById('addCommentBtn');
    const commentList = document.getElementById('commentList');
    const scrollTopBtn = document.getElementById('scrollTop');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    // Loading Screen
    window.addEventListener('load', () => {
      setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
          loading.style.display = 'none';
        }, 500);
      }, 1000);
    });

    // Navbar Scroll Effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Scroll to top button
      if (scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }

      lastScrollY = scrollY;
    });

    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Comment System
    let comments = [];
    let commentId = 0;

    function addComment() {
      const commentText = commentInput.value.trim();

      if (commentText === '') {
        // Custom alert
        showNotification('Lütfen bir yorum yazın!', 'warning');
        return;
      }

      if (commentText.length > 500) {
        showNotification('Yorum 500 karakterden uzun olamaz!', 'warning');
        return;
      }

      const comment = {
        id: ++commentId,
        text: commentText,
        timestamp: new Date().toLocaleString('tr-TR')
      };

      comments.unshift(comment);
      renderComments();
      commentInput.value = '';

      showNotification('Yorumunuz başarıyla eklendi!', 'success');
    }

    function renderComments() {
      if (comments.length === 0) {
        commentList.innerHTML = '<li style="text-align: center; color: var(--text-secondary); padding: 2rem;">Henüz yorum yapılmamış. İlk yorumu siz yapın!</li>';
        return;
      }

      commentList.innerHTML = comments.map(comment => `
        <li class="comment-item">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
            <strong style="color: var(--accent-color);">Anonim Kullanıcı</strong>
            <small style="color: var(--text-secondary);">${comment.timestamp}</small>
          </div>
          <p style="line-height: 1.6;">${comment.text}</p>
        </li>
      `).join('');
    }

    // Custom notification system
    function showNotification(message, type = 'info') {
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: ${type === 'success' ? 'var(--accent-color)' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: var(--shadow);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
      `;

      notification.textContent = message;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
    }

    // Add CSS for notification animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    // Event Listeners
    addCommentBtn.addEventListener('click', addComment);

    commentInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        addComment();
      }
    });

    // Read more button functionality
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('read-more-btn')) {
        showNotification('Bu özellik yakında eklenecek!', 'info');
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Close mobile menu if open
          if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
          }
        }
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.addEventListener('DOMContentLoaded', () => {
      const animateElements = document.querySelectorAll('.news-card, .comment-item');
      animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
      });

      // Initialize comments display
      renderComments();
    });

    // Performance optimizations
    let ticking = false;
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    }

    function updateScrollEffects() {
      const scrollY = window.scrollY;

      // Navbar effects
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Scroll to top button
      if (scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }

      ticking = false;
    }

    // Replace the existing scroll listener
    window.addEventListener('scroll', requestTick, { passive: true });

    // Form validation and enhancement
    function validateComment(text) {
      if (!text.trim()) {
        return { valid: false, message: 'Lütfen bir yorum yazın!' };
      }

      if (text.length < 3) {
        return { valid: false, message: 'Yorum en az 3 karakter olmalıdır!' };
      }

      if (text.length > 500) {
        return { valid: false, message: 'Yorum 500 karakterden uzun olamaz!' };
      }

      // Basic profanity filter (can be expanded)
      const badWords = ['spam', 'fake', 'scam'];
      const lowerText = text.toLowerCase();
      const hasBadWords = badWords.some(word => lowerText.includes(word));

      if (hasBadWords) {
        return { valid: false, message: 'Lütfen uygun dil kullanın!' };
      }

      return { valid: true };
    }

    // Enhanced comment functionality
    function addComment() {
      const commentText = commentInput.value;
      const validation = validateComment(commentText);

      if (!validation.valid) {
        showNotification(validation.message, 'warning');
        commentInput.focus();
        return;
      }

      const comment = {
        id: ++commentId,
        text: commentText.trim(),
        timestamp: new Date().toLocaleString('tr-TR', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        likes: 0
      };

      comments.unshift(comment);
      renderComments();
      commentInput.value = '';

      showNotification('Yorumunuz başarıyla eklendi! 🎉', 'success');

      // Smooth scroll to the new comment
      setTimeout(() => {
        const newComment = commentList.querySelector('.comment-item');
        if (newComment) {
          newComment.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }

    // Enhanced comment rendering with like functionality
    function renderComments() {
      if (comments.length === 0) {
        commentList.innerHTML = `
          <li style="text-align: center; color: var(--text-secondary); padding: 3rem;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">💬</div>
            <p>Henüz yorum yapılmamış.</p>
            <p style="margin-top: 0.5rem;">Teknoloji hakkındaki düşüncelerinizi paylaşın!</p>
          </li>
        `;
        return;
      }

      commentList.innerHTML = comments.map(comment => `
        <li class="comment-item" data-id="${comment.id}">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <div style="width: 40px; height: 40px; background: var(--accent-gradient); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">👤</div>
              <div>
                <strong style="color: var(--accent-color); display: block;">Tech Kullanıcı #${comment.id}</strong>
                <small style="color: var(--text-secondary);">${comment.timestamp}</small>
              </div>
            </div>
            <button class="like-btn" onclick="likeComment(${comment.id})" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; display: flex; align-items: center; gap: 0.25rem; transition: var(--transition);">
              <span>👍</span>
              <span>${comment.likes || 0}</span>
            </button>
          </div>
          <p style="line-height: 1.6; margin-left: 48px;">${comment.text}</p>
        </li>
      `).join('');
    }

    // Like comment functionality
    window.likeComment = function(commentId) {
      const comment = comments.find(c => c.id === commentId);
      if (comment) {
        comment.likes = (comment.likes || 0) + 1;
        renderComments();
        showNotification('Beğeni eklendi! ❤️', 'success');
      }
    };

    // Character counter for textarea
    commentInput.addEventListener('input', () => {
      const charCount = commentInput.value.length;
      const maxChars = 500;

      // Remove existing counter
      const existingCounter = document.querySelector('.char-counter');
      if (existingCounter) {
        existingCounter.remove();
      }

      // Add character counter
      const counter = document.createElement('div');
      counter.className = 'char-counter';
      counter.style.cssText = `
        position: absolute;
        bottom: 10px;
        right: 15px;
        color: ${charCount > maxChars * 0.8 ? '#ef4444' : 'var(--text-secondary)'};
        font-size: 0.8rem;
        pointer-events: none;
      `;
      counter.textContent = `${charCount}/${maxChars}`;

      // Make comment form relative
      const commentForm = document.querySelector('.comment-form');
      commentForm.style.position = 'relative';
      commentForm.appendChild(counter);

      // Change border color based on character count
      if (charCount > maxChars) {
        commentInput.style.borderColor = '#ef4444';
      } else if (charCount > maxChars * 0.8) {
        commentInput.style.borderColor = '#f59e0b';
      } else {
        commentInput.style.borderColor = 'var(--border)';
      }
    });

    // Search functionality (basic)
    function addSearchFeature() {
      const searchContainer = document.createElement('div');
      searchContainer.style.cssText = `
        max-width: 600px;
        margin: 0 auto 2rem;
        position: relative;
      `;

      searchContainer.innerHTML = `
        <input type="text" id="searchInput" placeholder="Haberlerde ara..." style="
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          background: var(--surface-light);
          border: 1px solid var(--border);
          border-radius: 25px;
          color: var(--text-primary);
          font-size: 1rem;
        ">
        <span style="
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
        ">🔍</span>
      `;

      const newsSection = document.getElementById('news');
      const container = newsSection.querySelector('.container');
      const title = container.querySelector('.section-title');
      title.insertAdjacentElement('afterend', searchContainer);

      // Search functionality
      const searchInput = document.getElementById('searchInput');
      const newsCards = document.querySelectorAll('.news-card');

      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        newsCards.forEach(card => {
          const title = card.querySelector('.news-title').textContent.toLowerCase();
          const excerpt = card.querySelector('.news-excerpt').textContent.toLowerCase();

          if (title.includes(searchTerm) || excerpt.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-out';
          } else {
            card.style.display = 'none';
          }
        });

        // Show "no results" message
        const visibleCards = Array.from(newsCards).filter(card => card.style.display !== 'none');
        const existingNoResults = document.querySelector('.no-results');

        if (visibleCards.length === 0 && searchTerm !== '') {
          if (!existingNoResults) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.style.cssText = `
              text-align: center;
              color: var(--text-secondary);
              padding: 2rem;
              grid-column: 1 / -1;
            `;
            noResults.innerHTML = `
              <div style="font-size: 2rem; margin-bottom: 1rem;">🔍</div>
              <p>Aradığınız kriterlerde haber bulunamadı.</p>
            `;
            document.querySelector('.news-grid').appendChild(noResults);
          }
        } else if (existingNoResults) {
          existingNoResults.remove();
        }
      });
    }

    // Initialize search feature
    setTimeout(addSearchFeature, 1000);

    // Add some easter eggs and advanced features
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    document.addEventListener('keydown', (e) => {
      konamiCode.push(e.keyCode);
      konamiCode = konamiCode.slice(-10);

      if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s linear infinite';
        showNotification('🎉 Konami Code aktivated! Awesome!', 'success');

        setTimeout(() => {
          document.body.style.animation = '';
        }, 5000);
      }
    });

    // Add rainbow animation for easter egg
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(rainbowStyle);

    // Auto-save comments to prevent data loss (using in-memory storage)
    let autoSaveInterval;
    commentInput.addEventListener('input', () => {
      clearTimeout(autoSaveInterval);
      autoSaveInterval = setTimeout(() => {
        if (commentInput.value.trim()) {
          // In a real app, this would save to localStorage or send to server
          console.log('Auto-saved comment draft');
        }
      }, 1000);
    });

    // Add loading states for better UX
    function showLoading(element) {
      element.style.opacity = '0.7';
      element.style.pointerEvents = 'none';
      element.innerHTML = element.innerHTML.replace(/Gönder|Devamını Oku/, 'Yükleniyor...');
    }

    function hideLoading(element, originalText) {
      element.style.opacity = '1';
      element.style.pointerEvents = 'auto';
      element.innerHTML = element.innerHTML.replace('Yükleniyor...', originalText);
    }

    // Enhanced click handlers with loading states
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('read-more-btn')) {
        showLoading(e.target);
        setTimeout(() => {
          hideLoading(e.target, 'Devamını Oku');
          showNotification('Bu özellik yakında eklenecek! 🚀', 'info');
        }, 1500);
      }
    });

    // Add a simple theme toggle (bonus feature)
    function addThemeToggle() {
      const themeToggle = document.createElement('button');
      themeToggle.innerHTML = '🌙';
      themeToggle.style.cssText = `
        position: fixed;
        top: 50%;
        left: 2rem;
        width: 50px;
        height: 50px;
        background: var(--surface-light);
        border: 1px solid var(--border);
        border-radius: 50%;
        color: var(--text-primary);
        cursor: pointer;
        z-index: 1000;
        transition: var(--transition);
        transform: translateY(-50%);
      `;

      themeToggle.addEventListener('click', () => {
        // This is a placeholder for theme switching
        // In a real app, you'd toggle CSS custom properties
        showNotification('Tema değiştirme özelliği yakında! 🎨', 'info');
        themeToggle.innerHTML = themeToggle.innerHTML === '🌙' ? '☀️' : '🌙';
      });

      document.body.appendChild(themeToggle);
    }

    // Initialize theme toggle
    setTimeout(addThemeToggle, 2000);

    // Advanced news filtering and sorting
    function addNewsFilters() {
      const filterContainer = document.createElement('div');
      filterContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 2rem 0;
        flex-wrap: wrap;
      `;

      const categories = ['Tümü', 'Yapay Zeka', 'Uzay', 'Mobil', 'Web3'];

      filterContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn" data-category="${cat}" style="
          padding: 0.5rem 1rem;
          background: ${cat === 'Tümü' ? 'var(--accent-color)' : 'var(--surface-light)'};
          color: ${cat === 'Tümü' ? 'var(--text-primary)' : 'var(--text-secondary)'};
          border: 1px solid var(--border);
          border-radius: 25px;
          cursor: pointer;
          transition: var(--transition);
          font-size: 0.9rem;
        ">${cat}</button>
      `).join('');

      const newsGrid = document.querySelector('.news-grid');
      newsGrid.parentNode.insertBefore(filterContainer, newsGrid);

      // Filter functionality
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          // Update active button
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.style.background = 'var(--surface-light)';
            b.style.color = 'var(--text-secondary)';
          });
          e.target.style.background = 'var(--accent-color)';
          e.target.style.color = 'var(--text-primary)';

          const category = e.target.dataset.category;
          const cards = document.querySelectorAll('.news-card');

          cards.forEach(card => {
            if (category === 'Tümü') {
              card.style.display = 'block';
            } else {
              const title = card.querySelector('.news-title').textContent;
              const shouldShow = (
                (category === 'Yapay Zeka' && title.includes('Yapay Zeka')) ||
                (category === 'Uzay' && title.includes('Mars')) ||
                (category === 'Mobil' && title.includes('5G'))
              );
              card.style.display = shouldShow ? 'block' : 'none';
            }
          });
        });
      });
    }

    // Real-time clock in footer
    function addLiveClock() {
      const clockElement = document.createElement('div');
      clockElement.style.cssText = `
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        background: var(--surface-light);
        border: 1px solid var(--border);
        padding: 0.5rem 1rem;
        border-radius: 10px;
        font-size: 0.9rem;
        color: var(--text-secondary);
        z-index: 1000;
      `;

      function updateClock() {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString('tr-TR');
      }

      updateClock();
      setInterval(updateClock, 1000);
      document.body.appendChild(clockElement);
    }

    // News reading progress tracker
    function addReadingProgress() {
      const progressBar = document.createElement('div');
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--accent-gradient);
        z-index: 10001;
        transition: width 0.1s ease;
      `;
      document.body.appendChild(progressBar);

      window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
      });
    }

    // Advanced comment features
    function enhanceComments() {
      // Add emoji picker
      const emojiPicker = document.createElement('div');
      emojiPicker.style.cssText = `
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
        flex-wrap: wrap;
      `;

      const emojis = ['👍', '❤️', '😊', '🤔', '💯', '🚀', '🔥', '👏'];

      emojiPicker.innerHTML = emojis.map(emoji => `
        <button class="emoji-btn" style="
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 5px;
          transition: var(--transition);
        " onclick="addEmoji('${emoji}')">${emoji}</button>
      `).join('');

      commentInput.parentNode.appendChild(emojiPicker);
    }

    window.addEmoji = function(emoji) {
      const cursorPos = commentInput.selectionStart;
      const textBefore = commentInput.value.substring(0, cursorPos);
      const textAfter = commentInput.value.substring(cursorPos);
      commentInput.value = textBefore + emoji + textAfter;
      commentInput.focus();
      commentInput.setSelectionRange(cursorPos + emoji.length, cursorPos + emoji.length);

      // Trigger input event for character counter
      commentInput.dispatchEvent(new Event('input'));
    };

    // Newsletter signup popup
    function showNewsletterPopup() {
      if (Math.random() < 0.3) { // 30% chance
        setTimeout(() => {
          const popup = document.createElement('div');
          popup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 20000;
            animation: fadeIn 0.3s ease-out;
          `;

          popup.innerHTML = `
            <div style="
              background: var(--surface);
              border: 1px solid var(--border);
              border-radius: 20px;
              padding: 2rem;
              max-width: 400px;
              text-align: center;
              position: relative;
            ">
              <button onclick="this.parentElement.parentElement.remove()" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                color: var(--text-secondary);
                font-size: 1.5rem;
                cursor: pointer;
              ">×</button>
              <h3 style="margin-bottom: 1rem; color: var(--accent-color);">📧 Bülten Aboneliği</h3>
              <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">
                En güncel teknoloji haberlerini kaçırmayın!
              </p>
              <input type="email" placeholder="E-posta adresiniz" style="
                width: 100%;
                padding: 0.75rem;
                margin-bottom: 1rem;
                background: var(--surface-light);
                border: 1px solid var(--border);
                border-radius: 10px;
                color: var(--text-primary);
              ">
              <button onclick="subscribeNewsletter(this)" style="
                width: 100%;
                background: var(--accent-gradient);
                color: var(--text-primary);
                border: none;
                padding: 0.75rem;
                border-radius: 10px;
                cursor: pointer;
                font-weight: 600;
              ">Abone Ol</button>
            </div>
          `;

          document.body.appendChild(popup);
        }, 10000); // Show after 10 seconds
      }
    }

    window.subscribeNewsletter = function(btn) {
      const email = btn.parentElement.querySelector('input[type="email"]').value;
      if (email && email.includes('@')) {
        showNotification('Başarıyla abone oldunuz! 📧', 'success');
        btn.parentElement.parentElement.remove();
      } else {
        showNotification('Geçerli bir e-posta adresi girin!', 'warning');
      }
    };

    // Social sharing functionality
    function addSocialSharing() {
      const shareBtn = document.createElement('button');
      shareBtn.innerHTML = '📤 Paylaş';
      shareBtn.style.cssText = `
        position: fixed;
        top: 50%;
        right: 2rem;
        background: var(--surface-light);
        border: 1px solid var(--border);
        color: var(--text-primary);
        padding: 0.75rem 1rem;
        border-radius: 25px;
        cursor: pointer;
        z-index: 1000;
        transition: var(--transition);
        transform: translateY(-50%);
      `;

      shareBtn.addEventListener('click', async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'TechNova - Teknoloji Haberleri',
              text: 'En güncel teknoloji haberlerini TechNova\'da keşfedin!',
              url: window.location.href
            });
          } catch (err) {
            console.log('Share failed:', err);
          }
        } else {
          // Fallback - copy to clipboard
          navigator.clipboard.writeText(window.location.href);
          showNotification('Link panoya kopyalandı! 📋', 'success');
        }
      });

      document.body.appendChild(shareBtn);
    }

    // Keyboard shortcuts
    function addKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        // Alt + S for search
        if (e.altKey && e.key === 's') {
          e.preventDefault();
          const searchInput = document.getElementById('searchInput');
          if (searchInput) {
            searchInput.focus();
            showNotification('Arama moduna geçildi 🔍', 'info');
          }
        }

        // Alt + C for comment
        if (e.altKey && e.key === 'c') {
          e.preventDefault();
          commentInput.focus();
          commentInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          showNotification('Yorum yazma moduna geçildi ✍️', 'info');
        }

        // Escape to close popups
        if (e.key === 'Escape') {
          const popups = document.querySelectorAll('[style*="z-index: 20000"]');
          popups.forEach(popup => popup.remove());
        }
      });
    }

    // Dark/Light mode persistence simulation
    let currentTheme = 'dark';

    function toggleTheme() {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

      if (currentTheme === 'light') {
        document.documentElement.style.setProperty('--primary-color', '#ffffff');
        document.documentElement.style.setProperty('--text-primary', '#1e293b');
        document.documentElement.style.setProperty('--surface', '#f8fafc');
        document.documentElement.style.setProperty('--surface-light', '#ffffff');
        showNotification('Açık tema aktif edildi ☀️', 'success');
      } else {
        document.documentElement.style.setProperty('--primary-color', '#1a1a2e');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--surface', '#0f172a');
        document.documentElement.style.setProperty('--surface-light', '#1e293b');
        showNotification('Koyu tema aktif edildi 🌙', 'success');
      }
    }

    // Lazy loading simulation for news images
    function addLazyLoading() {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const imageDiv = entry.target;
            // Simulate image loading
            setTimeout(() => {
              imageDiv.style.background = `linear-gradient(45deg, var(--accent-color), #0ea5e9), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" text-anchor="middle" dy=".3em" fill="%23999">📷</text></svg>')`;
              imageDiv.style.backgroundSize = 'cover';
            }, 500);
            imageObserver.unobserve(imageDiv);
          }
        });
      });

      document.querySelectorAll('.news-image').forEach(img => {
        imageObserver.observe(img);
      });
    }

    // Initialize all advanced features
    setTimeout(() => {
      addNewsFilters();
      addLiveClock();
      addReadingProgress();
      enhanceComments();
      showNewsletterPopup();
      addSocialSharing();
      addKeyboardShortcuts();
      addLazyLoading();
    }, 3000);

    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // In a real app, you'd register an actual service worker
        console.log('PWA capabilities ready for implementation');
      });
    }

    // Analytics tracking simulation
    function trackEvent(eventName, data = {}) {
      console.log('Analytics Event:', eventName, data);
      // In production, this would send to Google Analytics, etc.
    }

    // Track user interactions
    document.addEventListener('click', (e) => {
      if (e.target.matches('.read-more-btn')) {
        trackEvent('news_read_more_clicked', {
          article: e.target.closest('.news-card').querySelector('.news-title').textContent
        });
      }

      if (e.target.matches('.cta-button')) {
        trackEvent('hero_cta_clicked');
      }
    });

    // Performance monitoring
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        trackEvent('page_load_time', {
          loadTime: perfData.loadEventEnd - perfData.loadEventStart,
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart
        });
      }, 0);
    });

    // Initialize everything when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
      initializeApp();
    }

    function initializeApp() {
      console.log('🚀 TechNova initialized successfully!');

      // Show welcome message
      setTimeout(() => {
        showNotification('TechNova\'ya hoş geldiniz! 👋', 'success');
      }, 2000);

      // Initialize comments
      renderComments();

      // Set up error handling
      window.addEventListener('error', (e) => {
        console.error('Application error:', e);
        showNotification('Bir hata oluştu. Sayfa yenileniyor...', 'warning');
        setTimeout(() => location.reload(), 3000);
      });
    }

    // Advanced user interaction tracking
    let userActivity = {
      scrollDepth: 0,
      timeOnPage: Date.now(),
      interactions: 0,
      commentsPosted: 0
    };

    // Track scroll depth
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      userActivity.scrollDepth = Math.max(userActivity.scrollDepth, scrollPercent);
    });

    // Track clicks
    document.addEventListener('click', () => {
      userActivity.interactions++;
    });

    // Dynamic content loading simulation
    function loadMoreNews() {
      const newsGrid = document.querySelector('.news-grid');
      const moreNews = [
        {
          emoji: '🔐',
          title: 'Blockchain ve Kripto Gelecek',
          excerpt: 'Web3 teknolojilerinin mainstream adoption sürecinde yaşanan gelişmeler ve DeFi ekosistemi...'
        },
        {
          emoji: '🎮',
          title: 'Gaming\'de AI Devrimi',
          excerpt: 'Oyun endüstrisinde yapay zeka kullanımı, prosedürel içerik üretimi ve oyuncu deneyimi...'
        },
        {
          emoji: '🏥',
          title: 'Sağlık Teknolojilerinde Yenilik',
          excerpt: 'Telemedicine, wearable devices ve AI destekli tanı sistemlerinin sağlık sektörüne etkileri...'
        }
      ];

      moreNews.forEach((news, index) => {
        setTimeout(() => {
          const newsCard = document.createElement('article');
          newsCard.className = 'news-card';
          newsCard.style.opacity = '0';
          newsCard.style.transform = 'translateY(30px)';

          newsCard.innerHTML = `
            <div class="news-image">${news.emoji}</div>
            <div class="news-content">
              <h3 class="news-title">${news.title}</h3>
              <p class="news-excerpt">${news.excerpt}</p>
              <button class="read-more-btn">Devamını Oku</button>
            </div>
          `;

          newsGrid.appendChild(newsCard);

          // Animate in
          setTimeout(() => {
            newsCard.style.transition = 'all 0.5s ease-out';
            newsCard.style.opacity = '1';
            newsCard.style.transform = 'translateY(0)';
          }, 100);

        }, index * 200);
      });

      showNotification('Yeni haberler yüklendi! 📰', 'success');
    }

    // Infinite scroll implementation
    let isLoading = false;
    window.addEventListener('scroll', () => {
      if (isLoading) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 1000) {
        isLoading = true;

        // Show loading indicator
        const loader = document.createElement('div');
        loader.id = 'news-loader';
        loader.style.cssText = `
          text-align: center;
          padding: 2rem;
          color: var(--text-secondary);
        `;
        loader.innerHTML = `
          <div class="spinner" style="margin: 0 auto 1rem; width: 30px; height: 30px;"></div>
          <p>Daha fazla haber yükleniyor...</p>
        `;

        document.querySelector('.news-grid').parentNode.appendChild(loader);

        setTimeout(() => {
          loadMoreNews();
          if (document.getElementById('news-loader')) {
            document.getElementById('news-loader').remove();
          }
          isLoading = false;
        }, 2000);
      }
    });

    // Voice search capability (if supported)
    function initVoiceSearch() {
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'tr-TR';

        const voiceBtn = document.createElement('button');
        voiceBtn.innerHTML = '🎤';
        voiceBtn.style.cssText = `
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: var(--text-secondary);
          transition: var(--transition);
        `;

        const searchContainer = document.querySelector('#searchInput').parentNode;
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(voiceBtn);

        voiceBtn.addEventListener('click', () => {
          recognition.start();
          voiceBtn.innerHTML = '⏺️';
          showNotification('Konuşmaya başlayın... 🎤', 'info');
        });

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          document.getElementById('searchInput').value = transcript;
          document.getElementById('searchInput').dispatchEvent(new Event('input'));
          voiceBtn.innerHTML = '🎤';
          showNotification(`"${transcript}" aranıyor...`, 'success');
        };

        recognition.onerror = () => {
          voiceBtn.innerHTML = '🎤';
          showNotification('Ses tanıma hatası oluştu', 'warning');
        };
      }
    }

    // Advanced notification system with categories
    function createAdvancedNotification(message, type = 'info', duration = 3000, actions = []) {
      const notification = document.createElement('div');

      const icons = {
        success: '✅',
        warning: '⚠️',
        error: '❌',
        info: 'ℹ️',
        tech: '🔧',
        news: '📰'
      };

      notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-left: 4px solid ${type === 'success' ? 'var(--accent-color)' : type === 'warning' ? '#f59e0b' : '#ef4444'};
        color: var(--text-primary);
        padding: 1rem;
        border-radius: 10px;
        box-shadow: var(--shadow);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 350px;
        min-width: 250px;
      `;

      notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
          <span style="font-size: 1.2rem; flex-shrink: 0;">${icons[type] || icons.info}</span>
          <div style="flex: 1;">
            <div style="font-weight: 600; margin-bottom: 0.25rem;">
              ${type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
            <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.4;">
              ${message}
            </div>
            ${actions.length > 0 ? `
              <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
                ${actions.map(action => `
                  <button onclick="${action.callback}" style="
                    background: none;
                    border: 1px solid var(--border);
                    color: var(--accent-color);
                    padding: 0.25rem 0.75rem;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 0.8rem;
                    transition: var(--transition);
                  ">${action.label}</button>
                `).join('')}
              </div>
            ` : ''}
          </div>
          <button onclick="this.parentElement.parentElement.remove()" style="
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            font-size: 1.2rem;
            line-height: 1;
            padding: 0;
            flex-shrink: 0;
          ">×</button>
        </div>
      `;

      document.body.appendChild(notification);

      if (duration > 0) {
        setTimeout(() => {
          if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
            setTimeout(() => {
              if (notification.parentNode) {
                document.body.removeChild(notification);
              }
            }, 300);
          }
        }, duration);
      }

      return notification;
    }

    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent += `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(notificationStyle);

    // Context menu for news cards
    function addContextMenus() {
      document.addEventListener('contextmenu', (e) => {
        if (e.target.closest('.news-card')) {
          e.preventDefault();

          // Remove existing context menu
          const existingMenu = document.querySelector('.context-menu');
          if (existingMenu) existingMenu.remove();

          const contextMenu = document.createElement('div');
          contextMenu.className = 'context-menu';
          contextMenu.style.cssText = `
            position: fixed;
            top: ${e.clientY}px;
            left: ${e.clientX}px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 0.5rem 0;
            z-index: 10000;
            box-shadow: var(--shadow);
            min-width: 150px;
          `;

          const menuItems = [
            { label: '📖 Oku', action: () => showNotification('Makale açılıyor...', 'info') },
            { label: '❤️ Beğen', action: () => showNotification('Makale beğenildi!', 'success') },
            { label: '📤 Paylaş', action: () => showNotification('Link panoya kopyalandı!', 'success') },
            { label: '🔖 Kaydet', action: () => showNotification('Makale kaydedildi!', 'success') }
          ];

          contextMenu.innerHTML = menuItems.map(item => `
            <div style="
              padding: 0.5rem 1rem;
              cursor: pointer;
              transition: var(--transition);
              border-radius: 5px;
              margin: 0 0.25rem;
            " onmouseover="this.style.background='var(--surface-light)'" 
               onmouseout="this.style.background='transparent'"
               onclick="${item.action.toString().replace('function', '').replace('()', '')}(); this.parentElement.remove();">
              ${item.label}
            </div>
          `).join('');

          document.body.appendChild(contextMenu);

          // Close menu when clicking elsewhere
          setTimeout(() => {
            document.addEventListener('click', () => {
              if (contextMenu.parentNode) {
                contextMenu.remove();
              }
            }, { once: true });
          }, 0);
        }
      });
    }

    // Fullscreen API integration
    function addFullscreenToggle() {
      const fullscreenBtn = document.createElement('button');
      fullscreenBtn.innerHTML = '⛶';
      fullscreenBtn.title = 'Tam Ekran (F11)';
      fullscreenBtn.style.cssText = `
        position: fixed;
        top: 50%;
        right: 4rem;
        width: 45px;
        height: 45px;
        background: var(--surface-light);
        border: 1px solid var(--border);
        border-radius: 50%;
        color: var(--text-primary);
        cursor: pointer;
        z-index: 1000;
        transition: var(--transition);
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => {
            showNotification('Tam ekran modu desteklenmiyor', 'warning');
          });
        } else {
          document.exitFullscreen();
        }
      });

      document.addEventListener('fullscreenchange', () => {
        fullscreenBtn.innerHTML = document.fullscreenElement ? '⛶' : '⛶';
        const message = document.fullscreenElement ? 'Tam ekran modu aktif' : 'Tam ekran modu kapatıldı';
        showNotification(message, 'info');
      });

      document.body.appendChild(fullscreenBtn);
    }

    // Local storage simulation for user preferences
    const userPrefs = {
      theme: 'dark',
      notifications: true,
      autoplay: false,
      language: 'tr'
    };

    function saveUserPrefs() {
      // In real app: localStorage.setItem('techNova_prefs', JSON.stringify(userPrefs));
      console.log('User preferences saved:', userPrefs);
    }

    function loadUserPrefs() {
      // In real app: const saved = localStorage.getItem('techNova_prefs');
      console.log('User preferences loaded:', userPrefs);
      return userPrefs;
    }

    // Accessibility improvements
    function enhanceAccessibility() {
      // Add skip navigation link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Ana içeriğe geç';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--accent-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
      `;

      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });

      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      document.body.prepend(skipLink);

      // Add main content ID
      document.getElementById('news').id = 'main-content';

      // Improve button accessibility
      document.querySelectorAll('button').forEach(btn => {
        if (!btn.getAttribute('aria-label') && !btn.textContent.trim()) {
          btn.setAttribute('aria-label', 'Düğme');
        }
      });
    }

    // Image optimization and lazy loading
    function optimizeImages() {
      const images = document.querySelectorAll('.news-image');

      images.forEach(img => {
        // Add loading state
        img.style.background = 'linear-gradient(90deg, #f0f0f0 25%, transparent 37%, #f0f0f0 63%)';
        img.style.backgroundSize = '400% 100%';
        img.style.animation = 'shimmer 1.5s ease-in-out infinite';

        // Simulate image load
        setTimeout(() => {
          img.style.animation = '';
          img.style.backgroundSize = 'cover';
        }, Math.random() * 2000 + 500);
      });
    }

    // Add shimmer animation
    const shimmerStyle = document.createElement('style');
    shimmerStyle.textContent += `
      @keyframes shimmer {
        0% { background-position: -468px 0; }
        100% { background-position: 468px 0; }
      }
    `;
    document.head.appendChild(shimmerStyle);

    // Initialize all advanced features after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        initVoiceSearch();
        addContextMenus();
        addFullscreenToggle();
        enhanceAccessibility();
        optimizeImages();

        // Final setup message
        console.log('🎉 All TechNova features loaded successfully!');

        // Show feature tips to user
        setTimeout(() => {
          createAdvancedNotification(
            'İpucu: Alt+S ile arama yapabilir, Alt+C ile yorum yazabilirsiniz!',
            'tech',
            5000,
            [
              { label: 'Anladım', callback: 'this.parentElement.parentElement.parentElement.remove()' }
            ]
          );
        }, 5000);

      }, 1000);
    });

    // Page visibility API for performance optimization
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        console.log('Page is visible - resuming animations');
        // Resume animations and updates
      } else {
        console.log('Page is hidden - pausing animations');
        // Pause animations and updates to save battery
      }
    });

    // Memory cleanup on page unload
    window.addEventListener('beforeunload', () => {
      // Track session data
      const sessionData = {
        ...userActivity,
        timeOnPage: Date.now() - userActivity.timeOnPage,
        exitTime: new Date().toISOString()
      };

      console.log('Session data:', sessionData);
      // In production: send to analytics

      // Cleanup timers and listeners
      clearInterval(autoSaveInterval);
    });
