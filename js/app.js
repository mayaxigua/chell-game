const seasons = ["spring", "summer", "autumn", "winter"];
const seasonNames = {
  spring: "春潮",
  summer: "夏潮",
  autumn: "秋潮",
  winter: "冬潮"
};

const shellTypes = [
  { id: 0, name: "白珍珠贝", shape: "round", role: "stable", colors: ["#fff7df", "#f5d287", "#ff8fa3"] },
  { id: 1, name: "粉红贝", shape: "round", role: "stable", colors: ["#ffb7cd", "#ff6f9c", "#ffdbe7"] },
  { id: 2, name: "金黄贝", shape: "fan", role: "reversal", colors: ["#ffd45f", "#f59f32", "#fff1a7"] },
  { id: 3, name: "海蓝贝", shape: "long", role: "cue", colors: ["#78d5ff", "#1686c7", "#d9f6ff"] },
  { id: 4, name: "彩虹贝", shape: "fan", role: "stable", colors: ["#bba7ff", "#ff8ac7", "#7dddc7"] },
  { id: 5, name: "薄荷螺", shape: "spiral", role: "distractor", colors: ["#8ff0c2", "#2fae8a", "#e4fff1"] },
  { id: 6, name: "尖塔螺", shape: "long", role: "reversal", colors: ["#f1bd75", "#9f6337", "#ffe1ac"] },
  { id: 7, name: "紫星贝", shape: "star", role: "cue", colors: ["#b67cff", "#6f45c7", "#eddcff"] },
  { id: 8, name: "火焰扇贝", shape: "fan", role: "reversal", colors: ["#ff7a55", "#d93632", "#ffc26f"] },
  { id: 9, name: "月光贝", shape: "round", role: "stable", colors: ["#e8f2ff", "#8db2dd", "#ffffff"] },
  { id: 10, name: "竹笋螺", shape: "long", role: "distractor", colors: ["#b7de78", "#6f9f38", "#effbcf"] },
  { id: 11, name: "橘子贝", shape: "round", role: "cue", colors: ["#ffb15e", "#ff7b35", "#ffe0b8"] },
  { id: 12, name: "雪帽螺", shape: "spiral", role: "reversal", colors: ["#d8f6ff", "#5fa2bf", "#ffffff"] },
  { id: 13, name: "日月贝", shape: "fan", role: "stable", colors: ["#fff0a8", "#7fb3ff", "#ffe07a"] },
  { id: 14, name: "绿宝贝", shape: "round", role: "distractor", colors: ["#71d68b", "#248a55", "#d8ffd9"] },
  { id: 15, name: "鹦鹉螺", shape: "spiral", role: "cue", colors: ["#ffcf9f", "#a5653b", "#fff0dc"] },
  { id: 16, name: "蜘蛛螺", shape: "star", role: "reversal", colors: ["#d79a72", "#76483b", "#ffd1aa"] },
  { id: 17, name: "夜光贝", shape: "round", role: "stable", colors: ["#27315e", "#74e5d0", "#c9fff8"] },
  { id: 18, name: "樱桃贝", shape: "fan", role: "reversal", colors: ["#ff6f85", "#b7204a", "#ffd1da"] },
  { id: 19, name: "维纳斯梳", shape: "star", role: "distractor", colors: ["#f8d3ff", "#b15bc3", "#fff2ff"] }
];

