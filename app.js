const CATEGORIES = [
  "Electronics",
  "Furniture",
  "Appliances",
  "Tools",
  "Clothing",
  "Kitchen Items",
  "Books/Media",
  "Sports/Recreation",
  "Decor",
  "Cleaning",
  "Pool",
  "Outdoor",
  "Other",
];

const CONDITIONS = ["Excellent", "Good", "Fair", "Poor"];

const CATEGORY_COLORS = {
  Electronics: "#2f67b1",
  Furniture: "#7256a4",
  Appliances: "#9b5b12",
  Tools: "#a44040",
  Clothing: "#b0497a",
  "Kitchen Items": "#27735f",
  "Books/Media": "#4b5db8",
  "Sports/Recreation": "#147e80",
  Decor: "#986028",
  Cleaning: "#5a6b44",
  Pool: "#176b87",
  Outdoor: "#6b6f2a",
  Other: "#667085",
};

const today = () => new Date().toLocaleDateString("en-US");
const item = (id, name, category = "Other", condition = "Good", estimatedValue = "", notes = "") => ({
  id,
  name,
  category,
  condition,
  estimatedValue,
  notes,
  dateAdded: "6/3/2026",
});

const emptyLocation = (id, name) => ({ id, name, items: [] });

const HARDWIRED_ROOMS = [
  {
    id: "kitchen",
    name: "Kitchen",
    locations: [
      {
        id: "uc1",
        name: "Upper Cabinet 1",
        items: [
          item("uc1-1", "Pyrex measuring cup", "Kitchen Items"),
          item("uc1-2", "Spice rack", "Kitchen Items"),
          item("uc1-3", "Air dry clay"),
          item("uc1-4", "Electric mixer", "Appliances"),
          item("uc1-5", "Vase", "Decor"),
        ],
      },
      {
        id: "uc2",
        name: "Upper Cabinet 2",
        items: [
          item("uc2-1", "Fire extinguisher"),
          item("uc2-2", "Exhaust vent"),
        ],
      },
      {
        id: "uc3",
        name: "Upper Cabinet 3",
        items: [
          item("uc3-1", "Mugs", "Kitchen Items"),
          item("uc3-2", "Glasses", "Kitchen Items"),
          item("uc3-3", "Thermoses", "Kitchen Items"),
          item("uc3-4", "Lunch boxes", "Kitchen Items"),
        ],
      },
      {
        id: "uc4",
        name: "Upper Cabinet 4",
        items: [item("uc4-1", "Protein powder", "Kitchen Items")],
      },
      {
        id: "uc5",
        name: "Upper Cabinet 5",
        items: [
          item("uc5-1", "Ceramic dishes", "Kitchen Items"),
          item("uc5-2", "Serving plate", "Kitchen Items"),
          item("uc5-3", "Glass salad bowls", "Kitchen Items"),
          item("uc5-4", "Casserole oven dish", "Kitchen Items"),
        ],
      },
      emptyLocation("uc6", "Upper Cabinet 6"),
      {
        id: "uc7",
        name: "Upper Cabinet 7",
        items: [
          item("uc7-1", "Glass serving dish", "Kitchen Items"),
          item("uc7-2", "Grannie's ashes"),
          item("uc7-3", "Mug drying rack", "Kitchen Items"),
          item("uc7-4", "Soup bowls", "Kitchen Items"),
          item("uc7-5", "Plates", "Kitchen Items"),
          item("uc7-6", "Towels", "Kitchen Items"),
          item("uc7-7", "Small mixing bowls", "Kitchen Items"),
        ],
      },
      {
        id: "lc1",
        name: "Lower Cabinet 1",
        items: [
          item("lc1-1", "Tupperware containers", "Kitchen Items"),
          item("lc1-2", "Pots", "Kitchen Items"),
          item("lc1-3", "Pot lids", "Kitchen Items"),
        ],
      },
      {
        id: "lc2",
        name: "Lower Cabinet 2",
        items: [
          item("lc2-1", "Soy sauce", "Kitchen Items"),
          item("lc2-2", "Vinegar", "Kitchen Items"),
          item("lc2-3", "Strainers", "Kitchen Items"),
          item("lc2-4", "Mixer", "Appliances"),
          item("lc2-5", "Mixing bowl", "Kitchen Items"),
        ],
      },
      {
        id: "lc3",
        name: "Lower Cabinet 3",
        items: [
          item("lc3-1", "Oven glassware", "Kitchen Items"),
          item("lc3-2", "Baking pans", "Kitchen Items"),
          item("lc3-3", "Mixing bowl", "Kitchen Items"),
          item("lc3-4", "Air fryer insert", "Kitchen Items"),
        ],
      },
      {
        id: "lc4",
        name: "Lower Cabinet 4",
        items: [
          item("lc4-1", "White ox cleaner", "Cleaning"),
          item("lc4-2", "Glass top cleaner", "Cleaning"),
          item("lc4-3", "Dishwasher liquid", "Cleaning"),
          item("lc4-4", "Cleaning eraser", "Cleaning"),
          item("lc4-5", "Pink Stuff", "Cleaning"),
        ],
      },
      {
        id: "lc5",
        name: "Lower Cabinet 5",
        items: [
          item("lc5-1", "Griddle", "Appliances"),
          item("lc5-2", "Waffle maker", "Appliances"),
          item("lc5-3", "Drip pan", "Kitchen Items"),
          item("lc5-4", "Muffin tin", "Kitchen Items"),
          item("lc5-5", "Ceramic pot", "Kitchen Items"),
        ],
      },
      {
        id: "d1",
        name: "Drawer 1",
        items: [
          item("d1-1", "Cookie cutters", "Kitchen Items"),
          item("d1-2", "Cheese grater", "Kitchen Items"),
          item("d1-3", "Rolling pins", "Kitchen Items"),
        ],
      },
      {
        id: "d2",
        name: "Drawer 2",
        items: [
          item("d2-1", "Measuring cups", "Kitchen Items"),
          item("d2-2", "Measuring spoons", "Kitchen Items"),
          item("d2-3", "Oven mitts", "Kitchen Items"),
          item("d2-4", "Meat hammer", "Kitchen Items"),
        ],
      },
      {
        id: "d3",
        name: "Drawer 3",
        items: [
          item("d3-1", "Aluminum foil", "Kitchen Items"),
          item("d3-2", "Plastic wrap", "Kitchen Items"),
          item("d3-3", "Parchment paper", "Kitchen Items"),
        ],
      },
      {
        id: "d4",
        name: "Drawer 4",
        items: [item("d4-1", "Sandwich bags", "Kitchen Items")],
      },
      {
        id: "d5",
        name: "Drawer 5",
        items: [
          item("d5-1", "Pizza cutter", "Kitchen Items"),
          item("d5-2", "Can opener", "Kitchen Items"),
          item("d5-3", "Whisk", "Kitchen Items"),
          item("d5-4", "Fish spatula", "Kitchen Items"),
          item("d5-5", "Wine opener", "Kitchen Items"),
        ],
      },
      {
        id: "d6",
        name: "Drawer 6",
        items: [
          item("d6-1", "Rubber lid covers", "Kitchen Items"),
          item("d6-2", "Knife sharpener", "Kitchen Items"),
          item("d6-3", "Apron", "Clothing"),
        ],
      },
      {
        id: "d7",
        name: "Drawer 7",
        items: [
          item("d7-1", "Silverware", "Kitchen Items"),
          item("d7-2", "Chopsticks", "Kitchen Items"),
          item("d7-3", "S'mores sticks", "Kitchen Items"),
          item("d7-4", "Fire sticks", "Kitchen Items"),
        ],
      },
      emptyLocation("ls1", "Lazy Susan"),
    ],
  },
  {
    id: "living-room",
    name: "Living Room",
    locations: [emptyLocation("lr-main", "Main Area"), emptyLocation("lr-media", "Media Console")],
  },
  {
    id: "master-bedroom",
    name: "Master Bedroom",
    locations: [emptyLocation("mb-main", "Main Area"), emptyLocation("mb-closet", "Closet"), emptyLocation("mb-dresser", "Dresser")],
  },
  {
    id: "bedroom2",
    name: "Pool Bedroom",
    locations: [emptyLocation("b2-main", "Main Area"), emptyLocation("b2-closet", "Closet"), emptyLocation("b2-dresser", "Dresser")],
  },
  {
    id: "bedroom3",
    name: "Front Bedroom",
    locations: [emptyLocation("b3-main", "Main Area"), emptyLocation("b3-closet", "Closet"), emptyLocation("b3-dresser", "Dresser")],
  },
  {
    id: "bathroom",
    name: "Bathroom",
    locations: [emptyLocation("bath-vanity", "Vanity"), emptyLocation("bath-linen", "Linen Closet"), emptyLocation("bath-shower", "Shower")],
  },
  {
    id: "garage",
    name: "Garage",
    locations: [emptyLocation("garage-main", "Main Area"), emptyLocation("garage-shelves", "Shelves"), emptyLocation("garage-tools", "Tool Area")],
  },
  {
    id: "office",
    name: "Office",
    locations: [emptyLocation("office-desk", "Desk"), emptyLocation("office-closet", "Closet"), emptyLocation("office-shelves", "Shelves")],
  },
  {
    id: "dining-room",
    name: "Dining Room",
    locations: [emptyLocation("dr-main", "Main Area"), emptyLocation("dr-cabinet", "Dining Cabinet")],
  },
  {
    id: "laundry",
    name: "Laundry Room",
    locations: [emptyLocation("laundry-cabinet", "Cabinet"), emptyLocation("laundry-shelf", "Shelf"), emptyLocation("laundry-main", "Main Area")],
  },
  {
    id: "lanai",
    name: "Lanai",
    locations: [
      {
        id: "lanai-main",
        name: "Lanai Main Area",
        items: [
          item("lanai-main-1", "Single umbrella", "Outdoor"),
          item("lanai-main-2", "Double umbrella", "Outdoor"),
          item("lanai-main-3", "Foosball table", "Sports/Recreation"),
          item("lanai-main-4", "2 egg chairs", "Furniture"),
          item("lanai-main-5", "L-shaped couch", "Furniture"),
          item("lanai-main-6", "Dolphin Nautilis pool robot", "Pool"),
        ],
      },
      {
        id: "pool-wicker-storage-cabinet",
        name: "Pool Wicker Storage Cabinet",
        items: [
          item("pool-wicker-storage-cabinet-1", "Sunscreen", "Outdoor"),
          item("pool-wicker-storage-cabinet-2", "20 ft extension cord", "Tools"),
        ],
      },
      emptyLocation("oc1", "Outdoor Cabinet Shelf 1"),
      emptyLocation("oc2", "Outdoor Cabinet Shelf 2"),
      emptyLocation("oc3", "Outdoor Cabinet Shelf 3"),
      emptyLocation("oc4", "Outdoor Cabinet Shelf 4"),
    ],
  },
  {
    id: "shed",
    name: "Shed",
    locations: [emptyLocation("shed-main", "Main Area"), emptyLocation("shed-shelves", "Shelves"), emptyLocation("shed-tools", "Tool Area")],
  },
];

