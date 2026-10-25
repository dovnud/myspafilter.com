#!/usr/bin/env python3
"""Generate the 1200x630 Open Graph images in public/og/ (run manually: python3 scripts/gen-og.py).
Needs Pillow + fonttools(+brotli). Palette: ink-lagoon #0b3c40, limestone #f5f2eb, sand #e8d6b5. Fonts: Young Serif + Public Sans (both OFL, from the repo)."""
import os, tempfile, math
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
tmp = tempfile.mkdtemp()
def ttf(src, name):
    f = TTFont(os.path.join(root, src)); f.flavor = None; p = os.path.join(tmp, name); f.save(p); return p
YS = ttf('public/fonts/young-serif-latin.woff2', 'ys.ttf'); PS = ttf('public/fonts/public-sans-latin-var.woff2', 'ps.ttf')
INK, LIME, SAND, MIN, CEL = (11,60,64), (245,242,235), (232,214,181), (143,185,176), (214,231,224)
W, H, S = 1200, 630, 2  # draw at 2x then downsample for smooth edges
def font(path, size, wght=None):
    f = ImageFont.truetype(path, size*S)
    if wght: f.set_variation_by_axes([wght])
    return f
def wrap(d, text, f, maxw):
    lines, cur = [], ''
    for w in text.split():
        t = (cur+' '+w).strip()
        if d.textlength(t, font=f) <= maxw*S: cur = t
        else: lines.append(cur); cur = w
    return lines+[cur]
def make(name, eyebrow, title, sub):
    im = Image.new('RGB', (W*S, H*S), INK); d = ImageDraw.Draw(im)
    # concentric "ripples" from the top-right corner, like the site hero
    for i, r in enumerate([120,200,290,390,500,620,750]):
        rx, ry = r*1.25*S, r*.8*S; cx, cy = 1100*S, 60*S
        d.ellipse([cx-rx, cy-ry, cx+rx, cy+ry], outline=(22,84,88) if i%2 else (18,74,78), width=3*S)
    d.rectangle([0, (H-14)*S, W*S, H*S], fill=SAND)  # sand base rule
    # drop mark
    ox, oy, sc = 72*S, 66*S, 3.1*S
    def P(x,y): return (ox+(x-6)*sc, oy+(y-2.5)*sc)
    d.polygon([P(12,2.5)]+[P(12+6*math.cos(math.radians(a)), 14+6*math.sin(math.radians(a))) for a in range(-10, 191)], fill=SAND)
    d.text((72*S+38*S+34*S, 66*S), 'MySpaFilter', font=font(YS, 40), fill=(255,255,255))
    d.text((72*S+38*S+34*S+d.textlength('MySpaFilter', font=font(YS, 40))+4*S, 66*S), '.com', font=font(YS, 40), fill=SAND)
    d.text((72*S, 172*S), eyebrow.upper(), font=font(PS, 24, 700), fill=SAND, spacing=0)
    ft = font(YS, 68); lines = wrap(d, title, ft, 980)
    y = 220
    for ln in lines:
        d.text((72*S, y*S), ln, font=ft, fill=(255,255,255)); y += 80
    fs = font(PS, 30, 400)
    y += 14
    for ln in wrap(d, sub, fs, 900):
        d.text((72*S, y*S), ln, font=fs, fill=CEL); y += 42
    im = im.resize((W, H), Image.LANCZOS).quantize(colors=48, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    out = os.path.join(root, 'public/og', name); im.save(out, optimize=True); print(name, os.path.getsize(out))
make('default.png', 'Spa & hot tub filter cross-reference', 'Read the end cap. We\u2019ll find the cartridge.', 'OEM, Unicel, Pleatco and Filbur part numbers matched, with size, fittings and cited sources.')
make('guides.png', 'Guides', 'Hot tub filter and water-care guides', 'Cited answers from manufacturer and public-health sources, reviewed by the MySpaFilter Editorial Team.')
make('brands.png', 'Spa brands', 'Find the filter for your hot tub brand', 'Cartridge part numbers, sizes and equivalents by spa maker, each linked to its catalog source.')
make('data.png', 'Open data', 'Spa filter cartridge dataset', 'Every cartridge with OEM, Unicel, Pleatco and Filbur numbers, size, fittings and sources. Download CSV or JSON.')
make('supplies.png', 'Supplies', 'Hot tub supplies, chosen with care', 'Test strips, sanitizer, cleaners and covers: what to know before you buy.')

# 512x512 logo for Organization JSON-LD (same drop mark as the favicon)
def logo():
    s = 4; N = 512
    im = Image.new('RGB', (N*s, N*s), LIME); d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, N*s-1, N*s-1], radius=108*s, fill=INK)
    k = N*s/24
    P = lambda x, y: (x*k, y*k)
    d.polygon([P(12,2.8)]+[P(12+6.4*math.cos(math.radians(a)), 14.2+6.4*math.sin(math.radians(a))) for a in range(-10, 191)], fill=SAND)
    im = im.resize((N, N), Image.LANCZOS).quantize(colors=16, dither=Image.Dither.NONE)
    out = os.path.join(root, 'public/logo.png'); im.save(out, optimize=True); print('logo.png', os.path.getsize(out))
logo()