const levels = [
  { label: "第1关", pool: 6, catchCount: 3, selectCount: 3, rounds: 5, changeFreq: 5, hint: "explicit", multiplier: 1 },
  { label: "第2关", pool: 6, catchCount: 3, selectCount: 3, rounds: 8, changeFreq: 4, hint: "explicit", multiplier: 2 },
  { label: "第3关", pool: 8, catchCount: 3, selectCount: 3, rounds: 8, changeFreq: 4, hint: "soft", multiplier: 3 },
  { label: "第4关", pool: 10, catchCount: 3, selectCount: 3, rounds: 10, changeFreq: 3, hint: "visual", multiplier: 4 },
  { label: "第5关", pool: 12, catchCount: 3, selectCount: 3, rounds: 12, changeFreq: 3, hint: "visual", multiplier: 5 },
  { label: "第6关", pool: 14, catchCount: 3, selectCount: 3, rounds: 12, changeFreq: 2, hint: "subtle", multiplier: 6 },
  { label: "第7关", pool: 16, catchCount: 3, selectCount: 3, rounds: 14, changeFreq: 2, hint: "subtle", multiplier: 7 },
  { label: "第8关", pool: 20, catchCount: 3, selectCount: 3, rounds: 16, changeFreq: 1, hint: "hidden", multiplier: 8 }
];

const tutorialRounds = [
  { season: "spring", catchIds: [0], hint: "先观察海边：春潮的光更柔，浪线更浅。打开白珍珠贝看看。" },
  { season: "spring", catchIds: [0, 1], hint: "同一海况下，同一种贝壳的结果会保持稳定。" },
  { season: "summer", catchIds: [2, 3], hint: "海面变亮、浪花活跃了。贝壳里的东西也可能变。" },
  { season: "summer", catchIds: [2, 3, 1], hint: "珍珠加分，沙子扣分；如果这一轮都不想开，可以直接点撒网跳过。" }
];

