import { SvgPropsType } from ".";

export const Close = ({ onClick, size = 24, className }: SvgPropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
    onClick={onClick}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.53655 14.2852L2.32767 16.4941L3.50617 17.6726L17.6728 3.5059L16.4943 2.32739L13.9452 4.87649C12.7709 4.37159 11.4275 4.0851 10.0002 4.0851C5.71086 4.0851 2.17838 6.67289 1.71778 10C1.95392 11.7058 2.99749 13.2172 4.53655 14.2852ZM6.76416 12.0576L7.99557 10.8262C7.89053 10.5715 7.83257 10.2925 7.83257 10C7.83257 8.80283 8.80307 7.8323 10.0002 7.8323C10.2928 7.8323 10.5718 7.89026 10.8264 7.99531L12.0578 6.76389C11.4633 6.38511 10.7574 6.16563 10.0002 6.16563C7.8826 6.16563 6.16591 7.88233 6.16591 10C6.16591 10.7572 6.38537 11.4631 6.76416 12.0576ZM7.68316 15.6543C8.41324 15.8227 9.18457 15.9135 9.98224 15.9148H10.0002H10.0182C14.2995 15.9076 17.8227 13.3224 18.2827 10C18.1125 8.77033 17.5227 7.64167 16.6301 6.70731L13.8062 9.53117C13.8249 9.68483 13.8346 9.84125 13.8346 10C13.8346 12.1176 12.1179 13.8343 10.0002 13.8343C9.84157 13.8343 9.68507 13.8247 9.53149 13.8059L7.68316 15.6543Z"
      fill="black"
      fill-opacity="0.45"
    />
  </svg>
);
