import React, { ReactElement } from "react";

interface Props {
  color: string;
}

export function Author({ color }: Props): ReactElement {
  return (
    <svg
      className="mx-3"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12ZM6 12.76V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H11.24C11.3716 18.0008 11.5021 17.9755 11.6239 17.9258C11.7457 17.876 11.8566 17.8027 11.95 17.71L18.87 10.78L21.71 8C21.8037 7.90704 21.8781 7.79644 21.9289 7.67458C21.9797 7.55272 22.0058 7.42201 22.0058 7.29C22.0058 7.15799 21.9797 7.02728 21.9289 6.90542C21.8781 6.78356 21.8037 6.67296 21.71 6.58L17.47 2.29C17.377 2.19627 17.2664 2.12188 17.1446 2.07111C17.0227 2.02034 16.892 1.9942 16.76 1.9942C16.628 1.9942 16.4973 2.02034 16.3754 2.07111C16.2536 2.12188 16.143 2.19627 16.05 2.29L13.23 5.12L6.29 12.05C6.19732 12.1434 6.12399 12.2543 6.07423 12.3761C6.02446 12.4979 5.99924 12.6284 6 12.76ZM16.76 4.41L19.59 7.24L18.17 8.66L15.34 5.83L16.76 4.41ZM8 13.17L13.93 7.24L16.76 10.07L10.83 16H8V13.17Z"
        fill={color}
      />
    </svg>
  );
}

