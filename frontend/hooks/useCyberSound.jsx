import useSound from 'use-sound';

// URLs de sonidos libres (puedes descargarlos y ponerlos en public/sounds si prefieres)
const CLICK_SFX = "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"; // Click mecánico
const HOVER_SFX = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"; // Blip corto

export default function useCyberSound() {
  const [playClick] = useSound(CLICK_SFX, { volume: 0.5 });
  const [playHover] = useSound(HOVER_SFX, { volume: 0.1 });

  return { playClick, playHover };
}