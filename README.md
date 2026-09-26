# ATLAS

**Plan a week of training around the muscles you want to build, and a schedule you actually have.**

ATLAS is a weekly training planner in three stages. Pick your target muscles on an interactive anatomy figure, get a nutrition plan built from that training, then let it place the sessions, exercises and meals into the free hours of your week.

It runs entirely in the browser: no account, no server, no build step. Open `index.html` and it works.

---

## How it works

### 01 · Targets — define your focus
- **Pick muscles on the body.** Click or tap any of the 16 muscle groups on the front or back view; click again to remove it.
- **Or start from a program.** Full Body, Upper/Lower, Push · Pull · Legs and classic pairings. Point at one to preview its muscles, then edit freely ("Based on Push — added Abs").
- **See what it will take.** A preliminary estimate of weekly hard sets, time a week, training frequency, and what consistent training usually brings, with the caveats stated plainly.

### 02 · Nutrition — fuel the training
- **Goal:** fat loss, muscle gain, maintenance or general fitness.
- **Targets from your training:** calories are set against your daily burn and protein per kg of body weight, both adjusted to the plan's training load. You can fine-tune either.
- **Your rhythm:** meals a day, first and last meal times, and a diet style (everything, pescatarian, vegetarian, vegan), with example meals that hit the numbers.

### 03 · Week plan — fit it into your life
- **Paint your availability.** Click or drag across the hourly grid to block the time you're busy.
- **Choose how you train:** sessions a week, session length, days off and preferred time of day.
- **Generate the week.** Muscles are grouped into sessions with recovery tracked per muscle. Exercises are chosen from tiered ratings, and meals are placed around the workouts. You can then swap, add or remove exercises.

Every calorie, protein and progress figure is labelled an **estimate**, shows how it was worked out, and never promises a physique by a date.

---

## Run it

```sh
git clone https://github.com/ItsTreh/Atlas.git
cd Atlas
open index.html        # or double-click it
```

That's all. Light and dark themes are built in (top-right toggle), and the layout works from phones to large desktops.

### Tests

```sh
npm install
npm test
```

The logic (muscles, programs, estimates, nutrition, exercise selection, scheduling) is tested with [Vitest](https://vitest.dev), running the app's own files unchanged.

---

## How it's built

Plain HTML, CSS and JavaScript as classic scripts, with no framework or bundler. That's why it opens straight from disk.

```
index.html          the three stages
css/styles.css      the ATLAS theme: tokens, light/dark, layout
js/
  model.js          muscles, time slots, sessions — the core data
  selection.js      MuscleSelection: the one source of truth for targets
  programs.js       recommended programs
  estimate.js       the "what it will take" estimate
  exercises.js      exercise catalogue with tier ratings
  workouts.js       builds each session's workout
  nutrition.js      calorie and protein targets
  foods.js          foods, diet styles, example meals
  routine.js        WeeklyRoutine: the shared plan state
  scheduler.js      places sessions and meals in the week
  anatomy*.js       the anatomy figure and the stage it lives in
  targets.js, nutrition-view.js, workout-view.js, render.js, paint.js, app.js
                    the views and wiring
tests/              Vitest suites
```

Data lives apart from the UI and is validated when it loads. Views read from and write to shared state (`routine`, `routine.selection`); nothing keeps its own copy.

---

## Roadmap — the ATLAS redesign

ATLAS is mid-way through a redesign towards a calm, monochrome, gallery-like interface, with the body as its centrepiece.

- [x] Foundation: light monochrome theme, one type family, fewer surfaces
- [x] A dedicated, centred stage for the anatomy
- [ ] A stylised 3D anatomical sculpture in place of the flat figure *(in review)*
- [ ] Refined hover and selection states, front/back controls, rotation and zoom
- [ ] Side rails for programs and training demand
- [ ] Redesigned nutrition and week-plan stages
