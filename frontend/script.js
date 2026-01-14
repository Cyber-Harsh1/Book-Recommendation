// --- BOOK DATA ---
const featured_books = [
  { 
    title: "The Seven Husbands of Evelyn Hugo", 
    author: "Taylor Jenkins Reid", 
    genre: "Fiction", 
    desc: "The glamorous life of an old Hollywood icon.", 
    about: "Evelyn Hugo, a reclusive movie legend, finally decides to tell her story — revealing the truth behind her seven marriages and one forbidden love that defined her life. A dazzling, emotional novel about fame, love, and ambition.", 
    img: "https://covers.openlibrary.org/b/id/12501329-L.jpg" 
  },
  { 
    title: "Project Hail Mary", 
    author: "Andy Weir", 
    genre: "Science Fiction", 
    desc: "A lone astronaut’s mission to save humanity.", 
    about: "Ryland Grace wakes up in space with no memory — and finds himself the last hope for Earth. Combining science, humor, and heart, this thrilling adventure from the author of *The Martian* will keep you glued till the end.", 
    img: "https://covers.openlibrary.org/b/id/12662742-L.jpg" 
  },
  { 
    title: "The Book Thief", 
    author: "Markus Zusak", 
    genre: "Historical Fiction", 
    desc: "A story of words, war, and humanity.", 
    about: "Narrated by Death, this novel follows Liesel, a girl growing up in Nazi Germany, who finds solace in stolen books and the power of storytelling. It’s poetic, emotional, and unforgettable.", 
    img: "https://covers.openlibrary.org/b/id/12054658-L.jpg" 
  },
  { 
    title: "Dune", 
    author: "Frank Herbert", 
    genre: "Science Fiction", 
    desc: "A battle for power on a desert planet.", 
    about: "Set on the desert world of Arrakis, *Dune* is the epic tale of Paul Atreides and his journey through politics, prophecy, and destiny. A masterpiece that redefined sci-fi world-building.", 
    img: "https://covers.openlibrary.org/b/id/8231996-L.jpg" 
  },
  { 
    title: "The Night Circus", 
    author: "Erin Morgenstern", 
    genre: "Fantasy", 
    desc: "A magical circus beyond imagination.", 
    about: "Le Cirque des Rêves appears without warning and captivates visitors with its wonders. But behind its beauty lies a deadly competition between two magicians destined to fall in love.", 
    img: "https://covers.openlibrary.org/b/id/7222242-L.jpg" 
  },
  { 
    title: "Becoming", 
    author: "Michelle Obama", 
    genre: "Biography", 
    desc: "A deeply personal story of hope and empowerment.", 
    about: "In her inspiring memoir, Michelle Obama reflects on her life — from her childhood in Chicago to her years in the White House — and shares lessons on resilience, family, and authenticity.", 
    img: "https://covers.openlibrary.org/b/id/9254814-L.jpg" 
  },
  { 
    title: "The Shadow of the Wind", 
    author: "Carlos Ruiz Zafón", 
    genre: "Mystery", 
    desc: "A hidden library, a forgotten author, and a deadly secret.", 
    about: "In post-war Barcelona, a boy discovers a mysterious book that changes his life forever. This novel blends mystery, love, and literature in a hauntingly beautiful way.", 
    img: "https://covers.openlibrary.org/b/id/8394495-L.jpg" 
  },
  { 
    title: "Where the Crawdads Sing", 
    author: "Delia Owens", 
    genre: "Drama", 
    desc: "A haunting tale of survival and mystery.", 
    about: "Set in the marshlands of North Carolina, it tells the story of Kya Clark, the 'Marsh Girl,' who becomes a murder suspect. A mix of mystery, romance, and nature writing that’s both lyrical and gripping.", 
    img: "https://covers.openlibrary.org/b/id/12519947-L.jpg" 
  },
  { 
    title: "The Atlas Six", 
    author: "Olivie Blake", 
    genre: "Fantasy", 
    desc: "Six magicians. One deadly secret.", 
    about: "In this dark academia fantasy, six talented magicians are chosen to join a secret society that guards lost knowledge — but only five will survive. A story of ambition, power, and betrayal.", 
    img: "https://covers.openlibrary.org/b/id/13652383-L.jpg" 
  },
  { 
    title: "The Measure", 
    author: "Nikki Erlick", 
    genre: "Speculative Fiction", 
    desc: "If you could know how long you’d live, would you want to?", 
    about: "One morning, everyone in the world receives a small box with a string that reveals how long they have left to live. A powerful, thought-provoking story about fate, free will, and human connection.", 
    img: "https://covers.openlibrary.org/b/id/14069345-L.jpg" 
  },
  { 
    title: "The Alchemist", 
    author: "Paulo Coelho", 
    genre: "Fiction", 
    desc: "A journey of self-discovery.", 
    about: "The Alchemist follows a young Andalusian shepherd named Santiago who dreams of finding treasure in the Egyptian pyramids. His journey takes him from Spain to the markets of Tangier and across the Egyptian desert, where he learns to listen to his heart and follow his dreams.",
    img: "https://covers.openlibrary.org/b/id/8228691-L.jpg" 
  },
  { 
    title: "Atomic Habits", 
    author: "James Clear", 
    genre: "Self Help", 
    desc: "Tiny changes, big results.", 
    about: "Atomic Habits offers a proven framework for improving every day. James Clear reveals how small, incremental changes can compound into remarkable results.",
    img: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg" 
  },
  { 
    title: "Sapiens", 
    author: "Yuval Noah Harari", 
    genre: "History", 
    desc: "A brief history of humankind.", 
    about: "Sapiens explores how Homo sapiens came to dominate Earth and examines how societies evolved and organized themselves.",
    img: "https://miro.medium.com/0*RArKNBFL91CwGeWU" 
  },
  { 
    title: "1984", 
    author: "George Orwell", 
    genre: "Dystopian", 
    desc: "A chilling vision of a totalitarian future.", 
    about: "1984 is a dystopian novel set in a totalitarian society ruled by the Party and Big Brother.",
    img: "https://covers.openlibrary.org/b/id/7222246-L.jpg" 
  },
  { 
    title: "Harry Potter", 
    author: "J.K. Rowling", 
    genre: "Fantasy", 
    desc: "The boy who lived.", 
    about: "Harry Potter follows the journey of a young wizard as he learns magic and faces dark forces.",
    img: "https://covers.openlibrary.org/b/id/7984916-L.jpg" 
  }
];

