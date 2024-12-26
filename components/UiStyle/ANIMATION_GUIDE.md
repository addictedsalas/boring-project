# Animation Components Guide

This guide explains the modern animation components available in the project and how to use them as replacements for older animation libraries.

## Available Components

### 1. FadeIn
Replaces react-animated-css fade animations
```jsx
import { FadeIn } from './AnimatedComponents';

// Usage
<FadeIn duration={0.5} delay={0}>
  <YourContent />
</FadeIn>
```

### 2. SlideIn
Replaces react-animated-css slide animations
```jsx
import { SlideIn } from './AnimatedComponents';

// Usage
<SlideIn direction="left" duration={0.5} delay={0}>
  <YourContent />
</SlideIn>
```

### 3. StickyHeader
Replaces react-sticky-header with CSS-based solution
```jsx
import { StickyHeader } from './AnimatedComponents';

// Usage
<StickyHeader offset={0}>
  <YourHeader />
</StickyHeader>
```

### 4. ScaleIn
Additional animation for scaling effects
```jsx
import { ScaleIn } from './AnimatedComponents';

// Usage
<ScaleIn duration={0.5} delay={0}>
  <YourContent />
</ScaleIn>
```

## Benefits of New Components

1. Better Performance: Uses modern framer-motion library
2. Smaller Bundle Size: Removes multiple dependencies
3. Better TypeScript Support
4. More Animation Options
5. Better Browser Support

## Migration Notes

- The new components are drop-in replacements for most use cases
- All animations are configurable through props
- CSS-based sticky header provides better performance than react-sticky-header
- Swiper (already in the project) can be used instead of react-owl-carousel

## Example Migration

```jsx
// Old code with react-animated-css
<Animated animationIn="fadeIn" animationOut="fadeOut">
  <div>Content</div>
</Animated>

// New code with FadeIn
<FadeIn>
  <div>Content</div>
</FadeIn>
```
