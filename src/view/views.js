import { AsciiGridView } from '../view/ascii/grid.js';
import { SvgGridView } from '../view/svg/grid.js';

export const views = {
  ascii: AsciiGridView,
  svg: SvgGridView
};

/** @typedef {keyof views} ViewType */

/**
 * @param {string} viewType
 * @returns {viewType is ViewType}
 */
export const isViewType = (viewType) => Object.keys(views).includes(viewType);
