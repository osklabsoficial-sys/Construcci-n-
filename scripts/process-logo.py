#!/usr/bin/env python3
"""Procesa el logo oficial GRUPO CONSTRUTECH S.A DE C.V.
Genera: versión recortada (transparente, letras negras originales), variante oscura e icono."""
from PIL import Image
import numpy as np
import os

SRC = '/home/z/my-project/upload/LOGO CONSTRUTECH.jpg'
OUT = '/home/z/my-project/public/assets'
os.makedirs(OUT, exist_ok=True)

src = Image.open(SRC).convert('RGB')
arr = np.array(src).astype(np.int16)
H, W, _ = arr.shape

# ---------- 1. Recorte del contenido (bbox de pixeles no blancos) ----------
lum = arr.mean(axis=2)
nonwhite = lum < 244
rows = np.any(nonwhite, axis=1)
cols = np.any(nonwhite, axis=0)
r0 = int(rows.argmax()); r1 = int(len(rows) - rows[::-1].argmax())
c0 = int(cols.argmax()); c1 = int(len(cols) - cols[::-1].argmax())
print(f'content bbox: rows {r0}-{r1}, cols {c0}-{c1}')
pad = 10
r0p, r1p = max(0, r0 - pad), min(H, r1 + pad)
c0p, c1p = max(0, c0 - pad), min(W, c1 + pad)
crop = arr[r0p:r1p, c0p:c1p]
ch, cw, _ = crop.shape
print(f'cropped size: {cw}x{ch}')

# ---------- 2. Detectar dónde termina el icono (hexágono) ----------
col_occ = (crop.mean(axis=2) < 244).sum(axis=0)
gap_start = None
in_content = False
run = 0
for x in range(cw):
    if col_occ[x] > 0:
        in_content = True
        run = 0
    elif in_content:
        run += 1
        if run >= 18:
            gap_start = x - run + 1
            break
icon_c1 = gap_start if gap_start else cw
print(f'icon region cols: 0-{icon_c1} (gap at {gap_start})')

# ---------- 3. Alpha desde blanco (bordes suaves) ----------
minc = crop.min(axis=2)
dist = 255 - minc
alpha = np.clip((dist - 6) * 8, 0, 255).astype(np.uint8)
rgba = np.dstack([crop.astype(np.uint8), alpha])

# ---------- 4. Variante oscura: negro/gris oscuro -> blanco ----------
dark = rgba.astype(np.int16).copy()
rgb = dark[:, :, :3].astype(np.float32)
mx = rgb.max(axis=2); mn = rgb.min(axis=2)
v = mx
s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0)
dark_mask = (v < 110) & (s < 0.28) & (alpha > 0)
mid_mask = (v >= 110) & (v < 185) & (s < 0.22) & (alpha > 0)
dark_rgb = dark[:, :, :3]
dark_rgb[dark_mask] = [255, 255, 255]
dark_rgb[mid_mask] = [203, 208, 214]
dark_out = np.dstack([dark_rgb.astype(np.uint8), dark[:, :, 3].astype(np.uint8)])

# ---------- 5. Guardar PNGs ----------
Image.fromarray(rgba).save(f'{OUT}/logo-construtech-light.png')
print('saved logo-construtech-light.png', (cw, ch))
Image.fromarray(dark_out).save(f'{OUT}/logo-construtech-dark.png')
print('saved logo-construtech-dark.png', (cw, ch))
Image.fromarray(rgba[:, :icon_c1]).save(f'{OUT}/logo-icon.png')
print('saved logo-icon.png', (icon_c1, ch))
print('DONE')
