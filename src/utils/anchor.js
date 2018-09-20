/**
 * Sets URL with hash to given element and scrolls to it.
 *
 * @param {string} anchor - id of the element to link
 */
export function linkTo(anchor) {
  if (anchor && document.querySelector(anchor)) {
    if (history.pushState) {
      history.pushState(null, null, anchor);
      scrollTo(anchor);
    } else {
      location.hash = anchor;
    }
  }
}

/**
 * Scrolls to a given element id.
 *
 * @param {string} anchor - id of the element to scroll to
 * @param {string} [behavior='smooth'] - scroll behavior, either smooth, auto or instant.
 */
export function scrollTo(anchor, behavior = 'smooth') {
  if (anchor && document.querySelector(anchor)) {
    document.querySelector(anchor).scrollIntoView({
      block: 'start',
      behavior
    });
  }
}
