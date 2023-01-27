type SanityFile = { asset: { url: string } };
type Songs = {
  _createdAt: DateTime;
  _updatedAt: DateTime;
  _rev: string;
  _key: string;
  title: string;
  artist: string;
  album: string;
  lyrics: string;
  cover: SanityFile;
  audio: SanityFile;
  youtube: string;
};