// --- BOOK DATA ---
const popular_books = [
  { 
    title: "The Silent Patient", 
    author: "Alex Michaelides", 
    genre: "Thriller", 
    desc: "A chilling psychological mystery.", 
    about: "Alicia Berenson’s life seems perfect — until she shoots her husband five times in the face and never speaks again. A criminal psychotherapist is determined to unravel her silence, leading to a shocking revelation.", 
    img: "https://covers.openlibrary.org/b/id/9789876-L.jpg" 
  },
  { 
    title: "The Midnight Library", 
    author: "Matt Haig", 
    genre: "Fantasy", 
    desc: "Between life and death lies a library.", 
    about: "Nora Seed finds herself in a library that allows her to try out different versions of her life. Each book offers a new path — and teaches her what truly makes life worth living.", 
    img: "https://covers.openlibrary.org/b/id/10958382-L.jpg" 
  },
  { 
    title: "Rich Dad Poor Dad", 
    author: "Robert T. Kiyosaki", 
    genre: "Finance", 
    desc: "Think differently about money.", 
    about: "A classic personal finance book that contrasts the mindset of the rich and poor. Kiyosaki shares lessons on building wealth, investing wisely, and achieving financial independence.", 
    img: "https://covers.openlibrary.org/b/id/14874459-L.jpg" 
  },
  { 
    title: "The Psychology of Money", 
    author: "Morgan Housel", 
    genre: "Self-help", 
    desc: "Timeless lessons on wealth, greed, and happiness.", 
    about: "Morgan Housel explores how people think about money — and why behaving wisely matters more than being smart. The book blends stories and behavioral insights to teach better financial thinking.", 
    img: "https://covers.openlibrary.org/b/id/10634239-L.jpg" 
  },
  { 
    title: "The Subtle Art of Not Giving a F*ck", 
    author: "Mark Manson", 
    genre: "Self-help", 
    desc: "A counterintuitive approach to living a good life.", 
    about: "Mark Manson cuts through the clichés of positivity and argues that accepting flaws, fears, and limitations can lead to a more meaningful life. It’s a refreshing guide to emotional strength.", 
    img: "https://covers.openlibrary.org/b/id/8377122-L.jpg" 
  },
  { 
    title: "It Ends With Us", 
    author: "Colleen Hoover", 
    genre: "Romance", 
    desc: "A powerful story about love and resilience.", 
    about: "Lily Bloom’s world changes when she meets Ryle, a charming neurosurgeon. But as his darker side emerges, she must confront painful memories and decide between love and survival.", 
    img: "https://covers.openlibrary.org/b/id/12856250-L.jpg" 
  },
  { 
    title: "The Girl on the Train", 
    author: "Paula Hawkins", 
    genre: "Mystery", 
    desc: "Every day she watches. Every day she imagines.", 
    about: "Rachel takes the same train daily, fantasizing about the lives of people she sees through the window — until she becomes entangled in a real-life mystery involving love, loss, and lies.", 
    img: "https://covers.openlibrary.org/b/id/8226195-L.jpg" 
  },
  { 
    title: "Educated", 
    author: "Tara Westover", 
    genre: "Biography", 
    desc: "A memoir of determination and self-discovery.", 
    about: "Tara Westover was born to survivalists in rural Idaho and had no formal education. Her journey to earn a PhD from Cambridge is an inspiring story of resilience and transformation.", 
    img: "https://covers.openlibrary.org/b/id/9255510-L.jpg" 
  },
  { 
    title: "The Power of Habit", 
    author: "Charles Duhigg", 
    genre: "Self-help", 
    desc: "Why we do what we do in life and business.", 
    about: "This bestseller reveals how habits are formed, how they can be changed, and how companies and individuals can use this science to transform their lives.", 
    img: "https://covers.openlibrary.org/b/id/7270066-L.jpg" 
  },
  { 
    title: "A Man Called Ove", 
    author: "Fredrik Backman", 
    genre: "Fiction", 
    desc: "A curmudgeon with a kind heart.", 
    about: "Ove is a grumpy old man whose life changes when new neighbors move in. Through unexpected friendships, he finds new purpose and learns that life’s meaning is often hidden in small acts of kindness.", 
    img: "https://covers.openlibrary.org/b/id/8107891-L.jpg" 
  }
];

