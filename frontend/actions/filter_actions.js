export const FILTER_CONSTANTS = {
  UPDATE_BOUNDS: updateBounds
};

export function updateBounds(bounds) {
    return {
      type: FILTER_CONSTANTS.UPDATE_BOUNDS,
      bounds: bounds
    };
}
