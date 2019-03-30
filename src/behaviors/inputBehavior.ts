const { ResponsiveGamepad } = require('responsive-gamepad');

export function inputBehavior(handleInput: (state: InputState) => any) {
  const stopListeningToChanges = ResponsiveGamepad.onInputsChange(
    Object.keys(ResponsiveGamepad.RESPONSIVE_GAMEPAD_INPUTS),
    handleInput
  );
  ResponsiveGamepad.enable();
  return () => {
    stopListeningToChanges();
    ResponsiveGamepad.disable();
  };
}

export type InputState = {
  DPAD_UP: boolean;
  DPAD_RIGHT: boolean;
  DPAD_DOWN: boolean;
  DPAD_LEFT: boolean;
  LEFT_ANALOG_HORIZONTAL_AXIS: number;
  LEFT_ANALOG_VERTICAL_AXIS: number;
  LEFT_ANALOG_UP: boolean;
  LEFT_ANALOG_RIGHT: boolean;
  LEFT_ANALOG_DOWN: boolean;
  LEFT_ANALOG_LEFT: boolean;
  LEFT_ANALOG_PRESS: boolean;
  RIGHT_ANALOG_HORIZONTAL_AXIS: number;
  RIGHT_ANALOG_VERTICAL_AXIS: number;
  RIGHT_ANALOG_UP: boolean;
  RIGHT_ANALOG_RIGHT: boolean;
  RIGHT_ANALOG_DOWN: boolean;
  RIGHT_ANALOG_LEFT: boolean;
  RIGHT_ANALOG_PRESS: boolean;
  A: boolean;
  B: boolean;
  X: boolean;
  Y: boolean;
  LEFT_TRIGGER: boolean;
  LEFT_BUMPER: boolean;
  RIGHT_TRIGGER: boolean;
  RIGHT_BUMPER: boolean;
  SELECT: boolean;
  START: boolean;
  SPECIAL: boolean;
};