const STORAGE_KEY = "houseInventory.rooms.v1";
const GITHUB_SETTINGS_KEY = "houseInventory.githubSettings.v1";
const DEFAULT_DATA_PATH = "inventory-data.json";

let rooms = clone(HARDWIRED_ROOMS);
let itemsCollapsed = false;
let locationListExpanded = false;

const elements = {
  locationList: document.querySelector("#locationList"),
  inventory: document.querySelector("#inventory"),
  stats: document.querySelector("#stats"),
  searchInput: document.querySelector("#searchInput"),
  collapseAllButton: document.querySelector("#collapseAllButton"),
  showAllButton: document.querySelector("#showAllButton"),
  resetButton: document.querySelector("#resetButton"),
  deleteItemForm: document.querySelector("#deleteItemForm"),
  deleteRoomSelect: document.querySelector("#deleteRoomSelect"),
  deleteLocationSelect: document.querySelector("#deleteLocationSelect"),
  deleteItemSelect: document.querySelector("#deleteItemSelect"),
  deleteItemButton: document.querySelector("#deleteItemButton"),
  deleteItemStatus: document.querySelector("#deleteItemStatus"),
  form: document.querySelector("#addItemForm"),
  roomSelect: document.querySelector("#roomSelect"),
  locationSelect: document.querySelector("#locationSelect"),
  newLocationName: document.querySelector("#newLocationName"),
  addLocationButton: document.querySelector("#addLocationButton"),
  deleteLocationButton: document.querySelector("#deleteLocationButton"),
  locationStatus: document.querySelector("#locationStatus"),
  itemName: document.querySelector("#itemName"),
  categorySelect: document.querySelector("#categorySelect"),
  conditionSelect: document.querySelector("#conditionSelect"),
  itemValue: document.querySelector("#itemValue"),
  itemNotes: document.querySelector("#itemNotes"),
  githubForm: document.querySelector("#githubForm"),
  githubOwner: document.querySelector("#githubOwner"),
  githubRepo: document.querySelector("#githubRepo"),
  githubBranch: document.querySelector("#githubBranch"),
  githubPath: document.querySelector("#githubPath"),
  githubToken: document.querySelector("#githubToken"),
  githubStatus: document.querySelector("#githubStatus"),
  publishButton: document.querySelector("#publishButton"),
  reloadGitHubButton: document.querySelector("#reloadGitHubButton"),
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

async function loadRooms() {
  const githubRooms = await fetchPublishedRooms();
  if (githubRooms) return githubRooms;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return clone(HARDWIRED_ROOMS);

  try {
    return JSON.parse(saved);
  } catch {
    return clone(HARDWIRED_ROOMS);
  }
}

function saveRooms() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
}

