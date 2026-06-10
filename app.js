/* ── SVG helpers ── */
const S = { // shared SVG style strings
  front:  'fill="#fff" stroke="#2c2c2c" stroke-width="1.5" stroke-linejoin="round"',
  top:    'fill="#eee9e0" stroke="#2c2c2c" stroke-width="1.5" stroke-linejoin="round"',
  right:  'fill="#ddd8cf" stroke="#2c2c2c" stroke-width="1.5" stroke-linejoin="round"',
  leg:    'fill="#d4cfc5" stroke="#2c2c2c" stroke-width="1.5" stroke-linejoin="round"',
  dim:    'stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="4 3"',
  tick:   'stroke="#9ca3af" stroke-width="1.2"',
  label:  'font-size="13" fill="#374151" font-weight="600" font-family="-apple-system,BlinkMacSystemFont,sans-serif"',
  grain:  'stroke="#e3ddd2" stroke-width="0.8"',
  title:  'font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,sans-serif"',
  note:   'font-size="11" fill="#9ca3af" font-family="-apple-system,BlinkMacSystemFont,sans-serif"',
};

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
    svg: `<svg viewBox="0 0 400 270" xmlns="http://www.w3.org/2000/svg">
  <!-- Right face: poly FRT, FRB, RRB, RRT -->
  <polygon points="291,143 307,127 307,171 291,187" ${S.right}/>
  <!-- Top face: FLT FRT RRT RLT -->
  <polygon points="93,143 291,143 307,127 109,127" ${S.top}/>
  <!-- Front face -->
  <rect x="93" y="143" width="198" height="44" ${S.front}/>
  <!-- Wood grain -->
  <line x1="93" y1="157" x2="291" y2="157" ${S.grain}/>
  <line x1="93" y1="171" x2="291" y2="171" ${S.grain}/>
  <!-- Drainage hole dots on front bottom -->
  <circle cx="152" cy="184" r="2.5" fill="#bbb"/>
  <circle cx="192" cy="184" r="2.5" fill="#bbb"/>
  <circle cx="232" cy="184" r="2.5" fill="#bbb"/>
  <!-- Dim: width -->
  <line x1="93" y1="204" x2="291" y2="204" ${S.dim}/>
  <line x1="93" y1="199" x2="93" y2="209" ${S.tick}/>
  <line x1="291" y1="199" x2="291" y2="209" ${S.tick}/>
  <text x="192" y="220" text-anchor="middle" ${S.label}>36"</text>
  <!-- Dim: height -->
  <line x1="77" y1="143" x2="77" y2="187" ${S.dim}/>
  <line x1="72" y1="143" x2="82" y2="143" ${S.tick}/>
  <line x1="72" y1="187" x2="82" y2="187" ${S.tick}/>
  <text x="55" y="169" text-anchor="middle" ${S.label}>8"</text>
  <!-- Depth label -->
  <text x="313" y="147" ${S.note}>8" deep</text>
  <!-- Drain hole note -->
  <text x="192" y="245" text-anchor="middle" ${S.note}>3 drainage holes (⅜")</text>
  <!-- Dimension title -->
  <text x="200" y="26" text-anchor="middle" ${S.title}>36" × 8" × 8"</text>
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
    svg: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg">
  <!-- Right face of box -->
  <polygon points="233,148 258,123 258,220 233,245" ${S.right}/>
  <!-- Top face of box -->
  <polygon points="143,148 233,148 258,123 168,123" ${S.top}/>
  <!-- Front face of box (boards between legs) -->
  <rect x="143" y="148" width="90" height="97" ${S.front}/>
  <!-- Wood grain on front -->
  <line x1="143" y1="164" x2="233" y2="164" ${S.grain}/>
  <line x1="143" y1="180" x2="233" y2="180" ${S.grain}/>
  <line x1="143" y1="196" x2="233" y2="196" ${S.grain}/>
  <line x1="143" y1="212" x2="233" y2="212" ${S.grain}/>
  <line x1="143" y1="228" x2="233" y2="228" ${S.grain}/>
  <!-- Left front leg (overlaid, extends to floor at y=253) -->
  <rect x="143" y="148" width="8" height="105" ${S.leg}/>
  <!-- Right front leg -->
  <rect x="225" y="148" width="8" height="105" ${S.leg}/>
  <!-- Right-face right leg depth -->
  <polygon points="233,148 241,140 241,244 233,253" ${S.leg}/>
  <!-- Trim board on top of front face -->
  <rect x="143" y="148" width="90" height="10" fill="#ede8e0" stroke="#2c2c2c" stroke-width="1.2"/>
  <!-- Floor line -->
  <line x1="120" y1="253" x2="270" y2="253" stroke="#ddd8cf" stroke-width="1"/>
  <!-- Dim: height (total leg) -->
  <line x1="127" y1="148" x2="127" y2="253" ${S.dim}/>
  <line x1="122" y1="148" x2="132" y2="148" ${S.tick}/>
  <line x1="122" y1="253" x2="132" y2="253" ${S.tick}/>
  <text x="107" y="205" text-anchor="middle" ${S.label}>24"</text>
  <!-- Dim: width -->
  <line x1="143" y1="268" x2="233" y2="268" ${S.dim}/>
  <line x1="143" y1="263" x2="143" y2="273" ${S.tick}/>
  <line x1="233" y1="263" x2="233" y2="273" ${S.tick}/>
  <text x="188" y="283" text-anchor="middle" ${S.label}>22½"</text>
  <!-- Depth label -->
  <text x="263" y="135" ${S.note}>18" deep</text>
  <!-- Leg annotation -->
  <text x="153" y="143" font-size="10" fill="#9ca3af" font-family="-apple-system,sans-serif">corner legs</text>
  <!-- Title -->
  <text x="200" y="22" text-anchor="middle" ${S.title}>22½" × 18" × 24"</text>
</svg>`
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
    svg: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg">
  <!-- Box: right face -->
  <polygon points="222,147 247,122 247,177 222,202" ${S.right}/>
  <!-- Box: top face -->
  <polygon points="78,147 222,147 247,122 103,122" ${S.top}/>
  <!-- Box: front face -->
  <rect x="78" y="147" width="144" height="55" ${S.front}/>
  <!-- Wood grain box front -->
  <line x1="78" y1="165" x2="222" y2="165" ${S.grain}/>
  <line x1="78" y1="183" x2="222" y2="183" ${S.grain}/>
  <!-- Front-left leg -->
  <rect x="78" y="202" width="8" height="66" ${S.leg}/>
  <!-- Front-right leg -->
  <rect x="214" y="202" width="8" height="66" ${S.leg}/>
  <!-- Back-left leg (partially visible) -->
  <rect x="103" y="177" width="6" height="55" fill="#ccc9bf" stroke="#2c2c2c" stroke-width="1" opacity="0.6"/>
  <!-- Back-right leg (partially visible) -->
  <rect x="241" y="177" width="6" height="48" fill="#ccc9bf" stroke="#2c2c2c" stroke-width="1" opacity="0.5"/>
  <!-- Floor line -->
  <line x1="65" y1="268" x2="265" y2="268" stroke="#e0dbd1" stroke-width="1"/>
  <!-- Dim: total height -->
  <line x1="60" y1="147" x2="60" y2="268" ${S.dim}/>
  <line x1="55" y1="147" x2="65" y2="147" ${S.tick}/>
  <line x1="55" y1="268" x2="65" y2="268" ${S.tick}/>
  <text x="40" y="212" text-anchor="middle" ${S.label}>32"</text>
  <!-- Dim: length -->
  <line x1="78" y1="280" x2="222" y2="280" ${S.dim}/>
  <line x1="78" y1="275" x2="78" y2="285" ${S.tick}/>
  <line x1="222" y1="275" x2="222" y2="285" ${S.tick}/>
  <text x="150" y="293" text-anchor="middle" ${S.label}>48"</text>
  <!-- Box height brace -->
  <line x1="232" y1="147" x2="232" y2="202" stroke="#9ca3af" stroke-width="0.8" stroke-dasharray="3 3"/>
  <text x="252" y="178" font-size="11" fill="#9ca3af" font-family="-apple-system,sans-serif">10" box</text>
  <!-- Depth label -->
  <text x="252" y="130" ${S.note}>24" deep</text>
  <!-- Title -->
  <text x="200" y="22" text-anchor="middle" ${S.title}>48" × 24" × 32"</text>
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
    svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
  <!-- Right face -->
  <polygon points="222,170 247,145 247,181 222,206" ${S.right}/>
  <!-- Top face -->
  <polygon points="78,170 222,170 247,145 103,145" ${S.top}/>
  <!-- Front face (lower board) -->
  <rect x="78" y="187" width="144" height="19" ${S.front}/>
  <!-- Front face (upper board) -->
  <rect x="78" y="170" width="144" height="17" ${S.front}/>
  <!-- Board seam line -->
  <line x1="78" y1="187" x2="222" y2="187" stroke="#2c2c2c" stroke-width="1.2"/>
  <!-- Corner post front-left -->
  <rect x="78" y="170" width="8" height="36" ${S.leg}/>
  <!-- Corner post front-right -->
  <rect x="214" y="170" width="8" height="36" ${S.leg}/>
  <!-- Grain lines -->
  <line x1="86" y1="178" x2="214" y2="178" ${S.grain}/>
  <line x1="86" y1="195" x2="214" y2="195" ${S.grain}/>
  <!-- Dim: length -->
  <line x1="78" y1="218" x2="222" y2="218" ${S.dim}/>
  <line x1="78" y1="213" x2="78" y2="223" ${S.tick}/>
  <line x1="222" y1="213" x2="222" y2="223" ${S.tick}/>
  <text x="150" y="233" text-anchor="middle" ${S.label}>48"</text>
  <!-- Dim: height -->
  <line x1="62" y1="170" x2="62" y2="206" ${S.dim}/>
  <line x1="57" y1="170" x2="67" y2="170" ${S.tick}/>
  <line x1="57" y1="206" x2="67" y2="206" ${S.tick}/>
  <text x="42" y="192" text-anchor="middle" ${S.label}>11"</text>
  <!-- Depth label -->
  <text x="252" y="158" ${S.note}>24" wide</text>
  <!-- Board count note -->
  <text x="150" y="163" text-anchor="middle" font-size="10" fill="#9ca3af" font-family="-apple-system,sans-serif">2× 2×6 stacked</text>
  <!-- Title -->
  <text x="200" y="22" text-anchor="middle" ${S.title}>48" × 24" × 11"</text>
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
    svg: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg">
  <!-- Lower box: right face -->
  <polygon points="204,212 223,193 223,248 204,267" ${S.right}/>
  <!-- Lower box: top face -->
  <polygon points="60,212 204,212 223,193 79,193" ${S.top}/>
  <!-- Lower box: front face -->
  <rect x="60" y="212" width="144" height="55" ${S.front}/>
  <!-- Lower grain -->
  <line x1="60" y1="230" x2="204" y2="230" ${S.grain}/>
  <line x1="60" y1="248" x2="204" y2="248" ${S.grain}/>
  <!-- Upper box: right face -->
  <polygon points="168,140 181,127 181,212 168,225" ${S.right}/>
  <!-- Upper box: top face -->
  <polygon points="96,140 168,140 181,127 109,127" ${S.top}/>
  <!-- Upper box: front face -->
  <rect x="96" y="140" width="72" height="72" ${S.front}/>
  <!-- Upper grain -->
  <line x1="96" y1="156" x2="168" y2="156" ${S.grain}/>
  <line x1="96" y1="172" x2="168" y2="172" ${S.grain}/>
  <line x1="96" y1="188" x2="168" y2="188" ${S.grain}/>
  <line x1="96" y1="204" x2="168" y2="204" ${S.grain}/>
  <!-- Dim: lower length -->
  <line x1="60" y1="278" x2="204" y2="278" ${S.dim}/>
  <line x1="60" y1="273" x2="60" y2="283" ${S.tick}/>
  <line x1="204" y1="273" x2="204" y2="283" ${S.tick}/>
  <text x="132" y="291" text-anchor="middle" ${S.label}>48" lower</text>
  <!-- Dim: upper length -->
  <line x1="96" y1="115" x2="168" y2="115" ${S.dim}/>
  <line x1="96" y1="110" x2="96" y2="120" ${S.tick}/>
  <line x1="168" y1="110" x2="168" y2="120" ${S.tick}/>
  <text x="132" y="108" text-anchor="middle" ${S.label}>24" upper</text>
  <!-- Dim: upper height -->
  <line x1="81" y1="140" x2="81" y2="212" ${S.dim}/>
  <line x1="76" y1="140" x2="86" y2="140" ${S.tick}/>
  <line x1="76" y1="212" x2="86" y2="212" ${S.tick}/>
  <text x="61" y="180" text-anchor="middle" ${S.label}>24"</text>
  <!-- Dim: lower height -->
  <line x1="44" y1="212" x2="44" y2="267" ${S.dim}/>
  <line x1="39" y1="212" x2="49" y2="212" ${S.tick}/>
  <line x1="39" y1="267" x2="49" y2="267" ${S.tick}/>
  <text x="27" y="243" text-anchor="middle" ${S.label}>12"</text>
  <!-- Title -->
  <text x="200" y="22" text-anchor="middle" ${S.title}>Tiered — 48" lower / 24" upper</text>
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
    svg: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg">
  <!-- Box: right face -->
  <polygon points="180,195 191,184 191,240 180,251" ${S.right}/>
  <!-- Box: top face -->
  <polygon points="120,195 180,195 191,184 131,184" ${S.top}/>
  <!-- Box: front face -->
  <rect x="120" y="195" width="60" height="56" ${S.front}/>
  <!-- Box grain -->
  <line x1="120" y1="209" x2="180" y2="209" ${S.grain}/>
  <line x1="120" y1="224" x2="180" y2="224" ${S.grain}/>
  <line x1="120" y1="239" x2="180" y2="239" ${S.grain}/>
  <!-- Left trellis post (front) full height: y=60 to y=251 -->
  <rect x="118" y="60" width="5" height="191" fill="#e8e3d8" stroke="#2c2c2c" stroke-width="1.5"/>
  <!-- Right trellis post (front): y=60 to y=251 -->
  <rect x="177" y="60" width="5" height="191" fill="#e8e3d8" stroke="#2c2c2c" stroke-width="1.5"/>
  <!-- Back-left post (depth offset x+11, y-11): x=129, y=49 -->
  <rect x="129" y="49" width="4" height="180" fill="#ccc8bc" stroke="#2c2c2c" stroke-width="0.8" opacity="0.7"/>
  <!-- Back-right post: x=188 -->
  <rect x="188" y="49" width="4" height="174" fill="#ccc8bc" stroke="#2c2c2c" stroke-width="0.8" opacity="0.5"/>
  <!-- Horizontal trellis slats: 6 bars from y=80 to y=180 -->
  <line x1="123" y1="80"  x2="182" y2="80"  stroke="#b8b2a8" stroke-width="3" stroke-linecap="round"/>
  <line x1="123" y1="100" x2="182" y2="100" stroke="#b8b2a8" stroke-width="3" stroke-linecap="round"/>
  <line x1="123" y1="120" x2="182" y2="120" stroke="#b8b2a8" stroke-width="3" stroke-linecap="round"/>
  <line x1="123" y1="140" x2="182" y2="140" stroke="#b8b2a8" stroke-width="3" stroke-linecap="round"/>
  <line x1="123" y1="160" x2="182" y2="160" stroke="#b8b2a8" stroke-width="3" stroke-linecap="round"/>
  <line x1="123" y1="180" x2="182" y2="180" stroke="#b8b2a8" stroke-width="3" stroke-linecap="round"/>
  <!-- Vertical trellis slats: 3 bars -->
  <line x1="137" y1="78" x2="137" y2="182" stroke="#c8c2b6" stroke-width="2" stroke-linecap="round"/>
  <line x1="152" y1="78" x2="152" y2="182" stroke="#c8c2b6" stroke-width="2" stroke-linecap="round"/>
  <line x1="167" y1="78" x2="167" y2="182" stroke="#c8c2b6" stroke-width="2" stroke-linecap="round"/>
  <!-- Dim: box height -->
  <line x1="103" y1="195" x2="103" y2="251" ${S.dim}/>
  <line x1="98" y1="195" x2="108" y2="195" ${S.tick}/>
  <line x1="98" y1="251" x2="108" y2="251" ${S.tick}/>
  <text x="83" y="227" text-anchor="middle" ${S.label}>18"</text>
  <!-- Dim: trellis height -->
  <line x1="103" y1="60" x2="103" y2="195" ${S.dim}/>
  <line x1="98" y1="60" x2="108" y2="60" ${S.tick}/>
  <text x="83" y="135" text-anchor="middle" ${S.label}>48"</text>
  <!-- Dim: width -->
  <line x1="120" y1="264" x2="180" y2="264" ${S.dim}/>
  <line x1="120" y1="259" x2="120" y2="269" ${S.tick}/>
  <line x1="180" y1="259" x2="180" y2="269" ${S.tick}/>
  <text x="150" y="278" text-anchor="middle" ${S.label}>24"</text>
  <!-- Depth label -->
  <text x="196" y="192" ${S.note}>12" deep</text>
  <!-- Trellis label -->
  <text x="275" y="128" ${S.note}>trellis</text>
  <text x="275" y="140" ${S.note}>grid</text>
  <!-- Title -->
  <text x="200" y="22" text-anchor="middle" ${S.title}>24" × 12" box + 48" trellis</text>
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
      <div class="card-drawing">${p.svg}</div>
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
