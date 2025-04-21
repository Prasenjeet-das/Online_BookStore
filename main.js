// DOM Elements
const cartCount = document.querySelector('.cart-count');
const themeToggle = document.querySelector('.theme-toggle');
const searchInput = document.getElementById('searchInput');
const booksGrid = document.querySelector('.books-grid');
const booksCarousel = document.querySelector('.books-carousel');

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Theme functionality
let isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Update cart count
function updateCartCount() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add to cart
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    const cartItem = cart.find(item => item.id === bookId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...book, quantity: 1 });
    }

    saveCart();
    showNotification('Book added to cart!');
}

// Remove from cart
function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCart();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// Update quantity
function updateQuantity(bookId, change) {
    const cartItem = cart.find(item => item.id === bookId);
    if (cartItem) {
        cartItem.quantity = Math.max(1, cartItem.quantity + change);
        saveCart();
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
    }
}

// Create book card
function createBookCard(book) {
    return `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>By ${book.author}</p>
                <div class="book-rating">
                    ${createStarRating(book.rating)}
                </div>
                <p class="book-price">₹${book.price}</p>
                <button onclick="addToCart(${book.id})" class="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Create star rating
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }

    return `<div class="stars">${stars} <span>(${rating})</span></div>`;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 100);
}

// Render featured books
function renderFeaturedBooks() {
    if (booksCarousel) {
        const featuredBooksList = featuredBooks.map(id => books.find(book => book.id === id));
        booksCarousel.innerHTML = featuredBooksList.map(book => createBookCard(book)).join('');
    }
}

// Render all books
function renderBooks(filteredBooks = books) {
    if (booksGrid) {
        booksGrid.innerHTML = filteredBooks.map(book => createBookCard(book)).join('');
    }
}

// Render cart
function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    const subtotalElement = document.querySelector('.subtotal');
    const totalElement = document.querySelector('.total-amount');
    const emptyCartMessage = document.querySelector('.empty-cart-message');

    if (cartItems && subtotalElement && totalElement) {
        if (cart.length === 0) {
            cartItems.parentElement.style.display = 'none';
            emptyCartMessage.style.display = 'block';
            return;
        }

        cartItems.parentElement.style.display = 'grid';
        emptyCartMessage.style.display = 'none';

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>By ${item.author}</p>
                    <p class="cart-item-price">₹${item.price}</p>
                </div>
                <div class="cart-item-actions">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeFromCart(${item.id})" class="remove-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        subtotalElement.textContent = `₹${subtotal}`;
        totalElement.textContent = `₹${subtotal}`;
    }
}

// Search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm)
    );
    renderBooks(filteredBooks);
}

// Filter books by category
function filterByCategory(category) {
    const filteredBooks = category === 'all' 
        ? books 
        : books.filter(book => book.category === category);
    renderBooks(filteredBooks);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const errorMessages = contactForm.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.textContent = '');

            // Validate name
            const name = contactForm.querySelector('#name');
            if (!name.value.trim()) {
                name.nextElementSibling.textContent = 'Name is required';
                isValid = false;
            }

            // Validate email
            const email = contactForm.querySelector('#email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.nextElementSibling.textContent = 'Please enter a valid email';
                isValid = false;
            }

            // Validate message
            const message = contactForm.querySelector('#message');
            if (!message.value.trim()) {
                message.nextElementSibling.textContent = 'Message is required';
                isValid = false;
            }

            if (isValid) {
                showNotification('Message sent successfully!');
                contactForm.reset();
            }
        });
    }

    // Initialize page content
    updateCartCount();
    renderFeaturedBooks();
    renderBooks();
    renderCart();

    // Clear cart button
    const clearCartBtn = document.querySelector('.clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            cart = [];
            saveCart();
            renderCart();
        });
    }

    // Category filters
    const categoryFilters = document.querySelector('.category-filters');
    if (categoryFilters) {
        const checkboxes = categoryFilters.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const selectedCategories = Array.from(checkboxes)
                    .filter(cb => cb.checked)
                    .map(cb => cb.value);
                
                const filteredBooks = selectedCategories.length === 0
                    ? books
                    : books.filter(book => selectedCategories.includes(book.category.toLowerCase()));
                
                renderBooks(filteredBooks);
            });
        });
    }
}); 