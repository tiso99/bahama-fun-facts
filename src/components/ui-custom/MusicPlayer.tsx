
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Shuffle, Play, Pause } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const musicTracks = [
  {
    name: 'Junkanoo Beat',
    url: 'https://cdn.lovable.dev/assets/bahamas/junkanoo.mp3', 
  },
  {
    name: 'Calypso Vibes',
    url: 'https://cdn.lovable.dev/assets/bahamas/calypso.mp3',
  },
  {
    name: 'Island Reggae',
    url: 'https://cdn.lovable.dev/assets/bahamas/reggae.mp3',
  }
];

interface MusicPlayerProps {
  hideInitialInfo: () => void;
}

const MusicPlayer = ({ hideInitialInfo }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [trackName, setTrackName] = useState(musicTracks[0].name);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [showMusicControls, setShowMusicControls] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(musicTracks[currentTrackIndex].url);
      audioRef.current.volume = volume;
      audioRef.current.loop = false;
    }

    audioRef.current.onended = () => {
      shuffleTrack();
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.onended = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [isMuted, volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    hideInitialInfo();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    hideInitialInfo();
  };

  const shuffleTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * musicTracks.length);
      } while (newIndex === currentTrackIndex && musicTracks.length > 1);
      
      setCurrentTrackIndex(newIndex);
      setTrackName(musicTracks[newIndex].name);
      
      audioRef.current.src = musicTracks[newIndex].url;
      audioRef.current.load();
      
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error playing shuffled track:", e));
      }
    }
    
    hideInitialInfo();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setShowMusicControls(true);
      } else if (Math.abs(currentScrollY - lastScrollY) > 50) {
        setShowMusicControls(true);
        setTimeout(() => {
          setShowMusicControls(false);
        }, 3000);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 glass-card p-3 transition-all duration-300 ${
        showMusicControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      onMouseEnter={() => setShowMusicControls(true)}
    >
      <div className="flex items-center space-x-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={togglePlay}
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isPlaying ? 'Pause' : 'Play'}</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={shuffleTrack}
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              <Shuffle size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Shuffle</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMute}
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isMuted ? 'Unmute' : 'Mute'}</p>
          </TooltipContent>
        </Tooltip>
        
        <span className="text-xs text-white whitespace-nowrap hidden sm:inline-block">
          Playing: {trackName}
        </span>
      </div>
    </div>
  );
};

export default MusicPlayer;