// --- NEW ARRIVALS ---
const newArrivals = [
  { 
    title: "Fourth Wing", 
    author: "Rebecca Yarros", 
    genre: "Fantasy", 
    desc: "Enter the deadly world of dragon riders.", 
    about: "Violet Sorrengail is forced into a war college where she must train to become a dragon rider. Facing dangerous trials, enemies, and a sizzling romance, she discovers that dragons bond only with the strongest riders — and weakness means death.", 
    img: "https://covers.openlibrary.org/b/id/14452558-L.jpg" 
  },
  { 
    title: "Iron Flame", 
    author: "Rebecca Yarros", 
    genre: "Fantasy", 
    desc: "The fiery sequel to Fourth Wing.", 
    about: "Violet faces new challenges as betrayal and hidden agendas threaten everything she’s fought for. As dragons rise and secrets burn, she learns that loyalty can be deadlier than war itself.", 
    img: "https://covers.openlibrary.org/b/id/14774166-L.jpg" 
  },
  { 
    title: "Happy Place", 
    author: "Emily Henry", 
    genre: "Romance", 
    desc: "Love, friendship, and second chances.", 
    about: "A heartwarming romantic novel about a couple pretending to be together one last time during a summer trip with friends. Through laughter and heartbreak, they rediscover what truly makes a 'happy place.'", 
    img: "https://covers.openlibrary.org/b/id/14151266-L.jpg" 
  },
  { 
    title: "Spare", 
    author: "Prince Harry", 
    genre: "Biography", 
    desc: "The world’s most talked-about memoir.", 
    about: "In this raw and revealing memoir, Prince Harry recounts his life from childhood in the royal family to his decision to step back from royal duties, revealing untold truths about identity, grief, and freedom.", 
    img: "https://covers.openlibrary.org/b/id/14197369-L.jpg" 
  },
  { 
    title: "The Creative Act: A Way of Being", 
    author: "Rick Rubin", 
    genre: "Philosophy", 
    desc: "An artist’s guide to creativity and mindfulness.", 
    about: "Rick Rubin shares his profound insights into creativity, self-expression, and the art of living. A book about finding inspiration in everything and learning to create without fear or perfectionism.", 
    img: "https://covers.openlibrary.org/b/id/13923615-L.jpg" 
  },
  { 
    title: "The Covenant of Water", 
    author: "Abraham Verghese", 
    genre: "Fiction", 
    desc: "An epic saga spanning generations in South India.", 
    about: "Set in Kerala, this deeply moving story follows generations of a family haunted by a peculiar curse — where one member drowns in every generation. A sweeping tale of love, medicine, and faith.", 
    img: "https://covers.openlibrary.org/b/id/14452592-L.jpg" 
  },
  { 
    title: "Yellowface", 
    author: "R.F. Kuang", 
    genre: "Drama", 
    desc: "A biting satire on fame and authorship.", 
    about: "When June Hayward steals the unpublished manuscript of her late friend, she publishes it under a new name — and is thrust into fame. A dark, funny, and sharp critique of cultural identity and privilege.", 
    img: "https://covers.openlibrary.org/b/id/14541705-L.jpg" 
  },
  { 
    title: "Tomorrow, and Tomorrow, and Tomorrow", 
    author: "Gabrielle Zevin", 
    genre: "Fiction", 
    desc: "A story about friendship, creativity, and love.", 
    about: "Two childhood friends reunite to create video games together, exploring love and loss through the digital worlds they build. It’s a celebration of connection and art in the modern world.", 
    img: "https://covers.openlibrary.org/b/id/13819739-L.jpg" 
  },
  { 
    title: "Lessons in Chemistry", 
    author: "Bonnie Garmus", 
    genre: "Historical Fiction", 
    desc: "A scientist turns TV cooking star in the 1960s.", 
    about: "Elizabeth Zott, a brilliant chemist, becomes an unlikely TV sensation, inspiring women to think differently about work, family, and ambition — one cooking show at a time.", 
    img: "https://covers.openlibrary.org/b/id/12835235-L.jpg" 
  },
  { 
    title: "Demon Copperhead", 
    author: "Barbara Kingsolver", 
    genre: "Drama", 
    desc: "A modern retelling of Dickens’ David Copperfield.", 
    about: "Set in Appalachia, this powerful story follows a boy born into poverty who must overcome addiction, abuse, and systemic neglect — a deeply human and socially resonant novel.", 
    img: "https://covers.openlibrary.org/b/id/13104627-L.jpg" 
  }
];


