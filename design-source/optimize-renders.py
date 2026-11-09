from pathlib import Path
from PIL import Image
root = Path(__file__).resolve().parent.parent
out = root / 'public/studio3d'
source = root / 'design-source'
for name in ['backend-hero', 'backend-detail']:
    path = out / (name + '.png')
    if not path.exists():
        path = source / (name + '-master.png')
    image = Image.open(path)
    image.save(out / (name + '.webp'), quality=88, method=6)
    if path.parent == out:
        path.rename(source / (name + '-master.png'))
Image.open(source / 'backend-hero-master.png').crop((0, 250, 1200, 1250)).save(out / 'backend-hero-wide.webp', quality=88, method=6)