export function Settings({ color }: Props): ReactElement {
  return (
    <svg
      className="mx-3"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.32 9.55L19.43 8.92L20.32 7.14C20.4102 6.95369 20.4404 6.74397 20.4064 6.53978C20.3723 6.33558 20.2758 6.14699 20.13 6L18 3.87C17.8522 3.72209 17.6618 3.62421 17.4555 3.59013C17.2493 3.55605 17.0375 3.58748 16.85 3.68L15.07 4.57L14.44 2.68C14.3735 2.483 14.2472 2.31163 14.0787 2.18975C13.9102 2.06787 13.7079 2.00155 13.5 2H10.5C10.2904 1.99946 10.0858 2.06482 9.91537 2.18685C9.7449 2.30887 9.61709 2.48138 9.55 2.68L8.92 4.57L7.14 3.68C6.95369 3.58978 6.74397 3.55961 6.53978 3.59364C6.33558 3.62767 6.14699 3.72423 6 3.87L3.87 6C3.72209 6.14777 3.62421 6.33818 3.59013 6.54446C3.55605 6.75074 3.58748 6.96251 3.68 7.15L4.57 8.93L2.68 9.56C2.483 9.62654 2.31163 9.75283 2.18975 9.92131C2.06787 10.0898 2.00155 10.2921 2 10.5V13.5C1.99946 13.7096 2.06482 13.9142 2.18685 14.0846C2.30887 14.2551 2.48138 14.3829 2.68 14.45L4.57 15.08L3.68 16.86C3.58978 17.0463 3.55961 17.256 3.59364 17.4602C3.62767 17.6644 3.72423 17.853 3.87 18L6 20.13C6.14777 20.2779 6.33818 20.3758 6.54446 20.4099C6.75074 20.444 6.96251 20.4125 7.15 20.32L8.93 19.43L9.56 21.32C9.62709 21.5186 9.7549 21.6911 9.92537 21.8132C10.0958 21.9352 10.3004 22.0005 10.51 22H13.51C13.7196 22.0005 13.9242 21.9352 14.0946 21.8132C14.2651 21.6911 14.3929 21.5186 14.46 21.32L15.09 19.43L16.87 20.32C17.0551 20.4079 17.2628 20.4369 17.4649 20.4029C17.667 20.3689 17.8538 20.2737 18 20.13L20.13 18C20.2779 17.8522 20.3758 17.6618 20.4099 17.4555C20.444 17.2493 20.4125 17.0375 20.32 16.85L19.43 15.07L21.32 14.44C21.517 14.3735 21.6884 14.2472 21.8103 14.0787C21.9321 13.9102 21.9985 13.7079 22 13.5V10.5C22.0005 10.2904 21.9352 10.0858 21.8132 9.91537C21.6911 9.7449 21.5186 9.61709 21.32 9.55ZM20 12.78L18.8 13.18C18.5241 13.2695 18.2709 13.418 18.0581 13.6151C17.8452 13.8122 17.6778 14.0533 17.5675 14.3216C17.4571 14.5899 17.4064 14.879 17.419 15.1688C17.4315 15.4586 17.5069 15.7422 17.64 16L18.21 17.14L17.11 18.24L16 17.64C15.7436 17.5122 15.4627 17.4411 15.1763 17.4313C14.89 17.4215 14.6049 17.4734 14.3403 17.5834C14.0758 17.6934 13.8379 17.8589 13.6429 18.0688C13.4479 18.2787 13.3003 18.5281 13.21 18.8L12.81 20H11.22L10.82 18.8C10.7305 18.5241 10.582 18.2709 10.3849 18.0581C10.1878 17.8452 9.94671 17.6778 9.67842 17.5675C9.41014 17.4571 9.12105 17.4064 8.83123 17.419C8.5414 17.4315 8.25777 17.5069 8 17.64L6.86 18.21L5.76 17.11L6.36 16C6.4931 15.7422 6.56852 15.4586 6.58105 15.1688C6.59358 14.879 6.5429 14.5899 6.43254 14.3216C6.32218 14.0533 6.15478 13.8122 5.94195 13.6151C5.72912 13.418 5.47595 13.2695 5.2 13.18L4 12.78V11.22L5.2 10.82C5.47595 10.7305 5.72912 10.582 5.94195 10.3849C6.15478 10.1878 6.32218 9.94671 6.43254 9.67842C6.5429 9.41014 6.59358 9.12105 6.58105 8.83123C6.56852 8.5414 6.4931 8.25777 6.36 8L5.79 6.89L6.89 5.79L8 6.36C8.25777 6.4931 8.5414 6.56852 8.83123 6.58105C9.12105 6.59358 9.41014 6.5429 9.67842 6.43254C9.94671 6.32218 10.1878 6.15478 10.3849 5.94195C10.582 5.72912 10.7305 5.47595 10.82 5.2L11.22 4H12.78L13.18 5.2C13.2695 5.47595 13.418 5.72912 13.6151 5.94195C13.8122 6.15478 14.0533 6.32218 14.3216 6.43254C14.5899 6.5429 14.879 6.59358 15.1688 6.58105C15.4586 6.56852 15.7422 6.4931 16 6.36L17.14 5.79L18.24 6.89L17.64 8C17.5122 8.25645 17.4411 8.53735 17.4313 8.82369C17.4215 9.11003 17.4734 9.39513 17.5834 9.65969C17.6934 9.92424 17.8589 10.1621 18.0688 10.3571C18.2787 10.5521 18.5281 10.6997 18.8 10.79L20 11.19V12.78ZM12 8C11.2089 8 10.4355 8.2346 9.77772 8.67413C9.11993 9.11365 8.60724 9.73836 8.30448 10.4693C8.00173 11.2002 7.92252 12.0044 8.07686 12.7804C8.2312 13.5563 8.61217 14.269 9.17158 14.8284C9.73099 15.3878 10.4437 15.7688 11.2196 15.9231C11.9956 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8864 14.8801 15.3259 14.2223C15.7654 13.5645 16 12.7911 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17158C14.0783 8.42143 13.0609 8 12 8ZM12 14C11.6044 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3036 13.1308 10.1522 12.7654C10.0009 12.3999 9.96126 11.9978 10.0384 11.6098C10.1156 11.2219 10.3061 10.8655 10.5858 10.5858C10.8655 10.3061 11.2219 10.1156 11.6098 10.0384C11.9978 9.96126 12.3999 10.0009 12.7654 10.1522C13.1308 10.3036 13.4432 10.56 13.6629 10.8889C13.8827 11.2178 14 11.6044 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14Z"
        fill={color}
      />
    </svg>
  );
}

