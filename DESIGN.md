---
name: Noor al-Masjid
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#404944'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#9b4500'
  on-secondary: '#ffffff'
  secondary-container: '#fd8a42'
  on-secondary-container: '#682c00'
  tertiary: '#4a2400'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a3700'
  on-tertiary-container: '#ff9939'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb68e'
  on-secondary-fixed: '#331200'
  on-secondary-fixed-variant: '#763300'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
  emerald-deep: '#064E3B'
  emerald-light: '#065F46'
  gold-metallic: '#B45309'
  gold-shimmer: '#F59E0B'
  sand-cream: '#FDFCF8'
  slate-gray: '#334155'
typography:
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  prayer-time-display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  prayer-row-padding: 12px 20px
---

## Brand & Style

The brand personality is **Modern Islamic Spiritualism**: a marriage of thousand-year-old architectural traditions with a clean, 21st-century digital clarity. It serves a community seeking guidance, peace, and transparency. The visual language must feel **authoritative yet welcoming**, reflecting the mosque's role as both a religious sanctuary and a community pillar.

The design style is **Corporate Modern with Tactile Accents**. It utilizes high-quality typography and generous whitespace (Minimalism) but introduces depth through soft shadows and intricate geometric patterns inspired by mosque masonry. The goal is an interface that feels "etched" and "illuminated" rather than merely printed on a screen.

## Colors

The palette is rooted in sacred symbology. **Deep Emerald Green** serves as the primary anchor, representing life and spirituality. **Rich Gold** is used sparingly for high-value accents, calls to action, and interactive highlights, mimicking the gilding found in mihrabs.

The background is a **Soft Cream (off-white)** rather than pure white to reduce eye strain during evening readings and to evoke the texture of natural stone and parchment. Text is primarily a very dark slate to maintain high legibility while appearing softer than pure black.

## Typography

The typography system creates a contrast between tradition and utility. **Libre Caslon Text** is used for headlines to provide a literary, established, and authoritative feel. Its serifs are sharp and elegant, reminiscent of historical manuscripts.

For body text and complex data layouts, **Inter** provides maximum clarity and neutral professionalism. This ensures that prayer times and news updates are accessible to all ages. **Hanken Grotesk** is used for labels and small UI metadata to provide a contemporary edge.

## Layout & Spacing

This design system utilizes a **12-column fixed-width grid** for desktop, centering the content to evoke the stability of a physical structure. On mobile, the layout shifts to a single-column stack with 16px side margins.

Spacing follows a rigorous 8px base unit. Larger "breathable" gaps (32px+) should be used between major sections (e.g., separating the Prayer Time Table from the News Feed) to maintain a sense of calm and order. The "Prayer Times" component uses a dense, tabular layout to ensure all daily times are visible on one screen without scrolling.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. 

1.  **Base Surface:** Cream background.
2.  **Container Surface:** White card with a very subtle 1px border in a slightly darker cream or gold-tinted gray.
3.  **Floating Elements:** Cards use a "Sand Shadow"—a low-opacity, wide-diffusion shadow tinted with a touch of gold hex (`#B45309` at 5% opacity) rather than black. This makes components feel like they are resting on the page rather than hovering in a void.
4.  **Interactivity:** Buttons use a slight vertical offset shadow that collapses on hover to simulate a tactile "press."

## Shapes

The shape language is **Soft (0.25rem)**. While modern apps often favor highly rounded corners, this system uses subtle rounding to mirror the precise stone masonry and geometric tile-work of Islamic architecture. 

Large-scale components like the "Donation Widget" can use `rounded-lg` (0.5rem) to feel more inviting. Decorative imagery and photo galleries should use sharp or subtly rounded corners to maintain an architectural, structured feel.

## Components

### Prayer Times Table
The centerpiece of the dashboard. Rows should have an alternating background (Zebra striping) using a very faint emerald-tinted white. The "Current Prayer" row is highlighted with an Emerald Deep background and Gold Shimmer text. Time data must use tabular lining figures for vertical alignment.

### Donation Cards
Designed to instill trust. Use a white surface with a "Gold Metallic" top border (4px). The CTA button should be the primary Emerald Deep. Include a progress bar in Gold Shimmer for specific mosque projects (e.g., "Roof Repair").

### Buttons
- **Primary:** Emerald Deep background, white text, 4px corner radius.
- **Secondary:** Transparent background, Gold Metallic border, Gold Metallic text.
- **Tertiary:** Text-only in Emerald Deep with an underline on hover.

### Input Fields
Soft cream background, 1px border in Slate Gray. On focus, the border shifts to Gold Shimmer with a subtle outer glow.

### Photo Gallery
Grid-based with 8px gutters. Images should have a 1px inner border to give them a "framed" look. Use the "Before/After" slider component for renovation updates, featuring a gold-handled vertical divider.