// --- ELEMENTS ---
const featuredBooks = document.getElementById("featured-books");
const popularBooks = document.getElementById("popular-books");
const newBooks = document.getElementById("new-books");
const personalBooks = document.getElementById("personal-books");
const searchSection = document.getElementById("search-section");
const searchResults = document.getElementById("search-results");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const clearSearchBtn = document.getElementById("clear-search");
const toggleThemeBtn = document.getElementById("toggle-theme");
const toast = document.getElementById("toast");
const toTop = document.getElementById("to-top");
const personalSection = document.getElementById("personal-section");

// --- UTILITIES ---
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function createSkeletonCard() {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <div class="cover skeleton" style="height:240px"></div>
    <div class="book-info">
      <div class="skeleton" style="height:18px;width:70%"></div>
      <div class="skeleton" style="height:14px;width:40%;margin-top:8px"></div>
      <div class="skeleton" style="height:12px;width:90%;margin-top:10px"></div>
    </div>`;
  return card;
}

function renderSkeletons(container, count = 6) {
  if (!container) return;
  container.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) frag.appendChild(createSkeletonCard());
  container.appendChild(frag);
}

function makeCard(book) {
  const card = document.createElement("div");
  card.classList.add("book-card");

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <div class="cover"><img src="${book.img || book.imageUrl}" alt="${book.title} cover"></div>
        <div class="book-info">
          <div class="book-title">${book.title}</div>
          <div class="book-author">by ${book.author}</div>
          <div class="badges"><span class="badge">${book.genre}</span></div>
          <div class="book-desc">${book.desc || book.description || ""}</div>
          <div class="card-actions">
            <button class="btn primary read-more-btn">Read More</button>
          </div>
        </div>
      </div>

      <div class="card-back">
        <div class="book-about">
          <h3 class="about-title">About "${book.title}"</h3>
          <p class="about-text">${book.about || book.description || ""}</p>
          <button class="btn primary flip-back-btn">Back</button>
        </div>
      </div>
    </div>
  `;

  const readMoreBtn = card.querySelector(".read-more-btn");
  const flipBackBtn = card.querySelector(".flip-back-btn");

  if (readMoreBtn) readMoreBtn.addEventListener("click", () => card.classList.add("flipped"));
  if (flipBackBtn) flipBackBtn.addEventListener("click", () => card.classList.remove("flipped"));

  return card;
}

