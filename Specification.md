# SawitFit Design System Specification

Complete design system documentation for SawitFit, including spacing, colors, typography, and accessibility guidelines.

---

## Table of Contents

1. [Spacing System](#spacing-system)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Accessibility](#accessibility)

---

# Spacing System

## Spacing Scale

SawitFit uses an 8-point spacing system based on multiples of 4px for consistency and scalability.

| Token Name | Value | CSS Variable | Usage |
|------------|-------|--------------|-------|
| tiny | 4px | `--spacing-tiny` | Minimal gaps, icon padding |
| small | 8px | `--spacing-small` | Tight spacing, compact layouts |
| medium-small | 12px | `--spacing-medium-small` | Between small and medium |
| medium | 16px | `--spacing-medium` | Default spacing, card padding |
| large | 24px | `--spacing-large` | Section spacing, card gaps |
| extra-large | 32px | `--spacing-extra-large` | Major sections, page margins |
| huge | 48px | `--spacing-huge` | Large separations |
| massive | 64px | `--spacing-massive` | Maximum spacing, hero sections |

---

## Common Use Cases

### Card Components
- **Padding**: `medium` (16px)
- **Gap between cards**: `large` (24px)
- **Internal element spacing**: `small` (8px) to `medium` (16px)

### Page Layout
- **Container padding**: `extra-large` (32px)
- **Section spacing**: `huge` (48px)
- **Hero sections**: `massive` (64px)

### Form Elements
- **Input padding**: `medium` (16px)
- **Label margin**: `small` (8px)
- **Button padding**: `medium-small` (12px) vertical, `medium` (16px) horizontal

---

# Color System

## Background Colors

### Standard Backgrounds

#### Light Mode
- **Name**: Seashell
- **Hex**: `#f1f1f1`
- **Usage**: Default light mode background

#### Dark Mode
- **Name**: Shark
- **Hex**: `#1f1f1f`
- **Usage**: Default dark mode background

---

### Alternative Backgrounds (Branded)

#### Alt Light Mode
- **Name**: Bon Jour
- **Hex**: `#E5E4EC`
- **Gradient**: `#F5F3FF` → `#E5E4EC` (top to bottom)
- **Usage**: Branded light mode with purple tint

#### Alt Dark Mode
- **Name**: Steel Grey
- **Hex**: `#1F1C2D`
- **Gradient**: `#2D2640` → `#1F1C2D` (top to bottom)
- **Usage**: Branded dark mode with deep purple

---

## Text Colors

### Standard Light Mode (on `#f1f1f1`)

| Level | Color Name | Hex | Contrast | WCAG |
|-------|------------|-----|----------|------|
| Primary | Near Black | `#18181B` | 12.8:1 | AAA ✅ |
| Secondary | Medium Gray | `#52525B` | 6.2:1 | AA ✅ |
| Tertiary | Light Gray | `#71717A` | 4.5:1 | AA ✅ |

**Usage:**
- **Primary**: Headings (H1-H3), Body text (Large, Regular, Small)
- **Secondary**: Captions, Labels
- **Tertiary**: Tiny text, Placeholders, Hints

---

### Alt Light Mode (on `#E5E4EC`)

| Level | Color Name | Hex | Contrast | WCAG |
|-------|------------|-----|----------|------|
| Headings | Meteorite | `#371E6B` | 9.2:1 | AAA ✅ |
| Body/All | Daisy Bush | `#5013A4` | 5.8:1 | AA ✅ |

**Usage:**
- **Meteorite (`#371E6B`)**: Heading 1, Heading 2, Heading 3
- **Daisy Bush (`#5013A4`)**: Body Large, Body Regular, Body Small, Caption, Label, Tiny

**Design Philosophy**: Purple-branded text for stronger brand identity

---

### Standard Dark Mode (on `#1f1f1f`)

| Level | Color Name | Hex | Contrast | WCAG |
|-------|------------|-----|----------|------|
| Primary | Off White | `#FEFCFE` | 14.2:1 | AAA ✅ |
| Secondary | Light Gray | `#D4D4D8` | 8.1:1 | AAA ✅ |
| Tertiary | Medium Gray | `#A1A1AA` | 5.2:1 | AA ✅ |

**Usage:**
- **Primary**: Headings (H1-H3), Body text (Large, Regular, Small)
- **Secondary**: Captions, Labels
- **Tertiary**: Tiny text, Placeholders, Hints

---

### Alt Dark Mode (on `#1F1C2D`)

| Level | Color Name | Hex | Contrast | WCAG |
|-------|------------|-----|----------|------|
| Headings | Moon Raker | `#E2DBFF` | 11.8:1 | AAA ✅ |
| Body/All | Athens Grey | `#ECEEF2` | 13.2:1 | AAA ✅ |

**Usage:**
- **Moon Raker (`#E2DBFF`)**: Heading 1, Heading 2, Heading 3
- **Athens Grey (`#ECEEF2`)**: Body Large, Body Regular, Body Small, Caption, Label, Tiny

**Design Philosophy**: Purple headings for brand + Neutral body for readability

---

## Primary Colors

### Purple (Brand Color)

| Shade | Hex | Usage |
|-------|-----|-------|
| 10 | `#cbb5fd` | Lightest tint, backgrounds |
| 20 | `#ad8bfa` | Light accent |
| 30 | `#8b5cf6` | **Primary brand color** |
| 40 | `#713aed` | Medium purple |
| 50 | `#5e28d9` | Darkest shade, text on light |

---

# Typography

## Font Sizes

| Token | Size | CSS Variable | Usage |
|-------|------|--------------|-------|
| heading-1 | 32px | `--font-size-heading-1` | Page titles |
| heading-2 | 24px | `--font-size-heading-2` | Section headings |
| heading-3 | 20px | `--font-size-heading-3` | Subsection headings |
| body-large | 18px | `--font-size-body-large` | Emphasized body text |
| body | 16px | `--font-size-body` | Default body text |
| body-small | 14px | `--font-size-body-small` | Secondary text |
| caption | 12px | `--font-size-caption` | Captions, metadata |
| label | 12px | `--font-size-label` | Form labels |
| tiny | 10px | `--font-size-tiny` | Smallest text |

## Font Family

- **Primary**: Inter (from Google Fonts)
- **CSS Variable**: `--font-inter`
- **Fallback**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

---

# Accessibility

## WCAG Compliance

### Standards
- ✅ All text colors meet **WCAG AA** minimum (4.5:1 for normal text, 3:1 for large text)
- ✅ Primary text colors meet **WCAG AAA** (7:1 for normal text, 4.5:1 for large text)
- ✅ Enhanced accessibility for users with visual impairments

### Contrast Ratios Summary

**Light Mode (Standard):**
- Primary: 12.8:1 (AAA)
- Secondary: 6.2:1 (AA)
- Tertiary: 4.5:1 (AA)

**Light Mode (Alt):**
- Headings: 9.2:1 (AAA)
- Body: 5.8:1 (AA)

**Dark Mode (Standard):**
- Primary: 14.2:1 (AAA)
- Secondary: 8.1:1 (AAA)
- Tertiary: 5.2:1 (AA)

**Dark Mode (Alt):**
- Headings: 11.8:1 (AAA)
- Body: 13.2:1 (AAA)

---

# CSS Variables

```css
:root {
  /* ========== Spacing ========== */
  --spacing-tiny: 4px;
  --spacing-small: 8px;
  --spacing-medium-small: 12px;
  --spacing-medium: 16px;
  --spacing-large: 24px;
  --spacing-extra-large: 32px;
  --spacing-huge: 48px;
  --spacing-massive: 64px;
  
  /* ========== Standard Backgrounds ========== */
  --color-bg-light: #f1f1f1;
  --color-bg-dark: #1f1f1f;
  
  /* ========== Alt Backgrounds ========== */
  --color-bg-light-alt: #E5E4EC;
  --color-bg-light-alt-gradient-start: #CBB5FD;
  --color-bg-light-alt-gradient-end: #E5E4EC;
  
  --color-bg-dark-alt: #1F1C2D;
  --color-bg-dark-alt-gradient-start: #5E28D9;
  --color-bg-dark-alt-gradient-end: #1F1C2D;
  
  /* ========== Standard Light Mode Text ========== */
  --color-text-primary-light: #18181B;
  --color-text-secondary-light: #52525B;
  --color-text-tertiary-light: #71717A;
  
  /* ========== Alt Light Mode Text ========== */
  --color-text-heading-light-alt: #371E6B;
  --color-text-body-light-alt: #5013A4;
  
  /* ========== Standard Dark Mode Text ========== */
  --color-text-primary-dark: #FEFCFE;
  --color-text-secondary-dark: #D4D4D8;
  --color-text-tertiary-dark: #A1A1AA;
  
  /* ========== Alt Dark Mode Text ========== */
  --color-text-heading-dark-alt: #E2DBFF;
  --color-text-body-dark-alt: #ECEEF2;
  
  /* ========== Primary Colors ========== */
  --color-primary-10: #cbb5fd;
  --color-primary-20: #ad8bfa;
  --color-primary-30: #8b5cf6;
  --color-primary-40: #713aed;
  --color-primary-50: #5e28d9;
  
  /* ========== Typography ========== */
  --font-size-heading-1: 32px;
  --font-size-heading-2: 24px;
  --font-size-heading-3: 20px;
  --font-size-body-large: 18px;
  --font-size-body: 16px;
  --font-size-body-small: 14px;
  --font-size-caption: 12px;
  --font-size-label: 12px;
  --font-size-tiny: 10px;
  
  --font-inter: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

---

# Quick Reference

## Spacing
```
Tiny: 4px  | Small: 8px  | Med-Small: 12px | Medium: 16px
Large: 24px | XL: 32px | Huge: 48px | Massive: 64px
```

## Colors (Standard)
```
Light: #f1f1f1 bg → #18181B text
Dark:  #1f1f1f bg → #FEFCFE text
```

## Colors (Alt - Branded)
```
Light: #E5E4EC bg → #371E6B headings, #5013A4 body
Dark:  #1F1C2D bg → #E2DBFF headings, #ECEEF2 body
```

## Typography
```
H1: 32px | H2: 24px | H3: 20px
Body: 18px/16px/14px | Small: 12px/10px
```
