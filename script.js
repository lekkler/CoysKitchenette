document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Menu tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');

            // Hide all menu categories
            menuCategories.forEach(cat => cat.classList.remove('active'));
            // Show the selected category
            const tab = this.getAttribute('data-tab');
            document.getElementById(tab).classList.add('active');
        });
    });

    // Sample menu data
    const menuData = {
        sizzlings: [
            {
                name: "Sizzling Pork Sisig",
                description: "Crispy pork belly with onions, chili peppers, and egg",
                price: "SOLO ₱109 / PLATTER ₱190",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Sizzling Pork Chop",
                description: "Crispy pork chop with special gravy",
                price: "SOLO ₱119/ PLATTER ₱190",
                image: "https://images.unsplash.com/photo-1546069901-ba959c42751c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Sizzling Liempo",
                description: "Pork belly with special gravy",
                price: "SOLO ₱119 / PLATTER ₱190",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Sizzling Bangus Sisig",
                description: "Juicy bangus with onions, chili peppers.",
                price: "SOLO ₱139 / PLATTER ₱220",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Sizzling Chicken Katsu",
                description: "Crispy chicken cutlet with special gravy and vegetables.",
                price: "SOLO ₱139 / PLATTER ₱220",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Sizzling Spicy Chicken",
                description: "Crispy chicken cutlet with special gravy and vegetables.",
                price: "SOLO ₱139 / PLATTER ₱220",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Sizzling Garlic Pepper Beef",
                description: "Tender beef strips stir-fried with garlic and pepper.",
                price: "SOLO ₱139 / PLATTER ₱220",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "UNLI RICE SIZZLING",
                description: "Just Add ₱35 for unlimited rice with any sizzling dish",
                price: "₱35",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }



        ],
        silog: [
            {
                name: "TapSilog",
                description: "Beef tapa, garlic fried rice, and egg",
                price: "₱109",
                image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "ChickSilog",
                description: "Juicy Chicken, garlic rice, and egg",
                price: "₱109 ",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "LiempoSilog",
                description: "Pork belly, garlic rice, and egg",
                price: "₱109",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "PorkSilog",
                description: "Fried pork, garlic rice, and egg",
                price: "₱109",
                image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "BangSilog",
                description: "Fried bangus, garlic rice, and egg",
                price: "₱99",
                image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "HotSilog",
                description: "Fried hotdog, garlic rice, and egg",
                price: "₱99",
                image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "SpamSilog",
                description: "Fried spam, garlic rice, and egg",
                price: "₱99",
                image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }
        ],
        chao: [
            {
                name: "Chao Fan Pork Siomai",
                description: "Special fried rice with Pork Siomai",
                price: "₱89",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Chao Fan Beef Siomai",
                description: "Special fried rice with Beef Siomai",
                price: "₱99",
                image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Chao Fan Dumplings",
                description: "Special fried rice with Dumplings ",
                price: "₱99",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Chao Fan Shanghai",
                description: "Special fried rice with Shanghai",
                price: "₱99",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "5 pcs Beef Siomai",
                description: "5 pieces of Beef Siomai",
                price: "₱45",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }, 
            {
                name: "5 pcs Pork Siomai",
                description: "5 pieces of Pork Siomai",
                price: "₱45",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
 {
                name: "5 pcs Japanese Siomai",
                description: "5 pieces of Japanese Siomai",
                price: "₱55",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
             {
                name: "5 pcs Dumplings",
                description: "5 pieces of Dumplings",
                price: "₱55",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }, 
            {
                name: "5 pcs Gyoza",
                description: "5 pieces of Gyoza",
                price: "₱55",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }, 
            {
                name: "5 pcs Shanghai",
                description: "5 pieces of Shanghai",
                price: "₱55",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }



        ],
        other: [
            {
                name: "Lomi Batangas",
                description: "Noodle Soup specialty of Batangas",
                price: "Regular - ₱99 / Special - ₱105 / Overload - ₱399", 
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Bulalo",
                description: "Beef shank soup",
                price: "Solo - ₱145 / For Sharing - ₱380",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Extra Rice",
                description: "Fried rice or Plain rice",
                price: "₱20",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }
            ,
            {
                name: "Bento Boxes (20+ Orders)",
                description: "Customizable bento boxes for events, Contact us For Details and Menus",
                price: "₱150 - ₱250",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Catering Foods",
                description: "Packaged foods for events, Contact us For Details and Menus",
                price: "₱0 - Price depends on the menu",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            }
        ],
        drinks: [
            {
                name: "1 Pitcher of Iced Tea",
                description: "Refreshing house blend iced tea",
                price: "₱85",
                image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "1 Pitcher of Lemonade",
                description: "Refreshing lemonade",
                price: "₱85",
                image: "https://images.unsplash.com/photo-1508255131605-e4083a0e8aee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Fruit Soda Strawberry",
                description: "Strawberries blended with soda",
                price: "₱49 / ₱59 with yakult",
                image: "https://images.unsplash.com/photo-1600271886742-f049cd5b8a3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
            {
                name: "Fruit Soda Green Apple",
                description: "Green apple blended with soda",
                price: "₱49 / ₱59 with yakult",
                image: "https://images.unsplash.com/photo-1600271886742-f049cd5b8a3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
             {
                name: "Fruit Soda Lychee",
                description: "Lychee blended with soda",
                price: "₱49 / ₱59 with yakult",
                image: "https://images.unsplash.com/photo-1600271886742-f049cd5b8a3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
             {
                name: "Fruit Soda Blueberry",
                description: "Blueberrie blended with soda",
                price: "₱49 / ₱59 with yakult",
                image: "https://images.unsplash.com/photo-1600271886742-f049cd5b8a3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            },
        ]
    };

    // Function to populate menu items
    function populateMenu(category, items) {
        const menuGrid = document.querySelector(`#${category} .menu-grid`);
        if (!menuGrid) return; // Skip if element doesn't exist
        
        menuGrid.innerHTML = '';
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            menuItem.innerHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="menu-item-price">${item.price}</div>
                </div>
            `;
            
            menuGrid.appendChild(menuItem);
        });
    }

    // Populate all menus
    for (const category in menuData) {
        populateMenu(category, menuData[category]);
    }

    // Update active nav link based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

});