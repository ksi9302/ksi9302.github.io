import { useDeferredValue, useEffect, useState } from "react";
import getS3File from "../../../utils/getS3File";
import ProjectSkeleton from "../../../components/projectSkeleton";
import { useInterval } from "usehooks-ts";

interface props {
  imgs: string[];
  id: number;
  isDetailPage?: boolean;
}

export default function ProjectImages({ id, imgs, isDetailPage }: props) {
  const [loading, setLoading] = useState(Array(imgs.length).fill(true));

  const handleImgLoad = (index: number) => {
    const newLoading = [...loading];
    newLoading[index] = false;
    setLoading(newLoading);
  };

  const loaded = loading.every(l => !l);

  const [currentIndex, setCurrentIndex] = useState(0);

  useInterval(() => {
    const newIndex = currentIndex === imgs.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, 5000);

  return (
    <>
      {!loaded && <ProjectSkeleton />}
      <div className={`${loaded ? "transition-all" : "hidden"}`}>
        <img
          src="/skeletonBG.png"
          alt="skeleton"
          className={`w-[1920px] opacity-0`}
        />
        {imgs.map((img, i) => (
          <ProjectImage
            key={i}
            img={img}
            id={id}
            index={i}
            handleImgLoad={handleImgLoad}
            currentIndex={currentIndex}
            isDetailPage={isDetailPage}
          />
        ))}
      </div>
    </>
  );
}

interface imgProps {
  index: number;
  currentIndex: number;
  img: string;
  id: number;
  handleImgLoad: (index: number) => void;
  isDetailPage?: boolean;
}

const ProjectImage = ({
  img,
  id,
  index,
  currentIndex,
  handleImgLoad,
  isDetailPage,
}: imgProps) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    getS3File(`projects/${id}/${img}`).then(res => {
      if (res) {
        setSrc(res);
      }
    });
  }, []);

  const isCurrent = index === currentIndex;
  const debouncedCurrent = useDeferredValue(isCurrent);

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <img
      src={src}
      onLoad={() => handleImgLoad(index)}
      alt={img}
      onClick={() => {
        openInNewTab(src);
      }}
      className={`brightness-100 group-hover:brightness-[0.25] transition-all rounded-sm w-[1920px] absolute left-0 top-0 ${
        isDetailPage ? "cursor-pointer" : "pointer-events-none"
      } duration-1000 ${!debouncedCurrent ? "opacity-0 -z-10" : "opacity-100"}`}
    />
  );
};
