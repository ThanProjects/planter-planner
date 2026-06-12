/* ── Planter data ── */
const planters = [

  /* 1 ─ Stacked Cedar Planter ───────────────────────────── */
  {
    id: 'stacked-cedar-planter',
    name: 'Stacked Cedar Planter',
    skill: 'beginner',
    buildTime: '2–4 hrs',
    priceMin: 60,
    priceMax: 85,
    description: 'A boxy stacked-board planter with a mitered 2×4 cap and short corner legs. Built entirely from 2×6 and 2×4 cedar.',
    dimensions: '~26" sq top × ~20" tall',
    lumber: [
      { item: '2×6×8 ft cedar (walls & floor)', qty: '5 boards' },
      { item: '2×4×8 ft cedar (frame, legs & cap)', qty: '3 boards' },
    ],
    supplies: [
      { item: '3" exterior deck screws', qty: '1 lb box' },
      { item: '2¾" galvanized finish nails', qty: '½ lb box' },
      { item: 'Exterior stain or sealer', qty: '1 qt' },
    ],
    tools: ['Circular saw', 'Miter saw', 'Table saw (for ripping legs)', 'Drill/driver', 'Tape measure', 'Clamps', 'Sandpaper'],
    cutList: [
      { label: 'A', desc: 'Frame pieces, long (2×4)', size: '1\'10"', qty: 4 },
      { label: 'B', desc: 'Frame pieces, short (2×4)', size: '1\'7"', qty: 4 },
      { label: 'C', desc: 'Floor boards (2×6)', size: '1\'10"', qty: 4 },
      { label: 'D', desc: 'Wall boards (2×6)', size: '1\'6"', qty: 16 },
      { label: 'E', desc: 'Legs, ripped (2×4)', size: '1\'8"', qty: 4 },
      { label: 'F', desc: 'Cap trim, mitered 45° (2×4)', size: '2\'2"', qty: 4 },
    ],
    steps: [
      'Build the base frame from the long and short 2×4 pieces (A, B), forming a rectangle.',
      'Rip four legs (E) from a 2×4 and attach one inside each corner of the frame, standing vertically.',
      'Lay the floor boards (C) across the frame with small gaps for drainage, and nail in place.',
      'Stack and screw the 2×6 wall boards (D) around all four sides — four courses per side — attaching to the legs and frame for rigidity.',
      'Miter the four cap trim pieces (F) at 45° and attach them around the top edge, overhanging slightly.',
      'Sand all surfaces and apply two coats of exterior stain or sealer.',
    ],
    tip: '<strong>Tip:</strong> Stagger the screw pattern on each stacked wall board so consecutive courses don\'t split the same grain line.',
    sourceUrl: 'https://www.construct101.com/planter-box-plans/',
    sourceName: 'Construct101 — Planter Box Plans',
    svg: `<svg viewBox="0 0 400 332" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000022" stroke-width="1.3"/></pattern></defs>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">~26" sq × ~20" H</text>
<polygon points="200.0,52.0 335.1,130.0 200.0,208.0 64.9,130.0" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,52.0 335.1,130.0 200.0,208.0 64.9,130.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,160.0 335.1,238.0 335.1,130.0 200.0,52.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,160.0 335.1,238.0 335.1,130.0 200.0,52.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="335.1,238.0 200.0,316.0 200.0,208.0 335.1,130.0" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="335.1,238.0 200.0,316.0 200.0,208.0 335.1,130.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<line x1="200.0" y1="133.0" x2="335.1" y2="211.0" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="335.1" y1="211.0" x2="200.0" y2="289.0" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="200.0" y1="106.0" x2="335.1" y2="184.0" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="335.1" y1="184.0" x2="200.0" y2="262.0" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="200.0" y1="79.0" x2="335.1" y2="157.0" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="335.1" y1="157.0" x2="200.0" y2="235.0" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<polygon points="200.0,31.0 350.7,118.0 200.0,205.0 49.3,118.0" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,31.0 350.7,118.0 200.0,205.0 49.3,118.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,43.0 350.7,130.0 350.7,118.0 200.0,31.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,43.0 350.7,130.0 350.7,118.0 200.0,31.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="350.7,130.0 200.0,217.0 200.0,205.0 350.7,118.0" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="350.7,130.0 200.0,217.0 200.0,205.0 350.7,118.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,299.2 209.4,304.6 200.0,310.0 190.6,304.6" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,311.2 209.4,316.6 209.4,304.6 200.0,299.2" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="209.4,316.6 200.0,322.0 200.0,310.0 209.4,304.6" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`
  },

  /* 2 ─ Legged Planter Box ──────────────────────────────── */
  {
    id: 'legged-planter-box',
    name: 'Legged Planter Box',
    skill: 'beginner',
    buildTime: '4–5 hrs',
    priceMin: 45,
    priceMax: 65,
    description: 'A square 1×8 box raised on sturdy 2×4 legs, dressed up with 1×4 corner trim and a drainage gap at the base.',
    dimensions: '~22" sq box on 8" legs (~28" tall overall)',
    lumber: [
      { item: '1×8×8 ft pressure-treated pine (sides & bottom)', qty: '3 boards' },
      { item: '2×4×8 ft pressure-treated pine (legs)', qty: '1 board' },
      { item: '1×4×12 ft pressure-treated pine (corner trim)', qty: '2 boards' },
    ],
    supplies: [
      { item: '1½" exterior wood screws', qty: '1 lb box' },
      { item: '1½" galvanized finish nails', qty: '1 lb box' },
      { item: 'Waterproof exterior glue', qty: '1 bottle' },
      { item: 'Exterior stain & sealer', qty: '1 qt' },
    ],
    tools: ['Circular saw', 'Table saw (for ripping legs)', 'Drill/driver', 'Hammer', 'Nail set', 'Sandpaper'],
    cutList: [
      { label: 'A', desc: 'Side panels (1×8)', size: '20½"', qty: 8 },
      { label: 'B', desc: 'Legs, ripped (2×4 → 2×2)', size: '28"', qty: 4 },
      { label: 'C', desc: 'Bottom cleats (1×2, ripped)', size: '19"', qty: 2 },
      { label: 'D', desc: 'Bottom boards (1×8)', size: '19"', qty: 3 },
      { label: 'E', desc: 'Corner trim (1×4)', size: 'cut to fit', qty: 8 },
    ],
    steps: [
      'Rip the 2×4 into four 2"×2" legs (B), each 28" long.',
      'Attach two side panels (A) to each pair of legs, top edges flush, forming the four walls.',
      'Glue and screw the bottom cleats (C) to the inside of the box, flush with the bottom edge, to support the floor.',
      'Drill ⅜" drainage holes in the bottom boards (D), then drop them onto the cleats and screw in place.',
      'Measure and cut the 1×4 corner trim (E) for an exact flush fit, then attach with glue and finish nails.',
      'Sand all surfaces and apply two coats of exterior stain & sealer.',
    ],
    tip: '<strong>Tip:</strong> Cut the corner trim (E) after the box is assembled — natural lumber varies slightly and this guarantees a flush fit at every corner.',
    sourceUrl: 'https://www.yellawood.com/diy-projects/planter-box/',
    sourceName: 'YellaWood — Planter Box Plans',
    svg: `<svg viewBox="0 0 400 319" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000022" stroke-width="1.3"/></pattern></defs>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">1×8 box on 2×4 legs</text>
<polygon points="200.0,141.0 207.1,145.1 200.0,149.2 192.9,145.1" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,229.0 207.1,233.1 207.1,145.1 200.0,141.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="207.1,233.1 200.0,237.2 200.0,149.2 207.1,145.1" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="303.6,202.4 310.8,206.5 303.6,210.6 296.5,206.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="303.6,290.4 310.8,294.5 310.8,206.5 303.6,202.4" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="310.8,294.5 303.6,298.6 303.6,210.6 310.8,206.5" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="96.4,202.4 103.5,206.5 96.4,210.6 89.2,206.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="96.4,290.4 103.5,294.5 103.5,206.5 96.4,202.4" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="103.5,294.5 96.4,298.6 96.4,210.6 103.5,206.5" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,253.0 207.1,257.1 200.0,261.2 192.9,257.1" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,341.0 207.1,345.1 207.1,257.1 200.0,253.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="207.1,345.1 200.0,349.2 200.0,261.2 207.1,257.1" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,31.0 304.8,91.5 200.0,152.0 95.2,91.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,31.0 304.8,91.5 200.0,152.0 95.2,91.5" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,141.0 304.8,201.5 304.8,91.5 200.0,31.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,141.0 304.8,201.5 304.8,91.5 200.0,31.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="304.8,201.5 200.0,262.0 200.0,152.0 304.8,91.5" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="304.8,201.5 200.0,262.0 200.0,152.0 304.8,91.5" fill="url(#h)" stroke="none" opacity="0.5"/>
<line x1="200.0" y1="104.3" x2="304.8" y2="164.8" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="304.8" y1="164.8" x2="200.0" y2="225.3" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="200.0" y1="67.7" x2="304.8" y2="128.2" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="304.8" y1="128.2" x2="200.0" y2="188.7" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="303.6" y1="202.4" x2="303.6" y2="92.4" stroke="#4A3017" stroke-width="2" opacity="0.5"/>
<line x1="207.1" y1="257.1" x2="207.1" y2="147.1" stroke="#4A3017" stroke-width="2" opacity="0.5"/>
</svg>`
  },

  /* 3 ─ Modular Patio Planter ───────────────────────────── */
  {
    id: 'modular-patio-planter',
    name: 'Modular Patio Planter',
    skill: 'beginner',
    buildTime: '1–2 hrs',
    priceMin: 30,
    priceMax: 45,
    description: 'A small, low cedar trough with three bottom runners for drainage and airflow. Stackable — build two and connect them for a taller planter.',
    dimensions: '22½" L × 7" W × 8" H (two stacked 4" courses)',
    lumber: [
      { item: '6"×¾" cedar boards, 12 ft (rip into sides, ends, runners & connectors)', qty: '2 boards' },
    ],
    supplies: [
      { item: '1¼" exterior screws', qty: '20' },
      { item: 'Landscape fabric (24"×24")', qty: '1 piece' },
    ],
    tools: ['Circular saw or miter saw', 'Drill/driver', 'Staple gun', 'Tape measure', 'Square'],
    cutList: [
      { label: 'A', desc: 'Sides', size: '4" × 22½"', qty: 4 },
      { label: 'B', desc: 'Ends', size: '4" × 7"', qty: 4 },
      { label: 'C', desc: 'Bottom runners', size: '2" × 7"', qty: 3 },
      { label: 'D', desc: 'Stacking connectors', size: '5½" × 7½"', qty: 2 },
    ],
    steps: [
      'Cut all pieces to size (A–D) from the cedar boards.',
      'Assemble the box: screw sides (A) to ends (B), using two screws per joint and a spacer block to keep everything square.',
      'Line the inside of the box with landscape fabric, stapling it to the inner faces.',
      'Attach three runners (C) to the bottom of the box, evenly spaced, for drainage and a finished look.',
      'To stack a second box on top, attach the two connectors (D) about 1" below the top edge of the lower box, then set the upper box in place.',
      'Fill with container soil and plant.',
    ],
    tip: '<strong>Tip:</strong> Each box is intentionally small and stackable — build several and arrange them at different heights for a modular patio garden.',
    sourceUrl: 'https://www.anneofalltrades.com/blog/2020/5/7/easy-diy-planter-box-with-free-plans',
    sourceName: 'Anne of All Trades — Easy DIY Planter Box',
    svg: `<svg viewBox="0 0 400 267" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000022" stroke-width="1.3"/></pattern></defs>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">22½" L × 7" W</text>
<polygon points="139.6,165.5 151.3,172.2 104.5,199.2 92.8,192.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="139.6,183.5 151.3,190.2 151.3,172.2 139.6,165.5" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="151.3,190.2 104.5,217.2 104.5,199.2 151.3,172.2" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="217.5,210.5 229.2,217.2 182.5,244.2 170.8,237.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="217.5,228.5 229.2,235.2 229.2,217.2 217.5,210.5" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="229.2,235.2 182.5,262.2 182.5,244.2 229.2,217.2" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="295.5,255.5 307.2,262.2 260.4,289.2 248.7,282.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="295.5,273.5 307.2,280.2 307.2,262.2 295.5,255.5" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="307.2,280.2 260.4,307.2 260.4,289.2 307.2,262.2" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="139.6,89.0 315.0,190.2 260.4,221.8 85.0,120.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="139.6,89.0 315.0,190.2 260.4,221.8 85.0,120.5" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="139.6,161.0 315.0,262.2 315.0,190.2 139.6,89.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="139.6,161.0 315.0,262.2 315.0,190.2 139.6,89.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="315.0,262.2 260.4,293.8 260.4,221.8 315.0,190.2" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="315.0,262.2 260.4,293.8 260.4,221.8 315.0,190.2" fill="url(#h)" stroke="none" opacity="0.5"/>
<line x1="139.6" y1="125.0" x2="315.0" y2="226.2" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
<line x1="315.0" y1="226.2" x2="260.4" y2="257.8" stroke="#4A3017" stroke-width="1" opacity="0.35"/>
</svg>`
  },

  /* 4 ─ Cedar Wall Planter ───────────────────────────────── */
  {
    id: 'cedar-wall-planter',
    name: 'Cedar Wall Planter',
    skill: 'beginner',
    buildTime: '2–3 hrs',
    priceMin: 30,
    priceMax: 45,
    description: 'A flat-backed, wall-mounted planter with a low front edge and angled trapezoid ends — built from three 1×8 cedar boards using pocket-hole joinery.',
    dimensions: '~29" wide × 9" deep — 12" tall back, 6" tall front',
    lumber: [
      { item: '1×8×8 ft cedar', qty: '3 boards' },
    ],
    supplies: [
      { item: '1¼" pocket-hole screws', qty: '1 box' },
      { item: '1¼" brad nails', qty: '1 box' },
      { item: 'Exterior wood glue', qty: '1 bottle' },
      { item: 'Wall mounting screws (into studs)', qty: '4' },
    ],
    tools: ['Pocket hole jig', 'Drill', 'Miter saw', 'Tape measure', 'Pencil', 'Safety glasses', 'Hearing protection'],
    cutList: [
      { label: 'A', desc: 'Back panel boards (1×8)', size: '29"', qty: 2 },
      { label: 'B', desc: 'Front panel board (1×8)', size: '29"', qty: 1 },
      { label: 'C', desc: 'Bottom panel (1×8)', size: '29"', qty: 1 },
      { label: 'D', desc: 'End panels, trapezoid (1×8)', size: '9" × 12"/6"', qty: 2 },
    ],
    steps: [
      'Cut the two end panels (D) as trapezoids — 9" deep, 12" tall at the back edge tapering to 6" tall at the front edge.',
      'Drill pocket holes along the edges of the back boards (A), front board (B), and bottom panel (C).',
      'Attach the back boards (A) together and to the bottom panel (C) to form the tall rear wall and floor.',
      'Attach the front board (B) to the front edge of the bottom panel (C), forming the low front wall.',
      'Pocket-screw and glue the trapezoid end panels (D) to both ends, closing the box.',
      'Drill drainage holes through the bottom panel, sand, and finish with exterior stain.',
      'Mount to a wall or fence by screwing through the back panel into studs.',
    ],
    tip: '<strong>Tip:</strong> Cedar\'s natural rot resistance makes it ideal here — this planter sits flush against a wall or fence where airflow (and drying) is limited.',
    sourceUrl: 'https://rogueengineer.com/diy-cedar-wall-planter-plans/',
    sourceName: 'Rogue Engineer — DIY Cedar Wall Planter Plans',
    svg: `<svg viewBox="0 0 400 277" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000022" stroke-width="1.3"/></pattern></defs>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">~29" W · trapezoid ends</text>
<polygon points="135.0,79.0 323.4,187.8 265.0,176.5 76.6,67.8" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="135.0,79.0 323.4,187.8 265.0,176.5 76.6,67.8" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="135.0,124.0 323.4,232.8 323.4,187.8 135.0,79.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="135.0,124.0 323.4,232.8 323.4,187.8 135.0,79.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="323.4,232.8 265.0,266.5 265.0,176.5 323.4,187.8" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="323.4,232.8 265.0,266.5 265.0,176.5 323.4,187.8" fill="url(#h)" stroke="none" opacity="0.5"/>
<line x1="200.0" y1="100.0" x2="200.0" y2="146.0" stroke="#4A3017" stroke-width="1" opacity="0.3"/>
<line x1="265.0" y1="135.7" x2="265.0" y2="181.7" stroke="#4A3017" stroke-width="1" opacity="0.3"/>
</svg>`
  },

  /* 5 ─ Tall Slatted Planter ────────────────────────────── */
  {
    id: 'tall-slatted-planter',
    name: 'Tall Slatted Planter',
    skill: 'beginner',
    buildTime: '2–3 hrs',
    priceMin: 45,
    priceMax: 60,
    description: 'A tall, slim cedar planter with horizontal slat sides, corner posts, and a flat cap — built on a simple 2×4 frame.',
    dimensions: '~13" sq × ~28" tall',
    lumber: [
      { item: '1×6×8 ft cedar fence pickets (slats & cap)', qty: '6 boards' },
      { item: '2×4×8 ft framing lumber (legs & frame)', qty: '2 boards' },
    ],
    supplies: [
      { item: '¾" outdoor wood screws', qty: '1 box' },
      { item: '2½" pocket-hole screws', qty: '1 box' },
      { item: '1" & 1¼" brad nails', qty: '1 box each' },
      { item: 'Wood glue', qty: '1 bottle' },
      { item: 'Exterior stain or paint + protective topcoat', qty: '1 qt' },
    ],
    tools: ['Miter saw', 'Pocket hole jig', 'Drill/driver', 'Brad nailer', 'Tape measure', 'Square', 'Sandpaper'],
    cutList: [
      { label: 'A', desc: 'Corner legs (2×4)', size: '26"', qty: 4 },
      { label: 'B', desc: 'Top & bottom frame rails (2×4)', size: '10"', qty: 8 },
      { label: 'C', desc: 'Removable shelf/floor boards (1×6)', size: '10"', qty: 2 },
      { label: 'D', desc: 'Side slats (1×6)', size: '10"', qty: 28 },
      { label: 'E', desc: 'Cap trim (1×6, mitered)', size: '13"', qty: 4 },
    ],
    steps: [
      'Build a frame at the top and bottom of each side using the 2×4 rails (B) joined to the four corner legs (A) with pocket-hole screws.',
      'Drop the removable shelf boards (C) into the lower frame to support the soil bag or liner.',
      'Attach the side slats (D) horizontally across all four faces with brad nails and glue, leaving a small gap between each slat — about 7 per side.',
      'Miter the cap trim pieces (E) at 45° and attach around the top edge, overhanging slightly.',
      'Sand all surfaces, then prime and paint or stain, finishing with an outdoor-rated protective topcoat.',
    ],
    tip: '<strong>Tip:</strong> This is a SUPER EASY build — the slats hide a standard nursery pot or grow bag, so you don\'t need to worry about waterproofing the inside.',
    sourceUrl: 'https://www.shanty-2-chic.com/homemade-planter-box-free-plans/',
    sourceName: 'Shanty 2 Chic — Homemade Planter Box Free Plans',
    svg: `<svg viewBox="0 0 400 314" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000022" stroke-width="1.3"/></pattern></defs>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">~13" sq × ~28" H</text>
<polygon points="200.0,40.5 273.2,82.8 200.0,125.0 126.8,82.8" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,209.5 273.2,251.8 273.2,82.8 200.0,40.5" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,251.8 200.0,294.1 200.0,125.0 273.2,82.8" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,189.7 273.2,232.0 200.0,274.2 126.8,232.0" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,189.7 273.2,232.0 200.0,274.2 126.8,232.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,209.5 273.2,251.8 273.2,232.0 200.0,189.7" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,209.5 273.2,251.8 273.2,232.0 200.0,189.7" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="273.2,251.8 200.0,294.1 200.0,274.2 273.2,232.0" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,251.8 200.0,294.1 200.0,274.2 273.2,232.0" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,165.6 273.2,207.8 200.0,250.1 126.8,207.8" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,165.6 273.2,207.8 200.0,250.1 126.8,207.8" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,185.4 273.2,227.6 273.2,207.8 200.0,165.6" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,185.4 273.2,227.6 273.2,207.8 200.0,165.6" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="273.2,227.6 200.0,269.9 200.0,250.1 273.2,207.8" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,227.6 200.0,269.9 200.0,250.1 273.2,207.8" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,141.5 273.2,183.7 200.0,226.0 126.8,183.7" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,141.5 273.2,183.7 200.0,226.0 126.8,183.7" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,161.3 273.2,203.5 273.2,183.7 200.0,141.5" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,161.3 273.2,203.5 273.2,183.7 200.0,141.5" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="273.2,203.5 200.0,245.7 200.0,226.0 273.2,183.7" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,203.5 200.0,245.7 200.0,226.0 273.2,183.7" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,117.4 273.2,159.6 200.0,201.9 126.8,159.6" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,117.4 273.2,159.6 200.0,201.9 126.8,159.6" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,137.2 273.2,179.4 273.2,159.6 200.0,117.4" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,137.2 273.2,179.4 273.2,159.6 200.0,117.4" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="273.2,179.4 200.0,221.7 200.0,201.9 273.2,159.6" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,179.4 200.0,221.7 200.0,201.9 273.2,159.6" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,93.2 273.2,135.5 200.0,177.7 126.8,135.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,93.2 273.2,135.5 200.0,177.7 126.8,135.5" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,113.0 273.2,155.3 273.2,135.5 200.0,93.2" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,113.0 273.2,155.3 273.2,135.5 200.0,93.2" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="273.2,155.3 200.0,197.6 200.0,177.7 273.2,135.5" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,155.3 200.0,197.6 200.0,177.7 273.2,135.5" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,69.1 273.2,111.3 200.0,153.6 126.8,111.3" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,69.1 273.2,111.3 200.0,153.6 126.8,111.3" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,88.9 273.2,131.1 273.2,111.3 200.0,69.1" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,88.9 273.2,131.1 273.2,111.3 200.0,69.1" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="273.2,131.1 200.0,173.4 200.0,153.6 273.2,111.3" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,131.1 200.0,173.4 200.0,153.6 273.2,111.3" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,45.0 209.0,50.2 200.0,55.4 191.0,50.2" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,220.5 209.0,225.7 209.0,50.2 200.0,45.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="209.0,225.7 200.0,230.9 200.0,55.4 209.0,50.2" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,87.2 282.2,92.4 273.2,97.6 264.2,92.4" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="273.2,262.7 282.2,268.0 282.2,92.4 273.2,87.2" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="282.2,268.0 273.2,273.2 273.2,97.6 282.2,92.4" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="126.8,87.2 135.8,92.4 126.8,97.6 117.8,92.4" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="126.8,262.7 135.8,268.0 135.8,92.4 126.8,87.2" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="135.8,268.0 126.8,273.2 126.8,97.6 135.8,92.4" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,29.5 209.0,34.7 200.0,39.9 191.0,34.7" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,205.0 209.0,210.2 209.0,34.7 200.0,29.5" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="209.0,210.2 200.0,215.4 200.0,39.9 209.0,34.7" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,30.5 290.1,82.5 200.0,134.5 109.9,82.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,30.5 290.1,82.5 200.0,134.5 109.9,82.5" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,40.2 290.1,92.2 290.1,82.5 200.0,30.5" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,40.2 290.1,92.2 290.1,82.5 200.0,30.5" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="290.1,92.2 200.0,144.2 200.0,134.5 290.1,82.5" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="290.1,92.2 200.0,144.2 200.0,134.5 290.1,82.5" fill="url(#h)" stroke="none" opacity="0.5"/>
</svg>`
  },

  /* 6 ─ Tall Privacy Planter ─────────────────────────────── */
  {
    id: 'tall-privacy-planter',
    name: 'Tall Privacy Planter',
    skill: 'intermediate',
    buildTime: '4–6 hrs',
    priceMin: 90,
    priceMax: 120,
    description: 'A planter base topped with tall 4×4 corner posts and a horizontal slat privacy screen — great for mosquito-repelling herbs like lemongrass and lavender.',
    dimensions: '~13" sq base × ~50" tall overall (with slat screen & cap)',
    lumber: [
      { item: '4×4×8 ft cedar or pressure-treated (posts)', qty: '2 boards' },
      { item: '2×4×8 ft cedar or pressure-treated (frame & supports)', qty: '1 board' },
      { item: '5/4×6×10 ft cedar or pressure-treated (cap)', qty: '1 board' },
      { item: '5/4×6×8 ft cedar or pressure-treated (base & slats)', qty: '11 boards' },
    ],
    supplies: [
      { item: '2½" Kreg pocket-hole screws', qty: '1 box' },
      { item: '1½" Kreg pocket-hole screws', qty: '1 box' },
      { item: '2" wood screws', qty: '1 box' },
      { item: 'Plastic sheeting + weed barrier (interior liner)', qty: '1 each' },
      { item: 'Exterior stain (Driftwood recommended)', qty: '1 qt' },
    ],
    tools: ['Pocket hole jig', 'Drill', 'Miter saw', 'Jig saw', 'Tape measure', 'Pencil', 'Safety glasses', 'Hearing protection'],
    cutList: [
      { label: 'A', desc: 'Corner posts (4×4)', size: '50"', qty: 4 },
      { label: 'B', desc: 'Base frame supports (2×4)', size: '13"', qty: 4 },
      { label: 'C', desc: 'Base panel boards (5/4×6)', size: '13"', qty: 8 },
      { label: 'D', desc: 'Privacy screen slats (5/4×6)', size: '11"', qty: 24 },
      { label: 'E', desc: 'Cap pieces, mitered (5/4×6)', size: '16"', qty: 4 },
    ],
    steps: [
      'Assemble the sides of the planter base by joining base panel boards (C) with pocket screws.',
      'Build the base frame from the 2×4 supports (B) and attach the four corner posts (A) at each corner.',
      'Install the support frame inside the base so the floor boards sit level.',
      'Install the planter base panels around the frame, leaving the posts exposed above.',
      'Assemble the cap by mitering the cap pieces (E) at 45° to form a frame that sits on top of the posts.',
      'Attach the cap to the tops of the four posts.',
      'Working up the posts above the base, attach the privacy screen slats (D) horizontally with even gaps on the front and side faces.',
      'Finish with exterior stain (Driftwood recommended), then line the interior with plastic sheeting and weed barrier before filling with ~5 cubic feet of soil.',
    ],
    tip: '<strong>Tip:</strong> Plant lemongrass, lavender, basil, lemon balm, or citronella in this one — the height puts their scent right at nose level and helps repel mosquitoes on a patio.',
    sourceUrl: 'https://rogueengineer.com/diy-tall-planter-plans/',
    sourceName: 'Rogue Engineer — DIY Tall Planter Plans',
    svg: `<svg viewBox="0 0 400 309" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="h" patternUnits="userSpaceOnUse" width="8" height="8"><line x1="0" y1="8" x2="8" y2="0" stroke="#00000022" stroke-width="1.3"/></pattern></defs>
<text x="200" y="22" font-size="13" fill="#2d6a4f" font-weight="700" font-family="-apple-system,sans-serif" text-anchor="middle">planter base + slat screen</text>
<polygon points="200.0,33.6 203.3,35.5 200.0,37.4 196.7,35.5" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,243.6 203.3,245.5 203.3,35.5 200.0,33.6" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="203.3,245.5 200.0,247.4 200.0,37.4 203.3,35.5" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="244.7,59.4 248.0,61.3 244.7,63.2 241.5,61.3" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="244.7,269.4 248.0,271.3 248.0,61.3 244.7,59.4" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="248.0,271.3 244.7,273.2 244.7,63.2 248.0,61.3" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="155.3,59.4 158.5,61.3 155.3,63.2 152.0,61.3" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="155.3,269.4 158.5,271.3 158.5,61.3 155.3,59.4" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="158.5,271.3 155.3,273.2 155.3,63.2 158.5,61.3" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,85.2 203.3,87.1 200.0,89.0 196.7,87.1" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,295.2 203.3,297.1 203.3,87.1 200.0,85.2" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="203.3,297.1 200.0,299.0 200.0,89.0 203.3,87.1" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,193.6 247.3,220.9 200.0,248.2 152.7,220.9" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,193.6 247.3,220.9 200.0,248.2 152.7,220.9" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,244.0 247.3,271.3 247.3,220.9 200.0,193.6" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,244.0 247.3,271.3 247.3,220.9 200.0,193.6" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="247.3,271.3 200.0,298.6 200.0,248.2 247.3,220.9" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="247.3,271.3 200.0,298.6 200.0,248.2 247.3,220.9" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,185.2 247.3,212.5 247.3,197.5 200.0,170.2" fill="#C8A06C" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="247.3,212.5 200.0,239.8 200.0,224.8 247.3,197.5" fill="#A37B4B" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="200.0,162.1 247.3,189.4 247.3,174.4 200.0,147.1" fill="#C8A06C" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="247.3,189.4 200.0,216.7 200.0,201.7 247.3,174.4" fill="#A37B4B" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="200.0,139.0 247.3,166.3 247.3,151.3 200.0,124.0" fill="#C8A06C" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="247.3,166.3 200.0,193.6 200.0,178.6 247.3,151.3" fill="#A37B4B" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="200.0,115.9 247.3,143.2 247.3,128.2 200.0,100.9" fill="#C8A06C" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="247.3,143.2 200.0,170.5 200.0,155.5 247.3,128.2" fill="#A37B4B" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="200.0,92.8 247.3,120.1 247.3,105.1 200.0,77.8" fill="#C8A06C" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="247.3,120.1 200.0,147.4 200.0,132.4 247.3,105.1" fill="#A37B4B" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="200.0,69.7 247.3,97.0 247.3,82.0 200.0,54.7" fill="#C8A06C" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="247.3,97.0 200.0,124.3 200.0,109.3 247.3,82.0" fill="#A37B4B" stroke="#4A3017" stroke-width="1" stroke-linejoin="round"/>
<polygon points="200.0,29.8 254.6,61.3 200.0,92.8 145.4,61.3" fill="#E3C49C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,29.8 254.6,61.3 200.0,92.8 145.4,61.3" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="200.0,38.2 254.6,69.7 254.6,61.3 200.0,29.8" fill="#C8A06C" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="200.0,38.2 254.6,69.7 254.6,61.3 200.0,29.8" fill="url(#h)" stroke="none" opacity="0.5"/>
<polygon points="254.6,69.7 200.0,101.2 200.0,92.8 254.6,61.3" fill="#A37B4B" stroke="#4A3017" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="254.6,69.7 200.0,101.2 200.0,92.8 254.6,61.3" fill="url(#h)" stroke="none" opacity="0.5"/>
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

    ${p.sourceUrl ? `
    <div class="section source-section">
      <div class="section-title">Original Plans</div>
      <a href="${p.sourceUrl}" target="_blank" rel="noopener" class="source-link">
        <span class="source-link-icon">📐</span>
        <span>${p.sourceName}</span>
        <span class="source-link-arrow">↗</span>
      </a>
    </div>` : ''}

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
