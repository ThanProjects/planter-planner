/* ── Planter data ── */
const planters = [

  /* 1 ─ Window Box ──────────────────────────────────────── */
  {
    id: 'window-box',
    name: 'Window Box',
    skill: 'beginner',
    buildTime: '1–2 hrs',
    priceMin: 30,
    priceMax: 45,
    description: 'A slim, versatile trough for herbs, flowers, or trailing plants. Sits on a railing, windowsill, or fence top.',
    dimensions: '36"L × 8"W × 8"H',
    lumber: [
      { item: '1×8×8 ft cedar', qty: '2 boards' },
      { item: '1×2×4 ft cedar (cleats)', qty: '1 board' },
    ],
    supplies: [
      { item: '1½" exterior wood screws', qty: '1 lb box' },
      { item: 'Waterproof exterior glue', qty: '1 bottle' },
      { item: 'Exterior stain or sealer', qty: '1 qt' },
    ],
    tools: ['Circular saw', 'Drill/driver', 'Tape measure', 'Clamps', '80-grit sandpaper'],
    cutList: [
      { label: 'A', desc: 'Front & Back boards (1×8)', size: '36"', qty: 2 },
      { label: 'B', desc: 'End boards (1×8)', size: '6½"', qty: 2 },
      { label: 'C', desc: 'Bottom board (1×8)', size: '34½"', qty: 1 },
      { label: 'D', desc: 'Cleats (1×2)', size: '6½"', qty: 4 },
    ],
    steps: [
      'Cut all boards to length per the cut list.',
      'Attach two cleats (D) to the inside face of each end board (B), flush with the bottom edge.',
      'Glue and screw the front (A) to both end boards (B), keeping top edges flush.',
      'Repeat with the back board (A).',
      'Drill three ⅜" drainage holes evenly spaced along the bottom board (C).',
      'Drop the bottom (C) onto the cleats and screw in place from the sides.',
      'Sand all surfaces and apply two coats of exterior stain or sealer.',
    ],
    tip: '<strong>Tip:</strong> Cedar is naturally rot-resistant and smells great. Redwood or pressure-treated pine also work well outdoors.',
    svg: `<svg viewBox="0 0 400 270" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000028" stroke-width="1.3"/></pattern></defs>
<polygon points="314.1,216.0 272.5,240.0 272.5,192.0 314.1,168.0" fill="#C8A800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="314.1,216.0 272.5,240.0 272.5,192.0 314.1,168.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="127.0,60.0 314.1,168.0 272.5,192.0 85.4,84.0" fill="#DAB800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="127.0,60.0 314.1,168.0 272.5,192.0 85.4,84.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="127.0,108.0 314.1,216.0 314.1,168.0 127.0,60.0" fill="#F2D000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="127.0,108.0 314.1,216.0 314.1,168.0 127.0,60.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">36" × 8" × 8"</text>
<line x1="127.0" y1="245" x2="314.1" y2="245" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="4 3"/>
<line x1="127.0" y1="240" x2="127.0" y2="250" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="314.1" y1="240" x2="314.1" y2="250" stroke="#9ca3af" stroke-width="1.2"/>
<text x="220.5" y="262" text-anchor="middle" font-size="12" fill="#374151" font-weight="600" font-family="-apple-system,sans-serif">36"</text>
<text x="323" y="183" font-size="11" fill="#6b7280" font-family="-apple-system,sans-serif">8" deep</text>
<text x="100" y="88" font-size="11" fill="#6b7280" font-family="-apple-system,sans-serif" text-anchor="middle">8" H</text>
</svg>`
  },

  /* 2 ─ Classic Planter Box (from PDF) ─────────────────── */
  {
    id: 'classic-planter',
    name: 'Classic Planter Box',
    skill: 'beginner',
    buildTime: '2–5 hrs',
    priceMin: 55,
    priceMax: 75,
    description: 'A timeless design with corner post legs and decorative trim. Perfect for a tomato plant, herbs, or small shrubs.',
    dimensions: '22½"L × 18"W × 24"H',
    lumber: [
      { item: '1×8×8 ft', qty: '3 boards' },
      { item: '1×4×12 ft', qty: '2 boards' },
      { item: '2×4×8 ft (rip for legs)', qty: '1 board' },
    ],
    supplies: [
      { item: '1½" exterior wood screws', qty: '1 lb box' },
      { item: '1½" galvanized finish nails', qty: '1 lb box' },
      { item: 'Waterproof exterior glue', qty: '1 bottle' },
      { item: 'Exterior stain & sealer', qty: '1 qt' },
    ],
    tools: ['Miter saw (or circular saw)', 'Table saw', 'Drill/driver', 'Hammer', 'Nail set', 'Sandpaper'],
    cutList: [
      { label: 'A', desc: 'Short sides (1×8)', size: '18"', qty: 4 },
      { label: 'B', desc: 'Long sides (1×8)', size: '22½"', qty: 4 },
      { label: 'C', desc: 'Legs (1½×1½ ripped from 2×4)', size: '24"', qty: 4 },
      { label: 'D', desc: 'Cleats (1×2)', size: '18"', qty: 2 },
      { label: 'E', desc: 'Bottom boards (1×8)', size: '18"', qty: 3 },
      { label: 'F', desc: 'Short trim (1×4)', size: '15½"', qty: 4 },
      { label: 'G', desc: 'Long trim (1×4)', size: '25½"', qty: 2 },
      { label: 'H', desc: 'End trim (1×4)', size: '19½"', qty: 2 },
    ],
    steps: [
      'Rip the 2×4 in half lengthwise on a table saw to create four 1½"×1½" legs (C).',
      'Attach short side panels (A×2 each side) to the legs (C) with glue and screws, keeping top edges flush.',
      'Glue and screw cleats (D) to the inside of each short side, bottom-edge flush.',
      'Attach long side panels (B) to the assembled short sides, forming the box.',
      'Notch three bottom boards (E) to fit around legs and rest on cleats. Screw in place.',
      'After assembly, measure and cut trim boards (F, G, H) for exact fit. Attach with glue and finish nails.',
      'Drill ⅜" drainage holes through the bottom boards.',
      'Sand smooth and apply two coats of exterior stain & sealer.',
    ],
    tip: '<strong>Tip:</strong> Measure and cut the trim boards (F, G, H) after the box is assembled — natural lumber varies slightly and this ensures a perfectly flush fit.',
    thumbSvg: `<img src="images/classic-planter-thumb.png" style="width:100%;height:100%;object-fit:contain" alt="Classic Planter Box isometric view">`,
    svg: `<img src="images/classic-planter-detail.png" style="width:100%;height:auto;display:block;border-radius:8px" alt="Classic Planter Box exploded view with labeled parts">`,
  },

  /* 3 ─ Elevated Planter Box ────────────────────────────── */
  {
    id: 'elevated-planter',
    name: 'Elevated Planter Box',
    skill: 'beginner',
    buildTime: '2–4 hrs',
    priceMin: 65,
    priceMax: 90,
    description: 'A raised planter on four sturdy legs — easier on your back and perfect for a deck or patio. Great for vegetables.',
    dimensions: '48"L × 24"W × 32"H total',
    lumber: [
      { item: '2×4×8 ft (legs & frame)', qty: '4 boards' },
      { item: '2×6×8 ft (box sides)', qty: '2 boards' },
      { item: '1×6×8 ft (box bottom)', qty: '2 boards' },
    ],
    supplies: [
      { item: '2½" exterior screws', qty: '1 lb box' },
      { item: '1⅝" exterior screws', qty: '½ lb box' },
      { item: 'Waterproof exterior glue', qty: '1 bottle' },
      { item: 'Exterior stain or sealer', qty: '1 qt' },
    ],
    tools: ['Circular saw', 'Drill/driver', 'Speed square', 'Tape measure', 'Clamps', 'Sandpaper'],
    cutList: [
      { label: 'A', desc: 'Legs (2×4)', size: '22"', qty: 4 },
      { label: 'B', desc: 'Long side boards (2×6)', size: '48"', qty: 2 },
      { label: 'C', desc: 'Short end boards (2×6)', size: '21"', qty: 2 },
      { label: 'D', desc: 'Long top rails (2×4)', size: '48"', qty: 2 },
      { label: 'E', desc: 'Short top rails (2×4)', size: '21"', qty: 2 },
      { label: 'F', desc: 'Bottom boards (1×6)', size: '45"', qty: 3 },
    ],
    steps: [
      'Build two end frames: screw a short end board (C) and short top rail (E) between two legs (A).',
      'Connect the two end frames with long side boards (B) and long top rails (D).',
      'Check for square — measure diagonals and adjust before the glue sets.',
      'Lay bottom boards (F) inside the box, leaving small gaps for drainage. Screw in place.',
      'Optionally drill additional ⅜" drainage holes through the bottom boards.',
      'Sand all surfaces and apply exterior stain or sealer, paying extra attention to end grain.',
    ],
    tip: '<strong>Tip:</strong> Cut legs slightly long, then trim all four to the same length after assembly to keep the planter perfectly level.',
    svg: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000028" stroke-width="1.3"/></pattern></defs>
<polygon points="100.3,179.8 91.3,185.0 91.3,108.0 100.3,102.8" fill="#B09000" stroke="#2A1800" stroke-width="1" stroke-linejoin="round" opacity="0.5"/>
<polygon points="245.8,263.8 236.7,269.0 236.7,192.0 245.8,186.8" fill="#B09000" stroke="#2A1800" stroke-width="1.2" stroke-linejoin="round"/>
<polygon points="309.5,150.0 236.7,192.0 236.7,157.0 309.5,115.0" fill="#C8A800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="309.5,150.0 236.7,192.0 236.7,157.0 309.5,115.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="164.0,31.0 309.5,115.0 236.7,157.0 91.3,73.0" fill="#DAB800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="164.0,31.0 309.5,115.0 236.7,157.0 91.3,73.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="164.0,66.0 309.5,150.0 309.5,115.0 164.0,31.0" fill="#F2D000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="164.0,66.0 309.5,150.0 309.5,115.0 164.0,31.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="164.0,143.0 173.1,148.2 173.1,71.2 164.0,66.0" fill="#B09000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="300.4,221.8 309.5,227.0 309.5,150.0 300.4,144.8" fill="#B09000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="309.5,227.0 300.4,232.2 300.4,155.2 309.5,150.0" fill="#B09000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<line x1="154.0" y1="143.0" x2="329.5" y2="227.0" stroke="#ddd8cf" stroke-width="1.5"/>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">48" × 24" × 32"</text>
<text x="318" y="234" font-size="11" fill="#6b7280" font-family="-apple-system,sans-serif">48" L</text>
<text x="247" y="211" font-size="11" fill="#6b7280" font-family="-apple-system,sans-serif">24" W</text>
<text x="80" y="112" font-size="11" fill="#6b7280" font-family="-apple-system,sans-serif" text-anchor="middle">32" H</text>
</svg>`
  },

  /* 4 ─ Raised Garden Bed ───────────────────────────────── */
  {
    id: 'raised-bed',
    name: 'Raised Garden Bed',
    skill: 'beginner',
    buildTime: '1–2 hrs',
    priceMin: 45,
    priceMax: 65,
    description: 'A simple, no-fuss garden bed. Two stacked 2×6 boards give you 11" of growing depth — plenty for most vegetables.',
    dimensions: '48"L × 24"W × 11"H',
    lumber: [
      { item: '2×6×8 ft (long sides)', qty: '4 boards' },
      { item: '2×6×2 ft (short ends)', qty: '4 boards' },
      { item: '4×4×12" (corner posts)', qty: '4 posts' },
    ],
    supplies: [
      { item: '3" exterior screws', qty: '1 lb box' },
      { item: 'Landscape fabric (optional)', qty: '2 sq ft' },
    ],
    tools: ['Circular saw', 'Drill/driver', 'Tape measure', 'Speed square', 'Level'],
    cutList: [
      { label: 'A', desc: 'Long sides (2×6)', size: '48"', qty: 4 },
      { label: 'B', desc: 'Short ends (2×6)', size: '21"', qty: 4 },
      { label: 'C', desc: 'Corner posts (4×4)', size: '12"', qty: 4 },
    ],
    steps: [
      'Cut all boards and posts to length.',
      'Lay out corner posts (C) on a flat surface in a rectangle.',
      'Attach the first layer of long sides (A) to the outside of the corner posts with 3" screws, two per end.',
      'Attach the first layer of short ends (B) between the corner posts.',
      'Stack and attach the second layer of boards (A and B), staggering the joints for strength.',
      'Level the bed on the ground before filling with soil.',
    ],
    tip: '<strong>Tip:</strong> Line the inside with landscape fabric before filling — it keeps soil in while letting excess water drain out.',
    svg: `<svg viewBox="0 0 400 270" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000028" stroke-width="1.3"/></pattern></defs>
<polygon points="324.3,196.0 241.1,244.0 241.1,200.0 324.3,152.0" fill="#C8A800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="324.3,196.0 241.1,244.0 241.1,200.0 324.3,152.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="158.0,56.0 324.3,152.0 241.1,200.0 74.9,104.0" fill="#DAB800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="158.0,56.0 324.3,152.0 241.1,200.0 74.9,104.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="158.0,100.0 324.3,196.0 324.3,152.0 158.0,56.0" fill="#F2D000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="158.0,100.0 324.3,196.0 324.3,152.0 158.0,56.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<line x1="158.0" y1="78.0" x2="324.3" y2="174.0" stroke="#2A1800" stroke-width="1.2" opacity="0.5"/>
<line x1="324.3" y1="174.0" x2="241.1" y2="222.0" stroke="#2A1800" stroke-width="1.2" opacity="0.5"/>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">48" × 24" × 11"</text>
<line x1="158.0" y1="230" x2="324.3" y2="230" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="4 3"/>
<line x1="158.0" y1="225" x2="158.0" y2="235" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="324.3" y1="225" x2="324.3" y2="235" stroke="#9ca3af" stroke-width="1.2"/>
<text x="241.2" y="248" text-anchor="middle" font-size="12" fill="#374151" font-weight="600" font-family="-apple-system,sans-serif">48"</text>
<text x="250" y="228" font-size="11" fill="#6b7280" font-family="-apple-system,sans-serif">24" W</text>
<text x="138" y="83" font-size="11" fill="#6b7280" font-family="-apple-system,sans-serif" text-anchor="middle">11" H</text>
</svg>`
  },

  /* 5 ─ Tiered Planter ──────────────────────────────────── */
  {
    id: 'tiered-planter',
    name: 'Tiered Planter',
    skill: 'intermediate',
    buildTime: '3–5 hrs',
    priceMin: 85,
    priceMax: 120,
    description: 'Two cascading levels for maximum growing space. Lower tier for vegetables, upper tier for herbs or flowers.',
    dimensions: 'Lower: 48"L × 18"D × 12"H  |  Upper: 24"L × 12"D × 24"H',
    lumber: [
      { item: '2×6×8 ft cedar (sides)', qty: '4 boards' },
      { item: '2×4×8 ft (frame & legs)', qty: '4 boards' },
      { item: '1×6×8 ft (bottoms)', qty: '2 boards' },
    ],
    supplies: [
      { item: '2½" exterior screws', qty: '1 lb box' },
      { item: '1⅝" exterior screws', qty: '½ lb box' },
      { item: 'Waterproof exterior glue', qty: '1 bottle' },
      { item: 'Exterior stain or sealer', qty: '1 qt' },
    ],
    tools: ['Circular saw', 'Drill/driver', 'Speed square', 'Tape measure', 'Clamps', 'Level', 'Sandpaper'],
    cutList: [
      { label: 'A', desc: 'Lower long sides (2×6)', size: '48"', qty: 2 },
      { label: 'B', desc: 'Lower short ends (2×6)', size: '15"', qty: 2 },
      { label: 'C', desc: 'Lower legs (2×4)', size: '12"', qty: 4 },
      { label: 'D', desc: 'Upper long sides (2×6)', size: '24"', qty: 2 },
      { label: 'E', desc: 'Upper short ends (2×6)', size: '9"', qty: 2 },
      { label: 'F', desc: 'Upper legs (2×4)', size: '24"', qty: 4 },
      { label: 'G', desc: 'Bottom boards (1×6)', size: 'cut to fit', qty: '4–5' },
    ],
    steps: [
      'Build the lower box first: assemble sides (A, B) onto corner legs (C) with glue and screws.',
      'Install lower bottom boards (G) with small gaps for drainage.',
      'Build the upper box: assemble sides (D, E) onto the taller legs (F).',
      'Install upper bottom boards (G).',
      'Position the upper box on the back half of the lower box top. Check level and attach with screws from inside the lower box.',
      'Sand all surfaces. Apply exterior stain or sealer to all faces, especially end grain.',
    ],
    tip: '<strong>Tip:</strong> Build both boxes separately, then join them at the end. This makes it much easier to keep each box square during assembly.',
    svg: `<svg viewBox="0 0 400 295" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000028" stroke-width="1.3"/></pattern></defs>
<polygon points="300.5,239.0 245.9,270.5 245.9,228.5 300.5,197.0" fill="#C8A800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="300.5,239.0 245.9,270.5 245.9,228.5 300.5,197.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="155.0,113.0 300.5,197.0 245.9,228.5 100.4,144.5" fill="#DAB800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="155.0,113.0 300.5,197.0 245.9,228.5 100.4,144.5" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="155.0,155.0 300.5,239.0 300.5,197.0 155.0,113.0" fill="#F2D000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="155.0,155.0 300.5,239.0 300.5,197.0 155.0,113.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="245.9,186.5 209.6,207.5 209.6,123.5 245.9,102.5" fill="#C8A800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="245.9,186.5 209.6,207.5 209.6,123.5 245.9,102.5" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="173.2,60.5 245.9,102.5 209.6,123.5 136.8,81.5" fill="#DAB800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="173.2,60.5 245.9,102.5 209.6,123.5 136.8,81.5" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="173.2,144.5 245.9,186.5 245.9,102.5 173.2,60.5" fill="#F2D000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="173.2,144.5 245.9,186.5 245.9,102.5 173.2,60.5" fill="url(#h)" stroke="none" opacity="0.6"/>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">48" lower / 24" upper</text>
<line x1="155.0" y1="258" x2="300.5" y2="258" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="4 3"/>
<line x1="155.0" y1="253" x2="155.0" y2="263" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="300.5" y1="253" x2="300.5" y2="263" stroke="#9ca3af" stroke-width="1.2"/>
<text x="227.8" y="275" text-anchor="middle" font-size="12" fill="#374151" font-weight="600" font-family="-apple-system,sans-serif">48" lower</text>
<line x1="173.2" y1="168" x2="245.9" y2="210" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="4 3"/>
<line x1="173.2" y1="163" x2="173.2" y2="173" stroke="#9ca3af" stroke-width="1.2"/>
<line x1="245.9" y1="205" x2="245.9" y2="215" stroke="#9ca3af" stroke-width="1.2"/>
<text x="209.5" y="228" text-anchor="middle" font-size="12" fill="#374151" font-weight="600" font-family="-apple-system,sans-serif">24" upper</text>
</svg>`
  },

  /* 6 ─ Trellis Planter ─────────────────────────────────── */
  {
    id: 'trellis-planter',
    name: 'Trellis Planter',
    skill: 'intermediate',
    buildTime: '3–5 hrs',
    priceMin: 70,
    priceMax: 95,
    description: 'A deep planter with a built-in lattice trellis for climbing plants like cucumbers, beans, clematis, or roses.',
    dimensions: '24"L × 12"W × 18"H box  +  48" trellis',
    lumber: [
      { item: '1×6×8 ft cedar (box sides)', qty: '3 boards' },
      { item: '2×2×8 ft (trellis posts)', qty: '2 boards' },
      { item: '1×2×8 ft (trellis slats)', qty: '2 boards' },
    ],
    supplies: [
      { item: '1⅝" exterior screws', qty: '1 lb box' },
      { item: '1¼" galvanized finish nails', qty: '½ lb' },
      { item: 'Waterproof exterior glue', qty: '1 bottle' },
      { item: 'Exterior stain or sealer', qty: '1 qt' },
    ],
    tools: ['Circular saw', 'Drill/driver', 'Tape measure', 'Speed square', 'Clamps', 'Nail gun or hammer'],
    cutList: [
      { label: 'A', desc: 'Front & back sides (1×6)', size: '24"', qty: 4 },
      { label: 'B', desc: 'End boards (1×6)', size: '10½"', qty: 4 },
      { label: 'C', desc: 'Trellis posts (2×2)', size: '66"', qty: 2 },
      { label: 'D', desc: 'Horizontal slats (1×2)', size: '20"', qty: 6 },
      { label: 'E', desc: 'Vertical slats (1×2)', size: '40"', qty: 3 },
      { label: 'F', desc: 'Bottom boards (1×6)', size: '22"', qty: 2 },
    ],
    steps: [
      'Cut the two trellis posts (C) at 66" — they will form the corner legs of the box AND the trellis uprights.',
      'Attach front and back side boards (A×2 stacked per side) to the posts, starting 18" from the post bottom.',
      'Attach end boards (B) between the posts to complete the box.',
      'Install bottom boards (F) inside the box with ⅜" drainage gaps.',
      'Lay out and attach horizontal slats (D) between the posts, spaced evenly from 22" to 62" height.',
      'Weave or overlay vertical slats (E) over the horizontals and nail at each intersection.',
      'Sand and finish with two coats of exterior stain or sealer.',
    ],
    tip: '<strong>Tip:</strong> For extra strength, angle-drill screws into each slat intersection instead of relying on nails alone.',
    svg: `<svg viewBox="0 0 400 285" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000028" stroke-width="1.3"/></pattern></defs>
<polygon points="158.0,223.0 152.8,226.0 152.8,28.0 158.0,25.0" fill="#B09000" stroke="#2A1800" stroke-width="0.8" opacity="0.4"/>
<polygon points="246.4,244.0 241.2,247.0 241.2,49.0 246.4,46.0" fill="#B09000" stroke="#2A1800" stroke-width="0.8" opacity="0.4"/>
<line x1="184.0" y1="136.0" x2="246.4" y2="172.0" stroke="#C8A800" stroke-width="3.5" stroke-linecap="round"/>
<line x1="184.0" y1="115.0" x2="246.4" y2="151.0" stroke="#C8A800" stroke-width="3.5" stroke-linecap="round"/>
<line x1="184.0" y1="94.0" x2="246.4" y2="130.0" stroke="#C8A800" stroke-width="3.5" stroke-linecap="round"/>
<line x1="184.0" y1="73.0" x2="246.4" y2="109.0" stroke="#C8A800" stroke-width="3.5" stroke-linecap="round"/>
<line x1="184.0" y1="52.0" x2="246.4" y2="88.0" stroke="#C8A800" stroke-width="3.5" stroke-linecap="round"/>
<line x1="184.0" y1="31.0" x2="246.4" y2="67.0" stroke="#C8A800" stroke-width="3.5" stroke-linecap="round"/>
<line x1="204.8" y1="166.0" x2="204.8" y2="22.0" stroke="#D4B000" stroke-width="2.5" stroke-linecap="round"/>
<line x1="225.6" y1="178.0" x2="225.6" y2="34.0" stroke="#D4B000" stroke-width="2.5" stroke-linecap="round"/>
<polygon points="246.4,244.0 215.2,262.0 215.2,208.0 246.4,190.0" fill="#C8A800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="246.4,244.0 215.2,262.0 215.2,208.0 246.4,190.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="184.0,154.0 246.4,190.0 215.2,208.0 152.8,172.0" fill="#DAB800" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="184.0,154.0 246.4,190.0 215.2,208.0 152.8,172.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="184.0,208.0 246.4,244.0 246.4,190.0 184.0,154.0" fill="#F2D000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="184.0,208.0 246.4,244.0 246.4,190.0 184.0,154.0" fill="url(#h)" stroke="none" opacity="0.6"/>
<polygon points="184.0,208.0 189.2,211.0 189.2,13.0 184.0,10.0" fill="#B09000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="241.2,241.0 246.4,244.0 246.4,46.0 241.2,43.0" fill="#B09000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="246.4,244.0 241.2,247.0 241.2,49.0 246.4,46.0" fill="#B09000" stroke="#2A1800" stroke-width="1.5" stroke-linejoin="round"/>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">24" box + 48" trellis</text>
<text x="154" y="270" font-size="11" fill="#6b7280" font-family="-apple-system,sans-serif">24" W × 12" deep</text>
</svg>`
  },

];

/* ── Render ── */

function skillBadge(skill) {
  return `<span class="badge badge-${skill}">${skill}</span>`;
}

function renderCatalog() {
  const el = document.getElementById('catalog');
  el.innerHTML = planters.map(p => `
    <button class="card" onclick="showDetail('${p.id}')" aria-label="View ${p.name}">
      <div class="card-drawing">${p.thumbSvg || p.svg}</div>
      <div class="card-body">
        ${skillBadge(p.skill)}
        <div class="card-name">${p.name}</div>
        <div class="card-meta">
          <span class="card-price">$${p.priceMin}–$${p.priceMax}</span>
          <span class="card-time">${p.buildTime}</span>
        </div>
      </div>
    </button>
  `).join('');
}

function renderDetail(p) {
  const cutRows = p.cutList.map(c => `
    <tr>
      <td class="cut-label">${c.label}</td>
      <td>${c.desc}</td>
      <td style="text-align:right;white-space:nowrap;padding-left:8px">${c.size}</td>
      <td style="text-align:right;white-space:nowrap;padding-left:6px;color:var(--muted)">${c.qty}</td>
    </tr>
  `).join('');

  return `
    <div class="detail-header">
      ${skillBadge(p.skill)}
      <h2>${p.name}</h2>
      <p class="detail-desc">${p.description}</p>
    </div>

    <div class="detail-drawing">${p.svg}</div>

    <div class="section">
      <div class="section-title">Overview</div>
      <div class="meta-grid">
        <div class="meta-item">
          <span class="meta-label">Est. Cost</span>
          <span class="meta-value price">$${p.priceMin}–${p.priceMax}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Build Time</span>
          <span class="meta-value">${p.buildTime}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Skill Level</span>
          <span class="meta-value" style="text-transform:capitalize">${p.skill}</span>
        </div>
      </div>
      <div style="margin-top:10px;font-size:13px;color:var(--muted);background:var(--bg);border-radius:10px;padding:9px 12px;">
        <strong style="color:var(--text)">Dimensions:</strong> ${p.dimensions}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Lumber</div>
      <ul class="item-list">
        ${p.lumber.map(l => `<li><span>${l.item}</span><span class="item-qty">${l.qty}</span></li>`).join('')}
      </ul>
    </div>

    <div class="section">
      <div class="section-title">Supplies</div>
      <ul class="item-list">
        ${p.supplies.map(s => `<li><span>${s.item}</span><span class="item-qty">${s.qty}</span></li>`).join('')}
      </ul>
    </div>

    <div class="section">
      <div class="section-title">Tools Required</div>
      <div class="tools-wrap">
        ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Cut List</div>
      <table class="cut-table">
        <thead><tr>
          <th></th><th>Part</th>
          <th style="text-align:right">Size</th>
          <th style="text-align:right">Qty</th>
        </tr></thead>
        <tbody>${cutRows}</tbody>
      </table>
    </div>

    <div class="section">
      <div class="section-title">Build Steps</div>
      <ol class="steps-list">
        ${p.steps.map(s => `<li>${s}</li>`).join('')}
      </ol>
      ${p.tip ? `<div class="tip">${p.tip}</div>` : ''}
    </div>

    <div style="height:24px"></div>
  `;
}

/* ── Navigation ── */

function showDetail(id) {
  const p = planters.find(x => x.id === id);
  if (!p) return;
  const detail = document.getElementById('detailView');
  const catalog = document.getElementById('catalogView');
  const back = document.getElementById('backBtn');
  const title = document.getElementById('headerTitle');

  detail.innerHTML = renderDetail(p);
  catalog.classList.add('hidden');
  detail.classList.remove('hidden');
  back.classList.add('visible');
  title.textContent = p.name;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showCatalog() {
  const detail = document.getElementById('detailView');
  const catalog = document.getElementById('catalogView');
  const back = document.getElementById('backBtn');
  const title = document.getElementById('headerTitle');

  catalog.classList.remove('hidden');
  detail.classList.add('hidden');
  back.classList.remove('visible');
  title.textContent = 'Planter Planner';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();

  // Handle browser back button
  window.addEventListener('popstate', () => {
    if (!document.getElementById('catalogView').classList.contains('hidden')) return;
    showCatalog();
  });
});
