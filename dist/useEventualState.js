"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventualState = void 0;
const react_1 = require("react");
const useEventualState = (initialValue) => {
    const state = (0, react_1.useRef)(initialValue);
    const setNextState = (newValue) => {
        state.current = newValue;
    };
    return [state.current, setNextState];
};
exports.useEventualState = useEventualState;
//# sourceMappingURL=useEventualState.js.map