function displayBooks(container, list) {
  if (!container) return;
  container.innerHTML = "";
  const frag = document.createDocumentFragment();
  (Array.isArray(list) ? list.slice().reverse() : []).forEach(book => frag.appendChild(makeCard(book)));
  container.appendChild(frag);
}

function hydrateHome() {
  if (featuredBooks) renderSkeletons(featuredBooks);
  if (popularBooks) renderSkeletons(popularBooks);
  if (newBooks) renderSkeletons(newBooks);
  if (personalBooks) renderSkeletons(personalBooks);

  setTimeout(() => {
    if (featuredBooks) displayBooks(featuredBooks, featured_books);
    if (popularBooks) displayBooks(popularBooks, popular_books);
    if (newBooks) displayBooks(newBooks, newArrivals);
    // personalized list is loaded only when user has preferences
  }, 400);
}

// --- CATEGORY FILTERS ---
const mainFilters = document.getElementById("category-filters");
const subFilters = document.getElementById("sub-filters");

const subCategories = {
  fiction: ["Mystery", "Thriller", "Romance", "Fantasy", "Science Fiction", "Dystopian", "Historical Fiction", "Horror", "Adventure", "Literary Fiction"],
  nonfiction: ["Biography", "History", "Self Help", "True Crime"],
  others: ["Children", "Graphic Novel", "Poetry"]
};

function showSubCategories(type) {
  if (!subFilters) return;
  const subs = subCategories[type];
  if (!subs) return;

  subFilters.innerHTML = subs.map(s => `<button class="chip sub-chip" data-sub="${s.toLowerCase()}">${s}</button>`).join("");
  subFilters.classList.remove("hidden");
  document.querySelectorAll(".main-cats .chip").forEach(btn => btn.classList.remove("active"));
  const mainBtn = document.querySelector(`[data-category="${type}"]`);
  if (mainBtn) mainBtn.classList.add("active");
}