const el = {
  startScreen: document.getElementById("startScreen"),
  gameScreen: document.getElementById("gameScreen"),
  reportScreen: document.getElementById("reportScreen"),
  startBtn: document.getElementById("startBtn"),
  skipTutorialBtn: document.getElementById("skipTutorialBtn"),
  castBtn: document.getElementById("castBtn"),
  openBtn: document.getElementById("openBtn"),
  restartBtn: document.getElementById("restartBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  copyReportBtn: document.getElementById("copyReportBtn"),
  levelText: document.getElementById("levelText"),
  scoreText: document.getElementById("scoreText"),
  seasonText: document.getElementById("seasonText"),
  roundText: document.getElementById("roundText"),
  poolText: document.getElementById("poolText"),
  hintText: document.getElementById("hintText"),
  confidenceFill: document.getElementById("confidenceFill"),
  confidenceText: document.getElementById("confidenceText"),
  shellField: document.getElementById("shellField"),
  shellPreview: document.getElementById("shellPreview"),
  scene: document.getElementById("scene"),
  net: document.getElementById("net"),
  toast: document.getElementById("toast"),
  titleText: document.getElementById("titleText"),
  summaryText: document.getElementById("summaryText"),
  metricGrid: document.getElementById("metricGrid")
};

let state = {};
let lastReportText = "";

function resetState({ tutorial = true } = {}) {
  state = {
    inTutorial: tutorial,
    tutorialIndex: 0,
    levelIndex: 0,
    roundInLevel: 0,
    score: 0,
    trueSeason: "spring",
    previousSeason: null,
    mappings: generateMappings(),
    caught: [],
    selected: new Set(),
    openedThisRound: [],
    canSelect: false,
    startedAt: Date.now(),
    evidence: [],
    inference: { season: null, confidence: 0 },
    stats: {
      tutorialStatus: tutorial ? "完成" : "跳过",
      opened: 0,
      skippedRounds: 0,
      pearls: 0,
      sand: 0,
      skippedSlots: 0,
      bestPearlStreak: 0,
      currentPearlStreak: 0,
      sandStreak: 0,
      bestSandStreak: 0,
      switches: 0,
      postSwitchChoices: 0,
      stickyChoices: 0,
      adaptationRounds: [],
      currentSwitch: null,
      exploreChoices: 0,
      exploitChoices: 0,
      shellStats: Object.fromEntries(shellTypes.map((shell) => [shell.id, { seen: 0, picked: 0, pearls: 0, sand: 0 }]))
    }
  };
}

function generateMappings() {
  const mapping = {};
  seasons.forEach((season, seasonIndex) => {
    mapping[season] = {};
    shellTypes.forEach((shell) => {
      const value = contentFor(shell, seasonIndex);
      mapping[season][shell.id] = value;
    });
  });
  mapping.spring[0] = "pearl";
  mapping.spring[1] = "pearl";
  mapping.spring[2] = "pearl";
  mapping.spring[3] = "sand";
  mapping.summer[0] = "sand";
  mapping.summer[1] = "pearl";
  mapping.summer[2] = "sand";
  mapping.summer[3] = "pearl";
  return mapping;
}

function contentFor(shell, seasonIndex) {
  if (shell.role === "stable") {
    return ((shell.id + seasonIndex) % 5 === 0) ? "sand" : "pearl";
  }
  if (shell.role === "reversal") {
    return ((shell.id + seasonIndex) % 2 === 0) ? "pearl" : "sand";
  }
  if (shell.role === "cue") {
    return (shell.id % 4 === seasonIndex) ? "pearl" : "sand";
  }
  return ((shell.id + seasonIndex * 2) % 4 < 2) ? "pearl" : "sand";
}

function showScreen(screen) {
  [el.startScreen, el.gameScreen, el.reportScreen].forEach((node) => node.classList.remove("is-active"));
  screen.classList.add("is-active");
}

function startGame({ tutorial }) {
  resetState({ tutorial });
  showScreen(el.gameScreen);
  applySeason(state.trueSeason);
  updateHud();
  clearShells();
  showToast(tutorial ? "先完成一个很短的新手引导" : "第1关开始");
}

function currentLevel() {
  return levels[state.levelIndex];
}

function activePoolSize() {
  if (state.inTutorial) return 4;
  return currentLevel().pool;
}

function currentSelectCount() {
  if (state.inTutorial) return Math.min(tutorialRounds[state.tutorialIndex].catchIds.length, 2);
  return currentLevel().selectCount;
}

function castNet() {
  if (state.canSelect) {
    skipRound();
    return;
  }
  clearShells();
  el.castBtn.disabled = true;
  el.openBtn.disabled = true;
  el.net.classList.remove("is-casting");
  void el.net.offsetWidth;
  el.net.classList.add("is-casting");
  setTimeout(() => {
    state.caught = state.inTutorial ? tutorialCatch() : randomCatch();
    state.selected.clear();
    state.canSelect = true;
    renderShells();
    updateHud();
    el.castBtn.disabled = false;
  }, 680);
}

function tutorialCatch() {
  const round = tutorialRounds[state.tutorialIndex];
  state.trueSeason = round.season;
  applySeason(state.trueSeason);
  el.hintText.textContent = round.hint;
  return round.catchIds.map((id) => createCaughtShell(id));
}

function randomCatch() {
  const level = currentLevel();
  const pool = shellTypes.slice(0, level.pool).map((shell) => shell.id);
  const picked = shuffle(pool).slice(0, level.catchCount);
  return picked.map((id) => createCaughtShell(id));
}

function createCaughtShell(id) {
  state.stats.shellStats[id].seen += 1;
  return {
    uid: `${id}-${Date.now()}-${Math.random()}`,
    id,
    result: state.mappings[state.trueSeason][id],
    opened: false
  };
}

function renderShells() {
  const count = state.caught.length;
  state.caught.forEach((caught, index) => {
    const shell = shellTypes[caught.id];
    const button = document.createElement("button");
    button.className = "shell-card";
    button.type = "button";
    button.dataset.uid = caught.uid;
    button.setAttribute("aria-label", shell.name);
    const pos = shellPosition(index, count);
    button.style.left = `${pos.x}%`;
    button.style.top = `${pos.y}%`;
    button.innerHTML = `
      <span class="shell-bubble">${shellSprite(shell)}</span>
      <span class="shell-name">${shell.name}</span>
    `;
    button.addEventListener("click", () => toggleShell(caught.uid));
    el.shellField.appendChild(button);
  });
}

function shellPosition(index, count) {
  const columns = Math.min(count, 4);
  const row = Math.floor(index / columns);
  const col = index % columns;
  const xStep = 82 / Math.max(columns - 1, 1);
  const x = columns === 1 ? 50 : 9 + col * xStep;
  const y = count > 4 ? (28 + row * 38) : 48 + (index % 2) * 8;
  return { x, y };
}

function toggleShell(uid) {
  if (!state.canSelect) return;
  const max = currentSelectCount();
  if (state.selected.has(uid)) {
    state.selected.delete(uid);
  } else if (state.selected.size < max) {
    state.selected.add(uid);
  } else {
    showToast(`最多选择${max}个`);
  }
  document.querySelectorAll(".shell-card").forEach((card) => {
    card.classList.toggle("is-selected", state.selected.has(card.dataset.uid));
  });
  const hasSelection = state.selected.size > 0;
  el.openBtn.disabled = !hasSelection;
  updateShellPreview();
  updateHud();
}

function openSelected() {
  if (!state.canSelect || state.selected.size === 0) return;
  state.canSelect = false;
  el.openBtn.disabled = true;
  const selected = state.caught.filter((item) => state.selected.has(item.uid));
  const missed = currentSelectCount() - selected.length;
  state.stats.skippedSlots += Math.max(0, missed);
  selected.forEach((caught, index) => {
    setTimeout(() => revealShell(caught), index * 360);
  });
  setTimeout(() => finishRound(selected), selected.length * 360 + 320);
}

function skipRound() {
  if (!state.canSelect) return;
  state.canSelect = false;
  state.selected.clear();
  el.openBtn.disabled = true;
  document.querySelectorAll(".shell-card").forEach((card) => {
    card.classList.remove("is-selected");
    card.classList.add("is-skipped");
  });
  state.stats.skippedRounds += 1;
  state.stats.skippedSlots += currentSelectCount();
  showToast("跳过这一轮，重新撒网");
  hideShellPreview();
  setTimeout(() => finishSkipRound(), 360);
}

function revealShell(caught) {
  caught.opened = true;
  const card = document.querySelector(`[data-uid="${caught.uid}"]`);
  if (!card) return;
  card.classList.add("is-opened");
  const bubble = card.querySelector(".shell-bubble");
  if (bubble && !bubble.querySelector(".shell-result")) {
    bubble.insertAdjacentHTML("beforeend", resultOverlay(caught.result));
  }
  const mark = document.createElement("span");
  mark.className = `result-mark ${caught.result}`;
  mark.textContent = caught.result === "pearl" ? "珍" : "沙";
  card.appendChild(mark);
  hideShellPreview();
}

function finishRound(selected) {
  let roundScore = 0;
  selected.forEach((caught) => {
    const level = state.inTutorial ? { multiplier: 1 } : currentLevel();
    const delta = caught.result === "pearl" ? 10 * level.multiplier : -8 * level.multiplier;
    roundScore += delta;
    recordResult(caught);
  });
  if (!state.inTutorial) {
    state.score += roundScore;
  }
  updateInference();
  updateAdaptation(selected);
  showToast(roundScore >= 0 ? `本轮 +${roundScore}` : `本轮 ${roundScore}`);
  if (state.inTutorial) {
    advanceTutorial();
  } else {
    if (advanceLevel()) return;
  }
  updateHud();
}

function finishSkipRound() {
  if (state.stats.currentSwitch) {
    state.stats.currentSwitch.rounds += 1;
  }
  if (state.inTutorial) {
    advanceTutorial();
  } else {
    if (advanceLevel()) return;
  }
  clearShells();
  updateHud();
  setTimeout(castNet, 120);
}

function recordResult(caught) {
  const shellStat = state.stats.shellStats[caught.id];
  shellStat.picked += 1;
  state.stats.opened += 1;
  if (caught.result === "pearl") {
    state.stats.pearls += 1;
    shellStat.pearls += 1;
    state.stats.currentPearlStreak += 1;
    state.stats.bestPearlStreak = Math.max(state.stats.bestPearlStreak, state.stats.currentPearlStreak);
    state.stats.sandStreak = 0;
  } else {
    state.stats.sand += 1;
    shellStat.sand += 1;
    state.stats.sandStreak += 1;
    state.stats.bestSandStreak = Math.max(state.stats.bestSandStreak, state.stats.sandStreak);
    state.stats.currentPearlStreak = 0;
  }
  state.evidence.push({ shellId: caught.id, result: caught.result });
  if (state.evidence.length > 10) state.evidence.shift();

  if (state.previousSeason && state.stats.currentSwitch) {
    const wasPearl = state.mappings[state.previousSeason][caught.id] === "pearl";
    const nowSand = state.mappings[state.trueSeason][caught.id] === "sand";
    state.stats.postSwitchChoices += 1;
    if (wasPearl && nowSand) state.stats.stickyChoices += 1;
  }

  if (shellStat.picked <= 1) {
    state.stats.exploreChoices += 1;
  } else {
    state.stats.exploitChoices += 1;
  }
}

function updateAdaptation(selected) {
  const sw = state.stats.currentSwitch;
  if (!sw || sw.resolved) return;
  sw.rounds += 1;
  const pearls = selected.filter((item) => item.result === "pearl").length;
  const rate = selected.length ? pearls / selected.length : 0;
  if (rate >= 0.6 || sw.rounds >= 4) {
    sw.resolved = true;
    state.stats.adaptationRounds.push(sw.rounds);
  }
}

function advanceTutorial() {
  state.tutorialIndex += 1;
  if (state.tutorialIndex >= tutorialRounds.length) {
    state.inTutorial = false;
    state.levelIndex = 0;
    state.roundInLevel = 0;
    state.trueSeason = "spring";
    state.previousSeason = null;
    applySeason(state.trueSeason);
    clearShells();
    showToast("第1关开始，正式计分");
  }
  el.castBtn.disabled = false;
}

function advanceLevel() {
  state.roundInLevel += 1;
  const level = currentLevel();
  if (state.roundInLevel >= level.rounds) {
    state.levelIndex += 1;
    state.roundInLevel = 0;
    if (state.levelIndex >= levels.length) {
      showReport();
      return true;
    }
    showToast(`${currentLevel().label}开始，贝壳池扩大到${currentLevel().pool}种`);
    changeSeason(true);
  } else if (state.roundInLevel % level.changeFreq === 0) {
    changeSeason(false);
  }
  el.castBtn.disabled = false;
  return false;
}

function changeSeason(force) {
  const old = state.trueSeason;
  let next = randomItem(seasons);
  if (!force) {
    while (next === old) next = randomItem(seasons);
  }
  state.previousSeason = old;
  state.trueSeason = next;
  state.stats.switches += 1;
  state.stats.currentSwitch = { rounds: 0, resolved: false };
  applySeason(next);
  const level = currentLevel();
  if (level.hint === "explicit") {
    showToast(`${seasonNames[next]}来了`);
  } else if (level.hint === "hidden") {
    el.hintText.textContent = "海风有一点不一样。";
  } else {
    el.hintText.textContent = "海面颜色和浪声变了，贝壳结果也可能变。";
  }
}

function updateInference() {
  if (state.evidence.length === 0) {
    state.inference = { season: null, confidence: 0 };
    return;
  }
  const scores = Object.fromEntries(seasons.map((season) => [season, 0]));
  state.evidence.forEach(({ shellId, result }) => {
    seasons.forEach((season) => {
      scores[season] += state.mappings[season][shellId] === result ? 1 : -1;
    });
  });
  const sorted = seasons.slice().sort((a, b) => scores[b] - scores[a]);
  const best = sorted[0];
  const second = sorted[1];
  const gap = scores[best] - scores[second];
  const confidence = Math.max(12, Math.min(95, 35 + gap * 12 + state.evidence.length * 3));
  state.inference = { season: best, confidence };
}

function updateHud() {
  if (state.inTutorial) {
    el.levelText.textContent = "引导";
    el.roundText.textContent = `引导 ${Math.min(state.tutorialIndex + 1, tutorialRounds.length)}/${tutorialRounds.length}`;
    el.poolText.textContent = "贝壳池 4种";
    el.seasonText.textContent = seasonNames[state.trueSeason];
  } else {
    const level = currentLevel();
    el.levelText.textContent = level ? level.label : "完成";
    el.roundText.textContent = level ? `本轮 ${state.roundInLevel + 1}/${level.rounds}` : "完成";
    el.poolText.textContent = level ? `贝壳池 ${level.pool}种` : "贝壳池 20种";
    if (level && level.hint === "explicit") {
      el.seasonText.textContent = seasonNames[state.trueSeason];
    } else if (state.inference.season) {
      el.seasonText.textContent = `像${seasonNames[state.inference.season]}`;
    } else {
      el.seasonText.textContent = "未知";
    }
  }
  el.scoreText.textContent = String(state.score);
  el.confidenceFill.style.width = `${state.inference.confidence}%`;
  el.confidenceText.textContent = `${Math.round(state.inference.confidence)}%`;
  const max = currentSelectCount();
  if (state.canSelect) {
    el.hintText.textContent = `选择贝壳后点打开；都不想开就直接点撒网。已选 ${state.selected.size}/${max}`;
  } else if (state.caught.some((item) => item.opened)) {
    el.hintText.textContent = "记住这次结果，点击撒网继续。";
  } else if (!state.inTutorial && state.caught.length === 0) {
    el.hintText.textContent = "撒网前先看看海面、天空和声音线索。";
  }
}

function showReport() {
  const durationMin = Math.max(1, Math.round((Date.now() - state.startedAt) / 60000));
  const hitRate = state.stats.opened ? Math.round((state.stats.pearls / state.stats.opened) * 100) : 0;
  const stickyIndex = state.stats.postSwitchChoices
    ? Math.round((state.stats.stickyChoices / state.stats.postSwitchChoices) * 100)
    : 0;
  const avgAdapt = state.stats.adaptationRounds.length
    ? (state.stats.adaptationRounds.reduce((sum, n) => sum + n, 0) / state.stats.adaptationRounds.length).toFixed(1)
    : "无";
  const exploreRate = state.stats.opened
    ? Math.round((state.stats.exploreChoices / state.stats.opened) * 100)
    : 0;
  const title = titleFor({ hitRate, stickyIndex, avgAdapt: Number(avgAdapt) || 9 });
  el.titleText.textContent = title;
  el.summaryText.textContent = `本次正式测试约${durationMin}分钟。你打开了${state.stats.opened}个贝壳，跳过了${state.stats.skippedRounds}轮，珍珠命中率${hitRate}%，旧规则黏性指数${stickyIndex}%。`;
  const metrics = [
    ["总分", state.score],
    ["命中率", `${hitRate}%`],
    ["黏性指数", `${stickyIndex}%`],
    ["平均适应轮数", avgAdapt],
    ["最高连珍珠", state.stats.bestPearlStreak],
    ["探索率", `${exploreRate}%`],
    ["跳过轮数", state.stats.skippedRounds],
    ["状态切换", state.stats.switches]
  ];
  el.metricGrid.innerHTML = metrics.map(([label, value]) => `
    <div class="metric"><span>${label}</span><strong>${value}</strong></div>
  `).join("");
  lastReportText = `捡贝壳儿观潮报告
称号：${title}
总分：${state.score}
命中率：${hitRate}%
黏性指数：${stickyIndex}%
跳过轮数：${state.stats.skippedRounds}
平均适应轮数：${avgAdapt}
测试时长：${durationMin}分钟`;
  saveReport({ title, score: state.score, hitRate, stickyIndex, avgAdapt, durationMin, createdAt: new Date().toISOString() });
  showScreen(el.reportScreen);
}

function titleFor({ hitRate, stickyIndex, avgAdapt }) {
  if (hitRate >= 62 && stickyIndex <= 25 && avgAdapt <= 2.2) return "敏锐观潮者";
  if (stickyIndex <= 35 && avgAdapt <= 3) return "灵活航海家";
  if (hitRate >= 55 && stickyIndex <= 50) return "稳健拾贝人";
  if (hitRate < 48 && stickyIndex <= 35) return "勇敢探贝者";
  return "执着收藏家";
}

function saveReport(report) {
  const key = "shellGameReports";
  const reports = JSON.parse(localStorage.getItem(key) || "[]");
  reports.unshift(report);
  localStorage.setItem(key, JSON.stringify(reports.slice(0, 20)));
}

function applySeason(season) {
  el.scene.classList.remove(...seasons);
  el.scene.classList.add(season);
}

function clearShells() {
  state.caught = [];
  state.selected.clear();
  state.canSelect = false;
  el.shellField.innerHTML = "";
  hideShellPreview();
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => el.toast.classList.remove("is-visible"), 1600);
}

