import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  console.log('**** file', file)
  console.log('**** file.type', file.type)
  const filename = `${Date.now()}-${file.name}`;

  console.log('**** filename', filename)

  console.log('**** Storage', Storage)
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  console.log('**** stored', stored)

  return stored.key;
}
