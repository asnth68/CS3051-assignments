    // Add the cells to the board
    for (let y = 0; y < 15; y++) {
      for (let x = 0; x < 15; x++) {
        const board = document.querySelector(".board");
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-x', x);
        cell.setAttribute('data-y', y);
        // cell.innerHTML = `${x},${y}`; // Add the coordinates to the cell
        board.appendChild(cell);
      }
    }
        // Letter Constants

        const LETTERS = [
          { letter: 'A', count: 13},
          { letter: 'B', count: 3},
          { letter: 'C', count: 3},
          { letter: 'D', count: 6},
          { letter: 'E', count: 18},
          { letter: 'F', count: 3},
          { letter: 'G', count: 4},
          { letter: 'H', count: 3},
          { letter: 'I', count: 12},
          { letter: 'J', count: 2},
          { letter: 'K', count: 2},
          { letter: 'L', count: 5},
          { letter: 'M', count: 3},
          { letter: 'N', count: 8},
          { letter: 'O', count: 11},
          { letter: 'P', count: 3},
          { letter: 'Q', count: 2},
          { letter: 'R', count: 9},
          { letter: 'S', count: 6},
          { letter: 'T', count: 9},
          { letter: 'U', count: 6 },
          { letter: 'V', count: 3},
          { letter: 'W', count: 3},
          { letter: 'X', count: 2},
          { letter: 'Y', count: 3},
          { letter: 'Z', count: 2}
        ];

        // Game State
        let handTiles = [];
        let boardTiles = [];

        // Generate a random tile from the available letters
        function getRandomTile() {
          const availableLetters = LETTERS.filter(letter => letter.count > 0);
          const randomIndex = Math.floor(Math.random() * availableLetters.length);
          const randomLetter = availableLetters[randomIndex];
          randomLetter.count--;
          return randomLetter;
        }

        // Initialize the game with tiles in hand
        function initializeGame() {
          for (let i = 0; i < 21; i++) {
            const tile = getRandomTile();
            handTiles.push(tile);
          }
          renderHand();
        }

        // Render the tiles in the player's hand
        function renderHand() {
          const handContainer = document.querySelector('.hand');
          handContainer.innerHTML = '';
          handTiles.forEach(tile => {
            const tileElement = createTileElement(tile.letter);
            handContainer.appendChild(tileElement);
          });
        }

        // Create a tile element
        function createTileElement(letter) {
          const tileElement = document.createElement('div');
          tileElement.classList.add('tile');
          tileElement.textContent = letter;


          // Add event listeners for dragging and clicking
          tileElement.draggable = true;
          tileElement.addEventListener('dragstart', handleDragStart);
          tileElement.addEventListener('click', handleTileClick);

          return tileElement;
        }
        // Handle the dragstart event for tiles
        function handleDragStart(event) {
          event.dataTransfer.setData('text/plain', event.target.textContent);
        }

        // Handle the click event for tiles
        function handleTileClick(event) {
          const tileElement = event.target;
          tileElement.classList.toggle('selected');
        }

        // Handle the dragover event for cells on the board
        function handleDragOver(event) {
          event.preventDefault();
        }

        // Handle the drop event for cells on the board
        function handleDrop(event) {
          event.preventDefault();
          const tileLetter = event.dataTransfer.getData('text/plain');
          const cellElement = event.target;

          if (!cellElement.classList.contains('cell')) {
            return;
          }

          const tileElement = createTileElement(tileLetter);
          cellElement.innerHTML = '';
          cellElement.appendChild(tileElement);

          // boardTiles.push(tileLetter);
          // let index = handTiles.indexOf(boardTiles[boardTiles.length - 1]);
          // handTiles.splice(index, 1);
          // renderHand();
        }

        // Generate a random tile from the bunch
        function peel() {
          const tile = getRandomTile();
          handTiles.push(tile);
          renderHand();
        }

        // Dump a tile from the player's hand and get 3 random tiles
        function dump() {
          const selectedTiles = document.querySelectorAll('.tile.selected');
          selectedTiles.forEach(tileElement => {
            const tileIndex = Array.from(tileElement.parentNode.children).indexOf(tileElement);
            handTiles.splice(tileIndex, 1);
          });

          for (let i = 0; i < 3; i++) {
            const tile = getRandomTile();
            handTiles.push(tile);
          }

          renderHand();
        }

        // Initialize the game
        initializeGame();

        // Event listeners
        const board = document.querySelector('.board');
        board.addEventListener('dragover', handleDragOver);
        board.addEventListener('drop', handleDrop);

        const peelButton = document.querySelector('#peel-button');
        peelButton.addEventListener('click', peel);

        const dumpButton = document.querySelector('#dump-button');
        dumpButton.addEventListener('click', dump);

        const undoButton = document.querySelector("#undo-button");

        // Returns last tile played back into the hand
        undoButton.addEventListener("click", undoMove);
        function undoMove() {
          // Find the last tile played on the board
          const lastTile = board.querySelector(".tile:last-of-type");

          if (lastTile) {
          // Remove the tile from the board
          lastTile.remove();

           // Add the tile back to the hand
           /*const hand = document.querySelector(".hand");
           hand.appendChild(lastTile);*/
          }
        }


