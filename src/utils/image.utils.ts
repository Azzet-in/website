export const getBase64Svg = (utf8?: string) =>
  `data:image/svg+xml;base64,${Buffer.from(utf8 ?? '').toString('base64')}`;