async function fetchPublishedRooms(path = DEFAULT_DATA_PATH) {
  try {
    const response = await fetch(`${path}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return null;

    const data = await response.json();
    const roomData = Array.isArray(data) ? data : data.rooms;
    return normalizeRooms(roomData);
  } catch {
    return null;
  }
}

function normalizeRooms(roomData) {
  if (!Array.isArray(roomData)) return null;

  return roomData.map((room) => ({
    id: String(room.id || ""),
    name: String(room.name || room.id || "Room"),
    locations: Array.isArray(room.locations)
      ? room.locations.map((location) => ({
          id: String(location.id || ""),
          name: String(location.name || location.id || "Location"),
          items: Array.isArray(location.items)
            ? location.items.map((inventoryItem) => ({
                id: String(inventoryItem.id || ""),
                name: String(inventoryItem.name || "Unnamed item"),
                category: inventoryItem.category || "Other",
                condition: inventoryItem.condition || "Good",
                estimatedValue: inventoryItem.estimatedValue || "",
                notes: inventoryItem.notes || "",
                dateAdded: inventoryItem.dateAdded || "",
              }))
            : [],
        }))
      : [],
  }));
}

function totalItems(roomList = rooms) {
  return roomList.reduce((sum, room) => sum + room.locations.reduce((locSum, location) => locSum + location.items.length, 0), 0);
}

function allLocations(roomList = rooms) {
  return roomList.flatMap((room) => room.locations.map((location) => ({ room, location })));
}

function itemMatches(room, location, inventoryItem, query) {
  if (!query) return true;
  const haystack = [
    room.id,
    room.name,
    location.id,
    location.name,
    inventoryItem.id,
    inventoryItem.name,
    inventoryItem.category,
    inventoryItem.condition,
    inventoryItem.notes,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function filteredRooms() {
  const query = elements.searchInput.value.trim().toLowerCase();
  if (!query) return rooms;

  return rooms
    .map((room) => ({
      ...room,
      locations: room.locations
        .map((location) => ({
          ...location,
          items: location.items.filter((inventoryItem) => itemMatches(room, location, inventoryItem, query)),
        }))
        .filter((location) => location.items.length > 0 || location.id.toLowerCase().includes(query) || location.name.toLowerCase().includes(query)),
    }))
    .filter((room) => room.locations.length > 0 || room.id.toLowerCase().includes(query) || room.name.toLowerCase().includes(query));
}

function renderStats() {
  elements.stats.innerHTML = [
    { value: rooms.length, label: "Rooms" },
    { value: allLocations().length, label: "Locations" },
    { value: totalItems(), label: "Items" },
  ]
    .map((stat) => `<div class="stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`)
    .join("");
}

function renderCollapseControls() {
  elements.collapseAllButton.disabled = itemsCollapsed;
  elements.showAllButton.disabled = !itemsCollapsed;
}

function renderSelects() {
  elements.roomSelect.innerHTML = rooms.map((room) => `<option value="${escapeHtml(room.id)}">${escapeHtml(room.name)}</option>`).join("");
  elements.deleteRoomSelect.innerHTML = rooms.length
    ? rooms.map((room) => `<option value="${escapeHtml(room.id)}">${escapeHtml(room.name)}</option>`).join("")
    : `<option value="">No rooms available</option>`;
  elements.categorySelect.innerHTML = CATEGORIES.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  elements.conditionSelect.innerHTML = CONDITIONS.map((condition) => `<option value="${escapeHtml(condition)}">${escapeHtml(condition)}</option>`).join("");
  elements.categorySelect.value = "Other";
  elements.conditionSelect.value = "Good";
  renderLocationSelect();
  selectFirstDeletableItem();
}

function renderLocationSelect() {
  const room = rooms.find((entry) => entry.id === elements.roomSelect.value) || rooms[0];
  elements.locationSelect.innerHTML = room.locations
    .map((location) => `<option value="${escapeHtml(location.id)}">${escapeHtml(location.name)} (${escapeHtml(location.id)})</option>`)
    .join("");
}

function renderDeleteLocationSelect() {
  const room = rooms.find((entry) => entry.id === elements.deleteRoomSelect.value) || rooms[0];
  const locations = room?.locations || [];

  elements.deleteLocationSelect.innerHTML = locations.length
    ? locations.map((location) => `<option value="${escapeHtml(location.id)}">${escapeHtml(location.name)} (${escapeHtml(location.id)})</option>`).join("")
    : `<option value="">No locations in this room</option>`;
  elements.deleteLocationSelect.disabled = locations.length === 0;
  renderDeleteItemSelect();
}

function renderDeleteItemSelect() {
  const room = rooms.find((entry) => entry.id === elements.deleteRoomSelect.value) || rooms[0];
  const location = room?.locations.find((entry) => entry.id === elements.deleteLocationSelect.value);
  const items = location?.items || [];

  elements.deleteItemSelect.innerHTML = items.length
    ? items.map((inventoryItem) => `<option value="${escapeHtml(inventoryItem.id)}">${escapeHtml(inventoryItem.name)} (${escapeHtml(inventoryItem.id)})</option>`).join("")
    : `<option value="">No items in this location</option>`;
  elements.deleteItemSelect.disabled = items.length === 0;
  elements.deleteItemButton.disabled = items.length === 0;
}

function selectFirstDeletableItem() {
  const roomWithItems = rooms.find((room) => room.locations.some((location) => location.items.length > 0)) || rooms[0];
  const locationWithItems = roomWithItems?.locations.find((location) => location.items.length > 0) || roomWithItems?.locations[0];

  if (roomWithItems) elements.deleteRoomSelect.value = roomWithItems.id;
  renderDeleteLocationSelect();
  if (locationWithItems) elements.deleteLocationSelect.value = locationWithItems.id;
  renderDeleteItemSelect();
}

function renderInventory() {
  const visibleRooms = filteredRooms();
  elements.inventory.innerHTML = visibleRooms.map(renderRoom).join("");
  renderLocationList();
  renderStats();
  renderCollapseControls();
}

function renderLocationList() {
  elements.locationList.innerHTML = rooms.map(renderLocationListRoom).join("");
}

function renderLocationListRoom(room) {
  const roomItemCount = totalItems([room]);
  return `
    <details class="room-summary" ${locationListExpanded ? "open" : ""}>
      <summary>
        <span class="summary-main">
          <span class="expand-mark" aria-hidden="true">+</span>
          <strong>${escapeHtml(room.name)}</strong>
          <span class="id-pill">${escapeHtml(room.id)}</span>
        </span>
        <span class="summary-meta">
          <span class="count-pill">${room.locations.length} ${room.locations.length === 1 ? "location" : "locations"}</span>
          <span class="count-pill">${roomItemCount} ${roomItemCount === 1 ? "item" : "items"}</span>
        </span>
      </summary>
      <div class="summary-locations">
        ${room.locations.map(renderLocationListLocation).join("")}
      </div>
    </details>
  `;
}

function renderLocationListLocation(location) {
  return `
    <div class="summary-location">
      <div class="summary-location-header">
        <span class="summary-location-title">
          <strong>${escapeHtml(location.name)}</strong>
          <span class="id-pill">${escapeHtml(location.id)}</span>
        </span>
        <span class="count-pill">${location.items.length}</span>
      </div>
      ${
        location.items.length
          ? `<ul class="summary-items">${location.items.map(renderLocationListItem).join("")}</ul>`
          : `<p class="empty">No items yet.</p>`
      }
    </div>
  `;
}

function renderLocationListItem(inventoryItem) {
  return `
    <li class="summary-item">
      <span>${escapeHtml(inventoryItem.name)}</span>
      <span class="id-pill">${escapeHtml(inventoryItem.id)}</span>
    </li>
  `;
}

function renderRoom(room) {
  const roomItemCount = totalItems([room]);
  return `
    <article class="room">
      <header class="room-header">
        <div class="room-title">
          <h2>${escapeHtml(room.name)}</h2>
          <span class="id-pill">${escapeHtml(room.id)}</span>
        </div>
        <span class="count-pill">${roomItemCount} ${roomItemCount === 1 ? "item" : "items"}</span>
      </header>
      <div class="locations">
        ${room.locations.map((location) => renderLocation(location)).join("")}
      </div>
    </article>
  `;
}

function renderLocation(location) {
  return `
    <section class="location">
      <header class="location-header">
        <div>
          <h3>${escapeHtml(location.name)}</h3>
          <span class="id-pill">${escapeHtml(location.id)}</span>
        </div>
        <span class="count-pill">${location.items.length}</span>
      </header>
      ${
        itemsCollapsed
          ? `<p class="empty">Items hidden.</p>`
          : location.items.length
          ? `<ul class="items">${location.items.map((inventoryItem) => renderItem(inventoryItem)).join("")}</ul>`
          : `<p class="empty">No items yet.</p>`
      }
    </section>
  `;
}

function renderItem(inventoryItem) {
  const color = CATEGORY_COLORS[inventoryItem.category] || CATEGORY_COLORS.Other;
  const value = inventoryItem.estimatedValue ? ` · ${escapeHtml(inventoryItem.estimatedValue)}` : "";
  const notes = inventoryItem.notes ? `<div class="notes">${escapeHtml(inventoryItem.notes)}</div>` : "";

  return `
    <li class="item">
      <div>
        <p class="item-name">${escapeHtml(inventoryItem.name)}</p>
        <div class="item-meta">
          <span class="category-pill" style="background:${color}">${escapeHtml(inventoryItem.category)}</span>
          <span class="condition">${escapeHtml(inventoryItem.condition)}${value}</span>
        </div>
      </div>
      <span class="id-pill">${escapeHtml(inventoryItem.id)}</span>
      ${notes}
    </li>
  `;
}

function nextItemId(location) {
  let highest = 0;
  for (const inventoryItem of location.items) {
    const match = inventoryItem.id.match(/-(\d+)$/);
    if (match) highest = Math.max(highest, Number(match[1]));
  }
  return `${location.id}-${highest + 1}`;
}

function slugifyLocationName(name) {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "location";
}

function nextLocationId(room, name) {
  const baseId = slugifyLocationName(name);
  const existingIds = new Set(room.locations.map((location) => location.id));

  if (!existingIds.has(baseId)) return baseId;

  let index = 2;
  while (existingIds.has(`${baseId}-${index}`)) {
    index += 1;
  }

  return `${baseId}-${index}`;
}

function setLocationStatus(message, type = "") {
  elements.locationStatus.textContent = message;
  elements.locationStatus.className = `mini-status ${type}`.trim();
}

function setDeleteItemStatus(message, type = "") {
  elements.deleteItemStatus.textContent = message;
  elements.deleteItemStatus.className = `mini-status ${type}`.trim();
}

function addLocation() {
  const room = rooms.find((entry) => entry.id === elements.roomSelect.value);
  const name = elements.newLocationName.value.trim();

  if (!room) {
    setLocationStatus("Choose a room first.", "error");
    return;
  }

  if (!name) {
    setLocationStatus("Type a location name.", "error");
    elements.newLocationName.focus();
    return;
  }

  const location = {
    id: nextLocationId(room, name),
    name,
    items: [],
  };

  room.locations.push(location);
  saveRooms();
  elements.newLocationName.value = "";
  renderLocationSelect();
  elements.locationSelect.value = location.id;
  elements.deleteRoomSelect.value = room.id;
  renderDeleteLocationSelect();
  elements.deleteLocationSelect.value = location.id;
  renderDeleteItemSelect();
  renderInventory();
  setLocationStatus(`Added ${location.name}. Publish to GitHub to share it.`, "success");
  elements.itemName.focus();
}

function deleteSelectedLocation() {
  const room = rooms.find((entry) => entry.id === elements.roomSelect.value);
  const location = room?.locations.find((entry) => entry.id === elements.locationSelect.value);

  if (!room || !location) {
    setLocationStatus("Choose a location to delete.", "error");
    return;
  }

  const hasItems = location.items.length > 0;
  const message = hasItems
    ? `Delete ${location.name} and its ${location.items.length} item${location.items.length === 1 ? "" : "s"}?`
    : `Delete ${location.name}?`;

  if (!window.confirm(message)) return;

  room.locations = room.locations.filter((entry) => entry.id !== location.id);
  saveRooms();
  renderSelects();
  elements.roomSelect.value = room.id;
  renderLocationSelect();
  elements.deleteRoomSelect.value = room.id;
  renderDeleteLocationSelect();
  elements.searchInput.value = "";
  renderInventory();
  setLocationStatus(`Deleted ${location.name}. Publish to GitHub to share it.`, "success");
}

function addItem(event) {
  event.preventDefault();

  const room = rooms.find((entry) => entry.id === elements.roomSelect.value);
  const location = room?.locations.find((entry) => entry.id === elements.locationSelect.value);
  const name = elements.itemName.value.trim();

  if (!room || !location || !name) return;

  location.items.push({
    id: nextItemId(location),
    name,
    category: elements.categorySelect.value,
    condition: elements.conditionSelect.value,
    estimatedValue: elements.itemValue.value.trim(),
    notes: elements.itemNotes.value.trim(),
    dateAdded: today(),
  });

  saveRooms();
  elements.form.reset();
  elements.roomSelect.value = room.id;
  renderLocationSelect();
  elements.locationSelect.value = location.id;
  elements.deleteRoomSelect.value = room.id;
  renderDeleteLocationSelect();
  elements.deleteLocationSelect.value = location.id;
  renderDeleteItemSelect();
  elements.categorySelect.value = "Other";
  elements.conditionSelect.value = "Good";
  elements.itemName.focus();
  renderInventory();
}

function deleteSelectedItem(event) {
  event.preventDefault();

  const room = rooms.find((entry) => entry.id === elements.deleteRoomSelect.value);
  const location = room?.locations.find((entry) => entry.id === elements.deleteLocationSelect.value);
  const itemId = elements.deleteItemSelect.value;
  const inventoryItem = location?.items.find((entry) => entry.id === itemId);

  if (!room || !location || !inventoryItem) {
    setDeleteItemStatus("Choose an item to delete.", "error");
    return;
  }

  if (!window.confirm(`Delete ${inventoryItem.name}?`)) return;

  location.items = location.items.filter((entry) => entry.id !== itemId);
  saveRooms();
  elements.roomSelect.value = room.id;
  renderLocationSelect();
  elements.locationSelect.value = location.id;
  renderDeleteItemSelect();
  elements.searchInput.value = "";
  renderInventory();
  setDeleteItemStatus(`Deleted ${inventoryItem.name}. Publish to GitHub to share it.`, "success");
}

function resetInventory() {
  rooms = clone(HARDWIRED_ROOMS);
  saveRooms();
  elements.searchInput.value = "";
  renderSelects();
  renderInventory();
}

function collapseAllItems() {
  itemsCollapsed = true;
  locationListExpanded = false;
  renderInventory();
}

function showAllItems() {
  itemsCollapsed = false;
  locationListExpanded = true;
  renderInventory();
}

function inferGitHubSettings() {
  const saved = localStorage.getItem(GITHUB_SETTINGS_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Fall through to URL inference.
    }
  }

  const host = window.location.hostname;
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const isGithubPages = host.endsWith(".github.io");
  return {
    owner: isGithubPages ? host.replace(".github.io", "") : "",
    repo: isGithubPages && pathParts.length ? pathParts[0] : "",
    branch: "main",
    path: DEFAULT_DATA_PATH,
  };
}

function populateGitHubSettings() {
  const settings = inferGitHubSettings();
  elements.githubOwner.value = settings.owner || "";
  elements.githubRepo.value = settings.repo || "";
  elements.githubBranch.value = settings.branch || "main";
  elements.githubPath.value = settings.path || DEFAULT_DATA_PATH;
}

function currentGitHubSettings() {
  return {
    owner: elements.githubOwner.value.trim(),
    repo: elements.githubRepo.value.trim(),
    branch: elements.githubBranch.value.trim() || "main",
    path: elements.githubPath.value.trim() || DEFAULT_DATA_PATH,
  };
}

function saveGitHubSettings(settings) {
  localStorage.setItem(GITHUB_SETTINGS_KEY, JSON.stringify(settings));
}

function setGitHubStatus(message, type = "") {
  elements.githubStatus.textContent = message;
  elements.githubStatus.className = `status-line ${type}`.trim();
}

function githubHeaders(token) {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

function toBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

async function githubRequest(url, options) {
  const response = await fetch(url, options);
  if (response.ok) return response.json();

  let detail = `${response.status} ${response.statusText}`;
  try {
    const body = await response.json();
    if (body.message) detail = body.message;
  } catch {
    // Keep the HTTP status text.
  }

  const error = new Error(detail);
  error.status = response.status;
  throw error;
}

async function getGitHubFile(settings, token) {
  const encodedPath = settings.path.split("/").map(encodeURIComponent).join("/");
  const url = `https://api.github.com/repos/${encodeURIComponent(settings.owner)}/${encodeURIComponent(settings.repo)}/contents/${encodedPath}?ref=${encodeURIComponent(settings.branch)}`;

  try {
    return await githubRequest(url, {
      method: "GET",
      headers: githubHeaders(token),
    });
  } catch (error) {
    if (error.status === 404) return null;
    throw error;
  }
}

async function publishToGitHub(event) {
  event.preventDefault();

  const settings = currentGitHubSettings();
  const token = elements.githubToken.value.trim();

  if (!settings.owner || !settings.repo || !settings.branch || !settings.path || !token) {
    setGitHubStatus("Fill in the GitHub owner, repository, branch, path, and token.", "error");
    return;
  }

  elements.publishButton.disabled = true;
  setGitHubStatus("Publishing inventory to GitHub...");

  try {
    const existingFile = await getGitHubFile(settings, token);
    const payload = {
      updatedAt: new Date().toISOString(),
      rooms,
    };
    const encodedPath = settings.path.split("/").map(encodeURIComponent).join("/");
    const url = `https://api.github.com/repos/${encodeURIComponent(settings.owner)}/${encodeURIComponent(settings.repo)}/contents/${encodedPath}`;
    const body = {
      message: `Update inventory data ${new Date().toLocaleString("en-US")}`,
      content: toBase64(`${JSON.stringify(payload, null, 2)}\n`),
      branch: settings.branch,
    };

    if (existingFile?.sha) body.sha = existingFile.sha;

    const result = await githubRequest(url, {
      method: "PUT",
      headers: githubHeaders(token),
      body: JSON.stringify(body),
    });

    saveRooms();
    saveGitHubSettings(settings);
    setGitHubStatus(`Published ${totalItems()} items. Commit ${result.commit.sha.slice(0, 7)}.`, "success");
  } catch (error) {
    setGitHubStatus(`GitHub publish failed: ${error.message}`, "error");
  } finally {
    elements.publishButton.disabled = false;
  }
}

async function reloadGitHubData() {
  const settings = currentGitHubSettings();
  const path = settings.path || DEFAULT_DATA_PATH;

  elements.reloadGitHubButton.disabled = true;
  setGitHubStatus("Reloading published inventory data...");

  const githubRooms = await fetchPublishedRooms(path);
  if (githubRooms) {
    rooms = githubRooms;
    saveRooms();
    saveGitHubSettings(settings);
    elements.searchInput.value = "";
    renderSelects();
    renderInventory();
    setGitHubStatus(`Reloaded ${totalItems()} items from ${path}.`, "success");
  } else {
    setGitHubStatus(`Could not load ${path}. Publish once first, or check the path.`, "error");
  }

  elements.reloadGitHubButton.disabled = false;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

elements.roomSelect.addEventListener("change", renderLocationSelect);
elements.addLocationButton.addEventListener("click", addLocation);
elements.deleteLocationButton.addEventListener("click", deleteSelectedLocation);
elements.newLocationName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addLocation();
  }
});
elements.form.addEventListener("submit", addItem);
elements.deleteItemForm.addEventListener("submit", deleteSelectedItem);
elements.deleteRoomSelect.addEventListener("change", renderDeleteLocationSelect);
elements.deleteLocationSelect.addEventListener("change", renderDeleteItemSelect);
elements.searchInput.addEventListener("input", renderInventory);
elements.collapseAllButton.addEventListener("click", collapseAllItems);
elements.showAllButton.addEventListener("click", showAllItems);
elements.resetButton.addEventListener("click", resetInventory);
elements.githubForm.addEventListener("submit", publishToGitHub);
elements.reloadGitHubButton.addEventListener("click", reloadGitHubData);

async function init() {
  rooms = await loadRooms();
  populateGitHubSettings();
  renderSelects();
  renderInventory();
}

init();
