document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const libraryView = document.getElementById('library-view');
    const editorView = document.getElementById('editor-view');
    const readerView = document.getElementById('reader-view');

    const addNovelBtn = document.getElementById('add-novel-btn');
    const backToLibraryBtn = document.getElementById('back-to-library-btn');
    const closeReaderBtn = document.getElementById('close-reader-btn');

    // --- State Management ---
    let novels = []; // This will hold all novel data, loaded from LocalStorage

    // --- Functions ---

    /**
     * Switches the active view.
     * @param {string} viewToShow - The ID of the view to make active.
     */
    function switchView(viewToShow) {
        // Hide all views first
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        // Show the requested view
        const activeView = document.getElementById(viewToShow);
        if (activeView) {
            activeView.classList.add('active');
        }
    }

    /**
     * Renders the novels in the library view.
     */
    function renderLibrary() {
        const novelsGrid = document.getElementById('novels-grid');
        novelsGrid.innerHTML = ''; // Clear existing content

        if (novels.length === 0) {
            novelsGrid.innerHTML = '<p>لم تقم بإضافة أي روايات بعد. ابدأ بإضافة رواية جديدة!</p>';
            return;
        }

        // Loop through novels and create card elements (to be implemented)
        novels.forEach(novel => {
            const card = document.createElement('div');
            card.className = 'novel-card';
            card.innerHTML = `<h3>${novel.title}</h3><p>${novel.author}</p>`;
            // Add event listener to open the novel in the editor or reader
            novelsGrid.appendChild(card);
        });
    }

    /**
     * Loads novels from LocalStorage.
     */
    function loadNovels() {
        const novelsJSON = localStorage.getItem('novels');
        if (novelsJSON) {
            novels = JSON.parse(novelsJSON);
        }
        renderLibrary();
    }

    // --- Event Listeners ---

    addNovelBtn.addEventListener('click', () => {
        switchView('editor-view');
    });

    backToLibraryBtn.addEventListener('click', () => {
        switchView('library-view');
    });

    closeReaderBtn.addEventListener('click', () => {
        switchView('library-view');
    });


    // --- Initial Load ---
    loadNovels(); // Load novels when the app starts
    switchView('library-view'); // Start with the library view
});
