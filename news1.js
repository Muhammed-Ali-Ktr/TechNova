        // News data
        const newsData = [
            {
                id: 1,
                title: "ChatGPT-5 Geliyor: Yapay Zeka Devriminin Yeni Aşaması",
                excerpt: "OpenAI'nin yeni nesil yapay zeka modeli ChatGPT-5, çok daha gelişmiş reasoning yetenekleri ve multimodal özellikler sunacak. Beta testler başladı...",
                fullContent: "OpenAI'nin merakla beklenen yeni yapay zeka modeli ChatGPT-5, teknoloji dünyasında büyük heyecan yaratıyor. Şirketin açıklamalarına göre, yeni model çok daha gelişmiş mantık yürütme yetenekleri, geliştirilmiş multimodal özellikler ve daha uzun bağlam penceresi sunacak. Beta testlerde yer alan geliştiriciler, modelin karmaşık matematik problemlerini çözme, kod yazma ve yaratıcı içerik üretme konularında önceki versiyonlara kıyasla %40 daha iyi performans gösterdiğini belirtiyor. Ayrıca, yeni model görsel ve ses verilerini de işleyebilecek, bu da kullanıcı deneyimini büyük ölçüde artıracak.",
                category: "ai",
                emoji: "🤖",
                date: "1 Eylül 2025",
                readCount: 0
            },
            {
                id: 2,
                title: "SpaceX Starship Mars Kolonisi İçin İlk Kargo Misyonunu Başlattı",
                excerpt: "Elon Musk'ın SpaceX şirketi, Mars'ta kurulacak koloni için gerekli malzemeleri taşıyacak ilk kargo misyonunu başarıyla fırlattı...",
                fullContent: "SpaceX'in devasa Starship roketi, Mars kolonizasyon projesi kapsamında tarihi bir adım attı. 120 metre yüksekliğindeki roket, Mars'ta kurulacak koloni için gerekli temel malzemeleri, enerji üretim sistemleri ve yaşam destek ekipmanlarını taşıyor. Misyon, 7 aylık yolculukla 2026 yılının başında Mars'a ulaşacak. Bu misyon, insanlı Mars misyonları öncesi kritik testleri de içeriyor. Starship'in Mars atmosferinde iniş yapabilme yeteneği, gelecekteki astronot misyonları için hayati önem taşıyor. NASA da bu projeye destek veriyor ve Artemis programıyla koordineli çalışmalar yürütüyor.",
                category: "space",
                emoji: "🚀",
                date: "31 Ağustos 2025",
                readCount: 0
            },
            {
                id: 3,
                title: "Apple iPhone 17 Serisi: Katlanabilir Ekran ve Hologram Teknolojisi",
                excerpt: "Apple'ın 2026 için planladığı iPhone 17 serisi, katlanabilir ekran teknolojisi ve AR hologram özelliklerini bir araya getiriyor...",
                fullContent: "Apple, iPhone serisinin geleceğini yeniden şekillendirecek devrim niteliğinde yenilikler üzerinde çalışıyor. Şirketin 2026 yılında piyasaya süreceği iPhone 17 serisi, Samsung ve Google'ın katlanabilir telefon pazarındaki hakimiyetine meydan okuyacak. Sızıntılar, Apple'ın kendi geliştirdiği ultra-ince cam teknolojisi kullanacağını ve ekranın 20.000 kez katlanabilme dayanıklılığına sahip olacağını gösteriyor. Ayrıca, yeni A19 Bionic çip ile desteklenen hologram özelliği, kullanıcıların 3D içerikleri gerçek boyutlarda görüntülemesine olanak tanıyacak. Bu teknoloji, özellikle AR oyunlar ve eğitim uygulamaları için büyük potansiyel taşıyor.",
                category: "mobile",
                emoji: "📱",
                date: "30 Ağustos 2025",
                readCount: 0
            },
            {
                id: 4,
                title: "Google Quantum AI Breakthrough: 1000 Qubit İşlemci Duyuruldu",
                excerpt: "Google'ın Quantum AI laboratuvarı, 1000 qubit kapasiteli yeni kuantum işlemciyi duyurdu. Bu gelişme kuantum üstünlüğünde yeni bir dönüm noktası...",
                fullContent: "Google'ın Quantum AI bölümü, kuantum bilgisayar teknolojisinde çığır açacak bir gelişmeyi duyurdu. Willow adı verilen yeni kuantum işlemci, 1000 qubit kapasitesiyle şu ana kadar üretilen en güçlü kuantum bilgisayar olma özelliği taşıyor. Bu işlemci, klasik bilgisayarların milyarlarca yıl sürecek hesaplamaları saniyeler içinde yapabiliyor. Özellikle ilaç keşfi, iklim modellemesi ve kriptografi alanlarında devrim yaratması bekleniyor. IBM ve IonQ gibi rakip şirketler de benzer projeler üzerinde çalışsa da Google'ın bu başarısı sektördeki liderliğini pekiştiriyor. Şirket, 2026 yılında ticari uygulamaları başlatmayı planlıyor.",
                category: "quantum",
                emoji: "⚛️",
                date: "29 Ağustos 2025",
                readCount: 0
            },
            {
                id: 5,
                title: "Bitcoin 100.000$ Seviyesini Aştı: Blockchain Teknolojisi Yeni Rekorlar",
                excerpt: "Bitcoin tarihinde ilk kez 100.000 dolarlık barrier'ı aştı. Institutional adoption artarken, blockchain teknolojisi her sektöre yayılıyor...",
                fullContent: "Bitcoin, tarihi bir milestone'u geçerek 100.000 dolar seviyesini aştı. Bu artışın arkasında kurumsal yatırımcıların artan ilgisi, Bitcoin ETF'lerinin başarısı ve gelişmekte olan ülkelerin Bitcoin'i rezerv para birimi olarak kabul etmesi yatıyor. El Salvador ve CAR'ın ardından, 5 ülke daha Bitcoin'i yasal tender olarak kabul edeceğini açıkladı. Blockchain teknolojisi de healthcare, supply chain ve voting sistemleri gibi alanlarda yaygınlaşıyor. Ethereum 2.0'ın tam entegrasyonu ile birlikte, enerji tüketimi %99.95 azaltılırken, transaction hızları 100.000 TPS'e çıktı. DeFi protokolleri de toplam 500 milyar dolarlık likiditeye ulaştı.",
                category: "blockchain",
                emoji: "₿",
                date: "28 Ağustos 2025",
                readCount: 0
            },
            {
                id: 6,
                title: "Siber Güvenlik Alarmı: Quantum-Safe Şifreleme Algoritmaları Devrede",
                excerpt: "NIST'in onayladığı quantum-safe şifreleme algoritmaları, kuantum bilgisayar tehdidine karşı yeni güvenlik standartları oluşturuyor...",
                fullContent: "Ulusal Standartlar ve Teknoloji Enstitüsü (NIST), kuantum bilgisayar tehdidine karşı geliştirilen yeni şifreleme algoritmalarını resmi olarak onayladı. Post-Quantum Cryptography (PQC) olarak adlandırılan bu sistemler, kuantum bilgisayarların mevcut RSA ve ECC şifreleme yöntemlerini kırma potansiyeline karşı koruma sağlıyor. Microsoft, Google ve Amazon gibi tech devleri, cloud servislerini bu yeni standartlara göre güncelliyor. Özellikle finansal kurumlar ve devlet kurumları, 2026 yılına kadar tam geçişi tamamlamalı. Ayrıca, AI destekli siber saldırıların artmasıyla birlikte, adaptive security sistemleri de geliştirilmeye devam ediyor. Zero-trust architecture modeli, şirketlerin %80'inde standard haline geldi.",
                category: "cybersecurity",
                emoji: "🛡️",
                date: "27 Ağustos 2025",
                readCount: 0
            },
            {
                id: 7,
                title: "Tesla Bot (Optimus) Ev Hizmetlerinde İlk Test Uygulamaları",
                excerpt: "Tesla'nın humanoid robotu Optimus, ev hizmetleri alanında ilk pilot testlere başladı. Temizlik ve güvenlik görevlerinde başarılı sonuçlar...",
                fullContent: "Tesla'nın humanoid robotu Optimus, gerçek yaşam testlerine geçiş yaparak ev hizmetleri sektöründe pilot uygulamalara başladı. Kaliforniya'da seçili evlerde yapılan testlerde robot, temizlik, güvenlik ve basit mutfak görevlerini başarıyla yerine getiriyor. Elon Musk'ın açıklamalarına göre, robot saatte 20.000 dolar değerinde işgücü tasarrufu sağlayabiliyor. Optimus'un gelişmiş AI sistemi, ev düzenini öğrenerek kişiye özel hizmet sunabiliyor. Boston Dynamics'in Atlas'ı ve Honda'nın ASIMO'su ile kıyaslandığında, Optimus daha ekonomik ve pratik çözümler sunuyor. Şirket, 2026 yılında consumer versiyonu için 25.000 dolarlık fiyat hedefliyor. Japonya'da aging society problemine çözüm olarak büyük ilgi görüyor.",
                category: "ai",
                emoji: "🤖",
                date: "26 Ağustos 2025",
                readCount: 0
            },
            {
                id: 8,
                title: "5G Network Coverage %95'e Ulaştı: 6G Araştırmaları Hızlanıyor",
                excerpt: "Türkiye'de 5G kapsama oranı %95'e ulaşırken, 6G teknolojisi için araştırma-geliştirme çalışmaları hızlanıyor. 2030 hedefi net...",
                fullContent: "Türkiye'de 5G network coverage %95 seviyesine ulaşarak, Avrupa ortalamasını geçti. Turkcell, Vodafone ve Türk Telekom'un ortak yatırımlarıyla kurulan altyapı, özellikle smart city projelerinde kritik rol oynuyor. İstanbul, Ankara ve İzmir'de 5G tabanlı autonomous vehicle testleri başladı. Parallel olarak 6G teknolojisi için TÜBİTAK koordinesinde araştırmalar yürütülüyor. 6G'nin theoretical hızları 1 Tbps'e ulaşacak, latency 0.1ms seviyesine inecek. Hologram iletişim, brain-computer interface ve immersive AR/VR uygulamalar 6G ile gerçekleşecek. Samsung, Nokia ve Ericsson'la yapılan işbirliği anlaşmaları, Türkiye'yi 6G development hub haline getirmeyi hedefliyor. 2030 commercial deployment planlanıyor.",
                category: "mobile",
                emoji: "📶",
                date: "25 Ağustos 2025",
                readCount: 0
            }
        ];

        let filteredNews = [...newsData];
        let currentCategory = 'all';

        // DOM Elements
        const newsGrid = document.getElementById('newsGrid');
        const loadingNews = document.getElementById('loadingNews');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const filterBtns = document.querySelectorAll('.filter-btn');

        // Initialize page
        function init() {
            setTimeout(() => {
                loadingNews.style.display = 'none';
                renderNews(newsData);
            }, 1000);

            // Event listeners
            filterBtns.forEach(btn => {
                btn.addEventListener('click', handleCategoryFilter);
            });

            searchInput.addEventListener('input', handleSearch);
            searchBtn.addEventListener('click', handleSearch);
        }

        // Render news cards
        function renderNews(news) {
            if (news.length === 0) {
                newsGrid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; color: white; padding: 40px;">
                        <h3>Aradığınız kriterlerde haber bulunamadı. 😔</h3>
                        <p>Farklı kategoriler veya arama terimleri deneyebilirsiniz.</p>
                    </div>
                `;
                return;
            }

            newsGrid.innerHTML = news.map(item => `
                <article class="news-card" data-category="${item.category}">
                    <div class="news-image">
                        ${item.emoji}
                        <div class="category-badge">${getCategoryName(item.category)}</div>
                    </div>
                    <div class="news-content">
                        <div class="news-meta">
                            <span class="news-date">${item.date}</span>
                            <div class="read-count" id="readCount-${item.id}">
                                👁️ <span id="count-${item.id}">${item.readCount}</span> okuma
                            </div>
                        </div>
                        <h3 class="news-title">${item.title}</h3>
                        <p class="news-excerpt">${item.excerpt}</p>
                        <div class="news-actions">
                            <button class="read-more-btn" onclick="toggleReadMore(${item.id})">
                                Devamını Oku
                            </button>
                        </div>
                        <div class="expanded-content" id="expanded-${item.id}">
                            <p>${item.fullContent}</p>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        // Toggle read more content
        function toggleReadMore(id) {
            const expandedContent = document.getElementById(`expanded-${id}`);
            const readCount = document.getElementById(`readCount-${id}`);
            const countElement = document.getElementById(`count-${id}`);
            const btn = event.target;

            if (expandedContent.classList.contains('visible')) {
                expandedContent.classList.remove('visible');
                btn.textContent = 'Devamını Oku';
            } else {
                expandedContent.classList.add('visible');
                btn.textContent = 'Daha Az Göster';

                // Increment read count
                const newsItem = newsData.find(item => item.id === id);
                if (newsItem) {
                    newsItem.readCount++;
                    countElement.textContent = newsItem.readCount;
                    readCount.classList.add('visible');
                }
            }
        }

        // Get category name in Turkish
        function getCategoryName(category) {
            const categoryNames = {
                'ai': 'Yapay Zeka',
                'space': 'Uzay Tech',
                'mobile': 'Mobil',
                'blockchain': 'Blockchain',
                'quantum': 'Kuantum',
                'cybersecurity': 'Siber Güvenlik'
            };
            return categoryNames[category] || 'Genel';
        }

        // Handle category filtering
        function handleCategoryFilter(e) {
            const category = e.target.dataset.category;
            currentCategory = category;

            // Update active button
            filterBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Filter and render news
            filterNews();
        }

        // Handle search
        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            filterNews(searchTerm);
        }

        // Filter news based on category and search
        function filterNews(searchTerm = '') {
            let filtered = newsData;

            // Filter by category
            if (currentCategory !== 'all') {
                filtered = filtered.filter(item => item.category === currentCategory);
            }

            // Filter by search term
            if (searchTerm) {
                filtered = filtered.filter(item => 
                    item.title.toLowerCase().includes(searchTerm) ||
                    item.excerpt.toLowerCase().includes(searchTerm) ||
                    item.fullContent.toLowerCase().includes(searchTerm)
                );
            }

            filteredNews = filtered;
            renderNews(filteredNews);
        }

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const navbar = document.querySelector('.navbar');

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop;
        });

        // Search on Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        // Initialize page when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);

        // SEO and performance optimizations
        document.addEventListener('DOMContentLoaded', () => {
            // Lazy loading for images (if we had real images)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            // Add structured data for SEO
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": "TechNova Teknoloji Haberleri",
                "description": "En güncel teknoloji haberleri ve derinlemesine analizler",
                "author": {
                    "@type": "Organization",
                    "name": "TechNova"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "TechNova",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://technova.com/logo.png"
                    }
                },
                "datePublished": new Date().toISOString(),
                "dateModified": new Date().toISOString()
            };

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
        });

        // Analytics tracking (placeholder)
        function trackEvent(eventName, properties) {
            // Google Analytics or other analytics tracking
            console.log('Event tracked:', eventName, properties);
        }

        // Track news card interactions
        newsGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more-btn')) {
                const newsCard = e.target.closest('.news-card');
                const category = newsCard.dataset.category;
                trackEvent('news_read_more_clicked', { category });
            }
        });