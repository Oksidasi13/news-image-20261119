# World news in one image — Thursday 19 November 2026

One image summing up the world's news of Thursday 19 November 2026,
drawn by hand (Python PIL, DejaVu fonts) as a newspaper infographic:
a header naming the day, and six story blocks in a grid.

## The six stories (all reported on 19 November 2026)

1. **Diplomacy — Shenzhen, China.** Trump, Xi and Putin hold their first
   three-way summit at the APEC forum. Sources: NYT live updates,
   CBS News, OneTurn, Horizon.
2. **Justice — The Hague.** The ICJ gives its judgment in Gambia v.
   Myanmar over the 2017 crackdown on the Rohingya, after seven years.
   No outcome is stated in the image — only that the judgment is given
   that day. Sources: ICJ schedule (judgment set for 19 Nov, 10:00,
   Peace Palace), Muslim Network TV, Horizon.
3. **Tech — New York.** Anthropic prices its IPO at $83 a share and
   starts trading on Nasdaq as ANT. $81.3bn raised, about $1.5 trillion
   fully diluted — the largest IPO on record. Sources: BusinessDay,
   PYMNTS, Reuters via KuCoin.
4. **Climate — Antalya, Turkey.** COP31 ministers meet late to unblock
   negotiations; a new draft text is due that day. Sources: The Guardian
   live blog, Horizon.
5. **Weather — Odisha, India.** Cyclone Akvan nears land; more than
   47,000 people are moved to safety. Landfall expected near Gopalpur
   on Friday, winds 90–100 km/h. Sources: The Hindu BusinessLine,
   Reuters, India Meteorological Department. Corrected 19 Nov 17:05 WIB from 80,000 after cross-checking IMD / India Today reports (~47,000 evacuated).
6. **Middle East — The Gulf.** Kuwait says it repelled an Iranian attack.
   The IEA calls the Hormuz crisis the greatest threat yet seen to
   energy security. Sources: Horizon, OneTurn.

## Build

`mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` copies
`entry.png` (1024x1024 PNG) to `out/entry.png`.
