/* Mini 2048: standalone, no build step */

(() => {
    const SIZE = 4;
    const TARGET = 2048;
    const STORAGE_KEY = 'mini2048_state_v1';
    const BEST_KEY = 'mini2048_best_v1';

    const elScore = document.getElementById('score');
    const elBest = document.getElementById('bestScore');
    const elMaxTile = document.getElementById('maxTile');
    const elProgressText = document.getElementById('progressText');
    const elProgressFill = document.getElementById('progressFill');
    const elCells = document.getElementById('cells');
    const elTiles = document.getElementById('tiles');
    const elBadges = document.getElementById('badges');
    const elAchievements = document.getElementById('achievements');

    const elOverlay = document.getElementById('overlay');
    const elOverlayTitle = document.getElementById('overlayTitle');
    const elOverlayText = document.getElementById('overlayText');
    const elOverlayNewGameBtn = document.getElementById('overlayNewGameBtn');
    const elOverlayContinueBtn = document.getElementById('overlayContinueBtn');

    const elNewGameBtn = document.getElementById('newGameBtn');
    const elContinueBtn = document.getElementById('continueBtn');
    const elHelpBtn = document.getElementById('helpBtn');
    const elHelpDialog = document.getElementById('helpDialog');
    const elCloseHelpBtn = document.getElementById('closeHelpBtn');

    /** @typedef {{ id: string, name: string, desc: string, check: (s: State) => boolean }} Achievement */
    /** @typedef {{ grid: number[][], score: number, moves: number, won: boolean, over: boolean, keepPlaying: boolean, unlocked: Record<string, boolean> }} State */

    /** @type {Achievement[]} */
    const achievements = [
        {
            id: 'first_merge',
            name: 'Первое объединение',
            desc: 'Собери карту 4.',
            check: (s) => maxInGrid(s.grid) >= 4,
        },
        {
            id: 'tile_128',
            name: 'Разгон',
            desc: 'Собери карту 128.',
            check: (s) => maxInGrid(s.grid) >= 128,
        },
        {
            id: 'tile_512',
            name: 'Стабильно',
            desc: 'Собери карту 512.',
            check: (s) => maxInGrid(s.grid) >= 512,
        },
        {
            id: 'tile_2048',
            name: 'Легенда 2048',
            desc: 'Собери карту 2048.',
            check: (s) => maxInGrid(s.grid) >= 2048,
        },
        {
            id: 'score_1000',
            name: 'Тысяча очков',
            desc: 'Набери 1000 очков.',
            check: (s) => s.score >= 1000,
        },
        {
            id: 'score_5000',
            name: 'Пять тысяч',
            desc: 'Набери 5000 очков.',
            check: (s) => s.score >= 5000,
        },
        {
            id: 'moves_100',
            name: 'Упорство',
            desc: 'Сделай 100 ходов в одной игре.',
            check: (s) => s.moves >= 100,
        },
    ];

    /** @type {State} */
    let state = createFreshState();
    let bestScore = loadBest();

    function createFreshGrid() {
        return Array.from({ length: SIZE }, () => Array.from({ length: SIZE }, () => 0));
    }

    function createFreshState() {
        return {
            grid: createFreshGrid(),
            score: 0,
            moves: 0,
            won: false,
            over: false,
            keepPlaying: false,
            unlocked: {},
        };
    }

    function cloneGrid(grid) {
        return grid.map((row) => row.slice());
    }

    function maxInGrid(grid) {
        let m = 0;
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) m = Math.max(m, grid[r][c]);
        }
        return m;
    }

    function loadBest() {
        const raw = localStorage.getItem(BEST_KEY);
        const n = raw ? Number(raw) : 0;
        return Number.isFinite(n) && n > 0 ? n : 0;
    }

    function saveBest(n) {
        bestScore = n;
        localStorage.setItem(BEST_KEY, String(n));
    }

    function saveState() {
        const payload = {
            grid: state.grid,
            score: state.score,
            moves: state.moves,
            won: state.won,
            over: state.over,
            keepPlaying: state.keepPlaying,
            unlocked: state.unlocked,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    }

    function loadState() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        try {
            const parsed = JSON.parse(raw);
            if (!parsed || !Array.isArray(parsed.grid)) return null;
            // Basic shape validation
            if (parsed.grid.length !== SIZE) return null;
            for (const row of parsed.grid) {
                if (!Array.isArray(row) || row.length !== SIZE) return null;
                for (const v of row) {
                    if (!Number.isFinite(Number(v))) return null;
                }
            }
            return {
                grid: parsed.grid.map((r) => r.map((v) => Number(v))),
                score: Number(parsed.score) || 0,
                moves: Number(parsed.moves) || 0,
                won: Boolean(parsed.won),
                over: Boolean(parsed.over),
                keepPlaying: Boolean(parsed.keepPlaying),
                unlocked: parsed.unlocked && typeof parsed.unlocked === 'object' ? parsed.unlocked : {},
            };
        } catch {
            return null;
        }
    }

    function randInt(maxExclusive) {
        return Math.floor(Math.random() * maxExclusive);
    }

    function emptyCells(grid) {
        /** @type {{r:number,c:number}[]} */
        const res = [];
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                if (grid[r][c] === 0) res.push({ r, c });
            }
        }
        return res;
    }

    function spawnRandomTile(grid) {
        const empties = emptyCells(grid);
        if (empties.length === 0) return false;
        const pick = empties[randInt(empties.length)];
        const value = Math.random() < 0.9 ? 2 : 4;
        grid[pick.r][pick.c] = value;
        return true;
    }

    function lineMoveLeft(line) {
        const original = line.slice();
        const compact = line.filter((v) => v !== 0);
        /** @type {number[]} */
        const out = [];
        let gained = 0;
        for (let i = 0; i < compact.length; i++) {
            if (i < compact.length - 1 && compact[i] === compact[i + 1]) {
                const merged = compact[i] * 2;
                out.push(merged);
                gained += merged;
                i += 1;
            } else {
                out.push(compact[i]);
            }
        }
        while (out.length < SIZE) out.push(0);
        const changed = out.some((v, idx) => v !== original[idx]);
        return { out, gained, changed };
    }

    function rotateGridCW(grid) {
        const out = createFreshGrid();
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) out[c][SIZE - 1 - r] = grid[r][c];
        }
        return out;
    }

    function rotateGridCCW(grid) {
        const out = createFreshGrid();
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) out[SIZE - 1 - c][r] = grid[r][c];
        }
        return out;
    }

    function flipGridH(grid) {
        return grid.map((row) => row.slice().reverse());
    }

    /** dir: 'left' | 'right' | 'up' | 'down' */
    function move(dir) {
        if (state.over) return;
        if (state.won && !state.keepPlaying) return;

        const before = cloneGrid(state.grid);

        let working = cloneGrid(state.grid);
        if (dir === 'up') working = rotateGridCCW(working);
        if (dir === 'down') working = rotateGridCW(working);
        if (dir === 'right') working = flipGridH(working);

        let anyChanged = false;
        let gainedTotal = 0;
        for (let r = 0; r < SIZE; r++) {
            const { out, gained, changed } = lineMoveLeft(working[r]);
            working[r] = out;
            gainedTotal += gained;
            if (changed) anyChanged = true;
        }

        if (dir === 'right') working = flipGridH(working);
        if (dir === 'up') working = rotateGridCW(working);
        if (dir === 'down') working = rotateGridCCW(working);

        if (!anyChanged) {
            render(); // still update UI (e.g. badges)
            return;
        }

        state.grid = working;
        state.score += gainedTotal;
        state.moves += 1;
        if (state.score > bestScore) saveBest(state.score);

        spawnRandomTile(state.grid);

        const maxTile = maxInGrid(state.grid);
        if (maxTile >= TARGET && !state.won) {
            state.won = true;
        }

        state.over = isGameOver(state.grid);

        const newlyUnlocked = updateAchievements();
        saveState();

        render({
            movedFrom: before,
            gained: gainedTotal,
            unlocked: newlyUnlocked,
        });
    }

    function isGameOver(grid) {
        if (emptyCells(grid).length > 0) return false;
        // Any merge possible?
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                const v = grid[r][c];
                if (r + 1 < SIZE && grid[r + 1][c] === v) return false;
                if (c + 1 < SIZE && grid[r][c + 1] === v) return false;
            }
        }
        return true;
    }

    function updateAchievements() {
        /** @type {Achievement[]} */
        const unlockedNow = [];
        for (const a of achievements) {
            if (state.unlocked[a.id]) continue;
            if (a.check(state)) {
                state.unlocked[a.id] = true;
                unlockedNow.push(a);
            }
        }
        return unlockedNow;
    }

    function setOverlay(visible, title, text) {
        if (visible) {
            elOverlayTitle.textContent = title;
            elOverlayText.textContent = text;
            elOverlay.classList.remove('hidden');
        } else {
            elOverlay.classList.add('hidden');
        }
    }

    function percentToTarget(maxTile) {
        if (maxTile <= 0) return 0;
        const p = Math.log2(maxTile) / Math.log2(TARGET);
        return Math.max(0, Math.min(1, p));
    }

    function makeBadge(text, kind) {
        const div = document.createElement('div');
        div.className = `badge${kind ? ` ${kind}` : ''}`;
        div.textContent = text;
        return div;
    }

    function renderBadges({ gained, unlocked } = {}) {
        elBadges.innerHTML = '';

        const maxTile = maxInGrid(state.grid);

        if (state.over) elBadges.appendChild(makeBadge('Конец игры', 'warn'));
        if (state.won) elBadges.appendChild(makeBadge('2048 собрана', 'good'));
        if (gained && gained > 0) elBadges.appendChild(makeBadge(`+${gained}`, 'good'));
        if (maxTile >= 512 && !state.over) elBadges.appendChild(makeBadge('Сильно', ''));

        if (unlocked && unlocked.length) {
            elBadges.appendChild(makeBadge(`Достижений: +${unlocked.length}`, 'good'));
        }
    }

    function renderAchievements() {
        elAchievements.innerHTML = '';
        for (const a of achievements) {
            const unlocked = Boolean(state.unlocked[a.id]);
            const wrap = document.createElement('div');
            wrap.className = `ach${unlocked ? ' unlocked' : ''}`;

            const top = document.createElement('div');
            top.className = 'achTop';

            const name = document.createElement('div');
            name.className = 'achName';
            name.textContent = a.name;

            const st = document.createElement('div');
            st.className = 'achState';
            st.textContent = unlocked ? 'Открыто' : 'Закрыто';

            const desc = document.createElement('div');
            desc.className = 'achDesc';
            desc.textContent = a.desc;

            top.appendChild(name);
            top.appendChild(st);
            wrap.appendChild(top);
            wrap.appendChild(desc);
            elAchievements.appendChild(wrap);
        }
    }

    function renderTiles() {
        elTiles.innerHTML = '';
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                const v = state.grid[r][c];
                if (!v) continue;
                const t = document.createElement('div');
                t.className = `tile v${v}`;
                t.textContent = String(v);
                t.style.gridRowStart = String(r + 1);
                t.style.gridColumnStart = String(c + 1);
                elTiles.appendChild(t);
            }
        }
    }

    function render(meta) {
        const maxTile = maxInGrid(state.grid);
        elScore.textContent = String(state.score);
        elBest.textContent = String(bestScore);
        elMaxTile.textContent = String(maxTile || 2);

        const p = percentToTarget(maxTile);
        const pct = Math.round(p * 100);
        elProgressText.textContent = `${pct}%`;
        elProgressFill.style.width = `${pct}%`;

        renderTiles();
        renderAchievements();
        renderBadges(meta);

        // Overlay logic
        if (state.over) {
            setOverlay(true, 'Ходы закончились', 'На поле больше нет возможных объединений. Попробуешь снова?');
        } else if (state.won && !state.keepPlaying) {
            setOverlay(true, 'Победа!', 'Ты собрал карту 2048. Можешь продолжить играть ради рекорда.');
        } else {
            setOverlay(false);
        }

        elContinueBtn.disabled = !(state.won || state.over);
        elOverlayContinueBtn.disabled = !(state.won && !state.keepPlaying);
    }

    function startNewGame() {
        state = createFreshState();
        spawnRandomTile(state.grid);
        spawnRandomTile(state.grid);
        updateAchievements();
        saveState();
        render();
    }

    function continueAfterWin() {
        if (!state.won) return;
        state.keepPlaying = true;
        saveState();
        render();
    }

    function initBoardCells() {
        elCells.innerHTML = '';
        for (let i = 0; i < SIZE * SIZE; i++) {
            const c = document.createElement('div');
            c.className = 'cell';
            elCells.appendChild(c);
        }
    }

    function openHelp() {
        if (elHelpDialog && typeof elHelpDialog.showModal === 'function') elHelpDialog.showModal();
    }
    function closeHelp() {
        if (elHelpDialog && typeof elHelpDialog.close === 'function') elHelpDialog.close();
    }

    function attachEvents() {
        window.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            const map = {
                arrowleft: 'left',
                a: 'left',
                arrowright: 'right',
                d: 'right',
                arrowup: 'up',
                w: 'up',
                arrowdown: 'down',
                s: 'down',
            };
            const dir = map[key];
            if (!dir) return;
            e.preventDefault();
            move(dir);
        });

        // Swipe
        const board = document.getElementById('board');
        let startX = 0;
        let startY = 0;
        let active = false;

        const onPointerDown = (e) => {
            if (!(e instanceof PointerEvent)) return;
            active = true;
            startX = e.clientX;
            startY = e.clientY;
            try {
                board.setPointerCapture(e.pointerId);
            } catch {
                // ignore
            }
        };
        const onPointerUp = (e) => {
            if (!(e instanceof PointerEvent)) return;
            if (!active) return;
            active = false;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            const adx = Math.abs(dx);
            const ady = Math.abs(dy);
            const threshold = 26;
            if (Math.max(adx, ady) < threshold) return;

            if (adx > ady) {
                move(dx < 0 ? 'left' : 'right');
            } else {
                move(dy < 0 ? 'up' : 'down');
            }
        };

        board.addEventListener('pointerdown', onPointerDown);
        board.addEventListener('pointerup', onPointerUp);
        board.addEventListener('pointercancel', () => {
            active = false;
        });

        elNewGameBtn.addEventListener('click', startNewGame);
        elOverlayNewGameBtn.addEventListener('click', startNewGame);

        elContinueBtn.addEventListener('click', () => {
            if (state.over) startNewGame();
            else continueAfterWin();
        });
        elOverlayContinueBtn.addEventListener('click', () => {
            continueAfterWin();
        });

        elHelpBtn.addEventListener('click', openHelp);
        elCloseHelpBtn.addEventListener('click', closeHelp);
        elHelpDialog.addEventListener('click', (e) => {
            // click outside to close
            const rect = elHelpDialog.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            const inRect = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
            if (!inRect) closeHelp();
        });
    }

    function boot() {
        initBoardCells();
        attachEvents();

        const saved = loadState();
        if (saved) {
            state = saved;
            // If somehow saved without tiles, seed it
            if (emptyCells(state.grid).length === SIZE * SIZE) {
                spawnRandomTile(state.grid);
                spawnRandomTile(state.grid);
            }
            updateAchievements();
            saveState();
            render();
        } else {
            startNewGame();
        }
    }

    boot();
})();