function shellSvg(shell, opened, result) {
  const [a, b, c] = shell.colors;
  const content = opened ? innerContent(result) : "";
  if (shell.shape === "fan") return fanShell(a, b, c, content);
  if (shell.shape === "long") return longShell(a, b, c, content);
  if (shell.shape === "spiral") return spiralShell(a, b, c, content);
  if (shell.shape === "star") return starShell(a, b, c, content);
  return roundShell(a, b, c, content);
}

function shellSprite(shell) {
  const col = shell.id % 5;
  const row = Math.floor(shell.id / 5);
  const x = col * 25;
  const y = row * 33.3333;
  return `<span class="shell-sprite" style="background-position:${x}% ${y}%" aria-hidden="true"></span>`;
}

function updateShellPreview() {
  const latestUid = Array.from(state.selected).at(-1);
  if (!latestUid) {
    hideShellPreview();
    return;
  }
  const caught = state.caught.find((item) => item.uid === latestUid);
  if (!caught) {
    hideShellPreview();
    return;
  }
  const shell = shellTypes[caught.id];
  el.shellPreview.innerHTML = `
    <div class="preview-bubble">
      ${shellSprite(shell)}
      <span class="preview-name">${shell.name}</span>
    </div>
  `;
  el.shellPreview.classList.add("is-visible");
}

