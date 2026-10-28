/**
 * Smoothly scrolls to a target section by ID, compensating for the fixed navbar height.
 * @param {string} sectionId - The ID of the target element (without '#')
 * @param {Function} [onComplete] - Optional callback after scroll initiates
 */
export function scrollToSection(sectionId, onComplete) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const navbarHeight = 84;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });

  if (onComplete) {
    onComplete();
  }
}
