"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

const DISABLED_WHATSAPP_URL = "#";

export function SiteFloatingActions() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="floating-widget" aria-label="Atalhos rápidos">
      <div className="floating-widget__item">
        <span className="floating-widget__bubble floating-widget__bubble--music">
          Ouça música enquanto navega
        </span>
        <button
          type="button"
          onClick={toggleAudio}
          className="floating-widget__button floating-widget__button--music"
          aria-label={isPlaying ? "Pausar música" : "Ouvir música enquanto navega"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
        </button>
      </div>

      <div className="floating-widget__item">
        <a
          href={DISABLED_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-widget__button floating-widget__button--whatsapp"
          aria-label="Chamar a Gráfica Panni no WhatsApp"
        >
          <WhatsAppIcon width={22} height={22} />
        </a>
      </div>

      <audio
        ref={audioRef}
        src="/audio/audio1.mp3"
        preload="none"
        loop
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