function hideShellPreview() {
  el.shellPreview.classList.remove("is-visible");
  el.shellPreview.innerHTML = "";
}

function resultOverlay(result) {
  if (result === "pearl") {
    return `
      <span class="shell-result pearl" aria-hidden="true">
        <span class="pearl-core"></span>
      </span>
    `;
  }
  return `
    <span class="shell-result sand" aria-hidden="true">
      <span class="sand-pile"></span>
      <span class="sand-grain grain-a"></span>
      <span class="sand-grain grain-b"></span>
      <span class="sand-grain grain-c"></span>
    </span>
  `;
}

function innerContent(result) {
  if (result === "pearl") {
    return `<circle cx="50" cy="49" r="9" fill="#fff8d7" stroke="#f0c849" stroke-width="3"/><circle cx="46" cy="45" r="2.4" fill="#fff"/>`;
  }
  return `<path d="M39 51 C43 45 57 45 61 51 L58 59 L42 59 Z" fill="#b98b62"/><circle cx="45" cy="54" r="1.8" fill="#805b3d"/><circle cx="54" cy="53" r="1.5" fill="#805b3d"/>`;
}

function roundShell(a, b, c, content) {
  return `<svg viewBox="0 0 100 100" role="img">
    <path d="M18 55 C18 26 39 13 56 18 C76 23 88 41 82 63 C77 82 55 91 34 80 C24 75 18 67 18 55Z" fill="${a}" stroke="${b}" stroke-width="5"/>
    <path d="M30 28 C39 47 42 65 36 80" fill="none" stroke="${b}" stroke-width="4" opacity=".65"/>
    <path d="M50 20 C54 42 53 64 48 86" fill="none" stroke="${b}" stroke-width="4" opacity=".55"/>
    <path d="M69 32 C60 47 59 65 64 78" fill="none" stroke="${b}" stroke-width="4" opacity=".5"/>
    <circle cx="71" cy="27" r="5" fill="${c}"/>
    ${content}
  </svg>`;
}

