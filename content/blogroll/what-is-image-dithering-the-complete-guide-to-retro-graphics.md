## via [What is Image Dithering? The Complete Guide to Retro Graphics | Turbo Dither](https://www.turbodither.com/learn/what-is-image-dithering)

In the age of 4K HDR screens that can display over a billion colors, we take smooth gradients for granted. But look closely at a newspaper photo, an old Game Boy screen, or a vintage Macintosh interface, and you'll see something fascinating: the world isn't made of solid colors. It's made of dots.

This technique is called \*\*dithering\*\*. It is the art of creating new colors by mixing dots of existing ones. It is a brilliant optical illusion that allowed early computers to punch way above their weight class. Today, it has returned as a defining aesthetic of the indie game and retro-web movement.

## The Problem: Limited Palettes

Imagine you are a computer engineer in 1984. Your display memory is expensive. You can only afford to store 1 bit per pixel. That means every pixel on the screen can only be one of two things: ON (White) or OFF (Black).

Now, your boss asks you to display a photograph of a sunset. A sunset has thousands of shades of gray, from deep shadows to bright highlights. How do you display a gray sky when you only have black and white?

## The Solution: Error Diffusion

If you paint 50% of the pixels black and 50% white in a checkerboard pattern, and then squint your eyes, your brain blends them into a 50% gray. This is the core concept of dithering.

By varying the density of black dots, we can simulate any shade of gray. The eye does the mixing.

But random dots look like static noise. To make images look good, we need math. This is where \*\*Quantization Error\*\* comes in. When you convert a gray pixel (say, value 120) to black (0) or white (255), you make a 'mistake'. If you map 120 to 0 (black), the error is +120. You essentially 'owe' the image 120 brightness.

Dithering algorithms take this 'debt' (the error) and push it to the neighboring pixels that haven't been processed yet. The next pixel gets brighter to compensate. This ripple effect preserves the overall brightness of the image, even if individual pixels are wrong.

## Why Do We Still Use It?

- **Aesthetic:** The gritty, textured look is iconic. It feels 'digital' and 'raw' in a way that smooth anti-aliasing doesn't.
- **Bandwidth:** Dithered PNGs can be significantly smaller than JPEGs because they compress extremely well. This is crucial for the 'Low-Tech Web' movement.
- **Hardware Constraints:** E-ink displays (Kindles), thermal receipt printers, and laser engravers are all 1-bit devices. They physically cannot print gray. They \*must\* dither.
- **Transparency:** In web design, 1-bit alpha masks are cheaper to render than full 8-bit alpha channels.
![Left: Comparison of a smooth gradient versus a dithered gradient](https://www.turbodither.com/preview/original.webp)

Left: Original image. Right: Dithered with Commodore 64 palette.

## Types of Dithering

Not all dithering is created equal. There are two main families you should know about:

- **Ordered Dithering (Bayer):** Uses a fixed, repeating grid pattern (like a cross-hatch). It's very fast and creates a structured, 'retro' look common in old PC games and Game Boy titles.
- **Error Diffusion (Floyd-Steinberg, Atkinson):** Calculates pixel-by-pixel. It creates organic, chaotic patterns that look much more like natural film grain. It's slower but produces higher detail.