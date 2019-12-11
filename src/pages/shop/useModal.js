import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  // Toggles modal on/off
  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;