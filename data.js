// Book data
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 749,
        category: "Fiction",
        rating: 4.5,
        image: "https://covers.openlibrary.org/b/id/6498519-L.jpg",
        description: "A story of decadence and excess, The Great Gatsby captures the spirit of the Jazz Age and the American Dream."
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 899,
        category: "Fiction",
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        description: "A gripping, heart-wrenching tale of race, class, and justice in the American South."
    },
    {
        id: 3,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        price: 1099,
        category: "Science",
        rating: 4.6,
        image: "https://covers.openlibrary.org/b/id/6517391-L.jpg",
        description: "Explore the mysteries of the universe, from the Big Bang to black holes."
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 649,
        category: "Romance",
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/id/12645114-L.jpg",
        description: "A timeless romance about the spirited Elizabeth Bennet and the proud Mr. Darcy."
    },
    {
        id: 5,
        title: "The Origin of Species",
        author: "Charles Darwin",
        price: 1299,
        category: "Science",
        rating: 4.4,
        image: "https://covers.openlibrary.org/b/id/8231562-L.jpg",
        description: "The groundbreaking work that introduced the theory of evolution through natural selection."
    },
    {
        id: 6,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: 849,
        category: "Mystery",
        rating: 4.2,
        image: "https://covers.openlibrary.org/b/id/6512441-L.jpg",
        description: "A thrilling mystery that blends art, religion, and conspiracy theories."
    },
    {
        id: 7,
        title: "1984",
        author: "George Orwell",
        price: 799,
        category: "Fiction",
        rating: 4.6,
        image: "https://covers.openlibrary.org/b/id/7222236-L.jpg",
        description: "A dystopian masterpiece about surveillance, control, and the power of truth."
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 999,
        category: "Fantasy",
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
        description: "Join Bilbo Baggins on an epic adventure through Middle-earth."
    },
    {
        id: 9,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 749,
        category: "Fiction",
        rating: 4.5,
        image: "https://covers.openlibrary.org/b/id/7989100-L.jpg",
        description: "A magical story about following your dreams and listening to your heart."
    },
    {
        id: 10,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 1199,
        category: "Non-Fiction",
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/id/8233325-L.jpg",
        description: "A brief history of humankind, exploring the evolution of our species."
    },
    {
        id: 11,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: 899,
        category: "Mystery",
        rating: 4.3,
        image: "https://covers.openlibrary.org/b/id/10389354-L.jpg",
        description: "A psychological thriller about a woman who shoots her husband and then stops speaking."
    },
    {
        id: 12,
        title: "Educated",
        author: "Tara Westover",
        price: 1099,
        category: "Non-Fiction",
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/id/8746103-L.jpg",
        description: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD."
    },
    {
        id: 13,
        title: "The Night Circus",
        author: "Erin Morgenstern",
        price: 849,
        category: "Fantasy",
        rating: 4.4,
        image: "https://covers.openlibrary.org/b/id/7081826-L.jpg",
        description: "A magical competition between two young illusionists in a mysterious circus."
    },
    {
        id: 14,
        title: "Atomic Habits",
        author: "James Clear",
        price: 999,
        category: "Non-Fiction",
        rating: 4.6,
        image: "https://covers.openlibrary.org/b/id/10779971-L.jpg",
        description: "A guide to building good habits and breaking bad ones."
    },
    {
        id: 15,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        price: 799,
        category: "Fiction",
        rating: 4.5,
        image: "https://covers.openlibrary.org/b/id/8240318-L.jpg",
        description: "A retelling of the Iliad from the perspective of Patroclus."
    },
    {
        id: 16,
        title: "Project Hail Mary",
        author: "Andy Weir",
        price: 1199,
        category: "Science",
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/id/10837766-L.jpg",
        description: "A lone astronaut must save the earth from disaster in this science fiction adventure."
    }
];

// Categories with their descriptions
const categories = [
    {
        name: "Fiction",
        description: "Explore imaginative stories and narratives"
    },
    {
        name: "Non-Fiction",
        description: "Discover real-world knowledge and experiences"
    },
    {
        name: "Science",
        description: "Uncover the mysteries of the natural world"
    },
    {
        name: "Romance",
        description: "Experience tales of love and relationships"
    },
    {
        name: "Mystery",
        description: "Solve intriguing puzzles and crimes"
    },
    {
        name: "Fantasy",
        description: "Journey through magical and mythical realms"
    }
];

// Featured books (can be a subset of all books)
const featuredBooks = [1, 4, 8, 10, 16]; // IDs of featured books 