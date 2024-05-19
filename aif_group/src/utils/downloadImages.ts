import JSZip from 'jszip';
import saveAs from 'file-saver';
import { ImageInfo } from '@/types/designSelectBoxType';
import { useAppSelector } from '@/hooks/reduxHooks';

const downloadImage = async (files: ImageInfo[]) => {
  const zip = new JSZip();
  const remoteZips = files.map(async file => {
    const fetchedFile = await fetch(file.img_url)
      .then((res: Response) => {
        if (res.status === 200) return res.blob();
      })
      .catch((err: any) => console.log(err));
    if (fetchedFile) {
      zip.file(`${file.img_name}.png`, fetchedFile, {
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