export function Blogs({ color }: Props): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-3"
    >
      <path
        d="M9.71008 10.4601H11.9489C12.1533 10.4601 12.3494 10.3789 12.494 10.2343C12.6385 10.0897 12.7197 9.89368 12.7197 9.68924C12.7197 9.4848 12.6385 9.28873 12.494 9.14417C12.3494 8.99961 12.1533 8.9184 11.9489 8.9184H9.71008C9.50564 8.9184 9.30957 8.99961 9.16501 9.14417C9.02045 9.28873 8.93924 9.4848 8.93924 9.68924C8.93924 9.89368 9.02045 10.0897 9.16501 10.2343C9.30957 10.3789 9.50564 10.4601 9.71008 10.4601ZM19.4283 2.00171H4.555C3.87593 2.0042 3.22538 2.27507 2.74521 2.75526C2.26504 3.23544 1.99418 3.88599 1.9917 4.56506V19.4383C1.99417 20.1174 2.26501 20.7679 2.74519 21.2481C3.22536 21.7283 3.87592 21.9992 4.555 22.0017H19.4282C20.1073 21.9993 20.7579 21.7285 21.2381 21.2483C21.7183 20.7681 21.9892 20.1175 21.9917 19.4384V4.56506C21.9892 3.88597 21.7184 3.2354 21.2382 2.75521C20.758 2.27502 20.1074 2.00416 19.4283 2.00171ZM18.3558 11.6795L18.3361 14.3549C18.3283 15.4221 17.8998 16.443 17.1436 17.196C16.3874 17.9491 15.3647 18.3733 14.2975 18.3767H9.65855C8.59011 18.3748 7.56574 17.9506 6.80866 17.1967C6.05158 16.4428 5.62315 15.4202 5.61674 14.3518V9.65747C5.62249 8.58831 6.05052 7.56475 6.80756 6.80976C7.56461 6.05478 8.58934 5.62955 9.65851 5.62671H12.4822C13.1327 5.73953 13.7501 5.99538 14.2897 6.37578C14.8293 6.75618 15.2777 7.25165 15.6025 7.82642C15.8251 8.24906 15.9488 8.7167 15.9644 9.19409C16.0317 9.69965 16.0672 10.0753 16.2944 10.2835C16.6138 10.573 17.8017 10.378 18.0366 10.5619L18.2155 10.7018L18.3243 10.9235L18.3603 11.101L18.3558 11.6795ZM14.2588 13.5434H9.71008C9.60966 13.5403 9.50965 13.5575 9.41597 13.5938C9.3223 13.6301 9.23687 13.6848 9.16475 13.7548C9.09263 13.8247 9.0353 13.9084 8.99614 14.001C8.95699 14.0935 8.93681 14.1929 8.93681 14.2934C8.93681 14.3939 8.95699 14.4933 8.99614 14.5858C9.0353 14.6784 9.09263 14.7621 9.16475 14.832C9.23687 14.902 9.3223 14.9567 9.41597 14.993C9.50965 15.0293 9.60966 15.0465 9.71008 15.0434H14.2588C14.3589 15.0459 14.4585 15.0284 14.5517 14.9919C14.6449 14.9553 14.7298 14.9005 14.8015 14.8306C14.8732 14.7607 14.9302 14.6771 14.9691 14.5849C15.008 14.4926 15.028 14.3935 15.028 14.2934C15.028 14.1933 15.008 14.0942 14.9691 14.0019C14.9302 13.9097 14.8732 13.8261 14.8015 13.7562C14.7298 13.6863 14.6449 13.6315 14.5517 13.5949C14.4585 13.5584 14.3589 13.5409 14.2588 13.5434H14.2588Z"
        fill={color}
      />
    </svg>
  );
}