async function fetchBooksBySubCategory(subCategory) {
  if (!searchResults || !searchSection) return;
  try {
    renderSkeletons(searchResults);
    const response = await fetch(`http://localhost:8080/api/books/search?keyword=${encodeURIComponent(subCategory)}`);
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();
    if (!data || data.length === 0) {
      showToast("No books found for " + subCategory);
      searchResults.innerHTML = "<p style='color: var(--muted); padding:10px;'>No books found.</p>";
      return;
    }
    searchSection.classList.remove("hidden");
    displayBooks(searchResults, data);
    showToast(`Showing ${data.length} book(s) for "${subCategory}"`);
  } catch (err) {
    console.error(err);
    showToast("Failed to load books");
  }
}

if (subFilters) {
  subFilters.addEventListener("click", e => {
    if (!e.target.classList.contains("sub-chip")) return;
    subFilters.querySelectorAll(".sub-chip").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    const selectedSub = e.target.getAttribute("data-sub");
    fetchBooksBySubCategory(selectedSub);
  });
}

if (mainFilters) {
  mainFilters.addEventListener("click", e => {
    if (!e.target.classList.contains("chip")) return;
    const cat = e.target.getAttribute("data-category");
    showSubCategories(cat);
  });
}

// --- SEARCH ---
async function searchBooks(query) {
  if (!query) return [];
  try {
    const response = await fetch(`http://localhost:8080/api/books/search?keyword=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const results = await response.json();
    return results;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

function showSearch(results) {
  if (!searchSection || !searchResults) return;
  searchSection.classList.remove("hidden");
  displayBooks(searchResults, results);
  showToast(results.length ? `Found ${results.length} result(s)` : "No results found");
}

const runSearch = debounce(async () => {
  if (!searchInput) return;
  const q = searchInput.value.trim();
  if (!searchResults) return;
  renderSkeletons(searchResults);
  const results = await searchBooks(q);
  showSearch(results);
}, 260);

function debounce(fn, delay = 300) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), delay);
  };
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (searchSection) searchSection.classList.add("hidden");
  });
}

// --- THEME ---
function applyStoredTheme() {
  if (!toggleThemeBtn) return;
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const isLight = saved ? saved === "light" : prefersLight;
  document.body.classList.toggle("light", isLight);
  toggleThemeBtn.textContent = isLight ? "🌙" : "☀️";
}

if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", () => {
    const next = !document.body.classList.contains("light");
    document.body.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    toggleThemeBtn.textContent = next ? "🌙" : "☀️";
  });
}

// --- SCROLL TO TOP ---
function initToTop() {
  if (!toTop) return;
  window.addEventListener("scroll", () => {
    toTop.classList.toggle("show", window.scrollY > 400);
  });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// --- PERSONALIZED GENRE SELECTION & RECOMMENDATIONS ---
const modal = document.getElementById("genre-modal");
const openBtn = document.getElementById("open-preferences");
const closeBtn = document.getElementById("close-modal");
const saveBtn = document.getElementById("save-genres");
const genreList = document.getElementById("genre-list");

// helper to get latest user from localStorage
function getLocalUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    return null;
  }
}

// show the personalized button only when logged in
const initUser = getLocalUser();
if (openBtn && initUser && initUser.id) openBtn.classList.remove("hidden");
if (initUser && initUser.name) {
  const welcomeText = document.getElementById("welcome-user");
  if (welcomeText) welcomeText.textContent = `Hi, ${initUser.name}`;
}

// genres list for UI
const allGenres = [
  "Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Romance",
  "Thriller", "Mystery", "Biography", "Self Help", "Business",
  "Health", "History", "Poetry", "Technology", "Art"
];

// modal open/close (defensive)
if (openBtn) openBtn.addEventListener("click", () => {
  if (modal) modal.classList.remove("hidden");
  loadGenres();
});
if (closeBtn) closeBtn.addEventListener("click", () => { if (modal) modal.classList.add("hidden"); });

// render saved/available genres
function loadGenres() {
  if (!genreList) return;
  genreList.innerHTML = "";

  const user = getLocalUser();
  const savedList = (user && (user.preferredGenres || user.favoriteGenres || [])) || [];

  allGenres.forEach(genre => {
    const chip = document.createElement("div");
    chip.classList.add("genre-chip");
    chip.textContent = genre;

    if (Array.isArray(savedList) && savedList.includes(genre)) chip.classList.add("selected");

    chip.addEventListener("click", () => chip.classList.toggle("selected"));
    genreList.appendChild(chip);
  });
}

// Save preferences -> backend (POST /api/user/{userId}/preferences)
if (saveBtn) saveBtn.addEventListener("click", async () => {
  const selectedGenres = [...document.querySelectorAll(".genre-chip.selected")].map(chip => chip.textContent);
  const user = getLocalUser();

  if (!user || !user.id) {
    alert("Please login first.");
    return;
  }

  // If user didn't select any genre, confirm they want to clear preferences
  if (!selectedGenres.length) {
    const ok = confirm("You didn't select any genres. This will clear your saved preferences. Continue?");
    if (!ok) return;
  }

  try {
    const response = await fetch(`http://localhost:8080/api/user/${user.id}/preferences`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedGenres)
    });

    if (response.ok) {
      alert("Preferences saved!");
      if (modal) modal.classList.add("hidden");

      // update localStorage so UI can reflect new prefs immediately
      const updatedUser = Object.assign({}, user, { preferredGenres: selectedGenres });
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // reload personalized books (or hide section if none selected)
      await loadPersonalizedBooks();
    } else {
      const txt = await response.text().catch(() => null);
      console.error("Save preferences failed:", response.status, txt);
      alert("Failed to save preferences");
    }
  } catch (error) {
    console.error("Error saving preferences", error);
    alert("Server error!");
  }
});

