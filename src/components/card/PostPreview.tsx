import React, { ReactElement, useEffect, useState } from "react";
import { BlogListType } from "../../types/blogTypes";
import { DeviceTypes, ThemeType } from "../../types/globalTypes";
import PostPreviewContent from "./PostPreviewContent";
import PostPreviewImage from "./PostPreviewImage";

export interface CardProps {
  theme: ThemeType;
  data: BlogListType;
}
function PostPreview({
  data,
  data: {
    images: {
      hero: { uri, alt },
    },
  },
  theme,
}: CardProps): ReactElement {
  const [deviceType, setDeviceType] = useState<DeviceTypes>("ipad");
  useEffect(() => {
    const targetWidth = window.innerWidth;
    if (targetWidth < 1024) {
      setDeviceType("mobile");
    } else if (targetWidth >= 1024 && targetWidth <= 1200) {
      setDeviceType("ipad");
    } else {
      setDeviceType("regular");
    }
  }, []);
  function resolveLayouts() {
    let str = "flex relative mb-6";
    if (deviceType === "mobile" || deviceType === "ipad") {
      str += " w-full mt-8";
      str += deviceType === "mobile" ? " flex-col" : "";
    } else if (1) {
      str += " w-full";
    } else {
      str += " w-card-lg-vert flex-col";
    }

    return str;
  }
  return (
    <>
      <div className={resolveLayouts()}>
        {deviceType === "regular" ? (
          <>
            <PostPreviewImage type="horiz" uri={uri} alt={alt} />
            <PostPreviewContent content={data} type="horiz" theme={theme} />
          </>
        ) : deviceType === "mobile" ? (
          <>
            <PostPreviewImage type="vert" uri={uri} alt={alt} />
            <PostPreviewContent content={data} type="vert" theme={theme} />
          </>
        ) : (
          <>
            <PostPreviewImage type="horiz" uri={uri} alt={alt} />
            <PostPreviewContent content={data} type="horiz" theme={theme} />
          </>
        )}
      </div>
    </>
  );
}

export default PostPreview;