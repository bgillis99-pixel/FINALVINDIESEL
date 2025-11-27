/**
 * Tesla-Inspired Color Palette
 * Dark mode first, high contrast
 */

export const colors = {
  // Backgrounds
  teslaBlack: '#0A0A0F',       // Deep black
  teslaGray: '#1E1E24',         // Card background
  teslaCharcoal: '#2A2A32',     // Secondary bg

  // Accents
  teslaBlue: '#3E6AE1',         // Primary action
  teslaGreen: '#00D563',        // Success/Pass
  teslaRed: '#FF4757',          // Fail/Error
  teslaYellow: '#FFB800',       // Warning

  // Text
  teslaWhite: '#E8E8F0',        // Primary text
  teslaGrayText: '#8E8E93',     // Secondary text

  // Glass effects
  glassBackground: 'rgba(30, 30, 36, 0.5)',
  glassBorder: 'rgba(255, 255, 255, 0.15)',
};

export const typography = {
  title: {
    fontSize: 34,
    fontWeight: '700' as const,
  },
  headline: {
    fontSize: 20,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 17,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 13,
    fontWeight: '500' as const,
  },
  monospace: {
    fontSize: 15,
    fontFamily: 'Courier New',
  },
};