// Load personalized books from backend and render in personalBooks container
async function loadPersonalizedBooks() {
  // defensive check for DOM nodes
  if (!personalSection || !personalBooks) return;

  // read freshest user
  const localUser = getLocalUser();
  const savedGenres = (localUser && (localUser.preferredGenres || localUser.favoriteGenres || [])) || [];

  // If the user is not logged in or has no saved genres -> hide personalized section
  if (!localUser || !localUser.id || !Array.isArray(savedGenres) || savedGenres.length === 0) {
    personalSection.style.display = "none";
    return;
  }

  // show section and fetch recommendations
  personalSection.style.display = "block";
  personalBooks.innerHTML = `<p style="color:var(--muted); padding: 12px">Loading personalized picks...</p>`;

  try {
    const res = await fetch(`http://localhost:8080/api/recommend/user/${localUser.id}`);
    if (!res.ok) {
      // if backend returns all books when no genres present, we still have savedGenres so it's likely okay.
      throw new Error("Failed to fetch recommendations");
    }
    const books = await res.json();

    // backend may return all books when it can't decide — do an extra client-side safety filter
    const filtered = Array.isArray(books) ? books.filter(b => {
      // compare case-insensitively
      const bookGenre = (b.genre || "").toString().toLowerCase();
      return savedGenres.some(g => g.toLowerCase() === bookGenre);
    }) : [];

    if (!filtered || filtered.length === 0) {
      personalBooks.innerHTML = `<p style="color:var(--muted); padding:12px">No matching books found for your selected genres.</p>`;
      return;
    }

    displayBooks(personalBooks, filtered);
  } catch (err) {
    console.error("Error loading personalized books:", err);
    personalBooks.innerHTML = `<p style="color:red; padding:12px">Error loading personalized books.</p>`;
  }
}

// refresh button
const refreshBtn = document.getElementById("refresh-recommendations");
if (refreshBtn) refreshBtn.addEventListener("click", loadPersonalizedBooks);

// --- INIT ---
window.addEventListener("DOMContentLoaded", () => {
  applyStoredTheme();
  hydrateHome();
  initToTop();

  if (searchBtn) searchBtn.addEventListener("click", runSearch);
  if (searchInput) searchInput.addEventListener("input", runSearch);

  // load personalized books only if user has saved genres
  loadPersonalizedBooks();
});