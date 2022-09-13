export function MiddleEllipsis(text = '', maxWidth = 30) {
  if (text.length <= maxWidth) {
    return text;
  }

  const ellipsis = '...';
  const halfMaxWidth = Math.floor(maxWidth / 2);
  const left = text.substr(0, halfMaxWidth);
  const right = text.substr(text.length - halfMaxWidth, text.length);

  return `${left}${ellipsis}${right}`;
}