export function Bars({ color }: Props): ReactElement {
  return (
    <svg
      className="mx-3"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2C9.4 2 9 2.4 9 3V21C9 21.6 9.4 22 10 22C10.6 22 11 21.6 11 21V3C11 2.4 10.6 2 10 2ZM5 12C4.4 12 4 12.4 4 13V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V13C6 12.4 5.6 12 5 12ZM15 8C14.4 8 14 8.4 14 9V21C14 21.6 14.4 22 15 22C15.6 22 16 21.6 16 21V9C16 8.4 15.6 8 15 8ZM20 16C19.4 16 19 16.4 19 17V21C19 21.6 19.4 22 20 22C20.6 22 21 21.6 21 21V17C21 16.4 20.6 16 20 16Z"
        fill={color}
      />
    </svg>
  );
}
export function Branding({ color }: Props): ReactElement {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 460.000000 460.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,460.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M1990 4535 c-260 -41 -577 -146 -775 -258 -69 -39 -183 -111 -200
-126 -11 -10 -31 -24 -44 -31 -33 -17 -212 -173 -287 -252 -79 -81 -204 -227
-204 -238 0 -5 -12 -22 -26 -40 -22 -26 -90 -132 -131 -205 -114 -202 -218
-518 -258 -783 -20 -129 -20 -475 0 -604 22 -146 82 -379 126 -490 21 -54 39
-102 39 -107 0 -5 15 -36 34 -70 19 -33 37 -69 41 -80 8 -27 106 -187 138
-226 13 -16 30 -41 37 -54 47 -89 402 -445 490 -491 14 -7 39 -24 55 -37 39
-32 199 -130 226 -138 11 -4 47 -22 80 -41 34 -19 65 -34 70 -34 5 0 53 -18
107 -39 111 -44 344 -104 490 -126 129 -20 475 -20 604 0 265 40 581 144 783
258 73 41 179 109 205 131 18 14 35 26 40 26 11 0 157 125 238 204 79 75 235
254 252 287 7 13 21 33 31 44 15 17 87 131 126 200 114 202 218 518 258 783
20 129 20 475 0 604 -22 146 -82 379 -126 490 -21 54 -39 102 -39 107 0 5 -15
36 -34 70 -19 33 -37 69 -41 80 -8 27 -106 187 -138 226 -13 17 -30 41 -37 54
-47 89 -402 445 -490 491 -14 7 -38 24 -55 37 -39 32 -199 130 -226 138 -11 4
-47 22 -80 41 -34 19 -65 34 -70 34 -5 0 -53 18 -107 39 -111 44 -344 104
-490 126 -123 19 -492 18 -612 0z m100 -1440 c118 -41 235 -126 260 -186 7
-15 19 -34 29 -43 15 -13 18 -12 36 11 97 128 227 205 395 233 158 27 331 -18
435 -112 91 -83 147 -188 174 -332 20 -100 21 -142 21 -631 0 -463 -2 -525
-16 -539 -12 -13 -41 -16 -145 -16 -72 0 -139 5 -150 10 -18 10 -19 26 -19
458 -1 246 -5 492 -10 548 -20 226 -92 310 -265 309 -164 -1 -267 -70 -327
-219 l-33 -81 -3 -495 c-3 -438 -5 -496 -19 -512 -23 -26 -277 -27 -305 -1
-17 15 -18 44 -18 513 0 274 -4 519 -9 546 -15 80 -50 162 -82 194 -38 37 -95
54 -184 54 -108 -1 -171 -24 -234 -86 -60 -59 -70 -76 -102 -173 -22 -68 -23
-82 -26 -555 -4 -433 -6 -486 -21 -497 -11 -9 -58 -13 -148 -13 -107 0 -136 3
-148 16 -14 14 -16 99 -16 789 0 755 0 775 19 785 11 5 77 10 146 10 69 0 135
-5 146 -10 15 -9 19 -22 19 -65 0 -30 4 -55 9 -55 5 0 33 20 61 44 56 48 147
89 245 112 74 17 223 12 285 -11z"
        />
      </g>
    </svg>
  );
}

export function Loader({ color }: Props): ReactElement {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xmlSpace="preserve"
    >
      <rect
        fill={color}
        width="3"
        height="100"
        transform="translate(0) rotate(180 3 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="17"
        fill={color}
        width="3"
        height="100"
        transform="translate(0) rotate(180 20 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
          begin="0.1s"
        />
      </rect>
      <rect
        x="40"
        fill={color}
        width="3"
        height="100"
        transform="translate(0) rotate(180 40 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </rect>
      <rect
        x="60"
        fill={color}
        width="3"
        height="100"
        transform="translate(0) rotate(180 58 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </rect>
      <rect
        x="80"
        fill={color}
        width="3"
        height="100"
        transform="translate(0) rotate(180 76 50)"
      >
        <animate
          attributeName="height"
          attributeType="XML"
          dur="1s"
          values="30; 100; 30"
          repeatCount="indefinite"
          begin="0.1s"
        />
      </rect>
    </svg>
  );
}