function fanShell(a, b, c, content) {
  return `<svg viewBox="0 0 100 100" role="img">
    <path d="M15 72 C18 36 38 15 50 14 C65 15 84 38 86 72 C70 88 32 88 15 72Z" fill="${a}" stroke="${b}" stroke-width="5"/>
    <path d="M50 16 L50 83 M33 23 L43 83 M67 24 L57 83 M22 42 L36 82 M78 42 L64 82" stroke="${b}" stroke-width="4" opacity=".62" stroke-linecap="round"/>
    <path d="M28 66 C40 72 61 72 73 66" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
    ${content}
  </svg>`;
}

function longShell(a, b, c, content) {
  return `<svg viewBox="0 0 100 100" role="img">
    <path d="M45 10 C58 21 74 50 72 72 C70 88 42 92 30 78 C44 64 46 40 45 10Z" fill="${a}" stroke="${b}" stroke-width="5" stroke-linejoin="round"/>
    <path d="M47 22 C54 30 61 47 61 67 M40 48 C49 50 61 49 71 45 M36 65 C47 69 60 69 70 63" stroke="${b}" stroke-width="4" opacity=".62" fill="none" stroke-linecap="round"/>
    <circle cx="40" cy="77" r="6" fill="${c}"/>
    ${content}
  </svg>`;
}

