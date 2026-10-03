// Web Audio API engine sound synthesis for realistic interactive customer engagement
export const playEngineSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();

    // 1. Starter crank sound
    const now = ctx.currentTime;

    // Sub-bass exhaust rumble oscillator
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Configure filter for low-end automotive rumble
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, now);
    filter.frequency.exponentialRampToValueAtTime(380, now + 0.5);
    filter.frequency.exponentialRampToValueAtTime(140, now + 1.8);

    // Oscillator 1 (V6 / 2.0T turbo fundamental)
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(45, now);
    osc1.frequency.exponentialRampToValueAtTime(120, now + 0.4);
    osc1.frequency.exponentialRampToValueAtTime(55, now + 1.2);
    osc1.frequency.setValueAtTime(52, now + 2.0);

    // Oscillator 2 (Harmonic growl)
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(90, now);
    osc2.frequency.exponentialRampToValueAtTime(240, now + 0.4);
    osc2.frequency.exponentialRampToValueAtTime(110, now + 1.2);

    // Gain envelope
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.28, now + 0.1);
    gainNode.gain.linearRampToValueAtTime(0.35, now + 0.45);
    gainNode.gain.exponentialRampToValueAtTime(0.12, now + 1.5);
    gainNode.gain.linearRampToValueAtTime(0, now + 2.2);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.2);
    osc2.stop(now + 2.2);

    // 2. High-end Luxury Cabin Startup Chime
    const chimeOsc = ctx.createOscillator();
    const chimeGain = ctx.createGain();

    chimeOsc.type = 'sine';
    chimeOsc.frequency.setValueAtTime(587.33, now + 0.5); // D5
    chimeOsc.frequency.setValueAtTime(880.0, now + 0.85); // A5

    chimeGain.gain.setValueAtTime(0, now + 0.5);
    chimeGain.gain.linearRampToValueAtTime(0.15, now + 0.55);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

    chimeOsc.connect(chimeGain);
    chimeGain.connect(ctx.destination);

    chimeOsc.start(now + 0.5);
    chimeOsc.stop(now + 2.0);
  } catch (err) {
    console.warn('Audio synthesis not allowed or supported', err);
  }
};
