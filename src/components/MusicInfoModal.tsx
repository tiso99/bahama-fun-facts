import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
interface MusicInfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartMusic: () => void;
  onMuteMusic: () => void;
}
const MusicInfoModal = ({
  open,
  onOpenChange,
  onStartMusic,
  onMuteMusic
}: MusicInfoModalProps) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const handleStartMusic = () => {
    onStartMusic();
    setHasInteracted(true);
    onOpenChange(false);
  };
  const handleMuteMusic = () => {
    onMuteMusic();
    setHasInteracted(true);
    onOpenChange(false);
  };

  // Close automatically after 10 seconds if no interaction
  useEffect(() => {
    if (open && !hasInteracted) {
      const timer = setTimeout(() => {
        onMuteMusic();
        onOpenChange(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [open, hasInteracted, onOpenChange, onMuteMusic]);
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-0 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-bahamas-blue">Welcome to the Bahamas!</DialogTitle>
          <DialogDescription className="text-lg text-slate-200">
            This site features traditional Bahamian music to enhance your experience.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-slate-600">
            Would you like to enjoy the sounds of the Bahamas while exploring the site? 
            You can control or mute the music at any time using the player in the bottom right corner.
          </p>
        </div>
        
        <DialogFooter className="flex sm:justify-center gap-3 flex-row">
          <Button className="bg-bahamas-blue hover:bg-bahamas-blue/80 text-white" onClick={handleStartMusic}>
            <Volume2 className="w-4 h-4 mr-2" />
            Play Music
          </Button>
          
          <Button variant="outline" className="border-bahamas-blue text-bahamas-blue hover:bg-bahamas-blue/10" onClick={handleMuteMusic}>
            <VolumeX className="w-4 h-4 mr-2" />
            No Thanks
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>;
};
export default MusicInfoModal;