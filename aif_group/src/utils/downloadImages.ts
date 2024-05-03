import JSZip from 'jszip';
import saveAs from 'file-saver';

const downloadImage = async (files: { imageUrl: string; imageName: string }[]) => {
  const zip = new JSZip();
  const remoteZips = files.map(async (file: { imageUrl: string; imageName: string }) => {
    const fetchedFile = await fetch(file.imageUrl)
      .then((res: Response) => {
        if (res.status === 200) return res.blob();
      })
      .catch((err: any) => console.log(err));
    if (fetchedFile) {
      zip.file(`${file.imageName}.png`, fetchedFile, {
        binary: true,
      });
    }
  });
  Promise.all(remoteZips).then(() => {
    zip.generateAsync({ type: 'blob' }).then(blob => {
      saveAs(blob, `ai생성이미지.zip`);
    });
  });
};

export default downloadImage;