function spiralShell(a, b, c, content) {
  return `<svg viewBox="0 0 100 100" role="img">
    <path d="M22 60 C20 37 38 19 59 21 C80 23 88 43 78 60 C66 82 28 84 22 60Z" fill="${a}" stroke="${b}" stroke-width="5"/>
    <path d="M62 34 C49 27 35 36 36 50 C37 65 58 68 66 56 C73 45 61 38 53 43 C46 48 50 58 58 55" fill="none" stroke="${b}" stroke-width="5" stroke-linecap="round"/>
    <path d="M28 69 C45 75 62 74 76 64" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
    ${content}
  </svg>`;
}

function starShell(a, b, c, content) {
  return `<svg viewBox="0 0 100 100" role="img">
    <path d="M50 12 L61 38 L88 31 L70 54 L88 76 L59 70 L50 91 L40 70 L12 76 L30 54 L12 31 L39 38Z" fill="${a}" stroke="${b}" stroke-width="5" stroke-linejoin="round"/>
    <path d="M50 20 L50 84 M20 36 L78 72 M80 36 L22 72" stroke="${b}" stroke-width="3.5" opacity=".52" stroke-linecap="round"/>
    <circle cx="50" cy="51" r="13" fill="${c}" opacity=".65"/>
    ${content}
  </svg>`;
}

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

el.startBtn.addEventListener("click", () => startGame({ tutorial: true }));
el.skipTutorialBtn.addEventListener("click", () => startGame({ tutorial: false }));
el.castBtn.addEventListener("click", castNet);
el.openBtn.addEventListener("click", openSelected);
el.restartBtn.addEventListener("click", () => showScreen(el.startScreen));
el.playAgainBtn.addEventListener("click", () => startGame({ tutorial: false }));
el.copyReportBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(lastReportText);
    el.copyReportBtn.textContent = "已复制";
    setTimeout(() => { el.copyReportBtn.textContent = "复制报告"; }, 1200);
  } catch {
    showScreen(el.reportScreen);
  }
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
