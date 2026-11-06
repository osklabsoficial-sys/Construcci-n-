import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function gen(prompt: string, size: string, out: string) {
  try {
    const zai = await ZAI.create();
    const response = await zai.images.generations.create({ prompt, size });
    const b64 = response.data[0].base64;
    fs.writeFileSync(out, Buffer.from(b64, 'base64'));
    console.log(`OK -> ${out}`);
  } catch (e: unknown) {
    console.error(`FAIL ${out}:`, e instanceof Error ? e.message : e);
    process.exitCode = 1;
  }
}

async function main() {
  const dir = '/home/z/my-project/public/img';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  await gen(
    'Cinematic wide photograph of a large construction site at dusk in Mexico City, tower crane silhouette against dark moody charcoal sky, high-rise building under construction with scaffolding, warm amber work lights glowing, dramatic professional photography, dark tones, high quality, detailed',
    '1440x704',
    `${dir}/hero-bg.png`
  );
}

main();
